const data = new Map();

data.set('id001', 'id001');
data.set('id002', 'id002');
data.set('id003', 'id003');
data.set('id004', 'id004');

const DND = React.createClass({

                                  getInitialState(){

                                      return {
                                          name: '',
                                          group:'',

                                      }

                                  },
                                  changeHandle(event){

                                      this.setState({name: event.target.value});
                                      this.props.onChangeName(this.state.name);

                                  },

                                  render(){

                                      return <div>
                                          <input type="text" value={this.state.name}
                                                 onChange={this.changeHandle}/>
                                      </div>

                                  }

                              });

function changeNameHandle(name) {
    console.log(name);
}

ReactDOM.render(<DND data={data} onChangeName={this.changeNameHandle}/>,
    document.getElementById('one'));
