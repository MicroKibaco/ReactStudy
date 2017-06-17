/**
 * props:
 * Since the parent component can pass the props attribute to the subcomponent, the subcomponent
 * can use the parent component method to reverse the parent component
 */
// Parent

const Parent = React.createClass({

                                     getInitialState(){

                                         return {
                                             child: 'now I am parent'
                                         };

                                     },

                                     getFromChild(value){
                                         this.setState({
                                                           child: value
                                                       });
                                     },

                                     render(){

                                         return (
                                             <div>
                                                 <p>Parent:{this.state.child}</p>
                                                 <Child
                                                     getFromChild={this.getFromChild}/>
                                             </div>
                                         )

                                     }

                                 });
// Child
// get value from father component
const Child = React.createClass({

                                    render(){

                                        return (
                                            <button onClick={this.props.getFromChild.bind(null,
                                                                                          'i come from child')}/>
                                        );
                                    }

                                });
ReactDOM.render(<Parent />, document.body);