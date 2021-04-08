using QuickProductApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickProductApi.Repos
{
    public class ProductRepo
    {
        private SampleDataContext db;

        public ProductRepo(SampleDataContext db)
        {
            this.db = db;
        }

        public List<Product> GetProduts()
        {
            if (db != null)
            {
                List<Product> employees = new List<Product>();

                var result = db.Products.OrderByDescending(x => x.Name).ToList();

                return result;
            }

            return null;
        }
    }
}
