using System;

namespace Domain {
    public class Exchangerate {
        public Guid id { get; set; }
        public DateTime time { get; set; }
        public string asset_id_base { get; set; }
        public string asset_id_quote { get; set; }
        public decimal rate { get; set; }
    }



  

}
