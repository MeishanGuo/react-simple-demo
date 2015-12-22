
var HelloReact = React.createClass({
	displayName: "HelloReact",

	render: function () {
		return React.createElement(
			"center",
			null,
			React.createElement(
				"h1",
				null,
				"Hello,this.props.name is ",
				this.props.name
			)
		);
	}
});

ReactDOM.render(React.createElement(
	"center",
	null,
	React.createElement(HelloReact, { name: "John" })
), document.getElementById('demo'));