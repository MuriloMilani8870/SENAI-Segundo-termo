﻿using Senai.Gufos.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Gufos.WebApi.Repositories
{
    public class CategoriaRepository
    {
        /// <summary>
        /// Listar todas as categorias
        /// </summary>
        /// <returns>Lista de Categorias</returns>
        public List<Categorias> Listar()
        {
            using (GufosContext ctx = new GufosContext())
            {
                return ctx.Categorias.ToList();
            }
        }

        public void Cadastrar(Categorias categoria) {
            using (GufosContext ctx = new GufosContext())
            {
                ctx.Categorias.Add(categoria);
                ctx.SaveChanges();
            }
        }

        public Categorias BuscarPorId(int id)
        {
            using (GufosContext ctx = new GufosContext())
            {
                return ctx.Categorias.FirstOrDefault(x => x.IdCategoria == id);
            }
        }

        public void Deletar(int id)
        {
            using (GufosContext ctx = new GufosContext())
            {
                //Encontrar quem eu quero deletar
                Categorias CategoriaBuscada = ctx.Categorias.Find(id);

                //Remover o contexto
                ctx.Categorias.Remove(CategoriaBuscada);
                //Efetivar no banco essa mudança
                ctx.SaveChanges();
            }
        }

        public void Atualizar(Categorias categoria)
        {
            using (GufosContext ctx = new GufosContext())
            {
                Categorias CategoriaBuscada = ctx.Categorias.FirstOrDefault(x => x.IdCategoria == categoria.IdCategoria);
                CategoriaBuscada.Nome = categoria.Nome;
                ctx.Categorias.Update(CategoriaBuscada);
                ctx.SaveChanges();
            }
        }
    }
}
