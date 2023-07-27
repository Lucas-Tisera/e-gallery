import { Component } from "react";

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        
    },
    navbar: {
        boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
        position:"relative", // "fixed"
        padding: '0px 200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    }
}
class Navbar extends Component{
    render(){
        const { children } = this.props;
        return(
            <div style={styles.container}>
                <div style={styles.navbar}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Navbar;