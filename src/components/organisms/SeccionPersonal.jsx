import React from 'react';
import { Card, Avatar, Typography, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const SeccionPersonal = () => {
    return (
        <Card variant="borderless" style={{ marginBottom: '30px', borderRadius: '12px', backgroundColor: '#f0f2f5' }}>
            <Row align="middle" gutter={24}>
                {/* Avatar */}
                <Col xs={24} md={6} style={{ textAlign: 'center' }}>
                    <Avatar
                        size={160}
                        icon={<UserOutlined />}
                        style={{ backgroundColor: '#001529' }}
                    />
                </Col>

                {/* Columna de la Información */}
                <Col xs={24} md={18}>
                    <Title level={2} style={{ marginBottom: 0 }}>Ignacio Essaú Muñoz Oyarzo</Title>
                    <Title level={4} type="secondary" style={{ marginTop: '8px' }}>
                        Desarrollador Full Stack | Analista Programador
                    </Title>
                    <Paragraph style={{ fontSize: '16px', marginTop: '16px', lineHeight: '1.6' }}>
                        Desarrollador en formación con enfoque en arquitecturas Full Stack.
                        Me especializo en construir interfaces web interactivas y escalables utilizando React
                        y Ant Design. Actualmente estudiando Analista Programador en Duoc UC.
                    </Paragraph>
                </Col>
            </Row>
        </Card>
    );
};