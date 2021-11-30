using System;

namespace Domain.Models
{
    public class Rate
    {
        public Guid id { get; set; }
        public DateTime time { get; set; }
        public string asset_id_quote { get; set; }
        public decimal rate { get; set; }
    }
}