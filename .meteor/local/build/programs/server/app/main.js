(function(){// creates a collection in MongoDB, which will store all our yaks
Yaks = new Mongo.Collection('yaks');

Comments = new Mongo.Collection("comments");

// define a route for yaksList - template is loaded when someone visit “/”
Router.route('/', {name: 'yaksList'})

Router.route('/submit', {name: 'yaksSubmit'});

Router.route('/login', {name: 'accounts'});


// route to individual yak post, where users comment
Router.route('/yaks/:_id', {
  name: 'yakPage',
  data: function() {
  return Yaks.findOne(this.params._id);
  }
});
}).call(this);
