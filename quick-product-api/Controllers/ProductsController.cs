using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuickProductApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace QuickProductApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private IProductsService _productsService;
        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_productsService.GetAll());
        }
    }
}
