CREATE DATABASE ecommerce_db;

CREATE TABLE `ecommerce_db`.`colors` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecommerce_db`.`categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecommerce_db`.`brands` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `ecommerce_db`.`roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecommerce_db`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `image` VARCHAR(50) NOT NULL,
  `role_id` INT UNSIGNED NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `ecommerce_db`.`roles` (`id`));
    
CREATE TABLE `ecommerce_db`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(200) NULL,
  `price` DECIMAL(12,2) NULL,
  `image` VARCHAR(100) NULL,
  `category_id` INT UNSIGNED NULL,
  `color_id` INT UNSIGNED NULL,
  `brand_id` INT UNSIGNED NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `ecommerce_db`.`categories` (`id`),
  CONSTRAINT `color_id`
    FOREIGN KEY (`color_id`)
    REFERENCES `ecommerce_db`.`colors` (`id`),
    CONSTRAINT `brand_id`
    FOREIGN KEY (`brand_id`)
    REFERENCES `ecommerce_db`.`brands` (`id`));