/**
 * Created by sunny on 2016/12/29.
 */
var Reflux=require("reflux");

var TodoActions = Reflux.createActions([
    'getAll',
    'addItem',
    'deleteItem',
    'updateItem'
]);

module.exports=TodoActions;