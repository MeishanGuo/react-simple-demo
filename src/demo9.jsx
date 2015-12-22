var HelloReact = React.createClass({
	getInitialState:function(){
		return {value:"Welcome To React!"}
	}
	,handleChange:function(e){
		this.setState({value:e.target.value})

	}
	,render:function(){
		var value = this.state.value;
		return (
				<center>
					<input type="text" value={value} onChange={this.handleChange} />
					<p>{value}</p>
				</center>
			)
	}
});

ReactDOM.render(
		<HelloReact />
		,document.getElementById("demo")
	)