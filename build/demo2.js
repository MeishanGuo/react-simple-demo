var names = ['Tom', 'Jhon', 'Jim'];
ReactDOM.render(React.createElement(
	'center',
	null,
	names.map(function (name) {
		return React.createElement(
			'h1',
			null,
			'Welcome to React,',
			name
		);
	})
), document.getElementById('demo'));