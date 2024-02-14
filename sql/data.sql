USE ecommerce_db;

INSERT INTO categories VALUES('1','Notebook'),('2','PC de escritorio'),('3','Componentes'),('4','Accesorios'),('5','Periféricos'),('6','Informática'),('7','Tablets'),('8','Smartwatches'),('9','Otro');

INSERT INTO colors VALUES('1','Blanco'),('2','Negro'),('3','Plateado'),('4','Rojo'),('5','Azul'),('6','Verde'),('7','Amarillo'),('8','Dorado'),('9','Naranja'),('10','Gris'),('11','Rosa'),('12','Otro');

INSERT INTO brands VALUES('1','HP'),('2','Dell'),('3','Lenovo'),('4','Bangho'),('5','Asus'),('6','Aorus'),('7','Kingston'),('8','Seagate'),('9','WD'),('10','JBL'),('11','Noblex'),('12','Sony'),('13','Samsung'),('14','Gadnic'),('15','Otra');

INSERT INTO roles VALUES('1', 'Administrador'),('2','Cliente');

INSERT INTO users VALUES('1','John','Doe','john.doe@example.com','securepassword','user1.jpg','2',CURDATE(),CURDATE()),('2','Jane','Smith','jane.smith@example.com','strongpassword','user2.jpg','2',CURDATE(),CURDATE()),('3','David','Miller','david.miller@example.com','davidpassword','user3.jpg','2',CURDATE(),CURDATE()),('4','Alice','Johnson','alice@admin.com','adminadmin','user4.jpg','1',CURDATE(),CURDATE());

INSERT INTO products VALUES('1','Altavoces Bluetooth','Altavoces Bluetooth portátiles con sonido envolvente, batería de larga duración y diseño elegante','80','altavoces.jpg','4','10','10',CURDATE(),CURDATE()),('2','Smartwatch Fitness','Smartwatch con funciones avanzadas de seguimiento de salud, GPS integrado y resistencia al agua','200','smartwatch.jpg','8','5','14',CURDATE(),CURDATE()),('3','Laptop Ultrabook','Potente laptop ultrabook con procesador de última generación, pantalla táctil y diseño delgado','1200','laptop.jpg','1','3','1',CURDATE(),CURDATE());