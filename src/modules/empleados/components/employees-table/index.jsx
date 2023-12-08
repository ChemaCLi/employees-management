import React from "react"
import { Table } from "antd"

export const EmployeesTable = ({ empleados = [], loading = false }) => {
  const columns = [
    {
      title: "No. de empleado",
      dataIndex: "noEmpleado",
      key: "noEmpleado"
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre"
    },
    {
      title: "Apellidos",
      dataIndex: "apellidos",
      key: "apellidos"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Teléfono",
      dataIndex: "telefono",
      key: "telefono"
    }
  ]

  return (
    <Table
      scroll={{ x: true }}
      rowKey={record => record.id}
      dataSource={empleados}
      loading={loading}
      columns={columns}
    />
  )
}
