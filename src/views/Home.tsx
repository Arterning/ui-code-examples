import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import {Outlet,  useNavigate} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('about', '/about', <PieChartOutlined />),
  getItem('ning', '/ning', <DesktopOutlined />),
  getItem('User', 'user', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'team', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', 'file', <FileOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const [openKeys, setOpenKeys] = useState(['']);
  

  const menuClick = (e:{key:string}) => {
    
    navigate(e.key)
  }

  const handleOpenChange = (keys:string[]) => {

    //展开和回收菜单的时候执行这里的代码
    //设置只能展开一个菜单
    setOpenKeys([keys[keys.length -1]])
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['/ning']}
          mode="inline" 
          items={items} 
          onClick={menuClick}
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
        />
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