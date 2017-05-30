/**
 * Created by MicroKibaco on 5/29/17.
 */
const exf = {

    test(){
        alert('ok test mixins!' + this.props.group);
    }

};

// ES6

class Item extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // getInitialState
        this.state = {
            result: 123
        };
    }

    test() {
        alert('ok test mixins!' + this.props.group);
    }

    static get defaultProps() {
        return {
            group: 'javaScript'
        }
    }

    // protoType
    render() {
        // null
        // false
        // Element Object
        // JSX
        return <div>{this.props.group}
            <button onClick={this.test.bind(this)}>click me</button>
        </div>;
        // return React.createElement('div', null, this.props.group);

    }

}

Item.defaultProps = {
    group: 'javaScript'
};

// Compent
/*const Item = React.createClass({

 displayName: 'Item',// test
 mixins: [exf],

 getDefaultProps(){
 return {
 group: 'javaScript'
 }
 },
 getInitialState(){
 return {
 result:123
 }
 },

 // protoType
 render(){
 // null
 // false
 // Element Object
 // JSX
 return <div>{this.props.group}
 <button onClick={this.test}>click me</button>
 </div>;
 // return React.createElement('div', null, this.props.group);

 }
 });*/

ReactDOM.render(<Item group='Hello'/>, document.body);