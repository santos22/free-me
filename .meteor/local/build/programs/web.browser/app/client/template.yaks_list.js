(function(){
Template.__checkName("yaksList");
Template["yaksList"] = new Template("Template.yaksList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "yaks"
  }, "\n    ", HTML.DIV({
    "class": "form-style"
  }, "\n      ", HTML.DIV({
    "class": "container"
  }, "\n        ", HTML.UL({
    "class": "list-group"
  }, "\n          ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("yaks"));
  }, function() {
    return [ "\n            ", Spacebars.include(view.lookupTemplate("yakItem")), "\n          " ];
  }), "\n        "), "\n      "), "\n    "), "\n  ");
}));

})();
