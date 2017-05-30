// List as a whole

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

// Item

const Item = React.createClass({
                                   getInitialState(){
                                       return {
                                           isEdit: true,

                                       }
                                   },
                                   _edit(){
                                       this.setState({
                                                         isEdit: true,
                                                     });
                                   },
                                   _remove(){
                                       this.props.onRemove(this.props.id);
                                   },
                                   _save(){
                                       this.props.onSave(this.props.id, this.refs.inputText.value);
                                       this.setState({
                                                         isEdit: false,
                                                     });

                                   },
                                   render(){

                                       return (this.state.isEdit ? <li className="list-group-item">
                                           {this.props.id}
                                           <input className="item-edit"
                                                  ref='inputText'
                                                  defaultValue={this.props.value}/>
                                           <a href="#"
                                              className="glyphicon glyphicon-share"
                                              onClick={this._save}></a>
                                           <a href="#"
                                              className="glyphicon glyphicon-remove"
                                              onClick={this._remove}></a>
                                       </li> : <li className="list-group-item">
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

ReactDOM.render(<List/>, document.getElementById('test'));


