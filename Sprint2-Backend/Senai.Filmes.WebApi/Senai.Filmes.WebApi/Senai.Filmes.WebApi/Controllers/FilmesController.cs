using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Filmes.WebApi.Domains;
using Senai.Filmes.WebApi.Repositories;

namespace Senai.Filmes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class FilmesController : ControllerBase
    {
        // instanciar o repositorio
        FilmesRepository FilmesRepository = new FilmesRepository();

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(FilmesRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(FilmeDomain filme)
        {
            try
            {
                FilmesRepository.Cadastrar(filme);
                return Ok();
            }
            catch (Exception ex)
            {
                // não foi realizada com sucesso.
                return BadRequest(new { mensagem = "Ocorreu um erro." + ex.Message });
            }
        }

    }
}