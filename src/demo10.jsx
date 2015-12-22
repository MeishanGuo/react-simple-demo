var HelloReact = React.createClass({
	getInitialState:function(){
		console.log("＝＝组件挂载之前＝＝")
		return {
			opacity:1.0
		}
	}
	,getDefaultProps:function(){
		console.log("==实例创建之前==")
	}
	,componentWillUpdate:function(){
		console.log("==组件的更新将要同步到 DOM 中之后立刻被调用==")
	}
	,componentDidUpdate:function(){
		console.log("==组件的更新已经同步到 DOM 中之后立刻被调用==")
	}
	,componentWillMount:function(){
		console.log("==初始化渲染执行之前==")
	}
	,componentDidMount:function(){
		console.log("==初始化渲染执行之后==")
		this.timer = setInterval(function(){
			var opacity = this.state.opacity;
			opacity -= .5;
			if(opacity<0){
				opacity = 1.0
			}
			this.setState({opacity:opacity})
		}.bind(this),1000)
	}
	,componentWillReceiveProps:function(){
		console.log("==组件接收到新的 props 的时候==")
	}
	,shouldComponentUpdate:function(nextProps, nextState){
		console.log("==在接受到新的props和state，将要渲染之前调用==")
		return nextProps.id == this.props.id;
	}
	,componentWillUpdate:function(){
		console.log("==接收到新的 props 或者 state 之前立刻调用==")
	}
	,componentWillUnmount:function(){
		console.log("==组件从 DOM 中移除的时候立刻被调用==")
	}
	,render:function(){
		return (
				<h1 style={{opacity:this.state.opacity}}>XXXXXXXX</h1>
			)
	}
})

ReactDOM.render(
		<center>
			<HelloReact/>
		</center>
		,document.getElementById('demo')
	)