Create database M_Livros;

Use M_Livros;

Create Table Generos (
IdGenero INT Primary Key Identity
,NomeGenero Varchar(200) unique not null

);

Create Table Autores(
	IdAutor INT Primary Key Identity	
	,NomeAutor Varchar(200) not null
	,EmailAutor Varchar(200) unique 
	,IdStatus INT Foreign Key references Ativo(IdStatus)
	,DataNascimento Date not null
);

Create Table Livros(
	IdLivro INT PRimary key identity
	,TituloLivro Varchar(200) not null
	,IdGenero INT Foreign Key References Generos(IdGenero)
	,IdAutor INT Foreign Key References Autores(IdAutor)
	,Sinopse Varchar(200) not null
	,DataLancamento DATE not null
	,IdVeiculacao INT Foreign Key References Veiculacao(IdVeiculacao)
);

Create Table Ativo(
	IdStatus INT PRimary key identity
	,Descricao Varchar(200) not null
);

Create Table Veiculacao(
	IdVeiculacao INT Primary key identity
	,Descricao Varchar(200) not null
);


Insert Into Ativo(Descricao)
	Values	('Ativo')
			,('Desativo')

Insert Into Veiculacao(Descricao)
	Values	('Ativo')
			,('Desativo')
			
Insert Into Generos(NomeGenero)
	Values	('Investigação')
			,('Auto-Biografia')
			,('Ficção')
			,('Aventura')
			,('Apocalipse')
			,('Infantil')

Insert into Autores(NomeAutor, EmailAutor, IdStatus , DataNascimento)
	Values ('Anne Frank' ,'' , 2 , '12/06/1929')


Insert into Autores(NomeAutor, EmailAutor, IdStatus , DataNascimento)
		Values	('George Orwell' , ' George@Orwell.com', 2 , '25/06/1903')
				,('Agatha Christie' , ' Agatha@Christie.com', 2 , '15/09/1890')
				,('Jack London' , 'Jack@London.com', 2, '22/11/1876')
				,('Larissa Manoela' , 'LarissaManoela@gmail.com' , 1, '28/12/2000')
				,('Charles Lutwidge Dodgson' ,'Charles@Dogson' ,2, '27/01/1832')


Insert Into Livros (TituloLivro, IdGenero,IdAutor,Sinopse,DataLancamento,IdVeiculacao)
	Values	('O Diário de Anne Frank',2 ,1 , 'Na Holanda ocupada pelos nazistas na Segunda Guerra Mundial, o comerciante Kraler abriga duas famílias de judeus em seu sótão. A jovem Anne Frank mantém um diário da vida cotidiana dos Franks e dos Van Daans', '01/01/1947', 1 )
			,('Assassinato no expresso do oriente',)		


Select *
From Livros

Select autores.* , Livros.* , Generos.*
From Livros
Join Autores
On Livros.IdAutor = Autores.IdAutor
Join Generos
On Livros.IdGenero = Generos.IdGenero
	
