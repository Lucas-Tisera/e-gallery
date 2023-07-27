import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#fff',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container:{
        padding: '0px 200px',
    }
}

class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Layout