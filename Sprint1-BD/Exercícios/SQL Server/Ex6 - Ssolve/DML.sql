USE M_SSolve

Insert into Clientes(Nome, Endereco, CPF, DataNascimento , Email , Telefone)
	Values	('Kevin','Rua Pimpolho sorridente N� 03', '11134331240', '13/07/1999' , 'Kevin@gmail.com' ,99301-9170 )
			,('Stephany','Rua Peixonauta N� 999', '80024359238', '02/09/1993' , 'Linda@gmail.com' ,98186-7652 )




	Insert into Funcionarios(Nome)
		Values ('Roberto'),('Cardoso'),('Alan');



	Insert into Empresas(NomeFantasia,Endereco,CNPJ,Raz�oSocial,Telefone)
		VALUES ('Ponto Digital','Av. Brota N�300000',56331891000113,'Fome.MEC',987654321);


	
	Insert into Servicos(IdCliente, Comodo ,Descricao, Pre�o, IdEmpresa, DataInicio , DataTermino )
		Values (2, 'Sala' ,'A l�mpada foi trocada', 70, 3,	'2019-08-13T13:00:00', '2019-08-13T15:00:00' );



		Insert into FuncionariosServi�os(IdFuncionario,IdServico)
			Values (2,5)
					,(3,7)