import { config } from "../../shared/application/constants/config";

export const createEmpleado = async (empleado) => {
  const response = await fetch(`${config.PUBLIC_ENDPOINTS_BASE_URL}/api/empleados`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(empleado)
  });
  const data = await response.json();
  return data?.data || [];
}
