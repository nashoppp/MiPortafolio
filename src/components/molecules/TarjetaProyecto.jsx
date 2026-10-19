import React from 'react';
import { Card, Button, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const TarjetaProyecto = ({ titulo, descripcion, linkGithub, previewIcon }) => (
    <Card
        hoverable
        variant="borderless"
        style={{ height: '100%', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}
        styles={{ body: { display: 'flex', flexDirection: 'column', flexGrow: 1 } }}
        cover={
            <div style={{ height: '140px', backgroundColor: '#f0f2f5', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '48px', color: '#1890ff' }}>
                {previewIcon}
            </div>
        }
    >
        <Title level={4}>{titulo}</Title>
        <Paragraph style={{ flexGrow: 1 }}>{descripcion}</Paragraph>
        <Button
            type="primary"
            icon={<GithubOutlined />}
            href={linkGithub}
            target="_blank"
        >
            Ver Repositorio
        </Button>
    </Card>
);