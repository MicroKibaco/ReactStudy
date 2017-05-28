// List as a whole

const List = React.createClass({

                                   render(){
                                       return ( <ul>
                                           <button className="btn btn-default">Add</button>
                                           <Item vaule="Name: ">My name is yangzy</Item>
                                           <Item vaule="Age: ">I am 18</Item>
                                           <Item vaule="Sex: ">girl</Item>
                                           <ItemEditor value='yangzy'/>
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


