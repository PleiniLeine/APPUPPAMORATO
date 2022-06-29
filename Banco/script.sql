-- Criar banco animais
CREATE DATABASE animais;

-- Criar Tabela informacooes
CREATE TABLE informacoes(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(20),
tipo VARCHAR(20),
raca VARCHAR(200),
sexo VARCHAR(10),
idade VARCHAR(50),
tamanho VARCHAR(20),
peso VARCHAR(20),
castrado VARCHAR(5),
foto VARCHAR(300)
)ENGINE=INNODB;


-- Criar tabela adotantes
CREATE TABLE adotantes (
id_adotante int NOT NULL auto_increment,
nome_adotante VARCHAR(50),
endereco_adotante VARCHAR(100),
telefone_adotante VARCHAR(15),
nome_animal VARCHAR(10),
PRIMARY KEY (id_adotante)
) DEFAULT CHARSET = utf8;