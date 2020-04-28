import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importando as páginas
import Main from './pages/Main';
import Repository from './pages/Ropository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
