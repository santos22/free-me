(function(){
Template.__checkName("commentSubmit");
Template["commentSubmit"] = new Template("Template.commentSubmit", (function() {
  var view = this;
  return HTML.Raw('<form name="comment" class="comment-form form">\n    <div class="form-group">\n      <input autofocus="autofocus" name="body" id="body" class="comment-input form-control" placeholder="Comment here">\n      <input type="submit" value="Add comment" class="btn btn-primary">\n    </div>\n  </form>');
}));

})();
