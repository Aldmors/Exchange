using System;

namespace Domain
{
    public class Exchange
    {
        public Guid id { get; set; }
        public string exchange_id { get; set; }
        public string website { get; set; }
        public string name { get; set; }
        public DateTime? data_start { get; set; }
        public DateTime? data_end { get; set; }
        public DateTime? data_quote_start { get; set; }
        public DateTime? data_quote_end { get; set; }
        public DateTime? data_orderbook_start { get; set; }
        public DateTime? data_orderbook_end { get; set; }
        public DateTime? data_trade_start { get; set; }
        public DateTime? data_trade_end { get; set; }
        public long? data_trade_count { get; set; }
        public long? data_symbols_count { get; set; }
        public decimal? volume_1hrs_usd { get; set; }
        public decimal? volume_1day_usd { get; set; }
        public decimal? volume_1mth_usd { get; set; }
    }
}