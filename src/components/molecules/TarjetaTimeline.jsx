import React from 'react';
import { Card, Timeline } from 'antd';
import { TituloSeccion } from '../atoms/TituloSeccion';

export const TarjetaTimeline = ({ icono, titulo, items }) => (
    <Card
        title={<TituloSeccion icono={icono} texto={titulo} />}
        variant="borderless"
        style={{ height: '100%', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
    >
        <Timeline items={items} />
    </Card>
);