using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class AssetController : BaseApiController
    {

        private readonly DataContext _context;

        public AssetController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Asset>>> GetAssets() {
            return await _context.Asset.ToListAsync();
        }

        //TODO: Implement on working DB

        // [HttpGet("{id}")]
        // public async Task<ActionResult<List<Asset>>> GetAsset(Guid id) {
        //     return await _context.Asset.FindAsync(id);
        // }
        
    }
}