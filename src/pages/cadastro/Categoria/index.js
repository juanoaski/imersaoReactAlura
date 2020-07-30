import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import './styles.css'

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault className="pageCategoria">
            <h1>Cadastro Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }} className="formcadastro">
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>Cadastrar</button>
            </form>

            <table>
                <tr>
                    <td>Nome</td>
                    <td>Descrição</td>
                </tr>
                {categorias.map((categoria, indice) => {
                    return (
                        <tr key={`${categoria}${indice}`}>
                            <td>
                                {categoria.nome}
                            </td>
                            <td>
                                {categoria.descricao}
                            </td>
                        </tr>

                    )
                }
                )}
            </table>

            <Link to="/">
                Ir para a Home
            </Link>
        </PageDefault >
    );
}

export default CadastroCategoria;