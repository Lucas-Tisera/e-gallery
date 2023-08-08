import { Component } from 'react'
import Button from './Buttons';
import { GoHeart,GoHeartFill} from "react-icons/go";
const styles = {
    photo: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
        },  
    img: {
        width: '100%',
    }
}

export default class Photo extends Component {
    state = {
        favorite: false
    }
    render() {
        const { photo, agregarFavoritos, eliminarFavoritos } = this.props;
        console.log(photo)
        const favorite = () => {
            if (this.state.favorite === false) {
                this.setState({ favorite: !this.state.favorite })
                agregarFavoritos(photo)
            } else {
                this.setState({ favorite: !this.state.favorite })
                eliminarFavoritos(photo)
            }
        }
            return (
            <div style={styles.photo}>
                <img style={styles.img} alt={photo.name} src={photo.images} />
                <Button onClick={favorite} >
                    {
                    this.state.favorite ?
                        <GoHeartFill color='#E9725A' /> 
                    : 
                        <GoHeart color='#E9725A' />
                    } 
                </Button>
            </div>
        )
    }
}

export class ViewedPhoto extends Component {
    state = {
        favorite: true
    }
    render() {
        const { photo } = this.props;
        console.log(photo)
            return (
            <div style={styles.photo}>
                <img style={styles.img} alt={photo.name} src={photo} />
                <Button disabled>
                        <GoHeartFill color='#E9725A' /> 

                </Button>
            </div>
        )
    }
}

 