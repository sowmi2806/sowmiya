var React= require('react');
var ReactDOM=require('react-dom');
var ReactHelloWorld = React.createClass ({
  render() {
    return (
      <div> Hello world!! </div>
    )
  }
});
ReactDOM.render(<ReactHelloWorld/>,document.getElementById('app'))
module.exports=ReactHelloWorld;