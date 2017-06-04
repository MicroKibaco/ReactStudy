'use strict';

const eventBus = new eventemitter.EventEmitter();

const Father = React.createClass({

                                     componentWillMount(){

                                         this.props.bus.on('test event', function () {
                                             console.log('handle is' + this.props.name);
                                         });

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

                                     callback(item){

                                         alert(item.name);

                                     },

                                     render(){

                                         return <ul>
                                             {this.state.list.map(item => <Son
                                                 callback={this.callback.bind(this, item)}
                                                 actived={item.actived} name={item.name}/>)}
                                         </ul>
                                     },

                                 });

const Son = React.createClass({

                                  render(){
                                      let style = this.props.actived ? {border: 'solid 1px green'}
                                          : {};
                                      return <li onClick={this.props.callback}>
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

ReactDOM.render(
    <div>
        <Father bus={eventBus} name="Father one" data={list}/>
        <Father bus={eventBus} name="Father two" data={list}/>
    </div>,
    document.body);

setTimeout(function () {

    eventBus.emit('test event');

}, 5000);