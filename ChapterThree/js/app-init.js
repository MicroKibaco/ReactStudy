const Item = React.createClass({

                                  displayName: 'Item',
                                  render(){
                                      return (<div>{this.props.group + this.state.name}</div>);
                                  },
                                  getInitialState(){
                                      console.log('get initial state');
                                      return {
                                          name: 'TinyBin'
                                      }
                                  },
                                  getDefaultProps(){
                                      console.log('get default props');
                                      return {
                                          group: 123,
                                      }
                                  }
                              });

ReactDOM.render( <div>
    <Item/>
    <Item/>
    <Item/>
</div>,document.body);