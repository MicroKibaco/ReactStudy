/**
 * refs:
 * The refs attribute allows you to reference the corresponding support instance returned by render
 * (). This property is used to get the real DOM element of the subcomponent
 */

// Parent

const Parent = React.createClass({

                                     getInitialState(){

                                         return {

                                             child: ''

                                         };

                                     },
// The state of the state is obtained from the subcomponent by the refs attribute
                                     getFromChild(){

                                         this.setState({
                                                           child: this.refs.child.state.child
                                                       });
                                     },

                                     render(){

                                         return (
                                             <div>
                                                 <p>child:{this.state.child}</p>
                                                 <Child ref="child"
                                                        getFromChild={this.getFromChild}/>
                                             </div>
                                         )

                                     }

                                 });
// Child
// get value from father component
const Child = React.createClass({

                                    getInitialState(){

                                        return {
                                            child: 'come from child'
                                        }

                                    },

                                    render(){

                                        return (
                                            <button onClick={this.props.getFromChild}/>
                                        );
                                    }

                                });
ReactDOM.render(<Parent />, document.body);