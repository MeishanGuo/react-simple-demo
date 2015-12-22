var ReactButton = React.createClass({
	displayName: "ReactButton",

	getInitialState: function () {
		return { cmpState: false };
	},
	handleClick: function () {
		this.setState({ cmpState: !this.state.cmpState });
	},
	render: function () {
		var text = this.state.cmpState ? "TRUE" : "FALSE";
		return React.createElement(
			"center",
			null,
			React.createElement(
				"h1",
				{ onClick: this.handleClick },
				"this state is changed to:",
				text
			)
		);
	}

});

ReactDOM.render(React.createElement(ReactButton, null), document.getElementById('demo'));