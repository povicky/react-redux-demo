组件第一次被渲染的时候，依次调用的函数：
	constructor
	getInitialState -----> 在es6中这个是在constructor中就初始化
	getDefaultProps
	componentWillMount ----> 可以在服务端或者浏览器端被调用
	render
	componentDidMount  -----> 只能在浏览器端被调用，在服务端调用React的时候不会被调用
	
当组件被装载到DOM树上时，更新时候会调用以下的生命周期函数
	componentWillReceiveProps
	shouldComponentUpdate --->要求有返回结果的函数
	componentWillUpdate
	render  --->要求有返回结果的函数
	componentDidUpdate