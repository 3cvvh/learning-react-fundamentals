import { Component } from "react";

class Counter extends Component
{

    constructor(props){
        super(props)
        this.state = {count:0}
    }
    componentDidMount(){
        this.setState({count:1})
    }
    componentDidUpdate(prev,next){
        console.log("update")
        if(next.count >= 5){
            this.setState({count:1})
        }
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1><br />
            <button onClick={() => this.setState({count:this.state.count+1})}>+</button>
            </>
        )
    }
}

export default Counter