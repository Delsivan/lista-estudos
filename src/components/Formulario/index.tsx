import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import Lista from '../Lista';
import style from './Formulario.module.scss'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
    }> {
    state = {
        tarefa: ""
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ...this.state}]);
        this.setState({ 
            tarefa: ""
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor={style.tarefa}>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value })}
                        placeholder="O que você quer estudar?" 
                        required
                    />
                </div>

                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )
    }

}
export default Formulario;