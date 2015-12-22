var HelloReact = React.createClass({
	displayName: "HelloReact",

	handleClick: function () {
		alert(this.refs.textInput.value);
	},
	render: function () {
		return React.createElement(
			"center",
			null,
			React.createElement("input", { type: "text", ref: "textInput" }),
			React.createElement("input", { type: "button", value: "focus to text input", onClick: this.handleClick })
		);
	}
});

ReactDOM.render(React.createElement(HelloReact, null), document.getElementById('demo'));