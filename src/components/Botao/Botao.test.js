import { render, screen } from '@testing-library/react';

import Botao from '.'


describe('Componete botão', () => {
    it('O botão é renderizado corretamente com o texto passado', async() => {
        render(<Botao>Adicionar</Botao>);

        const botao = await screen.findByRole('button', {name: 'Adicionar'})

        expect(botao).toBeInTheDocument;
    })
})