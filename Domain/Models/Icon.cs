using System;

namespace Domain.Models
{
    public class Icon
    {
        public Guid id { get; set; }
        public string exchange_id { get; set; }
        public string asset_id { get; set; }
        public string url { get; set; }
    }
}