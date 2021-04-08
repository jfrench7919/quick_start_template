using QuickProductApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuickProductApi.Repos;
using Microsoft.Extensions.Configuration;

namespace QuickProductApi.Services
{
    public class ProductsService : IProductsService
    {
        private readonly IConfiguration _configuration;

        public ProductsService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public ICollection<Product> GetAll()
        {
            using (var db = new SampleDataContext(_configuration))
            {
                var t = new ProductRepo(db);
                return t.GetProduts();
            }
        }
    }
}
