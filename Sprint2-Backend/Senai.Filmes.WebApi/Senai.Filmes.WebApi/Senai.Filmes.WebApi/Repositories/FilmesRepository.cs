using Senai.Filmes.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Filmes.WebApi.Repositories
{
    public class FilmesRepository
    {

        private string StringConexao =
            "Data Source= .\\SqlExpress; Initial catalog=RoteiroFilmes; User Id=sa; Pwd=132;";

        public List<FilmeDomain> Listar()
        {
            List<FilmeDomain> filmes = new List<FilmeDomain>();

            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string Query = "SELECT F.IdFilme, F.Titulo, F.IdGenero, G.Nome AS TituloGenero FROM Filmes F INNER JOIN Generos G ON F.IdGenero = G.IdGenero;";

                // abre a conexao
                con.Open();

                SqlDataReader sdr;

                // declara o comando
                using (SqlCommand cmd = new SqlCommand(Query, con))
                {
                    // executa a query
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        FilmeDomain filme = new FilmeDomain
                        {
                            IdFilme = Convert.ToInt32(sdr["IdFilme"]),
                            Titulo = sdr["Titulo"].ToString(),
                            Genero = new GeneroDomain
                            {
                                IdGenero = Convert.ToInt32(sdr["IdGenero"]),
                                Nome = sdr["TituloGenero"].ToString()
                            }
                        };
                        filmes.Add(filme);
                    }

                }
            }
            return filmes;
        }

        public void Cadastrar(FilmeDomain filme)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string query = "INSERT INTO filmes(Titulo, IdGenero) VALUES (@Titulo , @IdGenero)";

                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@Titulo", filme.Titulo);
                cmd.Parameters.AddWithValue("@IdGenero", filme.GeneroId);

                con.Open();

                cmd.ExecuteNonQuery();
            }
        }

    }
}
