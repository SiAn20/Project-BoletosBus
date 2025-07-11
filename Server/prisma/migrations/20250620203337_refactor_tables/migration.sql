/*
  Warnings:

  - The primary key for the `Asiento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id_bus` to the `PasajeroSecundario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PasajeroSecundario" DROP CONSTRAINT "PasajeroSecundario_id_asiento_fkey";

-- AlterTable
ALTER TABLE "Asiento" DROP CONSTRAINT "Asiento_pkey",
ALTER COLUMN "id_asiento" DROP DEFAULT,
ADD CONSTRAINT "Asiento_pkey" PRIMARY KEY ("id_bus", "id_asiento");
DROP SEQUENCE "Asiento_id_asiento_seq";

-- AlterTable
ALTER TABLE "PasajeroSecundario" ADD COLUMN     "id_bus" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PasajeroSecundario" ADD CONSTRAINT "PasajeroSecundario_id_bus_id_asiento_fkey" FOREIGN KEY ("id_bus", "id_asiento") REFERENCES "Asiento"("id_bus", "id_asiento") ON DELETE RESTRICT ON UPDATE CASCADE;
