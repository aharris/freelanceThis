(function ($) {

  $().ready( function () {
    toggleMenu();
    updateMenu();
    updateSameRouteMenu();
  })

  function updateSameRouteMenu(){
    // if(Backbone.history.location.hash)
    $( ".nav a" ).click(function(event) {
      if ($(this).attr("href") === Backbone.history.location.hash)
        $('body').removeClass('menu');
    });
  }

  function updateMenu() {
    if ($( "body" ).hasClass( "menu" )) {
      $('body').removeClass('menu');
    }
  }

  function toggleMenu() {
    $( ".nav-icon" ).click(function(event) {
      event.preventDefault();
      $('body').toggleClass('menu');
    });
  }

  var FT = FT || {};


//RENDER ----------------------------------
FT.Render = function (el, template, data) {

  this.$el = $(el);
  var tmplString = $(template).text();
  var tmpl = doT.template(tmplString);
  var text = tmpl(data);
  this.$el.html(text);
  updateMenu();
};

//ROUTER ----------------------------------
FT.Router = Backbone.Router.extend({
  routes: {
    '' : 'home',
    "home": 'home',
    'about' : 'about',
    'contact' : 'contact',
    'client' : 'client'
  }
});

var router = new FT.Router();

//Routes -----------------------------------

router.on('route:home', function (){
  var data = {
    "data": "home data"
  };
  render: FT.Render('#content', '#home', data);
});

router.on('route:client', function (){
  var data = {
    "data": "client data"
  };
  render: FT.Render('#content', '#client', data);
});

router.on('route:about', function (){
  var data = {
    "data": "about data"
  };
  render: FT.Render('#content', '#about', data);
});

router.on('route:contact', function (){
  var data = {
    "data": "contact data"
  };
  render: FT.Render('#content', '#contact', data);
});

Backbone.history.start();

//PERSISTENT ELEMENTS ------------------------
FT.Header = Backbone.View.extend({
  el: $("header"),
  initialize: function () {
    // this.friends = new Friends( null, { view: this });
    var data = {
      "logo": "Business Logo Logo Logo Logo Logo Logo"
    };
    var tmplString = $('#header').text();
    var tmpl = doT.template(tmplString);
    var text = tmpl(data);
    this.$el.html(text);
  }
});

FT.Nav = Backbone.View.extend({
  el: $("nav"),
  initialize: function () {
    var data = {};
    var tmplString = $('#nav').text();
    var tmpl = doT.template(tmplString);
    var text = tmpl(data);
    this.$el.html(text);
  }
});

var header = new FT.Header(),
nav = new FT.Nav();

})(jQuery);