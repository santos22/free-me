(function(){
Template.__checkName("commentItem");
Template["commentItem"] = new Template("Template.commentItem", (function() {
  var view = this;
  return HTML.LI({
    class: "list-group-item"
  }, "\n    ", HTML.P({
    class: "break-el"
  }, Blaze.View("lookup:body", function() {
    return Spacebars.mustache(view.lookup("body"));
  })), "\n  ");
}));

}).call(this);
