using System;

namespace Domain.Models
{
    public class Ask
    {
        public Guid id { get; set; }
        public decimal price { get; set; }
        public decimal size { get; set; }
    }
}