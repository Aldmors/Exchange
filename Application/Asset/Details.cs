using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using Domain.Models;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Asset> {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Asset>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Asset> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Asset.FindAsync(request.Id);
            }
        }
    }
}