import './App.css'
import CardBooks from './components/CardBooks'
import capaLivro from './assets/livros/cavernas_aco.jpg'

function App() {

  return (
    <>

      <CardBooks
      titulo ='As Cavernas De Aço'
      autor ='Isaac Azimov'
      imagem={capaLivro}
      />

    </>
  )
}

export default App

