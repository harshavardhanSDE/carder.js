import React from 'react'; 
import { render, screen } from '@testing-library/react';
import Carder from '../src/components/Carder.tsx'; 

describe('carder test', () => { 
    it('renders the card component with JSON data', () => {
        const data = {
            title: "test",
            content: "card content",
        }; 

        render(<Carder data={data}/>);

        expect(screen.getByText('test')).toBeInTheDocument(); 

        
    })
 })