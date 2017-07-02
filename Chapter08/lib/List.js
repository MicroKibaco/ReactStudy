const React = require('react');
const Item = require('./Item');
const List = React.createClass({

                                   getInitialState(){

                                       return {
                                           key: 0,
                                           list: new Map()

                                       }

                                   },

                                   _add(){
                                       const key = ++this.state.key;
                                       this.state.list.set(key, '');
                                       this.forceUpdate();
                                   },

                                   // remove list

                                   _removeItem(id){

                                       this.state.list.delete(id);
                                       this.forceUpdate();

                                   },

                                   _save(id, value){

                                       this.state.list.set(id, value);
                                       this.forceUpdate();
                                   },

                                   // refresh view
                                   render(){
                                       const listDOM = [];

                                       for (let entry of this.state.list) {

                                           listDOM.push(
                                               <Item
                                                   onRemove={this._removeItem}
                                                   onSave={this._save}
                                                   id={entry[0]}
                                                   key={entry[0]}
                                                   value={entry[1]}/>);

                                       }

                                       return ( <ul>
                                           <button onClick={this._add} className="btn btn-default">
                                               Add
                                           </button>
                                           {listDOM}
                                       </ul>);

                                   }
                               });

module.exports = List;