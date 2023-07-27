import { Component } from 'react'
import Gallery from './components/Gallery'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Favoritos from './components/Favoritos'
import { GoBookmark } from "react-icons/go";

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    }
}

class App extends Component {
  //make a request to the API
  
  state = {
    photos: [],
    favoritos:[
    ],
    newFavorito: false,
  }
  
  eliminarFavorito = (favorito) => {
    const { favoritos } = this.state;
    const newFavoritos = favoritos.filter( x => x.id !== favorito.id)
    this.setState({favoritos: newFavoritos})
  }

  agregarFavoritos = (favorito) => {
    const { favoritos } = this.state;
    // This code checks if the object "favorito" is included in the array
    // "favoritos" and, if it is, removes it. Otherwise, it adds it to the
    // array "favoritos".
    // It is used to add or remove a favorite from a list of favorites.
    if(favoritos.find( x => x.id === favorito.id)){
        const newFavoritos = favoritos.filter( x => x.id !== favorito.id)
        this.setState({favoritos: newFavoritos})
    }else{
      favoritos.push(favorito)
      this.setState({favoritos})
      this.setState({newFavorito: true})
    }
  }

  componentDidMount() {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(res2 => {
        this.setState({ photos: res2 })
      })
  }
  render() {
    return (
      <div style={styles.container}>
        <Navbar>
          <Title>Gallery</Title>
          <Favoritos 
            eliminarFavorito={this.eliminarFavorito} 
            favoritos={this.state.favoritos} 
            newFavorito={this.state.newFavorito}
          >
            <GoBookmark/>
          </Favoritos>
        </Navbar>
        <Layout>
          <Gallery
            agregarFavoritos={this.agregarFavoritos}
            photos={this.state.photos}
          />
        </Layout>
      </div>
    );
  }
}
export default App;
