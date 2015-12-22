var names  = ['Tom','Jhon','Jim'];
ReactDOM.render(
		<center>
			{
				names.map(function (name){
					return <h1>Welcome to React,{name}</h1>
				})
			}
		</center>
		,document.getElementById('demo')
	)
