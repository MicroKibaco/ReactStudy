'use strict';

const eventBus = new eventemitter.EventEmitter();

const Subscribe = React.createClass({

                                        getInitialState(){

                                            return {
                                                colorIndex: 0,
                                                colors: ['yellow', 'red']
                                            }

                                        },

                                        componentWillMount(){

                                            eventBus.on('changeColor', (id, color) => {

                                                if (this.props.id !== id
                                                    && this.state.colors[this.state.colorIndex]
                                                       === color) {

                                                    this.changeColor();

                                                }

                                            });

                                        },

                                        changeColor(){

                                            this.setState({

                                                              colorIndex: this.state.colorIndex ? 0
                                                                  : 1
                                                          });

                                            setTimeout(() => {

                                                eventBus.emit('changeColor', this.props.id,
                                                              this.state.colors[this.state.colorIndex])

                                            }, 1500);

                                        },

                                        render(){

                                            return (<div style={{
                                                backgroundColor: this.state.colors[this.state.colorIndex],
                                                marginBottom: 40
                                            }}>
                                                <p>{this.props.name}</p>
                                                <button onClick={this.changeColor}>click me!
                                                </button>
                                            </div>);

                                        },

                                    });

ReactDOM.render(
    <div>
        <Subscribe id="one" name="Subscribe one"/>
        <Subscribe id="two" name="Subscribe two"/>
    </div>, document.body
);