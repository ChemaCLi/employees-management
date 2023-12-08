import React, { useState } from 'react'
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined'
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'
import FileTextOutlined from '@ant-design/icons/FileTextOutlined'
import LogoutOutlined from '@ant-design/icons/LogoutOutlined'

import { Layout, Menu, Button, theme, Space, Dropdown } from 'antd'
import { AntDesignConfigProvider } from '../../infrastructure/ant-design-config-provider'
const { Header, Sider, Content } = Layout

export const UserLayout = ({
  breadcrumbs,
  children: content,
  defaultSelectedKeys = []
}) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <AntDesignConfigProvider>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            style={{
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={defaultSelectedKeys}
              items={[
                {
                  key: 'estimations',
                  icon: <FileTextOutlined />,
                  label: <a href="./empleados">Empleados</a>
                }
              ]}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingRight: '16px' }}>
                <Space>
                  <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64
                    }}
                  />
                  {breadcrumbs}
                </Space>
                <Space>
                  <Dropdown.Button
                      icon={<UserOutlined />}
                      placement="bottom"
                      menu={{
                        onClick: (e) => {
                          if (e.key === 'logout') { removeSession() }
                        },
                        items: [
                          {
                            label: 'Cerrar sesión',
                            key: 'logout',
                            icon: <LogoutOutlined />
                          }
                        ]
                      }}>
                      Alma Narvaez
                    </Dropdown.Button>
                </Space>
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer
              }}
            >
              {content}
            </Content>
          </Layout>
        </Layout>
    </AntDesignConfigProvider>
  )
}
