
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Panel } from './components/Panel'
import { Products } from './components/Products'
import { Users } from './components/Users'
import { Resume } from './components/Resume'
import { Categories } from './components/Categories'
import { LastProduct } from './components/LastProduct'

function App() {

  return (
    <>
      <Navbar />
      <Panel />
      <Switch>
        <Route path="/" exact><h1>Inicio</h1></Route>
        <Route path="/resume"><h1><Resume/></h1></Route>
        <Route path="/users"><h1><Users /></h1></Route>
        <Route path="/products"><h1><Products /></h1></Route>
        <Route path='/categories'><h1><Categories /></h1></Route>
        <Route path="/lastProduct"><h1><LastProduct/></h1></Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
