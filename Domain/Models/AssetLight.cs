using System;

namespace Domain.Models
{
    public class AssetLight
    {
        public Guid id { get; set; }
        public virtual Asset Asset { get; set; }
        public string name { get; set; }
        public string short_name { get; set; }
    }
}