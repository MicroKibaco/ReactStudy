const Comp = React.createClass({

                                   getInitialState(){
                                       return {
                                           top: 0,
                                           left: 0
                                       };
                                   },

                                   keyPress(event){
                                       switch (event.keyCode) {

                                           case 37:
                                               this.setState({left: this.state.left - 5});

                                               break;
                                           case 38:
                                               this.setState({top: this.state.top - 5});
                                               break;

                                           case 39:
                                               this.setState({left: this.state.left + 5});
                                               break;

                                           case 40:
                                               this.setState({top: this.state.top + 5});
                                               break;

                                       }

                                   },

                                   render(){

                                       return <div ref={dom => {
                                           if (dom) {
                                               dom.focus()
                                           }
                                       } } style={ {
                                           width: '450px',
                                           height: '450px',
                                           position: 'relative',
                                           backgroundColor: 'green'
                                       }}

                                                   onKeyPress={this.keyPress}
                                                   tabIndex={1}
                                       >

                                           <div style={ {
                                               top: this.state.top + 'px',
                                               left: this.state.left + 'px',
                                               width: '10px',
                                               height: '10px',
                                               backgroundColor: 'red',
                                               position: 'absolute'
                                           }}/>

                                       </div>
                                   }

                               });

ReactDOM.render(<Comp/>, document.body);