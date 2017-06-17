/**
 * props:
 * Since the parent component can pass the props attribute to the subcomponent, the subcomponent
 * can use the parent component method to reverse the parent component
 */
// Parent

const Parent = React.createClass({

                                     getInitialState(){

                                         return {

                                             parent: 'just from parent',
                                             child: ''

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
                                                 <p>child:{this.state.child}</p>
                                                 <Child parent={this.state.parent}
                                                        getFromChild={this.getFromChild}/>
                                             </div>
                                         )

                                     }

                                 });
// Child
// get value from father component
const Child = React.createClass({

                                    render(){
                                        let parent = this.props.parent;
                                        return (
                                            <div>
                                                <p>{parent}</p>
                                                <button onClick={this.props.getFromChild.bind(null,
                                                                                              'come from child')}/>
                                            </div>
                                        );
                                    }

                                });
ReactDOM.render(<Parent />, document.body);