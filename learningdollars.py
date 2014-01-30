# MODELS

import os
import urllib
import json

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2

from config import config
from freelancer import job_api_calls
from ocw import youtube

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

# DEFAULT_GUESTBOOK_NAME = 'default_guestbook'


# We set a parent key on the 'Greetings' to ensure that they are all in the same
# entity group. Queries across the single entity group will be consistent.
# However, the write rate should be limited to ~1/second.

'''
def guestbook_key(guestbook_name=DEFAULT_GUESTBOOK_NAME):
    """Constructs a Datastore key for a Guestbook entity with guestbook_name."""
    return ndb.Key('Guestbook', guestbook_name)


class Greeting(ndb.Model):
    """Models an individual Guestbook entry with author, content, and date."""
    author = ndb.UserProperty()
    content = ndb.StringProperty(indexed=False)
    date = ndb.DateTimeProperty(auto_now_add=True)
'''

# Database Models

class ModelUtils(object):

    def to_dict(self):
        result = super(ModelUtils,self).to_dict()
        result['key'] = self.key.id()
        return result

class Module(ModelUtils, ndb.Model):
    name = ndb.StringProperty()
    youtube = ndb.StringProperty() # youtube playlist/video id
    category = ndb.IntegerProperty()  # freelancer category id

class Account(ModelUtils, ndb.Model):
    guser = ndb.UserProperty()
    tutorials_completed = ndb.IntegerProperty(repeated=True) # module ids
    jobs_completed = ndb.IntegerProperty(repeated=True) # freelancer.com job ids

# Helper Functions

def basicinfo(user, self):
    if user:
        url = users.create_logout_url(self.request.uri)
        url_linktext = 'Logout'
        nickname = user.nickname()
    else:
        url = users.create_login_url(self.request.uri)
        url_linktext = 'Login'
        nickname = None

    template_values = {
        'title': config.SITE_NAME,
        'url': url,
        'url_linktext': url_linktext,
        'nickname': nickname
    }
    return template_values

# Views Classes

class MainPage(webapp2.RequestHandler):

    def get(self):
        '''
        guestbook_name = self.request.get('guestbook_name',
                                          DEFAULT_GUESTBOOK_NAME)
        greetings_query = Greeting.query(
            ancestor=guestbook_key(guestbook_name)).order(-Greeting.date)
        greetings = greetings_query.fetch(10)

        template_values = {
            'greetings': greetings,
            'guestbook_name': urllib.quote_plus(guestbook_name),
            'url': url,
            'url_linktext': url_linktext,
        }
        ''' 
        template_values = basicinfo(users.get_current_user(), self)
        template = JINJA_ENVIRONMENT.get_template('templates/index.html')
        self.response.write(template.render(template_values))

class AboutPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'About'    
        template = JINJA_ENVIRONMENT.get_template('templates/about.html')
        self.response.write(template.render(template_values))

class TeamPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Team'    
        template = JINJA_ENVIRONMENT.get_template('templates/team.html')
        self.response.write(template.render(template_values))

class ModulesPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Modules'    
        mi = ModulesInfo()
        template_values['modules'] = mi.get_modules()
        template = JINJA_ENVIRONMENT.get_template('templates/modules.html')
        self.response.write(template.render(template_values))

# Info Classes (JSON response)

class AccountInfo(webapp2.RequestHandler):

    def get(self, account_id):
        account_id = int(account_id)
        account = Account.get_by_id(account_id)
        info = {
            'nickname': account.guser.nickname(),
            'email': account.guser.email(),
            'id': account.guser.user_id(),
            'jobs_completed': account.jobs_completed,
            'tutorials_completed': account.tutorials_completed
        }
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(info)) 

class ModuleInfo(webapp2.RequestHandler):

    def get(self, module_id):
        module_id = int(module_id)
        module = Module.get_by_id(module_id)
        info = {
            'name': module.name,
            'youtube': module.youtube,
            'category': module.category
        }
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(info)) 

class ModulesInfo(webapp2.RequestHandler):

    def get_modules(self):
        return [m.to_dict() for m in Module.query().fetch()]

    def get(self):
        modules = self.get_modules()
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(modules)) 

# Action Classes (JSON response)

class UpdateModules(webapp2.RequestHandler):

    def get(self):
        jac = job_api_calls.JobApiCalls()
        categories = jac.get_categories()
        y = youtube.Youtube()
        for c in categories:
            # retrieve items from API's
            c_id = int(c['id'])
            name = c['name']
            y_link = y.search(name)
            # store/update as needed
            match = Module.query(Module.category == c_id).fetch()
            module = Module(name=name, youtube=y_link, category=c_id)
            if len(match) == 0:        
                module.put()
            else:
                match = match[0]
                if  str(match.name) != name or str(match.youtube) != y_link:
                    print 'module different'
                    match.name = name
                    match.youtube = y_link
                    match.put()
                    break
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(categories)) 

'''
class Guestbook(webapp2.RequestHandler):

    def post(self):
        # We set the same parent key on the 'Greeting' to ensure each Greeting
        # is in the same entity group. Queries across the single entity group
        # will be consistent. However, the write rate to a single entity group
        # should be limited to ~1/second.
        guestbook_name = self.request.get('guestbook_name',
                                          DEFAULT_GUESTBOOK_NAME)
        greeting = Greeting(parent=guestbook_key(guestbook_name))

        if users.get_current_user():
            greeting.author = users.get_current_user()

        greeting.content = self.request.get('content')
        greeting.put()

        query_params = {'guestbook_name': guestbook_name}
        self.redirect('/?' + urllib.urlencode(query_params))
'''

application = webapp2.WSGIApplication([
    # Views
    webapp2.Route('/', handler=MainPage, name='main'),
    webapp2.Route('/about', handler=AboutPage, name='about'),
    webapp2.Route('/team', handler=TeamPage, name='team'),
    webapp2.Route('/modules', handler=ModulesPage, name='modules'),
    # ('/sign', Guestbook),
    
    # Info
    webapp2.Route('/accountinfo/<account_id:\d+>', handler=AccountInfo, name='account'),
    webapp2.Route('/moduleinfo/<module_id:\d+>', handler=ModuleInfo, name='module'),
    webapp2.Route('/modulesinfo', handler=ModulesInfo, name='modules'),

    # Actions
    webapp2.Route('/updatemodules', handler=UpdateModules, name='updatemodules'),
], debug=True)
