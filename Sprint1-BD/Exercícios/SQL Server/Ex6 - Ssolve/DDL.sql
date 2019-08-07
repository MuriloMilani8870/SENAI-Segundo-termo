CREATE DATABASE M_SSolve

Use M_SSolve

Create Table Clientes(
	IdCliente  INT IDENTITY NOT NULL PRIMARY KEY
	,Nome VARCHAR(255)  NOT NULL
	,Endereco VARCHAR(255) NOT NULL 
	,CPF BIGINT NOT NULL UNIQUE
	,DataNascimento DATE NOT NULL 
	,Email VARCHAR(255) NOT NULL UNIQUE
	,Telefone INT NOT NULL
);

CREATE TABLE Funcionarios(
	IdFuncionario INT PRIMARY KEY IDENTITY NOT NULL
	,Nome VARCHAR (255) NOT NULL 
);

CREATE TABLE Servicos(
	IdServico INT PRIMARY KEY IDENTITY NOT NULL
	,IdCliente INT FOREIGN KEY REFERENCES Clientes(IdCliente) not null
	,Comodo VARCHAR(255) NOT NULL 
	,Descricao TEXT not null
	,Preço INT NOT NULL
	,IdEmpresa INT FOREIGN KEY REFERENCES Empresas(IdEmpresa) not null
	,DataInicio DateTIME not null
	,DataTermino DateTIME not null
);

Create Table Empresas(
	 IdEmpresa  INT IDENTITY NOT NULL PRIMARY KEY
	,NomeFantasia VARCHAR(255)  NOT NULL unique
	,Endereco VARCHAR(255) NOT NULL 
	,CNPJ BIGINT NOT NULL UNIQUE
	,RazãoSocial Varchar(255) NOT NULL  unique
	,Telefone INT NOT NULL
);

Create Table FuncionariosServiços(
	 IdFuncionario INT FOREIGN KEY REFERENCES Funcionarios(IdFuncionario)
	 ,IdServico INT FOREIGN KEY REFERENCES Servicos(IdServico)

);





