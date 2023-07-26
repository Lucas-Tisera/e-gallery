import { Component } from 'react'
import Button from './Buttons';

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '100%',
        borderRadius: '5px',
        },  
    img: {
        width: '100%',
    }
}


class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props;
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.images} />
                <Button onClick={agregarAlCarro} >
                    ❤️
                </Button>
                <Button>
                    ❌
                </Button>
            </div>
        )
    }
}

export default Producto