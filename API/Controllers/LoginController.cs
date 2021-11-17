using System;
using System.Linq;
using System.Web.Http;
using Domain;
using Domain.VM;
using Persistence;

// TODO: Register in swagger
namespace API.Controllers
{
    [RoutePrefix("api/employee")]
    public class LoginController : ApiController
    {
        private readonly DataContext _context;

        public LoginController(DataContext context)
        {
            _context = context;
        }

        [Route("Login")]
        [HttpPost]
        public IHttpActionResult userLogin(Login login)
        {
            var log = _context.Users.Where(x => x.Email.Equals(login.Email) && x.Password.Equals(login.Password))
                .FirstOrDefault();

            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
            else

                return Ok(new
                    { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
        }

        [Route("Register")]
        [HttpPost]
        public object Register(Users Reg)
        {
            Users EL = new Users();
            
                EL.Name = Reg.Name;
                EL.Email = Reg.Email;
                EL.Password = Reg.Password;
                _context.Users.Add(EL);
                try{
                    _context.SaveChanges();
                    return Ok(new { status = 200, isSuccess = true, message = "User Register successfully", UserDetails = EL });
                }
                catch(Exception ex)
                {
                    return Ok(new { status = 401, isSuccess = false, message = "User Register failed", UserDetails = EL });
                }
    }
    }
}