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

            internal static readonly CoinApiRestClient Client =
                new CoinApiRestClient("F839D03C-1AAA-4864-80AC-39C2C5F8F8F2");
        }

        public static void SendToDb(string tableName, IEnumerable data)
        {
            var sql = new StringBuilder();
            sql.AppendLine($"INSERT INTO {tableName}");
            sql.AppendLine("(");
            sql.AppendLine(string.Join(", ", data.GetType().GetProperties().Select(p => p.Name)));
            sql.AppendLine(")");
            sql.AppendLine("VALUES");
            sql.AppendLine("(");
            sql.AppendLine(string.Join(", ", data.GetType().GetProperties().Select(p => "@" + p.Name)));
            sql.AppendLine(")");

            using (var cmd = new SqlCommand(sql.ToString(), Db.Conn))
            {
                foreach (var prop in data.GetType().GetProperties())
                {
                    cmd.Parameters.AddWithValue("@" + prop.Name, prop.GetValue(data));
                }

                Db.Conn.Open();
                cmd.ExecuteNonQuery();
                Db.Conn.Close();
            }
        }

        public static void SaveAssetLight()
        {
            
        }

        public void DowloadAssetData()
        {
            var assets = Db.Client.Metadata_list_assetsAsync();
            SendToDb("Asset", assets.Result.ToArray());
            SaveAssetLight();
        }

        public void DowloadIcon()
        {
            var icons = Db.Client.Metadata_list_assets_iconsAsync(20);
            SendToDb("Icon", icons.Result.ToArray());
        }
    }
}
