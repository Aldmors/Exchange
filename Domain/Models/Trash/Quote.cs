using System;

namespace Domain.Models
{
    public class Quote
    {
        public Guid id { get; set; }
        public string symbol_id { get; set; }
        public DateTime time_exchange { get; set; }
        public DateTime time_coinapi { get; set; }
        public decimal ask_price { get; set; }
        public decimal ask_size { get; set; }
        public decimal bid_price { get; set; }
        public decimal bid_size { get; set; }
        public Trade last_trade { get; set; }
    }
}