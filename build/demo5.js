var NodeList = React.createClass({
    displayName: 'NodeList',

    render: function () {
        return React.createElement(
            'ol',
            null,
            React.Children.map(this.props.children, function (child) {
                return React.createElement(
                    'li',
                    null,
                    child
                );
            })
        );
    }
});

ReactDOM.render(React.createElement(
    'center',
    null,
    React.createElement(
        NodeList,
        null,
        React.createElement(
            'span',
            null,
            'Welcome'
        ),
        React.createElement(
            'span',
            null,
            'To'
        ),
        React.createElement(
            'span',
            null,
            'React'
        )
    )
), document.getElementById('demo'));