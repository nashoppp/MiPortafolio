import React from 'react';
import { Layout, Typography } from 'antd';
import { Footer as MiFooter } from '../organisms/Footer';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export const Principal= ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#001529' }}>
                <Title level={3} style={{ color: 'white', margin: 0 }}>
                    Ignacio Muñoz
                </Title>
            </Header>

            {/* Contenedor */}
            <Content style={{ padding: '0 50px', marginTop: '50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380, borderRadius: '8px' }}>
                    {children}
                </div>
            </Content>

            {/* Pie de página*/}
            <Footer style={{ padding: 0 }}>
                <MiFooter />
            </Footer>
        </Layout>
    );
};