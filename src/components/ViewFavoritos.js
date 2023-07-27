import { Component } from "react";
import { ViewedPhoto } from "./Photo";

const styles = {
    slider: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        overflow: 'hidden',
        overflowY: 'scroll',
        position: 'absolute',
        marginTop: 30,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: 5,
        width: '300px',
        maxHeight: '800px',
        padding: '5px',
        gap: '10px',
        right: 200,
    },
    noSlider: {
        display: 'none',
    }
}

class ViewFavoritos extends Component{
    render(){
        const { favoritos, eliminarFavorito, open } = this.props;
        return (
            <div style={open ? styles.slider : styles.noSlider}>
                {favoritos ? favoritos.map( favorito => (
                    <ViewedPhoto
                        eliminarFavorito={() => eliminarFavorito(favorito)}
                        key={favorito.id}
                        photo={favorito.images[0]}
                    />
                )) : null} 
            </div>
        )
    }
}

export default ViewFavoritos;