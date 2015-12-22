
var HelloReact = React.createClass({
	render:function(){
		return <center><h1>Hello,this.props.name is {this.props.name}</h1></center>;
	}
})

ReactDOM.render(
		<center>
			<HelloReact name="John"/>
		</center>
		,document.getElementById('demo')
	);