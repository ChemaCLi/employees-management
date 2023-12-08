import React, { useState } from "react"
import { Modal, Form, Input, message, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

export const EmployeesUtilityModal = ({
  open,
  mode,
  closeModal,
  selectedItem: selectedEmpleado = null,
  createEmpleado,
  refetchEmpleados,
  ...props
}) => {
  const [saving, setSaving] = useState(false)
  const [empleadoForm] = Form.useForm()

  const resetModal = () => {
    empleadoForm.resetFields()
    closeModal && closeModal()
  }

  const handleOnOk = async () => {
    setSaving(true)
    try {
      const values = await empleadoForm.validateFields()
      createEmpleado && await createEmpleado({ ...values })
      resetModal()
    } catch (e) {
      message.error('Ocurrió un error al guardar los datos')
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal
      confirmLoading={saving}
      {...props}
      width={700}
      open={open}
      onOk={handleOnOk}
      onCancel={resetModal}
      cancelText="Cerrar"
      okText="Guardar"
      title="Alta de empleado">
      <Form form={empleadoForm} layout="vertical">
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div>
            <Upload
              maxCount={1}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-circle"
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </div>
        </div>
        <Form.Item
          label="No. de empleado"
          name="noEmpleado"
          rules={[{ required: true, message: 'Por favor ingresa el número de empleado' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: 'Por favor ingresa el nombre del empleado' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellidos"
          name="apellidos"
          rules={[{ required: true, message: 'Por favor ingresa los apellidos del empleado' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Por favor ingresa el email del empleado' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Teléfono"
          name="telefono"
          rules={[{ required: true, message: 'Por favor ingresa el teléfono del empleado' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}
