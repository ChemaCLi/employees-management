import React, { useMemo } from 'react'
import { Breadcrumb, Button, Col, Input, Row, message } from 'antd'
import { UserLayout } from '../../shared/application/layouts/user-layout'
import { EmployeesTable } from '../components/employees-table'
import { EmployeesUtilityModal } from '../components/employees-utility-modal'
import { AntdModalAdapter } from '../../shared/infrastructure/antd-modal-adapter'
import { useQuery } from "@tanstack/react-query";
import { EmpleadoService } from '../services'
import { useService } from '../../shared/application/hooks/use-service'

export const EmpleadosPage = () => {
  const employeeModalRef = React.useRef(null)

  const empleadosResponse = useService(EmpleadoService.getEmpleados)

  const onCreateEmpleado = async (data) => {
    return EmpleadoService.createEmpleado(data)
  }

  const [search, setSearch] = React.useState('')

  const filteredEmpleados = useMemo(() => {
    return empleadosResponse.data?.filter((empleado) => {
      const fullName = [empleado.nombre, empleado.apellidos].join(' ').toLowerCase()
      return fullName.includes((search || '').toLowerCase())
    })
  }, [empleadosResponse.data, search])


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
          createEmpleado: onCreateEmpleado,
          refetchEmpleados: empleadosResponse.refetch,
        }} />
        <Row gutter={[16, 16]}>
          <Col span={20}>
            <Input.Search allowClear placeholder="Buscar por nombre" onChange={e => setSearch(e.currentTarget.value)} />
          </Col>
          <Col span={4}>
            <Button style={{ width: '100%' }} type="primary" onClick={() => employeeModalRef.current.openModal()}>
              Crear empleado
            </Button>
          </Col>
        </Row>
      <EmployeesTable empleados={filteredEmpleados} loading={empleadosResponse.loading} />
    </UserLayout>
  )
}
