import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Input, Button, Typography, Flex } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, SendOutlined } from '@ant-design/icons';
import { TituloSeccion } from '../atoms/TituloSeccion';

const { Title, Text, Link } = Typography;
const { TextArea } = Input;

export const SeccionContacto = () => {

    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [errores, setErrores] = useState({ email: false });
    const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);

    useEffect(() => {
        const emailValido = formulario.email.includes('@') && formulario.email.includes('.');
        const camposLlenos = formulario.nombre.trim() !== '' && formulario.email.trim() !== '' && formulario.mensaje.trim() !== '';

        setErrores({ email: formulario.email !== '' && !emailValido });
        setBotonDeshabilitado(!(camposLlenos && emailValido));
    }, [formulario]);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const manejarEnvio = () => {
        alert(`¡Gracias por tu mensaje, ${formulario.nombre}!`);
        setFormulario({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <div style={{ marginBottom: '40px' }}>
            <Title level={2} style={{ marginBottom: '24px' }}>
                <TituloSeccion icono={<MailOutlined />} texto="Contacto" />
            </Title>

            <Row gutter={24}>
                <Col xs={24} md={8}>
                    <Card variant="borderless" style={{ height: '100%', borderRadius: '12px', backgroundColor: '#f0f2f5' }}>
                        <Title level={4}>¡Hablemos!</Title>
                        <Text>Estoy disponible para nuevas oportunidades como desarrollador o analista programador.</Text>
                        <br /><br />
                        <Flex vertical gap="middle">
                            <Link href="https://github.com/nashoppp" target="_blank" style={{ fontSize: '16px' }}>
                                <GithubOutlined /> Mi perfil de GitHub
                            </Link>
                            <Link href="https://www.linkedin.com/in/ignacio-essaú-muñoz-oyarzo-169895441/?isSelfProfile=true" target="_blank" style={{ fontSize: '16px' }}>
                                <LinkedinOutlined /> Mi perfil de LinkedIn
                            </Link>
                        </Flex>
                    </Card>
                </Col>

                <Col xs={24} md={16}>
                    <Card variant="borderless" style={{ borderRadius: '12px', backgroundColor: '#fafafa' }}>
                        <Flex vertical gap="large" style={{ width: '100%' }}>
                            <Input
                                size="large"
                                name="nombre"
                                placeholder="Tu Nombre"
                                value={formulario.nombre}
                                onChange={manejarCambio}
                            />
                            <Input
                                size="large"
                                name="email"
                                placeholder="Tu Correo Electrónico"
                                value={formulario.email}
                                onChange={manejarCambio}
                                status={errores.email ? 'error' : ''}
                            />
                            {errores.email && <Text type="danger">Por favor ingresa un correo válido (debe contener @ y .).</Text>}
                            <TextArea
                                rows={4}
                                name="mensaje"
                                placeholder="Tu Mensaje"
                                value={formulario.mensaje}
                                onChange={manejarCambio}
                            />
                            <Button
                                type="primary"
                                size="large"
                                icon={<SendOutlined />}
                                disabled={botonDeshabilitado}
                                onClick={manejarEnvio}
                                style={{ width: '100%' }}
                            >
                                Enviar Mensaje
                            </Button>
                        </Flex>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};