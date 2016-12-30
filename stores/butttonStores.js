/**
 * Created by sunny on 2016/12/29.
 */
var Reflux=require("reflux");
var TodoActions=require("../action/buttonAction");

var TodoStore = Reflux.createStore({
    items: [1, 2, 3],
    init:function () {
        // this.listenTo(TodoActions.getAll,'onGetAll');
        // this.listenTo(TodoActions.deleteItem,'onDeleteItem');
        this.listenToMany(TodoActions);
    },
   // listenables: [TodoActions],
    onGetAll: function () {
        // $.get('/all', function (data) {
        //     this.items = data;
        //     this.trigger(this.items);
        // }.bind(this));
        this.trigger(this.items);
    },
    onAddItem: function (model) {
        // $.post('/add', model, function (data) {
        //     this.items.unshift(data);
        //     this.trigger(this.items);
        // }.bind(this));
        this.items.push(model);
        this.trigger(this.items);
    },
    onDeleteItem: function (model, index) {
        // $.post('/delete', model, function (data) {
        //     this.items.splice(index, 1);
        //     this.trigger(this.items);
        // }.bind(this));
        this.items.splice(index, 1);
        this.trigger(this.items);
    },
    onUpdateItem: function (model, index) {
        // $.post('/update', model, function (data) {
        //     this.items[index] = data;
        //     this.trigger(this.items);
        // }.bind(this));
        this.items[index] = data;
        this.trigger(this.items);
    }
});

module.exports=TodoStore;