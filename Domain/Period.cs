using System;

namespace Domain
{
    public class Period
    {
        public Guid id { get; set; }
        public string period_id { get; set; }
        public int length_seconds { get; set; }
        public int length_months { get; set; }
        public int unit_count { get; set; }
        public string unit_name { get; set; }
        public string display_name { get; set; }
    }
}