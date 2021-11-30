﻿using System;

namespace Domain.Models
{
    public class Symbol
    {
        public Guid id { get; set; }
        public string symbol_id { get; set; }
        public string exchange_id { get; set; }
        public string symbol_type { get; set; }
        public bool option_type_is_call { get; set; }
        public decimal option_strike_price { get; set; }
        public decimal option_contract_unit { get; set; }
        public string option_exercise_style { get; set; }
        public DateTime option_expiration_time { get; set; }
        public DateTime future_delivery_time { get; set; }
        public string asset_id_base { get; set; }
        public string asset_id_quote { get; set; }
        public decimal? volume_1hrs { get; set; }
        public decimal? volume_1hrs_usd { get; set; }
        public decimal? volume_1day { get; set; }
        public decimal? volume_1day_usd { get; set; }
        public decimal? volume_1mth { get; set; }
        public decimal? volume_1mth_usd { get; set; }
        public decimal? price { get; set; }
        public string symbol_id_exchange { get; set; }
        public string asset_id_base_exchange { get; set; }
        public string asset_id_quote_exchange { get; set; }
        public decimal? price_precision { get; set; }
        public decimal? size_precision { get; set; }
    }
}