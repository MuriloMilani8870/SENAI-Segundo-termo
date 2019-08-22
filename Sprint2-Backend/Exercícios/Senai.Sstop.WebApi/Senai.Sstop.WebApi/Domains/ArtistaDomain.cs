using Senai.Sstop.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Sstop.WebApi.Controllers
{
    public class ArtistaDomain
    {
        public int IdArtista { get; set; }
        public string Nome { get; set; }
        //
        public int EstiloId { get; set; }
        public EstiloDomain Estilo { get; set; }

    }
}
