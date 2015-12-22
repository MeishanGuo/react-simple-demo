var HelloReact = React.createClass({
	handleClick:function(){
		alert(this.refs.textInput.value);
	}
	,render:function(){
		return (
				<center>
					<input type="text" ref="textInput"/>
					<input type="button" value="focus to text input" onClick={this.handleClick}/>
				</center>
			)
	}
});

ReactDOM.render(
		<HelloReact />
		,document.getElementById('demo')
	)