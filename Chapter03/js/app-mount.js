const Item = React.createClass({

                                   displayName: 'Item',
                                   render(){
                                       console.log('render');
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
                                   },
                                   componentWillMount(){
                                       this.state.name = 'yangzy';
                                       console.log('component will mount');
                                   },
                                   componentDidMount(){
                                       console.log('component did mount ');
                                       const dom = ReactDOM.findDOMNode(this);
                                       let isRed = false;

                                       console.log(dom);
                                       setInterval(function () {
                                           if (isRed) {

                                               dom.style.backgroundColor = 'red';
                                               isRed = false;
                                           } else {
                                               dom.style.backgroundColor = 'green';
                                               isRed = true;
                                           }
                                       }, 100);

                                   }
                               });

ReactDOM.render(<Item/>, document.body);