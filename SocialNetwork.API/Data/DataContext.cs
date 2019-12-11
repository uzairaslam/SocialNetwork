using Microsoft.EntityFrameworkCore;
using SocialNetwork.API.Models;

namespace SocialNetwork.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Value> Values { get; set; }
    }
}