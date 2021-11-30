using System;

namespace Domain.Models
{
    public class AssetLight
    {
        public Guid id { get; set; }
        public string asset_id { get; set; }
        public string name { get; set; }
        public decimal? price_usd { get; set; }
    }
}