import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import ViewFavoritos from "./ViewFavoritos";
const styles = {
    favoritos: {
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        fontSize: '1.5rem',
    },
    bubble: {
        position: 'relative',
        left: 26,
        top: -13,
    }
}

class Favoritos extends Component{
    state = {
        open: false,
    }
    render(){
        const { eliminarFavorito, favoritos, newFavorito, children } = this.props;
        const { open } = this.state;
        return (
            <div>
                <button style={styles.favoritos} onClick={()=>this.setState({open:!open})}> 
                {
                    favoritos && favoritos.length > 0 ?
                    newFavorito ? 
                    <span style={styles.bubble}>
                        <BubbleAlert newContent={true}/>
                    </span>
                    : null
                    : null
                }
                    {children}
                </button>
                {
                    favoritos && favoritos.length > 0 ?
                        <ViewFavoritos open={open} eliminarFavorito={eliminarFavorito} favoritos={favoritos}/>
                    : null
                }
            </div>
        )
    }
}

export default Favoritos;