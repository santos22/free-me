(function(){
Template.__checkName("yakItem");
Template["yakItem"] = new Template("Template.yakItem", (function() {
  var view = this;
  return HTML.DIV({
    class: "yak"
  }, "\n    ", HTML.LI({
    class: "list-group-item"
  }, "\n      ", HTML.DIV({
    class: "yakPost"
  }, "\n\n        ", HTML.P({
    class: "break-el"
  }, Blaze.View("lookup:yak", function() {
    return Spacebars.mustache(view.lookup("yak"));
  })), "\n\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n\n        ", HTML.DIV({
      class: "row"
    }, "\n\n          ", HTML.DIV({
      class: "col-xs-6 pull-left"
    }, "\n            ", HTML.A({
      class: "btn",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "yakPage");
      }
    }, Blaze.View("lookup:commentsCount", function() {
      return Spacebars.mustache(view.lookup("commentsCount"));
    }), " comments"), "\n          "), "\n\n          ", HTML.DIV({
      class: "col-xs-2 pull-left"
    }, "\n            ", HTML.A({
      class: "btn pull-right btn-xsall no",
      href: "#"
    }, HTML.I({
      class: "fa fa-chevron-down"
    })), "\n          "), "\n\n          ", HTML.DIV({
      class: "col-xs-2"
    }, "\n            ", HTML.A({
      class: "btn pull-right",
      href: "#"
    }, " ", Blaze.View("lookup:score", function() {
      return Spacebars.mustache(view.lookup("score"));
    }), " "), "\n          "), "\n\n          ", HTML.DIV({
      class: "col-xs-2 pull-right"
    }, "\n            ", HTML.A({
      class: "btn pull-right btn-xsall yes",
      href: "#"
    }, HTML.I({
      class: "fa fa-chevron-up"
    })), "\n          "), "\n\n        "), "        \n\n      " ];
  }, function() {
    return [ "\n        ", HTML.DIV({
      class: "row"
    }, "\n\n          ", HTML.DIV({
      class: "col-xs-6"
    }, "\n            ", HTML.A({
      class: "btn",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "yakPage");
      }
    }, Blaze.View("lookup:commentsCount", function() {
      return Spacebars.mustache(view.lookup("commentsCount"));
    }), " comments"), "\n          "), "\n\n          ", HTML.DIV({
      class: "col-xs-2"
    }, "\n            ", HTML.A({
      class: "btn pull-right btn-xsall",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "accounts");
      }
    }, HTML.I({
      class: "fa fa-chevron-down"
    })), "\n          "), "\n\n          ", HTML.DIV({
      class: "col-xs-2"
    }, "\n          ", HTML.A({
      class: "btn pull-right",
      href: "#"
    }, " ", Blaze.View("lookup:score", function() {
      return Spacebars.mustache(view.lookup("score"));
    }), " "), "\n          "), "\n\n          ", HTML.DIV({
      class: "col-xs-2"
    }, "\n            ", HTML.A({
      class: "btn pull-right btn-xsall",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "accounts");
      }
    }, HTML.I({
      class: "fa fa-chevron-up"
    })), "\n          "), "\n\n        "), "\n      " ];
  }), "\n      "), "\n    "), "\n  ");
}));

}).call(this);
