const Item = React.createClass({

                                   displayName: 'Item',

                                   _save(){
                                       this.setState({name: 'MicroKibaco'});
                                       //  this.forceUpdate();
                                   },
                                   _changeValue(event){
                                       this.setState({value: event.target.value});
                                   },

                                   render(){
                                       console.log('render');
                                       return (<div>{this.props.group}
                                           <input value={this.state.value}
                                                  onChange={this._changeValue}/>
                                           <button onClick={this._save}>save</button>
                                       </div>);

                                   },

                                   getDefaultProps(){

                                       return (
                                           {
                                               value: 'no value'
                                           }
                                       );

                                   },
                                   getInitialState(){

                                       return {
                                           value: this.props.value
                                       }
                                   },
                                   componentWillMount(){

                                   },
                                   componentDidMount(){
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
// Update database
                                   },
                                   componentDidUpdate(oldProps, oldState){

                                       let dom = ReactDOM.findDOMNode(this);
                                       let oldStyle = dom.style.border;
                                       dom.style.border = '2px solid blue';
                                       setTimeout(function () {
                                           dom.style.border = oldStyle;
                                       }, 100)
                                   },
                                   shouldComponentUpdate(nextProps, nextState){

                                       return true;
                                   },
                                   componentWillReceiveProps(nextProps){

                                       this.state.value = nextProps.value;
                                   }
                               });

ReactDOM.render(<div>
    <Item/>
</div>, document.getElementById('test'));

