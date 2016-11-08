(function(){// display all stored yaks, into our template
Template.yaksList.helpers({
  yaks: function() {
  return Yaks.find({}, {sort : {score: -1}});
  }
});

})();
