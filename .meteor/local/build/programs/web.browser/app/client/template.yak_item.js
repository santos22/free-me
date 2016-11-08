(function(){
Template.__checkName("yakItem");
Template["yakItem"] = new Template("Template.yakItem", (function() {
  var view = this;
  return HTML.DIV({
    "class": "yak"
  }, "\n    ", HTML.LI({
    "class": "list-group-item"
  }, "\n      ", HTML.DIV({
    "class": "yakPost"
  }, "\n        ", HTML.P({
    "class": "break-el"
  }, Blaze.View("lookup:yak", function() {
    return Spacebars.mustache(view.lookup("yak"));
  })), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n        ", HTML.A({
      "class": "btn",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "yakPage");
      }
    }, Blaze.View("lookup:commentsCount", function() {
      return Spacebars.mustache(view.lookup("commentsCount"));
    }), " comments"), "\n        ", HTML.A({
      "class": "btn pull-right btn-small no",
      href: "#"
    }, HTML.I({
      "class": "fa fa-chevron-down"
    })), "\n        ", HTML.A({
      "class": "btn pull-right",
      href: "#"
    }, " ", Blaze.View("lookup:score", function() {
      return Spacebars.mustache(view.lookup("score"));
    }), " "), "\n        ", HTML.A({
      "class": "btn pull-right btn-small yes",
      href: "#"
    }, HTML.I({
      "class": "fa fa-chevron-up"
    })), "\n      " ];
  }, function() {
    return [ "\n        ", HTML.A({
      "class": "btn",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "yakPage");
      }
    }, Blaze.View("lookup:commentsCount", function() {
      return Spacebars.mustache(view.lookup("commentsCount"));
    }), " comments"), "\n        ", HTML.A({
      "class": "btn pull-right btn-small",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "accounts");
      }
    }, HTML.I({
      "class": "fa fa-chevron-down"
    })), "\n        ", HTML.A({
      "class": "btn pull-right",
      href: "#"
    }, " ", Blaze.View("lookup:score", function() {
      return Spacebars.mustache(view.lookup("score"));
    }), " "), "\n        ", HTML.A({
      "class": "btn pull-right btn-small",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "accounts");
      }
    }, HTML.I({
      "class": "fa fa-chevron-up"
    })), "\n      " ];
  }), "\n      "), "\n    "), "\n  ");
}));

})();
