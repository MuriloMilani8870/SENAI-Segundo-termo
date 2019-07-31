CREATE DATABASE M_PSales;
USE M_PSales

Create table Cursos (
IdCurso INT Primary Key Identity
,Nome Varchar(200) unique not null

);

CREATE TABLE Disciplinas(
	IdDisciplinas INT Primary key Identity
	,Nome Varchar(200) NOT NULL
	,IdCurso INT FOREIGN KEY REFERENCES Cursos (IdCurso)
);

CREATE TABLE Alunos(
	IdAluno INT Primary Key iDENTITY
	,Nome VARCHAR(230) NOT NULL
);

CREATE TABLE CursosAlunos(

	IdCurso INT FOREIGN KEY REFERENCES Cursos (IdCurso)
	,IdAluno INT FOREIGN KEY REFERENCES Alunos (IdAluno)
);