// ReactDOM.render(<h1>ChapterTwo</h1>, document.getElementById('test'));

const Item = React.createClass({

                                   render(){
                                       return React.createElement('div', null,
                                                                  React.createElement('span', null,
                                                                                      '18'),
                                                                  React.createElement('span', null,
                                                                                      'Jump'),
                                                                  React.createElement('span', null,
                                                                                      'TinyBin'),
                                                                  React.createElement('span', null,
                                                                                      'boy'));
                                   }
                               });

const bool = false;
const result = [];

/*if (bool) {
 result.push(<Item/>);
 result.push(<Item/>);
 result.push(<Item/>)
 } else {

 result.push(<h1>My name is TinyBin</h1>)

 }

// -webkit
// -ms-
// Webkit
ReactDOM.render(<ul style={ {backgroundColor: 'red'} }>
 {result}
 <Item/>
 </ul>, document.getElementById('test'));*/

if (bool) {
    result.push(React.createElement(Item));
    result.push(React.createElement(Item));
    result.push(React.createElement(Item))
} else {

    result.push(React.createElement('h1', null, 88));
    result.push(React.createElement('h1', null, 33));

}

ReactDOM.render(React.createElement('ul', {style: {backgroundColor: 'yellow'}},
                                    [result, React.createElement(Item)]),
                document.getElementById('test'));
