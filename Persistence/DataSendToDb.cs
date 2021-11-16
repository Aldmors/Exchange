using System;
using System.Collections;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Domain;
using Microsoft.Data.Sqlite;
using CoinAPI.REST.V1;
using System.Linq;
using System.Text;

namespace Persistence
{
    public class DataSendToDb
    {
        private static IConfiguration _config;

        protected DataSendToDb(IConfiguration config)
        {
            _config = config;
        }

        protected static class Db
        {
            internal static readonly SqlConnection
                Conn = new SqlConnection(_config.GetConnectionString("DefaultConnection"));

            internal static readonly CoinApiRestClient Client = new CoinApiRestClient("F839D03C-1AAA-4864-80AC-39C2C5F8F8F2");
        }

        public static void SaveExchangerateSpecific(string assetIdBase, DateTime time, string assetIdQuote)
        {
            var exchange = Db.Client.Exchange_rates_get_specific_rateAsync(assetIdBase, assetIdQuote, time)
                .GetAwaiter().GetResult();

            var times = exchange.time;
            var assetIdQuotes = exchange.asset_id_quote;
            var rates = exchange.rate;

            string query =
                $"INSERT INTO Exchangerate VALUES (null, @time, @assetIdBase, @assetIdQuotes,@rates)";
            SqlCommand command = new SqlCommand(query, Db.Conn);
            command.Parameters.Add("@time", SqlDbType.DateTime).Value = times;
            command.Parameters.Add("@assetIdBase", SqlDbType.Text).Value = assetIdBase;
            command.Parameters.Add("@assetIdQuotes", SqlDbType.Text).Value = assetIdQuotes;
            command.Parameters.Add("@rates", SqlDbType.Float).Value = rates;
            Db.Conn.Open();
        }

        public static void SaveExchangerateAll(string assetIdBase)
        {
            var exchange = Db.Client.Exchange_rates_get_all_current_ratesAsync(assetIdBase).GetAwaiter().GetResult();

            foreach (var items in exchange.rates)
            {
                var times = items.time;
                var assetIdQuotes = items.asset_id_quote;
                var rates = items.rate;
                string query =
                    $"INSERT INTO Exchangerate VALUES (null, @times, @assetIdBase, @assetIdQuotes, @rates)";
                SqlCommand command = new SqlCommand(query, Db.Conn);
                command.Parameters.Add("@times", SqlDbType.DateTime).Value = times;
                command.Parameters.Add("@assetIdBase", SqlDbType.Text).Value = assetIdBase;
                command.Parameters.Add("@assetIdQuotes", SqlDbType.Text).Value = assetIdQuotes;
                command.Parameters.Add("@rates", SqlDbType.Float).Value = rates;
                
                Db.Conn.Open();
            }
        }

        ~DataSendToDb()
        {
            Db.Conn.Close();
        }
    }
}