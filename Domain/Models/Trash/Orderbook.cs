using System;

namespace Domain.Models
{
    public class Orderbook
    {
        public Guid id { get; set; }
        public string symbol_id { get; set; }
        public string time_exchange { get; set; }
        public string time_coinapi { get; set; }
        public Ask[] asks { get; set; }
        public Bid[] bids { get; set; }
    }
}