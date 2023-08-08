import {Component} from 'react';
import Photo from './Photo';
const styles = {
    photos: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 2fr)',
        gridGap: '1.5rem',
    },
}
class Gallery extends Component {
    render() {
        const{ photos, agregarFavoritos, eliminarFavoritos } = this.props;
        return(
            <div style={styles.photos}>
                {photos.map((photo) => (
                    <Photo
                    eliminarFavoritos={eliminarFavoritos}
                        agregarFavoritos={agregarFavoritos}
                        key={photo.id}
                        photo={photo}
                    />
                ))}
            </div>
        )
    }
}
export default Gallery;