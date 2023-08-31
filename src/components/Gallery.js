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
        console.log("photos")
        console.log(photos.posts)
        return(
            <div style={styles.photos}>
                {photos.posts ?    
                photos.posts.map((photo) => (
                    <Photo
                    eliminarFavoritos={eliminarFavoritos}
                    agregarFavoritos={agregarFavoritos}
                    key={photo.id_img}
                    photo={photo}
                    />
                    ))
                    : <h1>Not Found</h1>}
            </div>
        )
    }
}
export default Gallery;