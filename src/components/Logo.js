import { Component } from "react";

const styles = {
    logo: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#0A283E',
    }
}
class Logo extends Component{
    render(){
        const { children } = this.props;
        return (
            <div style={styles.logo}>
                {children}
            </div>
        )
    }
}

export default Logo;