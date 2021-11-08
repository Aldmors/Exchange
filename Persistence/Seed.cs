using System.Linq;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using Domain;
using System.Globalization;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedDataAsync(DataContext context)
        {
            if (context.Asset.Any()) return;
            var asset = new List<Asset>
            {
                new Asset
                {
                    asset_id = "BTC",
                    name = "Bitcoin",
                    type_is_crypto = true,
                    data_quote_start = DateTime.Parse("2014-02-24T17:43:05.0000000Z"),
                    data_quote_end = DateTime.Parse("2019-11-03T17:55:07.6724523Z"),
                    data_orderbook_start = DateTime.Parse("2014-02-24T17:43:05.0000000Z"),
                    data_orderbook_end = DateTime.Parse("2019-11-03T17:55:17.8592413Z"),
                    data_trade_start = DateTime.Parse("2010-07-17T23:09:17.0000000Z"),
                    data_trade_end = DateTime.Parse("2019-11-03T17:55:11.8220000Z"),
                    data_symbols_count = 22711,
                    volume_1hrs_usd = (decimal?)102894431436.49,
                    volume_1day_usd = (decimal?)2086392323256.16,
                    volume_1mth_usd = (decimal?)57929168359984.54,
                    price_usd = (decimal?)9166.207274778093436220194944,
                }
            };
            await context.Asset.AddRangeAsync(asset);
            await context.SaveChangesAsync();
        }
    }
}