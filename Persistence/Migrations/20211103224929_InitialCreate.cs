using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Asset",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    asset_id = table.Column<string>(type: "TEXT", nullable: true),
                    name = table.Column<string>(type: "TEXT", nullable: true),
                    type_is_crypto = table.Column<bool>(type: "INTEGER", nullable: false),
                    data_quote_start = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_quote_end = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_orderbook_start = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_orderbook_end = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_trade_start = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_trade_end = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_quote_count = table.Column<long>(type: "INTEGER", nullable: true),
                    data_trade_count = table.Column<long>(type: "INTEGER", nullable: true),
                    data_symbols_count = table.Column<long>(type: "INTEGER", nullable: true),
                    volume_1hrs_usd = table.Column<decimal>(type: "TEXT", nullable: true),
                    volume_1day_usd = table.Column<decimal>(type: "TEXT", nullable: true),
                    volume_1mth_usd = table.Column<decimal>(type: "TEXT", nullable: true),
                    price_usd = table.Column<decimal>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Asset", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Exchange",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    exchange_id = table.Column<string>(type: "TEXT", nullable: true),
                    website = table.Column<string>(type: "TEXT", nullable: true),
                    name = table.Column<string>(type: "TEXT", nullable: true),
                    data_start = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_end = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_quote_start = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_quote_end = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_orderbook_start = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_orderbook_end = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_trade_start = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_trade_end = table.Column<DateTime>(type: "TEXT", nullable: true),
                    data_trade_count = table.Column<long>(type: "INTEGER", nullable: true),
                    data_symbols_count = table.Column<long>(type: "INTEGER", nullable: true),
                    volume_1hrs_usd = table.Column<decimal>(type: "TEXT", nullable: true),
                    volume_1day_usd = table.Column<decimal>(type: "TEXT", nullable: true),
                    volume_1mth_usd = table.Column<decimal>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Exchange", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ExchangeCurrentrate",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    asset_id_base = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExchangeCurrentrate", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Exchangerate",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    time = table.Column<DateTime>(type: "TEXT", nullable: false),
                    asset_id_base = table.Column<string>(type: "TEXT", nullable: true),
                    asset_id_quote = table.Column<string>(type: "TEXT", nullable: true),
                    rate = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Exchangerate", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Icon",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    exchange_id = table.Column<string>(type: "TEXT", nullable: true),
                    asset_id = table.Column<string>(type: "TEXT", nullable: true),
                    url = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Icon", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "OHLCV",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    time_period_start = table.Column<DateTime>(type: "TEXT", nullable: false),
                    time_period_end = table.Column<DateTime>(type: "TEXT", nullable: false),
                    time_open = table.Column<DateTime>(type: "TEXT", nullable: false),
                    time_close = table.Column<DateTime>(type: "TEXT", nullable: false),
                    price_open = table.Column<decimal>(type: "TEXT", nullable: false),
                    price_high = table.Column<decimal>(type: "TEXT", nullable: false),
                    price_low = table.Column<decimal>(type: "TEXT", nullable: false),
                    price_close = table.Column<decimal>(type: "TEXT", nullable: false),
                    volume_traded = table.Column<decimal>(type: "TEXT", nullable: false),
                    trades_count = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OHLCV", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Orderbook",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    symbol_id = table.Column<string>(type: "TEXT", nullable: true),
                    time_exchange = table.Column<string>(type: "TEXT", nullable: true),
                    time_coinapi = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orderbook", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "OrderbookL3",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    symbol_id = table.Column<string>(type: "TEXT", nullable: true),
                    time_exchange = table.Column<string>(type: "TEXT", nullable: true),
                    time_coinapi = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderbookL3", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Period",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    period_id = table.Column<string>(type: "TEXT", nullable: true),
                    length_seconds = table.Column<int>(type: "INTEGER", nullable: false),
                    length_months = table.Column<int>(type: "INTEGER", nullable: false),
                    unit_count = table.Column<int>(type: "INTEGER", nullable: false),
                    unit_name = table.Column<string>(type: "TEXT", nullable: true),
                    display_name = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Period", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Symbol",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    symbol_id = table.Column<string>(type: "TEXT", nullable: true),
                    exchange_id = table.Column<string>(type: "TEXT", nullable: true),
                    symbol_type = table.Column<string>(type: "TEXT", nullable: true),
                    option_type_is_call = table.Column<bool>(type: "INTEGER", nullable: false),
                    option_strike_price = table.Column<decimal>(type: "TEXT", nullable: false),
                    option_contract_unit = table.Column<decimal>(type: "TEXT", nullable: false),
                    option_exercise_style = table.Column<string>(type: "TEXT", nullable: true),
                    option_expiration_time = table.Column<DateTime>(type: "TEXT", nullable: false),
                    future_delivery_time = table.Column<DateTime>(type: "TEXT", nullable: false),
                    asset_id_base = table.Column<string>(type: "TEXT", nullable: true),
                    asset_id_quote = table.Column<string>(type: "TEXT", nullable: true),
                    volume_1hrs = table.Column<decimal>(type: "TEXT", nullable: true),
                    volume_1hrs_usd = table.Column<decimal>(type: "TEXT", nullable: true),
                    volume_1day = table.Column<decimal>(type: "TEXT", nullable: true),
                    volume_1day_usd = table.Column<decimal>(type: "TEXT", nullable: true),
                    volume_1mth = table.Column<decimal>(type: "TEXT", nullable: true),
                    volume_1mth_usd = table.Column<decimal>(type: "TEXT", nullable: true),
                    price = table.Column<decimal>(type: "TEXT", nullable: true),
                    symbol_id_exchange = table.Column<string>(type: "TEXT", nullable: true),
                    asset_id_base_exchange = table.Column<string>(type: "TEXT", nullable: true),
                    asset_id_quote_exchange = table.Column<string>(type: "TEXT", nullable: true),
                    price_precision = table.Column<decimal>(type: "TEXT", nullable: true),
                    size_precision = table.Column<decimal>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Symbol", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Trade",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    symbol_id = table.Column<string>(type: "TEXT", nullable: true),
                    time_exchange = table.Column<DateTime>(type: "TEXT", nullable: false),
                    time_coinapi = table.Column<DateTime>(type: "TEXT", nullable: false),
                    uuid = table.Column<string>(type: "TEXT", nullable: true),
                    price = table.Column<decimal>(type: "TEXT", nullable: false),
                    size = table.Column<decimal>(type: "TEXT", nullable: false),
                    taker_side = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trade", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Rate",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    time = table.Column<DateTime>(type: "TEXT", nullable: false),
                    asset_id_quote = table.Column<string>(type: "TEXT", nullable: true),
                    rate = table.Column<decimal>(type: "TEXT", nullable: false),
                    ExchangeCurrentrateid = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rate", x => x.id);
                    table.ForeignKey(
                        name: "FK_Rate_ExchangeCurrentrate_ExchangeCurrentrateid",
                        column: x => x.ExchangeCurrentrateid,
                        principalTable: "ExchangeCurrentrate",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Ask",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    price = table.Column<decimal>(type: "TEXT", nullable: false),
                    size = table.Column<decimal>(type: "TEXT", nullable: false),
                    Orderbookid = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ask", x => x.id);
                    table.ForeignKey(
                        name: "FK_Ask_Orderbook_Orderbookid",
                        column: x => x.Orderbookid,
                        principalTable: "Orderbook",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "bid",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    price = table.Column<decimal>(type: "TEXT", nullable: false),
                    size = table.Column<decimal>(type: "TEXT", nullable: false),
                    Orderbookid = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bid", x => x.id);
                    table.ForeignKey(
                        name: "FK_bid_Orderbook_Orderbookid",
                        column: x => x.Orderbookid,
                        principalTable: "Orderbook",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AskL3",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false),
                    price = table.Column<decimal>(type: "TEXT", nullable: false),
                    size = table.Column<decimal>(type: "TEXT", nullable: false),
                    Orderbook3id = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AskL3", x => x.id);
                    table.ForeignKey(
                        name: "FK_AskL3_OrderbookL3_Orderbook3id",
                        column: x => x.Orderbook3id,
                        principalTable: "OrderbookL3",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "bidL3",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false),
                    price = table.Column<decimal>(type: "TEXT", nullable: false),
                    size = table.Column<decimal>(type: "TEXT", nullable: false),
                    Orderbook3id = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bidL3", x => x.id);
                    table.ForeignKey(
                        name: "FK_bidL3_OrderbookL3_Orderbook3id",
                        column: x => x.Orderbook3id,
                        principalTable: "OrderbookL3",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Quote",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "TEXT", nullable: false),
                    symbol_id = table.Column<string>(type: "TEXT", nullable: true),
                    time_exchange = table.Column<DateTime>(type: "TEXT", nullable: false),
                    time_coinapi = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ask_price = table.Column<decimal>(type: "TEXT", nullable: false),
                    ask_size = table.Column<decimal>(type: "TEXT", nullable: false),
                    bid_price = table.Column<decimal>(type: "TEXT", nullable: false),
                    bid_size = table.Column<decimal>(type: "TEXT", nullable: false),
                    last_tradeid = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quote", x => x.id);
                    table.ForeignKey(
                        name: "FK_Quote_Trade_last_tradeid",
                        column: x => x.last_tradeid,
                        principalTable: "Trade",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ask_Orderbookid",
                table: "Ask",
                column: "Orderbookid");

            migrationBuilder.CreateIndex(
                name: "IX_AskL3_Orderbook3id",
                table: "AskL3",
                column: "Orderbook3id");

            migrationBuilder.CreateIndex(
                name: "IX_bid_Orderbookid",
                table: "bid",
                column: "Orderbookid");

            migrationBuilder.CreateIndex(
                name: "IX_bidL3_Orderbook3id",
                table: "bidL3",
                column: "Orderbook3id");

            migrationBuilder.CreateIndex(
                name: "IX_Quote_last_tradeid",
                table: "Quote",
                column: "last_tradeid");

            migrationBuilder.CreateIndex(
                name: "IX_Rate_ExchangeCurrentrateid",
                table: "Rate",
                column: "ExchangeCurrentrateid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ask");

            migrationBuilder.DropTable(
                name: "AskL3");

            migrationBuilder.DropTable(
                name: "Asset");

            migrationBuilder.DropTable(
                name: "bid");

            migrationBuilder.DropTable(
                name: "bidL3");

            migrationBuilder.DropTable(
                name: "Exchange");

            migrationBuilder.DropTable(
                name: "Exchangerate");

            migrationBuilder.DropTable(
                name: "Icon");

            migrationBuilder.DropTable(
                name: "OHLCV");

            migrationBuilder.DropTable(
                name: "Period");

            migrationBuilder.DropTable(
                name: "Quote");

            migrationBuilder.DropTable(
                name: "Rate");

            migrationBuilder.DropTable(
                name: "Symbol");

            migrationBuilder.DropTable(
                name: "Orderbook");

            migrationBuilder.DropTable(
                name: "OrderbookL3");

            migrationBuilder.DropTable(
                name: "Trade");

            migrationBuilder.DropTable(
                name: "ExchangeCurrentrate");
        }
    }
}
