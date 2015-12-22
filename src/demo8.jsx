var ReactButton = React.createClass({
	getInitialState:function(){
		return {cmpState:false}
	}
	,handleClick:function(){
		this.setState({cmpState:!this.state.cmpState});

	}
	,render:function(){
		var text = this.state.cmpState?"TRUE":"FALSE";
		return (
				<center>
					<h1 onClick={this.handleClick}>this state is changed to:{text}</h1>	
				</center>
			);
	}

});

ReactDOM.render(
		<ReactButton/>
		,document.getElementById('demo')
	)