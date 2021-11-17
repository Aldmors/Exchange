using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class AssetLight
    {
        public Guid id { get; set; }
        public string asset_id { get; set; }
        public string name { get; set; }
        public decimal? price_usd { get; set; }
    }
}