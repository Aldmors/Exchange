using System.Linq;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using Domain;
using System.Globalization;
using Domain.Models;

// TODO: Finish seed data to Orderbook3 AND Orderbook
namespace Persistence
{
    public class Seed
    {
        public static async Task SeedDataAsync(DataContext context)
        {
            if (context.Asset.Any()) return;
            var assetLight = new List<AssetLight>
            {
                new AssetLight
                { 
                    Asset = "",
                name = "Bitcoin",
                short_name = "BTC",
                },
                new AssetLight
                {
                    Asset = "",
                name = "Etherum",
                short_name = "ETH",
                },
                new AssetLight
                {
                Asset = "",
                name = "Cardano",
                short_name = "ADA",
                },
            };
            if (context.Asset.Any()) return;
            var asset = new List<Asset>
            {
                new Asset
                {
                    asset_id = "BTC",
                    name = "Bitcoin",
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
                },
                new Asset
                {
                    asset_id = "ETH",
                    name = "Etherum",
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
                },
                new Asset
                {
                    asset_id = "ADA",
                    name = "Cardano",
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

            if (context.Exchange.Any()) return;
            var exchange = new List<Exchange>
            {
                new Exchange
                {
                    exchange_id = "OKCOIN_CNY",
                    website = "https://www.okcoin.cn/",
                    name = "OKCoin CNY",
                    data_start = DateTime.Parse("2013-06-12"),
                    data_end = DateTime.Parse("2018-03-09"),
                    data_quote_start = DateTime.Parse("2015-02-15T12:53:50.3430000Z"),
                    data_quote_end = DateTime.Parse("2018-03-09T23:34:52.5800000Z"),
                    data_orderbook_start = DateTime.Parse("2015-02-15T12:53:50.3430000Z"),
                    data_orderbook_end = DateTime.Parse("2018-03-09T23:34:52.5800000Z"),
                    data_trade_start = DateTime.Parse("2013-06-12T14:24:24.0000000Z"),
                    data_trade_end = DateTime.Parse("2017-11-01T16:30:39.7077259Z"),
                    data_symbols_count = 2,
                    volume_1hrs_usd = (decimal?)0.0,
                    volume_1day_usd = (decimal?)0.0,
                    volume_1mth_usd = (decimal?)0.0
                }
            };

            if (context.Icon.Any()) return;
            var icon = new List<Icon>
            {
                new Icon
                {
                    exchange_id = "CHAINCE",
                    url =
                        "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_16/204e55dd8dab4a0d823c21f04be6be4b.png"
                },
                new Icon
                {
                    asset_id = "BTC",
                    url =
                        "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_16/f231d7382689406f9a50dde841418c64.png"
                }
            };
            if (context.Symbol.Any()) return;
            var symbol = new List<Symbol>
            {
                new Symbol
                {
                    symbol_id = "KRAKENFTS_PERP_BTC_USD",
                    exchange_id = "KRAKENFTS",
                    symbol_type = "PERPETUAL",
                    asset_id_base = "BTC",
                    asset_id_quote = "USD",
                    volume_1hrs = (decimal?)22897091.000000000,
                    volume_1hrs_usd = (decimal?)22897091.00,
                    volume_1day = (decimal?)459390289.000000000,
                    volume_1day_usd = (decimal?)459390289.00,
                    volume_1mth = (decimal?)12875674995.000000000,
                    volume_1mth_usd = (decimal?)12875674995.00,
                    price = 51266,
                    symbol_id_exchange = "pi_xbtusd",
                    asset_id_base_exchange = "XBT",
                    asset_id_quote_exchange = "USD",
                    price_precision = (decimal?)0.100000000,
                    size_precision = (decimal?)1.000000000
                }
            };
            if (context.Period.Any()) return;
            var period = new List<Period>
            {
                new Period
                {
                    period_id = "1SEC",
                    length_seconds = 1,
                    length_months = 0,
                    unit_count = 1,
                    unit_name = "second",
                    display_name = "1 Second"
                }
            };
            if (context.OHLCV.Any()) return;
            var ohlc = new List<OHLCV>
            {
                new OHLCV
                {
                    time_period_start = DateTime.Parse("2017-08-09T14:31:00.0000000Z"),
                    time_period_end = DateTime.Parse("2017-08-09T14:32:00.0000000Z"),
                    time_open = DateTime.Parse("2017-08-09T14:31:01.0000000Z"),
                    time_close = DateTime.Parse("2017-08-09T14:31:46.0000000Z"),
                    price_open = (decimal)3255.590000000,
                    price_high = (decimal)3255.590000000,
                    price_low = (decimal)3244.740000000,
                    price_close = (decimal)3244.740000000,
                    volume_traded = (decimal)16.903274550,
                    trades_count = 31
                }
            };
            if (context.Quote.Any()) return;
            // var quote = new List<Quote>
            // {
            //     new Quote
            //     {
            //         symbol_id = "BITSTAMP_SPOT_BTC_USD",
            //         time_exchange = Convert.ToDateTime("2013-09-28T22:40:50.0000000Z"),
            //         time_coinapi = Convert.ToDateTime("2017-03-18T22:42:21.3763342Z"),
            //         ask_price = (decimal)770.000000000,
            //         ask_size = 3252,
            //         bid_price = 760,
            //         bid_size = 124,
            //         last_trade =
            //         {
            //             time_exchange = Convert.ToDateTime("2017-03-18T22:42:21.3763342Z"),
            //             time_coinapi = Convert.ToDateTime("2017-03-18T22:42:21.3763342Z"),
            //             uuid = "1EA8ADC5-6459-47CA-ADBF-0C3F8C729BB2",
            //             price = (decimal)770.000000000,
            //             size = (decimal)0.050000000,
            //             taker_side = "SELL",
            //         },
            //     }
            // };
            // if (context.Orderbook3.Any()) return;
            // var orderbook3 = new List<Orderbook3>
            // {
            //     new Orderbook3
            //     {
            //         symbol_id = "COINBASE_SPOT_BCH_USD",
            //         time_exchange = "2020-08-27T10:28:35.6111130Z",
            //         time_coinapi = "2020-08-27T10:28:35.6766461Z",
            //         asks =
            //         {
            //             id = "3c5e789c-4c84-448a-9c5d-50532ea1ccbb",
            //             price = (decimal)272.89,
            //             size = 1
            //         },

            //         bids =
            //         {
            //             id = "100d5004-f4e0-4e92-a571-392403d5b073",
            //             price = (decimal)272.83,
            //             size = 18
            //         }
            //     }
            // };
            // if (context.Orderbook.Any()) return;
            // var orderbook = new List<Orderbook>
            // {
            //     new Orderbook
            //     {
            //         new Orderbook
            //         {
            //             symbol_id = "COINBASE_SPOT_BCH_USD",
            //             time_exchange = "2020-08-27T10:28:35.6111130Z",
            //             time_coinapi = "2020-08-27T10:28:35.6766461Z",
            //             asks = 
            //             {
            //                 price = (decimal)272.89,
            //                 size = 1
            //             },
            //
            //             bids = {
            //                 price = (decimal)272.83,
            //                 size = 18
            //             }
            //         
            //         }
            //     }
            // };

            await context.Asset.AddRangeAsync(asset);
         //   await context.Exchange.AddRangeAsync(exchange);
         //   await context.OHLCV.AddRangeAsync(ohlc);
            //await context.Orderbook.AddRangeAsync(orderbook);
            // await context.Orderbook3.AddRangeAsync(orderbook3);
            // await context.Quote.AddRangeAsync(quote);
         //   await context.Period.AddRangeAsync(period);
          //  await context.Symbol.AddRangeAsync(symbol);
            await context.Icon.AddRangeAsync(icon);
            await context.SaveChangesAsync();
        }
    }
}