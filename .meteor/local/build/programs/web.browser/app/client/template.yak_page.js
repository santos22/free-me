(function(){
Template.__checkName("yakPage");
Template["yakPage"] = new Template("Template.yakPage", (function() {
  var view = this;
  return HTML.DIV({
    "class": "form-style"
  }, "\n    ", HTML.DIV({
    "class": "container"
  }, "\n      ", Spacebars.include(view.lookupTemplate("yakItem")), "\n      ", HTML.DIV({
    "class": "comment"
  }, "\n        ", HTML.Raw("<h4>Comments</h4>"), "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("comments"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("commentItem")), "\n        " ];
  }), "\n      "), " \n      ", Spacebars.include(view.lookupTemplate("commentSubmit")), "\n    "), "\n  ");
}));

})();
