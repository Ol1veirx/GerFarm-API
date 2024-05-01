-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('PROPIETARIO', 'FUNCIONARIO');

-- CreateEnum
CREATE TYPE "TypeAgriculturalActivity" AS ENUM ('PLANTIO', 'IRRIGACAO', 'COLHEITA');

-- CreateEnum
CREATE TYPE "TypeInput" AS ENUM ('FERTILIZANTES', 'DEFENSIVOS', 'SEMENTES', 'SUBSTRATOS', 'ADJUVANTES', 'AGUADEIRRIGACAO', 'REGULADORESDECRESCIMENTO', 'CORRETIVODESOLO');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userType" "UserType" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owners" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "totalArea" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "farms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cultivationFields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "plantedCulture" TEXT NOT NULL,
    "harvestDate" TIMESTAMP(3) NOT NULL,
    "plantingDate" TIMESTAMP(3) NOT NULL,
    "farmId" TEXT NOT NULL,

    CONSTRAINT "cultivationFields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agriculturalActivitys" (
    "id" TEXT NOT NULL,
    "typeAgriculturalActivity" "TypeAgriculturalActivity" NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "cultivationFieldId" TEXT NOT NULL,

    CONSTRAINT "agriculturalActivitys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agriculturalInputs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeInput" "TypeInput" NOT NULL,
    "qtdAvailable" TEXT NOT NULL,
    "entryDate" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,

    CONSTRAINT "agriculturalInputs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EmployeeToFarm" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AgriculturalActivityToAgriculturalInput" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employees_userId_key" ON "employees"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "owners_userId_key" ON "owners"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_EmployeeToFarm_AB_unique" ON "_EmployeeToFarm"("A", "B");

-- CreateIndex
CREATE INDEX "_EmployeeToFarm_B_index" ON "_EmployeeToFarm"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AgriculturalActivityToAgriculturalInput_AB_unique" ON "_AgriculturalActivityToAgriculturalInput"("A", "B");

-- CreateIndex
CREATE INDEX "_AgriculturalActivityToAgriculturalInput_B_index" ON "_AgriculturalActivityToAgriculturalInput"("B");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farms" ADD CONSTRAINT "farms_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cultivationFields" ADD CONSTRAINT "cultivationFields_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agriculturalActivitys" ADD CONSTRAINT "agriculturalActivitys_cultivationFieldId_fkey" FOREIGN KEY ("cultivationFieldId") REFERENCES "cultivationFields"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToFarm" ADD CONSTRAINT "_EmployeeToFarm_A_fkey" FOREIGN KEY ("A") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToFarm" ADD CONSTRAINT "_EmployeeToFarm_B_fkey" FOREIGN KEY ("B") REFERENCES "farms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgriculturalActivityToAgriculturalInput" ADD CONSTRAINT "_AgriculturalActivityToAgriculturalInput_A_fkey" FOREIGN KEY ("A") REFERENCES "agriculturalActivitys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgriculturalActivityToAgriculturalInput" ADD CONSTRAINT "_AgriculturalActivityToAgriculturalInput_B_fkey" FOREIGN KEY ("B") REFERENCES "agriculturalInputs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
