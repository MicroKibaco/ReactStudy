const Comp = React.createClass({

                                   render(){
                                       return <div>
                                           <input ref="myInput"/>
                                           <input ref="myInput2"/>
                                           {/* <input ref={function (dom) {
                                            dom.focus();
                                            }}/>*/}
                                           <button onClick={this.click}>Click Me!</button>
                                       </div>
                                   },
                                   componentDidMount(){
                                       this.refs.myInput2.focus();
                                   },
                                   click(){
                                       this.refs.myInput.focus();
                                   }

                               });

ReactDOM.render(<Comp/>, document.body);