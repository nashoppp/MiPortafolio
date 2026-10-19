import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SeccionPersonal } from './SeccionPersonal';

describe('Organismo Crítico: SeccionPersonal', () => {

    it('Debe mostrar la información de identidad del desarrollador', () => {
        render(<SeccionPersonal />);

        expect(screen.getByText('Ignacio Essaú Muñoz Oyarzo')).toBeInTheDocument();
        expect(screen.getByText(/Analista Programador/i)).toBeInTheDocument();
    });
});