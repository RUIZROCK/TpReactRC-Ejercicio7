import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import ListaEmpleados from './components/ListaEmpleados'

function App() {
  return (
    <>
    <header className='bg-dark py-3'><h1 className='display-4 text-light'>Lista de empleados</h1></header>
    <Container className='mainContainer'>
      <ListaEmpleados></ListaEmpleados>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
