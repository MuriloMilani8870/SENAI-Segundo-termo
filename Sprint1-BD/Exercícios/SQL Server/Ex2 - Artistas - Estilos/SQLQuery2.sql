Use M_SStop

Insert INTO EstilosMusicais (Nome)
	VALUES	('Rock''n Roll')
			,('Metal')
			,('MPB')
			,('Rap')
			,('K-pop')
			,('Raggae')
			,('Sertanejo')
			,('Funk');

Insert INTO EstilosMusicais (Nome)
	VALUES ('POP');

Select IdEstiloMusical , Nome
	From EstilosMusicais

Insert INTO Artistas (Nome , IdEstiloMusical)
	Values	('Legião Urbana' , 1)
			,('Metallica' , 2)
			,('Eminem' , 4)
			,('Beyoncé' , 9)
			,('Bob Marley' , 6)
			,('Zezé di Camargo e Luciano' , 7)
			,('Snoop Dogg' , 4)
			,('Imagine Dragons' , 1)
			,('Nirvana' , 1);

	
Select Nome
From Artistas

Select *
From Artistas

Select *
From EstilosMusicais

Delete FROM Artistas

Drop Table Artistas

