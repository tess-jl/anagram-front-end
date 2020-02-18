import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import SearchAnagramContainer from './searchAnagramContainer/SearchAnagramContainer';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={SearchAnagramContainer} />

      </Switch>
    </Router>
  );
}
