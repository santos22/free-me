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
    }, "\n\n        ", HTML.DIV({
      "class": "alert alert-danger"
    }, "\n          ", HTML.A({
      href: "#",
      "class": "close",
      "data-dismiss": "alert",
      "aria-label": "close"
    }, "×"), "\n          ", HTML.STRONG("Login!"), " Please sign in with Facebook to be able to vote."), "\n          ", HTML.DIV({
      "class": "btn"
    }, "\n            ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n          "), "\n        "), "\n      "), "\n    "), "\n  "), "\n  " ];
  });
}));

})();
