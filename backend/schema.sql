CREATE DATABASE IF NOT EXISTS `task-management`;

USE `task-management`;

CREATE TABLE IF NOT EXISTS `task` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `complete` BOOLEAN DEFAULT FALSE,
);
