CREATE DATABASE M_SStop
USE M_SStop

Create Table EstilosMusicais(
IdEstiloMusical INT Primary Key Identity
,Nome Varchar (200) Unique not null
);

Create table Artistas(
	IdArtista INT Primary Key Identity
	,Nome Varchar(200) NOT NULL
	,IdEstiloMusical INT FOREIGN KEY REFERENCES EstilosMusicais (IdEstiloMusical) 
);