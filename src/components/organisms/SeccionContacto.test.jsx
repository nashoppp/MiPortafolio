import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SeccionContacto } from './SeccionContacto';

describe('Organismo: SeccionContacto', () => {

    it('Debe renderizar el organismo y el formulario correctamente', () => {
        render(<SeccionContacto />);

        expect(screen.getByText('Contacto')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Tu Nombre')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Tu Correo Electrónico')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Tu Mensaje')).toBeInTheDocument();
    });

    it('El botón de enviar debe iniciar deshabilitado protegiendo el formulario', () => {
        render(<SeccionContacto />);

        const botonEnviar = screen.getByRole('button', { name: /enviar mensaje/i });
        expect(botonEnviar).toBeDisabled();
    });

    it('Debe habilitar el botón de enviar al ingresar datos válidos', () => {
        render(<SeccionContacto />);

        const inputNombre = screen.getByPlaceholderText('Tu Nombre');
        const inputEmail = screen.getByPlaceholderText('Tu Correo Electrónico');
        const inputMensaje = screen.getByPlaceholderText('Tu Mensaje');
        const botonEnviar = screen.getByRole('button', { name: /enviar mensaje/i });

        fireEvent.change(inputNombre, { target: { value: 'Profesor' } });
        fireEvent.change(inputEmail, { target: { value: 'profe@duoc.cl' } });
        fireEvent.change(inputMensaje, { target: { value: 'Hola papu :V' } });

        expect(botonEnviar).not.toBeDisabled();
    });

});