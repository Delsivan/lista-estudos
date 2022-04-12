import { render, screen } from '@testing-library/react';

import Item from '.'

describe(" Componente item ", () => {
    it("Dado uma tarefa deve rederizar uma tarefa", async () => {
       render(<Item tarefa="React" />) 

       const item = await screen.findByRole('heading', { name: 'React'})

       expect(item).toBeInTheDocument;    

    })
})