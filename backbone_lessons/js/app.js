(function() {

    // var Task = Backbone.Model.extend({});

    var MyModel = Backbone.Model.extend({
        method: function() {
            console.log('Hello Model!!');
        }
    });

    var myModel = new MyModel();

    myModel.method();

    var MyModel = Backbone.Model.extend({
      method: function(){
        console.log("hello world!");
      }
    });
    var myModel = new MyModel();

    myModel.method();

    var MyCollection = Backbone.Collection.extend({});

    var myCollection = new MyCollection([
        {name: 'hoge'},
        {name: 'fuga'}
    ]);

    myCollection.each(function(e, i) {
        console.log('[' + i + '] ' + e.get('name'));
    });

    var MyModel = Backbone.Model.extend();
    var myModel = new MyModel();

    var MyModel = Backbone.Model.extend({
        instanceMethod: function() {
            console.log('instance method');
        }
    });

    var myModel = new MyModel();

    myModel.instanceMethod();

    var MyModel = Backbone.Model.extend({
        constructor: function() {
            console.log('constructor');
        }
    });

    var myModel = new MyModel();

    var MyModel = Backbone.Model.extend({}, {
        staticField: 'static field',

        staticMethod: function() {
            console.log('static method');
        }
    });

    console.log(MyModel.staticField);
    MyModel.staticMethod();

    var MyModel = Backbone.Model.extend();

    var myModel = new MyModel();

    myModel.set('value', 'field value');
    console.log(myModel.get('value'));

    var MyModel = Backbone.Model.extend({
        defaults: {
            value: '',
            name: ''
        }
    });

    var myModel = new MyModel();

    console.log(myModel.keys());    



})();

$(function() {
    var MyView = Backbone.View.extend({
        render: function() {
            this.$el.text('Hello View!!');
            return this;
        }
    });

    var myView = new MyView();

    $('body').append(myView.render().el);
});
