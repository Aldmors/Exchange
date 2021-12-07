using System.Collections.Generic;
using System.IO;
using Domain;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        // public DbSet<Ask> Ask { get; set; }
        // public DbSet<AskL3> AskL3 { get; set; }
        public DbSet<Asset> Asset { get; set; }

        // public DbSet<Bid> bid { get; set; }
        // public DbSet<BidL3> bidL3 { get; set; }
        // public DbSet<Exchange> Exchange { get; set; }
        // public DbSet<ExchangeCurrentrate> ExchangeCurrentrate { get; set; }
        // public DbSet<Exchangerate> Exchangerate { get; set; }
        // public DbSet<Icon> Icon { get; set; }
        // public DbSet<OHLCV> OHLCV { get; set; }
        // public DbSet<Orderbook> Orderbook { get; set; }
        // public DbSet<Orderbook3> Orderbook3 { get; set; }
        // public DbSet<Period> Period { get; set; }
        // public DbSet<Quote> Quote { get; set; }
        // public DbSet<Rate> Rate { get; set; }
        // public DbSet<Symbol> Symbol { get; set; }
        // public DbSet<Trade> Trade { get; set; }
        // public DbSet<Users> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Asset>().HasData(SeedTestData());
        }
        public List<Asset> SeedTestData()
        {
            var tests = new List<Asset>();
            using (StreamReader r = new StreamReader(@"C:\Users\kacper\source\repos\Exchange\test.json"))
            {
                string json = r.ReadToEnd();
                tests = JsonConvert.DeserializeObject<List<Asset>>(json);
            }
            return tests;
        }

    }
}