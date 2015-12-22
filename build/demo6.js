var HelloReact = React.createClass({
	displayName: "HelloReact",

	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function () {
		return React.createElement(
			"h1",
			null,
			"this.props.title:",
			this.props.title
		);
	}
});

var dataNum = 11111;
var dataString = "this is string";
ReactDOM.render(React.createElement(
	"center",
	null,
	React.createElement(HelloReact, { title: dataNum }),
	React.createElement(HelloReact, { title: dataString })
), document.getElementById('demo'));