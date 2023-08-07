using Microsoft.AspNetCore.Mvc;

public class Main : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}