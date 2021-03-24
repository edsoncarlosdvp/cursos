create database eni_cel default character set utf8mb4 default collate utf8mb4_general_ci;
use eni_cel;

CREATE TABLE recursos(
	id int auto_increment,
    bateria varchar(30),
    sensores varchar (150) not null,
    tv boolean,
    radio boolean,    
    primary key (id)
);

insert into dados values (default, 'João', 'M', 'joao@gmail.com');
insert into dados values (default, 'Cecília', 'F', 'cecilia@gmail.com');
insert into dados values (default, 'Jorge', 'M', 'jorge@globo.com');
insert into dados values (default, 'Lilian', 'F', 'lilian@ymail.com');
insert into dados values (default, 'Ana', 'F', 'ana@globo.com');
insert into dados values (default, 'Carla', 'F', 'carla@gterati.com.br');

select * from dados;

/* FUNÇÕES */
select now() as data_hora, 'edson' as estudante;

/* ALIAS DE COLUNAS */
select nome as cliente, sexo, email from dados;