var NodeList = React.createClass({
    render:function(){
        return(
                <ol>
                    {
                      React.Children.map(this.props.children,function (child){
                        return <li>{child}</li>;
                      })
                    }
                </ol>
          );
    }
})

ReactDOM.render(
                <center>
                  <NodeList>
                      <span>Welcome</span>
                      <span>To</span>
                      <span>React</span>
                  </NodeList>
                </center>
                ,document.getElementById('demo')
  )