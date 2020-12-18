import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Comment from './screens/Comment'
import Form from './screens/Form'

function App(){
 return (
  <Router>
   <div>
    <Switch>
     <Route path='/' exact component={Form}>
     </Route>
    </Switch>
   </div>
  </Router>
 )
}

export default App;