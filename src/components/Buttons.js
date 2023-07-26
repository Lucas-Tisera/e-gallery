import { Component } from "react";

export default class Button extends Component {
    render() {
        const { children, onClick } = this.props;
        return (
            <button onClick={onClick}>
                {children}
            </button>
        )
    }
}