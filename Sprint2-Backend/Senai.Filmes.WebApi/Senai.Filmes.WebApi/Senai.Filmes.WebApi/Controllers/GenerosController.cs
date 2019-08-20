using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Senai.Filmes.WebApi.Domains;
using Senai.Filmes.WebApi.Repositories;

namespace Senai.Filmes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class GenerosController : Controller
    {
        List<GeneroDomain> generos = new List<GeneroDomain>()
            {
             new GeneroDomain { IdGenero = 1, Nome = "Rock" }
             ,new GeneroDomain { IdGenero = 2, Nome = "Pop" }
               ,new GeneroDomain { IdGenero = 3, Nome = "Rap" }
            };


        GeneroRepository generoRepository = new GeneroRepository();

        [HttpGet]
        public IEnumerable<GeneroDomain> Listar()
        {

            // return estilos;
            return generoRepository.Listar();
        }

        [HttpPost]
        public IActionResult Cadastrar(GeneroDomain generoDomain)
        {
            generoRepository.Cadastrar(generoDomain);
            return Ok();
        }

        [HttpPut("{id}")]

        public IActionResult Atualizar(GeneroDomain generoDomain , int id)
        {
            generoDomain.IdGenero = id;
            generoRepository.Alterar(generoDomain);
            return Ok();
        }

        [HttpDelete("{id}")]

        public IActionResult Deletar(int id)
        {
            generoRepository.Deletar(id);
            return Ok();
        }
    }
}