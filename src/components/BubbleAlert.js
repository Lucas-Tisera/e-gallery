import { Component } from "react";
import { GoDotFill } from "react-icons/go";

class BubbleAlert extends Component{
    getStatus(n){
        if(!n) return "";
        return <GoDotFill size={15} color="#E9725A" />;
    }
    render(){
        const { newContent } = this.props;
        return (
            <span>
                {this.getStatus(newContent)}
            </span>
        )
    }
}

export default BubbleAlert;