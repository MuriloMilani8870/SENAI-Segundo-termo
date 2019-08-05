Create Database M_Moda

Use M_Moda

Create Table Tamanhos(
IdTamanho INT Primary Key Identity
,Tamanho Varchar (200) Unique not null
);

Create Table Marcas(
IdMarca INT Primary Key Identity
,Marca Varchar (200) Unique not null
);

Create Table Cores(
IdCor INT Primary Key Identity
,Cor Varchar (200) Unique not null
);


Create Table Camisas(
IdCamisa INT Primary Key Identity
,IdMarca INT FOREIGN KEY REFERENCES Marcas (IdMarca)
);

Create Table CamisaCorTamanho(
	IdCamisa INT Foreign key REFERENCES Camisas(IdCamisa)
	,IdCor int foreign key references Cores(IdCor)
	,IdTamanho int foreign key references Tamanhos(IdTamanho)
);

Insert INTO Tamanhos (Tamanho)
	Values	('PP')
			,('P')
			,('M')
			,('G')
			,('GG')

Insert into Cores (Cor)
	Values	('Branca')
			,('Verde')
			,('Azul')
			,('Amarela')
			,('Preta')
			,('Vermelha')
			,('Cinza')

Insert into Marcas (Marca)
	Values	('Lacoste')
			,('Nike')
			,('Adidas')
			,('Okley')
			,('Kelvin Klein')
			,('SESI')

Insert into Camisas (IdMarca)
	Values	(1)
			,(4)
			,(5)
			,(2)
			,(3)


Insert Into CamisaCorTamanho (IdCamisa, IdCor , IdTamanho)
	Values	(1,1,1)
			,(2,2, 4)
			,(3,3, 5)
			,(4,4, 3)
			,(5,5, 2)

Delete  FROM Camisas
		Where IdCamisa = 6

	Select * 
	FRom CamisaCorTamanho

	Select * 
	FRom Camisas

	Select * 
	FRom Tamanhos

	Select * 
	FRom Cores

	Select CamisaCorTamanho.* , Camisas.IdMarca
	From CamisaCorTamanho
	Join Camisas
	ON CamisaCorTamanho.IdCamisa = Camisas.IdCamisa 

	Create table Lavagem(
	 IdLavagem INT Primary Key Identity
	 ,Lavagem Varchar (200) Unique not null
	);

	Alter Table Camisas
		Add Lavagem int foreign key references Lavagem(IdLavagem);

		update Camisas
		Set Lavagem = 1
		Where IdCamisa = 1



			
