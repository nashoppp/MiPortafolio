import React from 'react';
import { Row, Col, Typography } from 'antd';
import {AppstoreOutlined, ShoppingCartOutlined, FormatPainterOutlined, RubyOutlined} from '@ant-design/icons';
import { TarjetaProyecto } from '../molecules/TarjetaProyecto';
import { TituloSeccion } from '../atoms/TituloSeccion';

const { Title } = Typography;

export const SeccionProyectos = () => {

    const proyectos = [
        {
            id: 1,
            titulo: "Digitalización Muebles Troncoso",
            descripcion: "Propuesta de arquitectura de software y transformación digital integrando e-commerce, gestión de inventario en tiempo real y automatización logística.",
            linkGithub: "https://github.com/nashoppp/gestion-digital-troncoso.git",
            previewIcon: <ShoppingCartOutlined />
        },
        {
            id: 2,
            titulo: "Landing Page Raíces Spa",
            descripcion: "Prototipo de página web interactiva para centro de estética, construida con React, con diseño responsive y paleta de colores personalizada.",
            linkGithub: "https://github.com/IgnaMunoZo/RaicesSpa.git",
            previewIcon: <FormatPainterOutlined />
        },
        {
            id: 3,
            titulo: "DesireeStore - Sistema de Gestion de Inventario y Ventas",
            descripcion: "Sistema administrativo para la gestion de catalogo, inventario, ventas, abastecimiento, promociones, logistica, fidelizacion, resenas y postventa de una tienda de ropa. ",
            linkGithub: "https://github.com/milloesagustin/pena-munoz-010D.git",
            previewIcon: <RubyOutlined />
        }
    ];

    return (
        <div style={{ marginBottom: '40px' }}>
            <Title level={2} style={{ marginBottom: '24px' }}>
                <TituloSeccion icono={<AppstoreOutlined />} texto="Desarrollos y Proyectos" />
            </Title>
            <Row className="animacion-entrada" gutter={[24, 24]}>
                {proyectos.map((proyecto) => (
                    <Col xs={24} sm={12} md={8} key={proyecto.id}>
                        <TarjetaProyecto
                            titulo={proyecto.titulo}
                            descripcion={proyecto.descripcion}
                            linkGithub={proyecto.linkGithub}
                            previewIcon={proyecto.previewIcon}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};