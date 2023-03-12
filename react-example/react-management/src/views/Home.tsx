import React, { useState } from 'react';
import { Breadcrumb, Layout } from 'antd';
import MainMenu from '@/components/MainMenu'

import {Outlet} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;



const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <MainMenu/>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: '16px' }}>
        <Breadcrumb style={{ margin: '16px 0' , lineHeight: '64px'}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px 16px' }} className="site-layout-background">
          <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center' , padding: 0, lineHeight: '48px'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;