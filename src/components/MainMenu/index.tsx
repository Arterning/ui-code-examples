import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Outlet,  useNavigate} from 'react-router-dom';
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
  getItem('User', 'user', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'team', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', 'file', <FileOutlined />),
];

const MainMenu = () => {
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
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['/ning']}
          mode="inline" 
          items={items} 
          onClick={menuClick}
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
        />
    )
}

export default MainMenu