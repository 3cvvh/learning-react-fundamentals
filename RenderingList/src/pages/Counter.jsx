import react from "react";

class Counter extends react.Component
{
constructor(props){
super(props)
this.state = {
    count:0,
};
}
render(){
    return (
        <>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>tambah</button>
        <br />
        <button onClick={() => this.setState({count: this.state.count - 1})}>kurang</button>
        </>
    )
}
}


export default Counter