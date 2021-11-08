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
        public DataSendToDb(IConfiguration config)
        {
            _config = config;
        }
        

    public class db
    {
        public static SqliteConnection Conn = new SqliteConnection(_config.GetConnectionString("DefaultConnection"));
        public static CoinApiRestClient Client = new CoinApiRestClient("F839D03C-1AAA-4864-80AC-39C2C5F8F8F2");
    }


    public static void SaveExchangerateSpecific(string asset_id_base, DateTime time, string asset_id_quote)
    {
        var exchange = db.Client.Exchange_rates_get_specific_rateAsync(asset_id_base, asset_id_quote, time).GetAwaiter().GetResult();
       
            var times = exchange.time;
            var asset_id_quotes = exchange.asset_id_quote;
            var rates = exchange.rate;
            
            string query = $"INSERT INTO Exchangerate VALUES (null, {times}, {asset_id_base}, {asset_id_quotes},{rates})";
            SqliteCommand command = new SqliteCommand(query, db.Conn);
            db.Conn.Open();
    }
    
    public static void SaveExchangerateAll(string asset_id_base)
    { 
        var exchange = db.Client.Exchange_rates_get_all_current_ratesAsync(asset_id_base).GetAwaiter().GetResult();

        foreach (var items in exchange.rates)
        {
            var times = items.time;
            var asset_id_quotes = items.asset_id_quote;
            var rates = items.rate;
            string query = $"INSERT INTO Exchangerate VALUES (null, {times}, {asset_id_base}, {asset_id_quotes},{rates})";
            SqliteCommand command = new SqliteCommand(query, db.Conn);
            db.Conn.Open();
        }

        
    }

    ~DataSendToDb()
    {
        
        db.Conn.Close();
    }
    }
    
}