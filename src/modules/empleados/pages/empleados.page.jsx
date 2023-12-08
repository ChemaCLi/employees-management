import React from 'react'
import { Breadcrumb, message } from 'antd'
import { UserLayout } from '../../shared/application/layouts/user-layout'

export const EmpleadosPage = () => {
  return (
    <UserLayout
      defaultSelectedKeys={['empleados']}
      breadcrumbs={
        <Breadcrumb
        items={[{
          title: 'Empleados',
          link: '/empleados'
        }]} />
      }>
      <div>empleados</div>
    </UserLayout>
  )
}
