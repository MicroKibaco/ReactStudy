/**
 * props:
 * Since the parent component can pass the props attribute to the subcomponent, the subcomponent
 * can use the parent component method to reverse the parent component
 */
// Parent

const Parent = React.createClass({

                                     getInitialState(){

                                         return {

                                             parent: 'just from parent'

                                         };

                                     },

                                     render(){

                                         return (<Child parent={this.state.parent}/>)

                                     }

                                 });
// Child
// get value from father component
const Child = React.createClass({

                                    render(){
                                        let parent = this.props.parent;
                                        return (
                                            <p>{parent}</p>
                                        );
                                    }

                                });
ReactDOM.render(<Parent />, document.body);