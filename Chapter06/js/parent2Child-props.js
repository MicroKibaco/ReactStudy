/**
 * props
 */

// Parent

 const Parent = React.createClass({

                                  getInitialState(){
                                      return {

                                          parent: 'from parent',

                                      }
                                  },

                                  render(){
                                      return ( <Child parent={this.state.parent}/>);
                                  }
                              });

// Child
    const Child = React.createClass({
                                 render(){

                                     var parent = this.props.parent;

                                     return (
                                         <p>parent</p>
                                     )

                                 }

                             });
ReactDOM.render(<Parent />, document.body);