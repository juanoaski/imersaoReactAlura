import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Error404 from './pages/Erros/404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Home} exact/>
      <Route component={Error404}/>
    </Switch>
  </BrowserRouter >,
  document.getElementById('root')
);