using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Domain.Models;
using Application.Assets;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class IconController : BaseApiController
    {
        private readonly DataContext _context;
        public IconController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Icon>>> GetIcons()
        {
            return await _context.Icon.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Icon>> GetIcon(Guid id)
        {
            return await _context.Icon.FindAsync(id);
        }

        [HttpPost]
        public async Task<ActionResult<Icon>> PostIcon(Icon icon)
        {
            _context.Icon.Add(icon);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetIcons), new { id = icon.id }, icon);
        }
    }
}