using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace AngularAspCoreDemo.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            const string fileName = "/index.html";
            const string contentType = "text/html";
            return File(fileName, contentType);
        }
    }
}
