import React from 'react';

export const TituloSeccion = ({ icono, texto }) => (
    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {icono}
        {texto}
    </span>
);