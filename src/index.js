import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Home} exact/>
      <Route component={()=>(<div>Erro 404</div>)}/>
    </Switch>
  </BrowserRouter >,
  document.getElementById('root')
);