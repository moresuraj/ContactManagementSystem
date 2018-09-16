using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContactInformation.Controllers
{
    public class ManageContactController : Controller
    {
        // GET: ManageContactInfo  
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddContact()
        {
            return PartialView("_AddContact");
        }

        public ActionResult ShowContacts()
        {
            return PartialView("_ShowAllContact");
        }

        public ActionResult EditContact()
        {
            return PartialView("_EditContact");
        }

        public ActionResult DeleteContact()
        {
            return PartialView("_DeleteContact");
        }
    }
}