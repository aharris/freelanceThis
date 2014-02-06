(function ($) {

  // Friend = Backbone.Model.extend({
  //   //Create a model to hold friend atribute
  //   name: null
  // });

  // Friends = Backbone.Collection.extend({
  //   //This is our Friends collection and holds our Friend models
  //   initialize: function (models, options) {
  //     this.bind("add", options.view.addFriendLi);
  //     //Listen for new additions to the collection and call a view function if so
  //   }
  // });

  HeaderView = Backbone.View.extend({
    el: $("header"),
    initialize: function () {
      // this.friends = new Friends( null, { view: this });
      var data = {
        "logo": "Business Logo"
      };
      var tmplString = $('#header').text();
      var tmpl = doT.template(tmplString);
      var text = tmpl(data);
      // console.log(text);
      this.$el.html(text);
      //Create a friends collection when the view is initialized.
      //Pass it a reference to this view to create a connection between the two
    }//,
    // events: {
    //   "click #add-friend":  "showPrompt",
    // },
    // showPrompt: function () {
    //   var friend_name = prompt("Who is your friend?");
    //   var friend_model = new Friend({ name: friend_name });
    //   //Add a new friend model to our friend collection
    //   this.friends.add( friend_model );
    // },
    // addFriendLi: function (model) {
    //   //The parameter passed is a reference to the model that was added
    //   $("#friends-list").append("<li>" + model.get('name') + "</li>");
    //   //Use .get to receive attributes of the model
    // }
  });

  var appview = new HeaderView;

})(jQuery);