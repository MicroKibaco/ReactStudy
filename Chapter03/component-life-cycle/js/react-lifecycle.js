const list = [];
const database = {

    add(article){
        list.push(article);
        return list.length - 1;
    },
    del(index){
        list[index] = null;
    },
    update(index, newArticle){
        list.splice(index, 1, newArticle);
    },
    get list() {
        return list;
    }

};

const Item = React.createClass({

                                   displayName: 'Item',

                                   _changeValue(event){
                                       this.setState({value: event.target.value});
                                   },
                                   _save(){ // histroy
                                       /* this.state.history.push(this.state.value);
                                        this.state.currentHistory = this.state.value;*/
                                       const value = this.state.value;
                                       const history = this.state.history;
                                       const currentHistoryIndex = history.length;

                                       history.push(value);
                                       this.setState({
                                                         history, currentHistoryIndex

                                                     });
                                   },
                                   _prev(){
                                       let currentHistoryIndex = this.state.currentHistoryIndex;

                                       if (currentHistoryIndex !== 0) {
                                           currentHistoryIndex -= 1;
                                           this.setState({
                                                             currentHistoryIndex
                                                         });
                                       }

                                   },

                                   _next(){
                                       let currentHistoryIndex = this.state.currentHistoryIndex;

                                       if (currentHistoryIndex !== this.state.history.length - 1) {
                                           currentHistoryIndex += 1;
                                           this.setState({
                                                             currentHistoryIndex
                                                         });
                                       }
                                   },
                                   render(){
                                       return (<div>{this.props.group}
                                           <div>
                                               <button onClick={this._prev}>prev</button>
                                               <span>{this.state.history[this.state.currentHistoryIndex]}</span>
                                               <button onClick={this._next}>next</button>
                                           </div>
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
                                           value: this.props.value,
                                           history: [this.props.value],
                                           currentHistoryIndex: 0,
                                       }
                                   },
                                   componentWillMount(){
                                       this.state.dbkey = database.add({value: this.state.value});

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
                                       // setState & forceUpdate
                                       let dbkey = this.state.dbkey;
                                       database.update(dbkey, {value: this.state.value});
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

