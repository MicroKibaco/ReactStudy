// List as a whole

const List = React.createClass({

                                   getInitialState(){

                                       return {
                                           key: 0,
                                           list: new Map(),
                                           editList: new Map(),

                                       }

                                   },

                                   _add(){
                                       const key = ++this.state.key;
                                       this.state.editList.set(key, '');
                                       this.forceUpdate();
                                   },

                                   // remove editList

                                   _removeItemEditor(id){
                                       this.state.editList.delete(id);
                                       this.forceUpdate();
                                   },

                                   // remove list

                                   _removeItem(id){

                                       this.state.list.delete(id);
                                       this.forceUpdate();

                                   },

                                   _save(id, value){

                                       this.state.editList.delete(id);
                                       this.state.list.set(id, value);
                                       this.forceUpdate();
                                   },
                                   _edit(id, value){

                                       this.state.list.delete(id);
                                       this.state.editList.set(id, value);
                                       this.forceUpdate();

                                   },

                                   // refresh view
                                   render(){
                                       const listDOM = [];
                                       const editListDOM = [];

                                       for (let entry of this.state.list) {

                                           listDOM.push(
                                               <Item
                                                   onRemove={this._removeItem}
                                                   onEdit={this._edit}
                                                   id={entry[0]}
                                                   key={entry[0]}
                                                   value={entry[1]}/>);

                                       }
                                       for (let entry of this.state.editList) {

                                           editListDOM.push(
                                               <ItemEditor
                                                   onRemove={this._removeItemEditor}
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
                                           {editListDOM}
                                       </ul>);

                                   }
                               });

// Item

const Item = React.createClass({
                                   _edit(){
                                       this.props.onEdit(this.props.id, this.props.value);
                                   },
                                   _remove(){
                                       this.props.onRemove(this.props.id);
                                   },
                                   render(){
                                       return (
                                           <li className="list-group-item">
                                               {this.props.value}
                                               <a onClick={this._edit}
                                                  className="right glyphicon glyphicon-edit"
                                                  href="#"></a>
                                               <a href="#"
                                                  onClick={this._remove}
                                                  className="right glyphicon glyphicon-remove"></a>
                                           </li>);
                                   }
                               });

// ItemEditor

const ItemEditor = React.createClass({

                                         getInitialState(){
                                             return {
                                                 value: this.props.value,

                                             }
                                         },

                                         _remove(){
                                             this.props.onRemove(this.props.id);
                                         },
                                         _save(){
                                             this.props.onSave(this.props.id, this.state.value);

                                         },
                                         _changeHandle(event){

                                             this.setState({
                                                               value: event.target.value,
                                                           });
                                             /*this.state.value = event.target.value;
                                              this.forceUpdate();*/
                                         },
                                         render(){

                                             return (
                                                 <li className="list-group-item">
                                                     {this.props.id}
                                                     <input className="item-edit"
                                                            onChange={this._changeHandle}
                                                            value={this.state.value}/>
                                                     <a href="#"
                                                        className="glyphicon glyphicon-share"
                                                        onClick={this._save}></a>
                                                     <a href="#"
                                                        className="glyphicon glyphicon-remove"
                                                        onClick={this._remove}></a>
                                                 </li>);
                                         }
                                     });

ReactDOM.render(<List/>, document.getElementById('test'));


