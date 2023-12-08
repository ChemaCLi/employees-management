import type { APIRoute } from 'astro'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET: APIRoute = async () => {
  const empleados = await prisma.empleado.findMany({
   select: {
    noEmpleado: true,
    nombre: true,
    apellidos: true,
    email: true,
    telefono: true,
    id: true,
   } 
  })

  return new Response(
    JSON.stringify({
      data: empleados,
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()

  const empleado = await prisma.empleado.create({
    data: {
      nombre: body.nombre,
      apellidos: body.apellidos,
      email: body.email,
      telefono: body.telefono,
      noEmpleado: body.noEmpleado,
    },
  })

  return new Response(
    JSON.stringify({
      data: empleado,
    }),
    { status: 201, headers: { 'Content-Type': 'application/json' } }
  )
}
