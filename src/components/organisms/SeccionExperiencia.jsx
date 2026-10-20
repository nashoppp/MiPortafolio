import React from 'react';
import { Row, Col, Typography } from 'antd';
import { SolutionOutlined, BookOutlined } from '@ant-design/icons';
import { TarjetaTimeline } from '../molecules/TarjetaTimeline';

const { Title, Text } = Typography;

export const SeccionExperiencia = () => {
    const experiencia = [
        {
            color: 'blue',
            content: (
                <>
                    <Title level={5} style={{ margin: 0 }}>Restaurante Tavelli</Title>
                    <Text strong>Trabajador Part-Time</Text>
                    <br />
                    <Text type="secondary">Febrero 2026 - Presente</Text>
                </>
            ),
        },
        {
            color: 'gray',
            content: (
                <>
                    <Title level={5} style={{ margin: 0 }}>Hotel the singular</Title>
                    <Text strong>Trabajador Prácticante</Text>
                    <br />
                    <Text type="secondary">Noviembre 2024 - Enero 2025</Text>
                </>
            ),
        }
    ];

    const estudios = [
        {
            color: 'green',
            content: (
                <>
                    <Title level={5} style={{ margin: 0 }}>Duoc UC</Title>
                    <Text strong>Analista Programador</Text>
                    <br />
                    <Text type="secondary">En curso (Actualidad)</Text>
                </>
            ),
        },
        {
            color: 'gray',
            content: (
                <>
                    <Title level={5} style={{ margin: 0 }}>Colegio CTP de Maipú</Title>
                    <Text strong>Técnico Nivel Medio en Cocina</Text>
                    <br />
                    <Text type="secondary">Titulado</Text>
                </>
            ),
        }
    ];

    return (
        <Row className="animacion-entrada" gutter={24} style={{ marginBottom: '30px' }}>
            <Col xs={24} md={12}>
                <TarjetaTimeline
                    icono={<SolutionOutlined />}
                    titulo="Experiencia Laboral"
                    items={experiencia}
                />
            </Col>
            <Col xs={24} md={12}>
                <TarjetaTimeline
                    icono={<BookOutlined />}
                    titulo="Formación Académica"
                    items={estudios}
                />
            </Col>
        </Row>
    );
};