using System;

namespace Domain
{
    public class ExchangeCurrentrate
    {
        public Guid id { get; set; }
        public string asset_id_base { get; set; }
        public Rate[] rates { get; set; }
    }
}