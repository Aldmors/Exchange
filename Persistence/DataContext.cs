using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Ask> Ask { get; set; }
        public DbSet<AskL3> AskL3 { get; set; }
        public DbSet<Asset> Asset { get; set; }
        public DbSet<Bid> bid { get; set; }
        public DbSet<BidL3> bidL3 { get; set; }
        public DbSet<Exchange> Exchange { get; set; }
        public DbSet<ExchangeCurrentrate> ExchangeCurrentrate { get; set; }
        public DbSet<Exchangerate> Exchangerate { get; set; }
        public DbSet<Icon> Icon { get; set; }
        public DbSet<OHLCV> OHLCV { get; set; }
        public DbSet<Orderbook> Orderbook { get; set; }
        public DbSet<Orderbook3> Orderbook3 { get; set; }
        public DbSet<Period> Period { get; set; }
        public DbSet<Quote> Quote { get; set; }
        public DbSet<Rate> Rate { get; set; }
        public DbSet<Symbol> Symbol { get; set; }
        public DbSet<Trade> Trade { get; set; }
    }
}