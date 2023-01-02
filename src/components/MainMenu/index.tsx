import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Outlet,  useNavigate, useLocation} from 'react-router-dom';
import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

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
  getItem('Files', '/file', <FileOutlined />),
  getItem('User', 'user', <UserOutlined />, [
    getItem('Tom', '/tom'),
    getItem('Bill', '/bill'),
    getItem('Alex', '/alex'),
  ]),
  getItem('Team', 'team', <TeamOutlined />, [
    getItem('Team 1', '/team1'), 
    getItem('Team 2', '/team2')
  ]),
];

const MainMenu = () => {
const navigate = useNavigate();
const currentRoute = useLocation();


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
        <Menu 
          theme="dark" 
          defaultSelectedKeys={[currentRoute.pathname]}
          mode="inline" 
          items={items} 
          onClick={menuClick}
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
        />
    )
}

export default MainMenu