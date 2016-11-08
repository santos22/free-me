(function(){
Template.__checkName("accounts");
Template["accounts"] = new Template("Template.accounts", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("yaksList")), "\n  " ];
  }, function() {
    return [ "\n  ", HTML.DIV({
      "class": "form-style"
    }, "\n    ", HTML.DIV({
      "class": "container"
    }, "\n      ", HTML.DIV({
      "class": "list-group-item"
    }, "\n        ", HTML.DIV({
      "class": "pagination-centered"
    }, "\n          ", HTML.H2("Please login to do this"), "\n          ", HTML.DIV({
      "class": "btn"
    }, "\n            ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n          "), "\n        "), "\n      "), "\n    "), "\n  "), "\n  " ];
  });
}));

})();
