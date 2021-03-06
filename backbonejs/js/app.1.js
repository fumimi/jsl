(function() {

// Model

var Task = Backbone.Model.extend({
    defaults: {
        title: "do something!",
        completed: false
    },
    // バリデーション
    validate: function(attrs) {
        if ( _.isEmpty(attrs.title) ) {
            return "title must not be empty!";
        }
    },
    // 独自のメソッドを追加することもできるこの場合completedをtureからfalseに変更する関数
    toggle: function() {
        this.set('completed', !this.get('completed'));
    }
});

var task1 = new Task({
    completed: true
});

// task1.set('title', 'newTitle');
var title = task1.get('title');

// console.log(task1.toJSON());
// console.log(title);

console.log(task1.toJSON());
task1.set({title: ''}, {validate: true});
// task1.toggle();
console.log(task1.toJSON());


var Workspace = Backbone.Router.extend({

  routes: {
    "help":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
  },

  search: function(query, page) {
  }

});


})();
