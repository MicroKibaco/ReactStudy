/**
 * Created by MicroKibaco on 5/30/17.
 */
const Form = React.createClass({

                                   getInitialState(){
                                       return {
                                           inputValue: 'TinyBin'
                                       }
                                   },
                                   changeHandle(event){
                                     /*  this.state.inputValue = event.target.value;
                                       this.forceUpdate();*/
                                       this.setState({

                                                         inputValue:event.target.value
                                                     });
                                   },
                                   render(){
                                       return <form >
                                           <input type="text" value={this.state.inputValue}
                                                  onChange={this.changeHandle}/>
                                           <input type="checkbox"/>
                                           <input type="radio"/>
                                           <select>
                                               <option value="">A</option>
                                               <option value="">B</option>
                                               <option value="">C</option>
                                           </select>
                                           <select multiple>
                                               <option value="">A</option>
                                               <option value="">B</option>
                                               <option value="">C</option>
                                           </select>
                                           <textaera></textaera>
                                       </form>
                                   }
                               });

ReactDOM.render(<Form/>, document.body);