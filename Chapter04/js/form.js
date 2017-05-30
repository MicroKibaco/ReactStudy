/**
 * Created by MicroKibaco on 5/30/17.
 */
const Form = React.createClass({

                                   getInitialState(){
                                       return {
                                           inputValue: 'TinyBin',
                                           inputValue2: '',
                                           checkboxValue: false,
                                           radioValue: false,
                                       }
                                   },

                                   changeHandle(event){
                                       /*  this.state.inputValue = event.target.value;
                                        this.forceUpdate();*/
                                       this.setState({

                                                         inputValue: event.target.value
                                                     });
                                   },

                                   changeHandle2(event){

                                       this.state.inputValue2 = event.target.value

                                   },
                                   changeCheckboxHandle(){
                                       this.setState({

                                                         checkboxValue: !this.state.checkboxValue
                                                     });
                                   },
                                   changeRadioHandle(){
                                       this.setState({

                                                         radioValue: !this.state.radioValue
                                                     });
                                   },
                                   render(){
                                       return <form >
                                           <input type="text" value={this.state.inputValue}
                                                  onChange={this.changeHandle}/>
                                           <input type="text" defaultValue='yangzy'
                                                  onChange={this.changeHandle2}/>
                                           <input type="checkbox" checked={this.state.checkboxValue}
                                                  onChange={this.changeCheckboxHandle}/>
                                           <input type="checkbox" defaultChecked/>
                                           <input type="radio" checked={this.state.radioValue}
                                                  onChange={this.changeRadioHandle}/>
                                           <select value="B">
                                               <option value="A">A</option>
                                               <option value="B">B</option>
                                               <option value="C">C</option>
                                           </select>
                                           <select multiple value={['B','C']}>
                                               <option value="A">A</option>
                                               <option value="B">B</option>
                                               <option value="C">C</option>
                                           </select>
                                           <textarea value="569015640"> </textarea>
                                       </form>
                                   }
                               });

setTimeout(function () {
    ReactDOM.render(<Form/>, document.body);
}, 1000);