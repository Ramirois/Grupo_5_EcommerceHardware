USE ecommerce_db;

INSERT INTO categories VALUES('1', 'Notebook'),('2','PC de escritorio'),('3','Componentes'),('4','Accesorios'),('5','Otro');

INSERT INTO colors VALUES('1', 'Blanco'),('2','Negro'),('3','Plateado'),('4','Rojo'),('5','Azul'),('6','Verde'),('7','Amarillo'),('8','Otro');

INSERT INTO roles VALUES('1', 'Administrador'),('2','Cliente');

INSERT INTO users VALUES('1','John','Doe','john.doe@example.com','securepassword','user1.jpg','2',CURDATE(),CURDATE()),('2','Jane','Smith','jane.smith@example.com','strongpassword','user2.jpg','2',CURDATE(),CURDATE()),('3','David','Miller','david.miller@example.com','davidpassword','user3.jpg','2',CURDATE(),CURDATE()),('4','Alice','Johnson','alice@admin.com','adminadmin','user4.jpg','1',CURDATE(),CURDATE());

INSERT INTO products VALUES('1','Altavoces Bluetooth','Altavoces Bluetooth portátiles con sonido envolvente, batería de larga duración y diseño elegante','80','altavoces.jpg','4','8',CURDATE(),CURDATE()),('2','Smartwatch Fitness','Smartwatch con funciones avanzadas de seguimiento de salud, GPS integrado y resistencia al agua','200','smartwatch.jpg','4','5',CURDATE(),CURDATE()),('3','Laptop Ultrabook','Potente laptop ultrabook con procesador de última generación, pantalla táctil y diseño delgado','1200','laptop.jpg','1','3',CURDATE(),CURDATE());