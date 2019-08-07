Use M_SSolve

Select * from Funcionarios

Select * from Clientes

Select * from Servicos

Select * from FuncionariosServiços

Select * From Empresas

Select * from Funcionarios order by IdFuncionario asc;

Select * from Clientes order by IdCliente desc;

Select * from Servicos order by Preço asc;

Select * from Clientes order by nome asc;

Select S.*, E.*
from Servicos S
join Empresas E
on S.IdEmpresa = E.IdEmpresa


select  FS.* , F.Nome , S.* , C.* , E.*
from  Servicos S
join FuncionariosServiços FS
on FS.IdServico = S.IdServico
join Clientes C
on S.IdCliente = C.IdCliente
join Funcionarios F
on F.IdFuncionario = FS.IdFuncionario
join Empresas E
on E.IdEmpresa = S.IdEmpresa