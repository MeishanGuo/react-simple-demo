var HelloReact = React.createClass({
	propTypes:{
		title:React.PropTypes.string.isRequired,
	}
	,render:function(){
		return <h1>this.props.title:{this.props.title}</h1>
	}
})


var dataNum = 11111;
var dataString = "this is string";
ReactDOM.render(
	<center>
	  <HelloReact title={dataNum} />
	  <HelloReact title={dataString} />
	</center>,
  document.getElementById('demo')
);