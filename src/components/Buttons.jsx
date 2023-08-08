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
    },
    buttonDisabled: {
        padding: '10px 15px',
        cursor: 'cursor',
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
        const { disabled, children } = this.props;
        return (
            <>
                {
                disabled ?
                <button style={styles.buttonDisabled} {...this.props}>
                {children}
                </button>
                :
                <button style={styles.button} {...this.props}>
                    {children}
                </button>
                }
            </>
        )
    }
}