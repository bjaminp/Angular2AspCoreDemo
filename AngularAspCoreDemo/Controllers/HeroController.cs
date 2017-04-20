using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularAspCoreDemo.Controllers
{
    public class Hero
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    [Route("api/[controller]")]
    public class HeroController : Controller
    {
        private List<Hero> Heros = new List<Hero>
        {
            new Hero {Id = 11, Name= "Mr. Nice"},
            new Hero {Id = 12, Name = "Narco"},
            new Hero {Id = 13, Name = "Bombasto"},
            new Hero {Id = 14, Name = "Celeritas"},
            new Hero {Id = 15, Name = "Magneta"},
            new Hero {Id = 16, Name = "RubberMan"},
            new Hero {Id = 17, Name = "Dynama"},
            new Hero {Id = 18, Name = "Dr IQ"},
            new Hero {Id = 19, Name = "Magma"},
            new Hero {Id = 20, Name = "Tornado"}
        };
        // GET: api/values
        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            return Heros;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Hero Get(int id)
        {
            return Heros.FirstOrDefault(x => x.Id == id);
        }
    }
}
