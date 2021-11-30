using System;

namespace Domain.Models
{
    public class Icon
    {
        public Guid id { get; set; }
        public string Id => exchange_id ?? asset_id;
        public string exchange_id { get; set; }
        public string asset_id { get; set; }
        public string url { get; set; }
    }
}