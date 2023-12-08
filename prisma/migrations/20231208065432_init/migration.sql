-- CreateTable
CREATE TABLE "Empleado" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "nombre" TEXT,
    "apellidos" TEXT,
    "telefono" TEXT,
    "noEmpleado" TEXT,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id")
);
