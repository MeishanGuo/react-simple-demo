var HelloReact = React.createClass({
	displayName: "HelloReact",

	getInitialState: function () {
		return { value: "Welcome To React!" };
	},
	handleChange: function (e) {
		this.setState({ value: e.target.value });
	},
	render: function () {
		var value = this.state.value;
		return React.createElement(
			"center",
			null,
			React.createElement("input", { type: "text", value: value, onChange: this.handleChange }),
			React.createElement(
				"p",
				null,
				value
			)
		);
	}
});

ReactDOM.render(React.createElement(HelloReact, null), document.getElementById("demo"));