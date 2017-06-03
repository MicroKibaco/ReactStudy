const data = new Map();

data.set('id001', 'id001');
data.set('id002', 'id002');
data.set('id003', 'id003');
data.set('id004', 'id004');

const DND = React.createClass({

                                  getInitialState(){

                                      return {
                                          rightdata: this.props.data,
                                          leftdata: new Map(),
                                          dragId: null,

                                      }

                                  },

                                  drag(event){

                                      this.state.dragId = event.target.id;

                                  },
                                  drop(event){

                                      let vaule = this.state.rightdata.get(this.state.dragId);
                                      this.state.leftdata.set(this.state.dragId, vaule);
                                      this.state.rightdata.delete(this.state.dragId);
                                      this.forceUpdate();

                                  },
                                  drop2(event){

                                      let vaule = this.state.leftdata.get(this.state.dragId);
                                      this.state.rightdata.set(this.state.dragId, vaule);
                                      this.state.leftdata.delete(this.state.dragId);
                                      this.forceUpdate();

                                  },

                                  render(){
                                      const rightList = [];
                                      const leftList = [];

                                      for (let item of this.state.rightdata) {
                                          rightList.push(
                                              <p draggable={true} onDragStart={this.drag}
                                                 id={item[0]}>{item[1]}</p>
                                          );
                                      }

                                      for (let item of this.state.leftdata) {
                                          leftList.push(
                                              <p draggable={true} onDragStart={this.drag}
                                                 id={item[0]}>{item[1]}</p>
                                          );
                                      }

                                      return <div>
                                          <div id="leftSection"
                                               onDragEnter={e => e.preventDefault()}
                                               onDragOver={e => e.preventDefault()}
                                               onDrop={this.drop}>
                                              {leftList}
                                          </div>
                                          <div id="rightSection"
                                               onDragEnter={e => e.preventDefault()}
                                               onDragOver={e => e.preventDefault()}
                                               onDrop={this.drop2}>
                                              {rightList}
                                          </div>

                                      </div>

                                  }

                              });

ReactDOM.render(<DND data={data}/>, document.getElementById('one'));
ReactDOM.render(<DND data={data}/>, document.getElementById('two'));