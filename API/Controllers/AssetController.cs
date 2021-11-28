using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Activities;

namespace API.Controllers
{
    public class AssetController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Asset>>> GetAssets()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Asset>> GetAsset(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsset(Asset asset)
        {
            return Ok(await Mediator.Send(new Create.Command { Asset = asset }));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditAsset(Guid id, Asset asset)
        {
            asset.id = id;
            return Ok(await Mediator.Send(new Edit.Command { Asset = asset }));
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteAsset(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}