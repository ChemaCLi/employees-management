import React from 'react'
import { Breadcrumb, Button, Col, Input, Row, message } from 'antd'
import { UserLayout } from '../../shared/application/layouts/user-layout'
import { EmployeesTable } from '../components/employees-table'

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
        <Row gutter={[16, 16]}>
          <Col span={20}>
            <Input.Search allowClear placeholder="Buscar por nombre" />
          </Col>
          <Col span={4}>
            <Button style={{ width: '100%' }} type="primary" onClick={() => message.info('Crear empleado')}>
              Crear empleado
            </Button>
          </Col>
        </Row>
      <EmployeesTable />
    </UserLayout>
  )
}
