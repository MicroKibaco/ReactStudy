// List as a whole

const List = React.createClass({

                                   getInitialState(){

                                       return {
                                           key: 0,
                                           list: new Map(),
                                           editList: new Map(),

                                       }

                                   },

                                   add(){
                                       const key = ++this.state.key;
                                       this.state.editList.set(key, {value: ''});
                                       this.forceUpdate();
                                   },

                                   // refresh view
                                   render(){
                                       const listDOM = [];
                                       const editListDOM = [];

                                       for (let entry of this.state.list) {

                                           listDOM.push(<Item id={entry[0]} value={entry[1].value}/>);

                                       }
                                       for (let entry of this.state.editList) {

                                           editListDOM.push(<ItemEditor id={entry[0]} value={entry[1].value}/>);

                                       }

                                       return ( <ul>
                                           <button onClick={this.add} className="btn btn-default">
                                               Add
                                           </button>
                                           {/*<Item vaule="Name:  ">My name is yangzy</Item>
                                            <Item vaule="Age: ">I am 18</Item>
                                            <Item vaule="Sex: ">girl</Item>
                                            <ItemEditor value='yangzy'/>*/}
                                           {listDOM}
                                           {editListDOM}
                                       </ul>);

                                   }
                               });

// Item

const Item = React.createClass({

                                   render(){
                                       return (
                                           <li className="list-group-item">
                                               {this.props.vaule + this.props.children}
                                               <a className="right glyphicon glyphicon-edit"
                                                  href="#"></a>
                                               <a href="#"
                                                  className="right glyphicon glyphicon-remove"></a>
                                           </li>);
                                   }
                               });

// ItemEditor

const ItemEditor = React.createClass({

                                         render(){
                                             return (
                                                 <li className="list-group-item">
                                                     <input className="item-edit"
                                                            defaultValue={this.props.value}/>
                                                     <a href="#"
                                                        className="glyphicon glyphicon-share"></a>
                                                     <a href="#"
                                                        className="glyphicon glyphicon-remove"></a>
                                                 </li>);
                                         }
                                     });

ReactDOM.render(<List/>, document.getElementById('test'));


