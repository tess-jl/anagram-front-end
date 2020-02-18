import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import Search from './search/Search';
import AnagramList from './anagramList/AnagramList';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Search} /> 
        <Route path='/' component={AnagramList} />

      </Switch>
    </Router>
  );
}
