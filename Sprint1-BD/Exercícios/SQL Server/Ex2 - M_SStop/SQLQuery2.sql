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

			insert into EstilosMusicais (Nome)
			Values ('Pagode')
	
Select Nome 
From Artistas

Insert INTO Artistas (Nome)
	Values ('Picasso')

Select *
From Artistas

Select *
From EstilosMusicais
Where IdEstiloMusical = 1;

Select *
From EstilosMusicais
Where Nome = 'Rap';

Select *
From EstilosMusicais
Where Nome LIKE 'Ra%';

Select *
From EstilosMusicais
Where Nome LIKE '%L';

Select *
From EstilosMusicais
Where Nome LIKE '%A%';

Select Artistas.* , EstilosMusicais.*
From Artistas 
Full Join EstilosMusicais
ON Artistas.IdEstiloMusical = EstilosMusicais.IdEstiloMusical;

