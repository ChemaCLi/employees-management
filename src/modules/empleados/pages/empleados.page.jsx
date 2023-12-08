import React from 'react'
import { Breadcrumb, Button, Col, Input, Row, message } from 'antd'
import { UserLayout } from '../../shared/application/layouts/user-layout'
import { EmployeesTable } from '../components/employees-table'
import { EmployeesUtilityModal } from '../components/employees-utility-modal'
import { AntdModalAdapter } from '../../shared/infrastructure/antd-modal-adapter'

export const EmpleadosPage = () => {
  const employeeModalRef = React.useRef(null)

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
      <AntdModalAdapter
        ref={employeeModalRef}
        modal={EmployeesUtilityModal}
        modalProps={{
        }} />
        <Row gutter={[16, 16]}>
          <Col span={20}>
            <Input.Search allowClear placeholder="Buscar por nombre" />
          </Col>
          <Col span={4}>
            <Button style={{ width: '100%' }} type="primary" onClick={() => employeeModalRef.current.openModal()}>
              Crear empleado
            </Button>
          </Col>
        </Row>
      <EmployeesTable />
    </UserLayout>
  )
}
