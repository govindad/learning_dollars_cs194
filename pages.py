import os
import webapp2
import jinja2

from google.appengine.api import users
from google.appengine.ext import ndb

from config import config
from models import Module, Account
from functions import freelancer_auth, get_access_token, basicinfo
from info import AccountInfo, ModuleInfo, ModulesInfo, GetProjectDetails

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

# Views Classes

class MainPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Home'
        template_values['compiled_template'] = 'index.js'
        template_values['javascript'] = 'index.js'
        template = JINJA_ENVIRONMENT.get_template('templates/template.html')
        self.response.write(template.render(template_values))

class AboutPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'About'
        template_values['compiled_template'] = 'about.js'
        template_values['javascript'] = 'about.js'
        template = JINJA_ENVIRONMENT.get_template('templates/template.html')
        self.response.write(template.render(template_values))

class TeamPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Team'
        template_values['compiled_template'] = 'team.js'
        template_values['javascript'] = 'team.js'
        template = JINJA_ENVIRONMENT.get_template('templates/template.html')
        self.response.write(template.render(template_values))

class ModulesPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Modules'
        template_values['compiled_template'] = 'modules.js'
        template_values['datalink'] = 'modulesinfo'
        template_values['javascript'] = 'modules.js'
        template = JINJA_ENVIRONMENT.get_template('templates/template.html')
        self.response.write(template.render(template_values))

class ModulePage(webapp2.RequestHandler):

    def get(self, module_id):
        template_values = basicinfo(users.get_current_user(), self)
        mi = ModuleInfo()
        module = mi.get_info(module_id)
        template_values['title'] = module['name']
        template_values['compiled_template'] = 'module.js'
        template_values['datalink'] = 'moduleinfo/' + module_id
        template_values['javascript'] = 'module.js'
        template = JINJA_ENVIRONMENT.get_template('templates/template.html')
        self.response.write(template.render(template_values))


class MailboxPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Mailbox'
        template_values['compiled_template'] = 'mailbox.js'
        template_values['javascript'] = 'mailbox.js'
        template = JINJA_ENVIRONMENT.get_template('templates/template.html')
        self.response.write(template.render(template_values))

class MyBidsPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'My Bids'
        template_values['compiled_template'] = 'mybids.js'
        template_values['javascript'] = 'mybids.js'
        template = JINJA_ENVIRONMENT.get_template('templates/template.html')
        self.response.write(template.render(template_values))

class MyPostsPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'My Posts'
        template_values['compiled_template'] = 'myposts.js'
        template_values['javascript'] = 'myposts.js'
        template = JINJA_ENVIRONMENT.get_template('templates/template.html')
        self.response.write(template.render(template_values))

class MilestonesPage(webapp2.RequestHandler):

    def get(self):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = 'Milestones'
        template_values['compiled_template'] = 'milestones.js'
        template_values['javascript'] = 'milestones.js'
        template = JINJA_ENVIRONMENT.get_template('templates/template.html')
        self.response.write(template.render(template_values))

class ProjectPage(webapp2.RequestHandler):

    def get(self, project_id):
        template_values = basicinfo(users.get_current_user(), self)
        template_values['title'] = projectInfo['name']
        template_values['compiled_template'] = 'project.js'
        template_values['javascript'] = 'project.js'
        #projectDetails = GetProjectDetails()
        #project = projectDetails.get_info(project_id)
        #projectInfo = project['json-result']
        #bidStats = projectInfo['bid_stats']
        #print projectInfo
        #template_values['projectname'] = projectInfo['name']
        #template_values['description'] = projectInfo['short_descr']
        #template_values['end_date'] = projectInfo['end_date']
        #template_values['username'] = projectInfo['buyer']['username']
        #template_values['num_bids'] = bidStats['count']
        #template_values['avg_bid'] = bidStats['avg']
        
        # MUST LOAD THE ABOVE INFO VIA JQUERY (in static/views/js/project.js) NOW 
        # USE info.py as is done for i.e. ModulesPage 
        template = JINJA_ENVIRONMENT.get_template('templates/project_copy.html')
        self.response.write(template.render(template_values))
