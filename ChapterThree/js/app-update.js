const Item = React.createClass({

                                   displayName: 'Item',

                                   _update(){
                                       this.setState({name: 'MicroKibaco'});
                                       //  this.forceUpdate();
                                   },

                                   render(){
                                       console.log('render');
                                       return (<div>{this.props.group + this.state.name}
                                           <button onClick={this._update}>update</button>
                                       </div>);

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
                                       console.log('component did mount');
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

                                   },
                                   componentWillUpdate(nextProps, nextState){
                                       console.log('component will update');

                                   },
                                   componentDidUpdate(oldProps, oldState){
                                       console.log('component did update');
                                   },
                                   shouldComponentUpdate(nextProps, nextState){
                                       console.log('should component update');
                                       return false;
                                   },
                                   componentWillReceiveProps(nextProps){
                                       console.log('component will receive props');
                                   }
                               });

// const List = React.createClass({
//                                    render(){
//                                        return (<div>
//                                            <Item/>
//                                        </div>);
//                                    }
//                                });

function render() {
    ReactDOM.render(<Item/>, document.body);
}
render();
render();