using System;

namespace Domain
{
    public class Asset
    {
        public Guid id { get; set; }
        public string asset_id { get; set; }
        public string name { get; set; }
        public bool type_is_crypto { get; set; }
        public DateTime? data_quote_start { get; set; }
        public DateTime? data_quote_end { get; set; }
        public DateTime? data_orderbook_start { get; set; }
        public DateTime? data_orderbook_end { get; set; }
        public DateTime? data_trade_start { get; set; }
        public DateTime? data_trade_end { get; set; }
        public long? data_quote_count { get; set; }
        public long? data_trade_count { get; set; }
        public long? data_symbols_count { get; set; }
        public decimal? volume_1hrs_usd { get; set; }
        public decimal? volume_1day_usd { get; set; }
        public decimal? volume_1mth_usd { get; set; }
        public decimal? price_usd { get; set; }
    }
}