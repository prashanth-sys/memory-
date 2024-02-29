import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import MemoryMatrix from './components/MemoryMatrix'
import MatrixHomePage from './components/MatrixHomePage'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/memory/matrix" component={MatrixHomePage} />
    <Route exact path="/matrix/game" component={MemoryMatrix} />
  </Switch>
)

export default App
