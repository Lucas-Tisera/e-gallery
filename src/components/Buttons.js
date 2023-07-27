import { Component } from "react";

const styles = {
    button: {
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        background: 'transparent',
        fontSize: '16px',
        margin: '10px 0',
        outline: 'none',
        transition: 'all 0.3s ease',
    }
}

export default class Button extends Component {
    render() {
        const { children } = this.props;
        return (
            <button style={styles.button} {...this.props}>
                {children}
            </button>
        )
    }
}