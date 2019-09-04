CREATE DATABASE M_AutoPecas

USE M_AutoPecas

CREATE TABLE Usuarios
(
	UsuarioId		INT PRIMARY KEY IDENTITY,
	Email			VARCHAR(255) NOT NULL UNIQUE,
	Senha			VARCHAR(255) NOT NULL
);

CREATE TABLE Fornecedores 
(
	FornecedorId	INT PRIMARY KEY IDENTITY,
	CNPJ			CHAR(14)		NOT NULL UNIQUE,
	RazaoSocial	VARCHAR(255)	NOT NULL UNIQUE,
	NomeFantasia	VARCHAR(255)	NOT NULL,
	Endereco		VARCHAR(255)	NOT NULL,
	UsuarioId		INT FOREIGN KEY REFERENCES Usuarios(UsuarioId) NOT NULL UNIQUE
);

CREATE TABLE Pecas (
	PecaId			INT PRIMARY KEY IDENTITY,
	Codigo		VARCHAR(255) NOT NULL UNIQUE,
	Descricao		TEXT NOT NULL,
	Peso			FLOAT(2) NOT NULL,
	PrecoCusto	FLOAT(2) NOT NULL,
	PrecoVenda	FLOAT(2) NOT NULL,
	FornecedorId	INT FOREIGN KEY REFERENCES Fornecedores(FornecedorId) NOT NULL
);

SELECT * FROM Usuarios;
INSERT INTO Usuarios (Email, Senha) VALUES ('Rojão@email.com', '123456'), ('Gabru@email.com', '123456');

INSERT INTO Fornecedores (CNPJ, RazaoSocial, NomeFantasia, Endereco, UsuarioId) VALUES ('84348455000192', 'Fornecedor De Ice', 'Fornecedor De Ice', 'Rua Narciso , Osasco', 1)
																					  ,('89100059000165', 'Fornecedora Gabru ', 'GabruWitch', 'Rua De Rivoli', 2);

INSERT INTO Pecas (Codigo, Descricao, Peso, PrecoCusto, PrecoVenda, FornecedorId) 
	VALUES	('Codigo1', 'Desert Eagle', 3, 700, 1200, 1)
			,('Codigo2', 'Ak47 Fuzil de assalto', 20, 2700, 3000, 1)
			,('Codigo3', 'Smirnoff Ice', 1, 2, 4, 1)
			,('Codigo4', 'Pack de fotos', 1, 1, 300, 2);


SELECT * FROM Usuarios;


SELECT * FROM Fornecedores;


SELECT * FROM Pecas;



