import { Component } from "react";

const styles = {
    titleContainer: {
        color: '#0A283E',
    }
}

class Title extends Component{
    render(){
        const { children } = this.props;
        return(
            <div style={styles.titleContainer}>
                <h1>{children}</h1>
            </div>
        )
    }
}
export default Title;