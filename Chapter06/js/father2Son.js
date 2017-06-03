const Father = React.createClass({

                                     componentWillMount(){
                                         this.state.list = this.props.data.map(item => {

                                             return {name: item, actived: false};

                                         })

                                     },

                                     componentDidMount(){

                                         setTimeout(() => {

                                             this.state.list[1].actived = true;
                                             this.forceUpdate();

                                         }, 3000);

                                     },

                                     getInitialState(){

                                         return {
                                             list: []
                                         }

                                     },

                                     render(){

                                         return <ul>
                                             {this.state.list.map(item => <Son actived={item.actived} name={item.name}/>)}
                                         </ul>
                                     },

                                 });

const Son = React.createClass({

                                  render(){
                                      let style = this.props.actived ? {border: 'solid 1px green'} : {};
                                      return <li>
                                          {this.props.name}
                                      </li>

                                  }

                              });

const list = [

    'AAA',
    'BBB',
    'CCC',
    'DDD',
    'EEE',
    'FFF',

];

ReactDOM.render(<Father data={list}/>, document.body);