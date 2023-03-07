/*
  Warnings:

  - You are about to drop the column `continuous_day` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `exp` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `gem` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `is_admin` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `is_enabled` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `is_vip` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `source_url` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the `Chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Island` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MemberIsland` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestSet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Chapter` DROP FOREIGN KEY `Chapter_island_id_fkey`;

-- DropForeignKey
ALTER TABLE `Lesson` DROP FOREIGN KEY `Lesson_chapter_id_fkey`;

-- DropForeignKey
ALTER TABLE `MemberIsland` DROP FOREIGN KEY `MemberIsland_island_id_fkey`;

-- DropForeignKey
ALTER TABLE `MemberIsland` DROP FOREIGN KEY `MemberIsland_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `Option` DROP FOREIGN KEY `Option_quiz_id_fkey`;

-- DropForeignKey
ALTER TABLE `Quiz` DROP FOREIGN KEY `Quiz_lesson_id_fkey`;

-- DropForeignKey
ALTER TABLE `TestSet` DROP FOREIGN KEY `TestSet_quiz_id_fkey`;

-- AlterTable
ALTER TABLE `Member` DROP COLUMN `continuous_day`,
    DROP COLUMN `exp`,
    DROP COLUMN `gem`,
    DROP COLUMN `is_admin`,
    DROP COLUMN `is_enabled`,
    DROP COLUMN `is_vip`,
    DROP COLUMN `nickname`,
    DROP COLUMN `source_url`;

-- DropTable
DROP TABLE `Chapter`;

-- DropTable
DROP TABLE `Island`;

-- DropTable
DROP TABLE `Lesson`;

-- DropTable
DROP TABLE `MemberIsland`;

-- DropTable
DROP TABLE `Option`;

-- DropTable
DROP TABLE `Quiz`;

-- DropTable
DROP TABLE `TestSet`;
