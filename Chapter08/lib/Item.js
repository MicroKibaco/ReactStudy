// Item
const React = require('react');
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
module.exports = Item;