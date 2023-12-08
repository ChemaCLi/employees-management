import { config } from '../../shared/application/constants/config';

export const getEmpleados = async () => {
  const response = await fetch(`${config.PUBLIC_ENDPOINTS_BASE_URL}/api/empleados`);
  const data = await response.json();
  return data?.data || [];
}
