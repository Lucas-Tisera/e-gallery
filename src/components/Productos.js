import {Component} from 'react';
import Producto from './Producto';
const styles = {
    productos: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 2fr)',
        gridGap: '10rem',
        padding: '0px 200px',
    },
}
class Productos extends Component {
    render() {
        const{ productos, agregarAlCarro } = this.props;
        console.log(productos);
        return(
            <div style={styles.productos}>
                {productos.map((producto) => (
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
        )
    }
}
export default Productos;