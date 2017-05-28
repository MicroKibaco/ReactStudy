
// List as a whole

const List = React.createClass({

                                   render(){
                                       return ( <ul>
                                           <button className="btn btn-default">Add</button>
                                           <Item/>
                                           <ItemEditor/>
                                       </ul>);

                                   }
                               });

// Item

const Item = React.createClass({

                                   render(){
                                       return (
                                           <li className="list-group-item">
                                               Cras justo odio
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
                                                     <input className="item-edit"/>
                                                     <a href="#"
                                                        className="glyphicon glyphicon-share"></a>
                                                     <a href="#"
                                                        className="glyphicon glyphicon-remove"></a>
                                                 </li>);
                                         }
                                     });

ReactDOM.render(<List/>, document.getElementById('test'));


