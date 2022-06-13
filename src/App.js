import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/login'
import Home from './components/home'
import Jobs from './components/jobs'
import JobItemDetails from './components/jobItemDetails'
import NotFound from './components/notFound'
import ProtectedRoute from './components/protectedRoute'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
