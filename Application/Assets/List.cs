using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using Domain.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Assets
{
    public class List
    {
        public class Query : IRequest<List<Asset>> {}

        public class Handler : IRequestHandler<Query, List<Asset>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<List<Asset>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Asset.ToListAsync();
            }
        }
    }
}