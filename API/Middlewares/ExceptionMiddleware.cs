using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace API.Middlewares
{
    public class ExceprionsMiddleware
    {
        private readonly RequestDelegate next;

        public ExceprionsMiddleware(RequestDelegate next)
        {
            this.next = next;
        }
        
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                context.Response.StatusCode = 500;
                await context.Response.WriteAsync(ex.Message);
            }
        }
    }
}