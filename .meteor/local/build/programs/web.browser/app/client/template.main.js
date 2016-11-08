(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div class="navbar navbar-static-top">\n    <div class="navbar-inner">\n      <div class="container">\n        <a class="brand" href="/">FreeMe</a>\n        <a class="btn btn-primary pull-right" href="/submit" type="button">Send FreeMe</a>\n      </div>\n    </div>\n  </div>');
}));
Meteor.startup(Template.body.renderToDocument);

})();
