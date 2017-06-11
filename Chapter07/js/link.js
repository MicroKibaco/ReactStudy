const LinkedStateMixin = React.addons.LinkedStateMixin;

const Comp = React.createClass({

                                   getInitialState(){
                                       return {
                                           name: '',
                                           name2: '',
                                           name3: '',
                                       }
                                   },



                                  linkState(key){

                                      return {

                                          value: this.state[key],
                                          requestChange: (newValue) => {

                                              this.setState({
                                                                [key]: newValue
                                                            });
                                          }
                                      }

                                  },

                                   render(){


                                       return (

                                           <div>

                                               <p>{this.state.name}</p>
                                               <p>{this.state.name2}</p>
                                               <p>{this.state.name3}</p>
                                               <input type="text" valueLink={this.linkState('name')}/>
                                               <input type="text" valueLink={this.linkState('name2')}/>
                                               <input type="text" valueLink={this.linkState('name3')}/>
                                           </div>

                                       );
                                   },

                               });

ReactDOM.render(<Comp />, document.body);