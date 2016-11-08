(function(){
Template.__checkName("yaksSubmit");
Template["yaksSubmit"] = new Template("Template.yaksSubmit", (function() {
  var view = this;
  return HTML.DIV({
    "class": "yaksSubmit"
  }, "\n    ", HTML.DIV({
    "class": "form-style"
  }, "\n      ", HTML.DIV({
    "class": "container"
  }, "\n        ", HTML.FORM({
    "class": "yaksSubmitForm"
  }, "\n              ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n              ", HTML.DIV({
      "class": "pull-right"
    }, "\n                ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n              "), "\n              " ];
  }), "\n          ", HTML.Raw("<h3>Send a FreeMe!</h3>"), "\n          ", HTML.Raw('<input autofocus="autofocus" type="text" id="yak" class="yak-form form-control" name="yak" placeholder="Type your FreeMe here">'), "\n          ", HTML.Raw('<input type="submit" value="Send FreeMe" class="btn btn-primary">'), "\n        "), "\n      "), "\n    "), "\n  ");
}));

})();
