/**
 * Created by sunny on 2016/12/29.
 */
var React=require("react");
var buttonActions=require('../action/buttonAction');
var buttonStores=require('../stores/butttonStores');

var Button=React.createClass({
    getInitialState:function () {
        return {items: []};
    },
    render:function () {
        return (
            <div>
                <ul>
                    {
                        this.state.items.map(function(listItem, i){
                            return <li key={i}>{listItem}</li>;
                        })
                    }
                </ul>
                <div>
                <button type="button" onClick={buttonActions.btnAdd} >ADD</button>
                <button type="button" onClick={buttonActions.btnDelete} >DELETE</button>
                </div>
            </div>
        );
    },
    componentDidMount:function () {
        this.unsubscribe=buttonStores.listen(this.getLatestData);
    },
    componentWillUnmount : function(){
        this.unsubscribe();
    },
    getLatestData:function(items) {
        this.setState({items:items});
    }
});

