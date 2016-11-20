(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div class="navbar navbar-static-top">\n    <div class="navbar-inner container">\n      <div class="container-navbar list-group">\n      <h3><a href="/" type="button" class="pull-left"><span class="label label-primary">FreeMe Feed\n</span></a></h3>\n        <a class="btn btn-primary pull-right" href="/submit" type="button">Send FreeMe</a>\n      </div>\n    </div>\n  </div>');
}));
Meteor.startup(Template.body.renderToDocument);

})();
