using QuickProductApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickProductApi.Services
{
    public interface IProductsService
    {
        public ICollection<Product> GetAll();
    }
}
