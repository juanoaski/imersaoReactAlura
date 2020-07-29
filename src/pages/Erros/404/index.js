import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import { Canva } from './styles';
import Script from '../../../components/ScriptUser';


function Error404() {
    return (
        <PageDefault>
            <h1>Esta pagina não existe, aproveite e jogue um flappy Bird</h1>
            <Canva id="game-canvas" width="320" height="480" />

            <Link to="/">
                Voltar para a Home
            </Link>
            <>
            <Script src='../assets/FlappyBird/flappy.js' async={false} />
            </>
        </PageDefault> 
        
        
    );
}

export default Error404;