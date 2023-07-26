import { Component } from 'react'
import Productos from './components/Productos'
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
    productos: [
    ]
  }
  
  componentDidMount() {
     fetch('https://api.escuelajs.co/api/v1/products')
       .then(res => res.json())
       .then(res2 => {
         this.setState({ productos: res2 })
       })
  }
  render() {


    return (
      <div style={styles.container}>
        <Productos
          agregarAlCarro={()=> window.alert("AGREGAR AL CARRO")}
          productos={this.state.productos}
        />
      </div>
    );
  }
}
export default App;
