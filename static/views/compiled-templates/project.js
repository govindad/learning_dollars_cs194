var Templates = {
"bids_on_post":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/project/bids_on_post.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,bid = locals_.bid,winner = locals_.winner,awardStatus = locals_.awardStatus,projectid = locals_.projectid;
jade_debug.unshift({ lineno: 0, filename: "jade/project/bids_on_post.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/project/bids_on_post.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/project/bids_on_post.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = bid.descr) == null ? '' : jade.interp)) + " ($" + (jade.escape((jade.interp = bid.bid_amount) == null ? '' : jade.interp)) + ") ");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "jade/project/bids_on_post.jade" });
if ( winner)
{
jade_debug.unshift({ lineno: 4, filename: "jade/project/bids_on_post.jade" });
jade_debug.unshift({ lineno: 4, filename: "jade/project/bids_on_post.jade" });
buf.push("<div class=\"pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Picked");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/project/bids_on_post.jade" });
if ( awardStatus == "pending")
{
jade_debug.unshift({ lineno: 6, filename: "jade/project/bids_on_post.jade" });
jade_debug.unshift({ lineno: 6, filename: "jade/project/bids_on_post.jade" });
buf.push(", awaiting response");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 8, filename: "jade/project/bids_on_post.jade" });
jade_debug.unshift({ lineno: 8, filename: "jade/project/bids_on_post.jade" });
buf.push("<button" + (jade.attr("project_id", projectid, true, false)) + (jade.attr("user_id", bid.provider_userid, true, false)) + " class=\"btn btn-default bid pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("Pick ");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr\n  td #{bid.descr} ($#{bid.bid_amount}) \n    if winner\n      .pull-right Picked\n        if awardStatus == \"pending\"\n          , awaiting response\n    else\n      button.btn.btn-default.bid.pull-right(\n        project_id=projectid, \n        user_id=bid.provider_userid\n      ) Pick ");
}
},

"no_bids":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/project/no_bids.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/project/no_bids.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/project/no_bids.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/project/no_bids.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("No Bids");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr\n  td No Bids");
}
},

"project":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/project/project.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,name = locals_.name,short_descr = locals_.short_descr,bid_stats = locals_.bid_stats,budget = locals_.budget,start_date = locals_.start_date,end_date = locals_.end_date,jobs = locals_.jobs;
jade_debug.unshift({ lineno: 0, filename: "jade/project/project.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/project/project.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/project/project.jade" });
buf.push("<div class=\"panel panel-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "jade/project/project.jade" });
buf.push("<div class=\"panel-heading\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/project/project.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = name) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/project/project.jade" });
buf.push("<div class=\"panel-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "jade/project/project.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "jade/project/project.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "jade/project/project.jade" });
buf.push("<table class=\"table table-striped\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = short_descr) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("Number of bids: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "jade/project/project.jade" });
buf.push("<b class=\"pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = bid_stats.count) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "jade/project/project.jade" });
if ( bid_stats.avg)
{
jade_debug.unshift({ lineno: 15, filename: "jade/project/project.jade" });
jade_debug.unshift({ lineno: 15, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("Average bid: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "jade/project/project.jade" });
buf.push("<b class=\"pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("$" + (jade.escape((jade.interp = bid_stats.avg) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("Budget: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "jade/project/project.jade" });
buf.push("<b class=\"pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("$" + (jade.escape((jade.interp = budget.min) == null ? '' : jade.interp)) + " - $" + (jade.escape((jade.interp = budget.max) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Created: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "jade/project/project.jade" });
buf.push("<b class=\"pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = start_date) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("End date: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "jade/project/project.jade" });
buf.push("<b class=\"pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = end_date) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("Requirements");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "jade/project/project.jade" });
buf.push("<ul>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "jade/project/project.jade" });
// iterate jobs
;(function(){
  var $$obj = jobs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var job = $$obj[$index];

jade_debug.unshift({ lineno: 30, filename: "jade/project/project.jade" });
jade_debug.unshift({ lineno: 31, filename: "jade/project/project.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = job) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var job = $$obj[$index];

jade_debug.unshift({ lineno: 30, filename: "jade/project/project.jade" });
jade_debug.unshift({ lineno: 31, filename: "jade/project/project.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = job) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "jade/project/project.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "jade/project/project.jade" });
buf.push("<table id=\"bids\" class=\"table table-striped\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: "jade/project/project.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: "jade/project/project.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("Bids");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 37, filename: "jade/project/project.jade" });
buf.push("<tr id=\"bids_loader\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "jade/project/project.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: "jade/project/project.jade" });
buf.push("<img src=\"/static/views/img/ajax-loader.gif\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  .panel.panel-default\n    .panel-heading\n      h1 #{name}\n    .panel-body\n      .row\n        .col-md-6\n          table.table.table-striped\n            tr\n              td #{short_descr}\n            tr\n              td Number of bids: \n                b.pull-right #{bid_stats.count}\n            if bid_stats.avg\n              tr\n                td Average bid: \n                  b.pull-right $#{bid_stats.avg}\n            tr\n              td Budget: \n                b.pull-right $#{budget.min} - $#{budget.max}\n            tr\n              td Created: \n                b.pull-right #{start_date}\n            tr\n              td End date: \n                b.pull-right #{end_date}\n            tr\n              td Requirements\n                ul\n                  each job in jobs\n                    li #{job}\n        .col-md-6\n          table.table.table-striped#bids\n            tr\n              td \n                b Bids\n            tr#bids_loader\n              td\n                img(src = '/static/views/img/ajax-loader.gif')");
}
}
};