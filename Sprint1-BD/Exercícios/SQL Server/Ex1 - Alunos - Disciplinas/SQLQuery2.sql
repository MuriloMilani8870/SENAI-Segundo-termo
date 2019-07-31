Use M_Psales;

Insert INTO Cursos (Nome)
	VALUES ('técnico em Dev. Sistemas');
		
	Insert INTO Cursos (Nome)
	VALUES ('técnico em Redes');

Insert INTO Cursos (Nome)
	Values	('Curso A')
			,('Curso B')
			,('Curso C');


Select IdCurso , Nome
	FROM Cursos

	Select Nome
		From Cursos

Select *
From Cursos

Select Nome , IdCurso
	FROM Cursos

Select *
From Cursos Where IdCurso > 1

Update Cursos
	Set Nome = 'Técnico em Desenvolvimento de Sistemas'
	Where IdCurso = 1;


Select IdCurso, Nome
	From Cursos
	Where IdCurso = 6;

Delete FROM Cursos
	Where IdCurso = 6;

	Insert INTO Disciplinas (Nome , IdCurso)
	