create database herois
default character set utf8
default collate utf8_general_ci;
use herois;
drop database  herois;
create table heroi(
id int not null auto_increment,
nome varchar (30) not null,
nascimento date,
cidade varchar(30) default 'Belo Horizonte',
sexo enum ('M','F'),
peso decimal(5,2),
altura decimal (3,2),
poder char (30),
primary key (id)
)default  charset = utf8;