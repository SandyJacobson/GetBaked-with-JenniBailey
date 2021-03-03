import './App.css'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' />
        <Route exact path='/admin' />
        <Route exact path='/login' />
        <Route exact path='/customer' />
        <Route exact path='/goods' />
      </Switch>
    </div>
  )
}

export default App
