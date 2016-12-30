/**
 * Created by sunny on 2016/12/30.
 */
var Reflux=require('reflux');
var React=require('react');
var ReactDOM=require('react-dom');
var TodoActions=require('./action/buttonAction');
var TodoStore=require('./stores/butttonStores');


var TodoComponent = React.createClass({
  //  mixins: [Reflux.connect(TodoStore, 'list')],
   // mixins:[Reflux.listenTo(TodoStore,'getLatestData')],
    getInitialState: function () {
        return {list: []};
    },
    getLatestData:function (item) {
      // TodoActions.getAll();
        this.setState({list:item});
    },
    componentDidMount: function () {
        this.unsubscribe=TodoStore.listen(this.getLatestData);
        TodoActions.getAll();
    },
    render: function () {
        return (
            <div>
                {this.state.list.map(function(item,index){
                    return <TodoItem key={index} data={item}/>
                })}
            </div>
        )
    }
});
var TodoItem = React.createClass({
    componentDidMount: function () {
        TodoActions.getAll();
    },
    handleAdd: function (model) {
        TodoActions.addItem(model);
    },
    handleDelete: function (model,index) {
        TodoActions.deleteItem(model,index);
    },
    handleUpdate: function (model) {
        TodoActions.updateItem(model);
    },
    render: function () {
        var item=this.props.data;
        return (
            <div>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p><buttton type="button" onClick={TodoActions.deleteItem}>remove</buttton></p>
            </div>
        )
    }
});
ReactDOM.render(<TodoComponent />, document.getElementById('example'));
