/**
 * refs
 * Advantage : suitable for nesting level too deep
 */


// Parent

const Parent = React.createClass({

                                     /**
                                      * By refs attribute invoke the component method changes the
                                      * value of the component
                                      */
                                     _changeChild(){
                                         this.refs.child.setState({
                                                                      child: 'now from parent',
                                                                  });
                                     },

                                     render(){
                                         return (

                                             <div>
                                                 {/*child binding ref props*/}
                                                 <Child ref="child"/>
                                                 <button onClick={this._changeChild}/>
                                             </div>

                                         );
                                     }
                                 });

// Child
const Child = React.createClass({

                                    getInitialState(){
                                        return {
                                            child: 'just from child',
                                        }
                                    },
                                    render(){
                                        return ( <p>
                                            {this.state.child}
                                        </p>);
                                    }

                                });
ReactDOM.render(<Parent />, document.body);