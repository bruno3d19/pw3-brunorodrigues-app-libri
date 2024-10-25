//importa os componentes de navegação da aplicação
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

// importando o MENU
import NavBar from './components/Layout/NavBar'

// Importa o componente de container
import Container from './components/Layout/Container'

//importação das paginas
import Home from './components/pages/Home'
import ListBooks from './components/pages/ListBooks'
import CreateBooks from './components/pages/CreateBooks'
import DetailBook from './components/pages/DetailBook'

function App() {

  return (
    <>
      
      {/* Estrutura de navegação */}

      <BrowserRouter>

        <Container>

          <Routes>

            <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/listBook' element={<ListBooks/>}/>
              <Route path='/createBook' element={<CreateBooks/>}/>
              <Route path='/detailBook/:cod_livro' element={<DetailBook/>}/>
            </Route>

          </Routes>
          
        </Container>

      </BrowserRouter>

    </>
  )
}

export default App

