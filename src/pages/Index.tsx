
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedPost from '../components/FeaturedPost';
import BlogCard from '../components/BlogCard';

const Index = () => {
  // Get the most recent blog post for the featured section
  const featuredPost = blogPosts[0];
  
  // Get the next 3 most recent posts
  const recentPosts = blogPosts.slice(1, 4);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-blog-purple/10 to-blog-pink/10 py-16">
          <div className="blog-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Welcome to BlogVerse
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover insightful articles on web development, design, and technology trends.
                Join our community of passionate creators and learners.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/blog" 
                  className="px-6 py-3 rounded-lg gradient-bg font-medium text-white hover:opacity-90 transition-opacity"
                >
                  Explore Articles
                </Link>
                <Link 
                  to="/add-blog" 
                  className="px-6 py-3 rounded-lg bg-white border border-blog-purple text-blog-purple font-medium hover:bg-blog-purple/5 transition-colors"
                >
                  Write a Blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured post section */}
        <section className="py-16">
          <div className="blog-container">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Featured <span className="gradient-text">Post</span>
              </h2>
              <Link 
                to="/blog" 
                className="text-blog-purple font-medium hover:underline"
              >
                View all posts
              </Link>
            </div>
            
            <FeaturedPost post={featuredPost} />
          </div>
        </section>

        {/* Recent posts section */}
        <section className="py-16 bg-gray-50">
          <div className="blog-container">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Recent <span className="gradient-text">Posts</span>
              </h2>
              <Link 
                to="/blog" 
                className="text-blog-purple font-medium hover:underline"
              >
                View all posts
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter section */}
        <section className="py-16">
          <div className="blog-container">
            <div className="bg-gradient-to-r from-blog-purple to-blog-pink rounded-2xl p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Subscribe to our Newsletter
                </h2>
                <p className="text-white/90 mb-8">
                  Stay updated with the latest articles, news, and exclusive content delivered right to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
                  />
                  <button 
                    type="submit"
                    className="bg-white text-blog-purple px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Categories section */}
        <section className="py-16 bg-gray-50">
          <div className="blog-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Explore <span className="gradient-text">Categories</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {['Technology', 'Design', 'JavaScript', 'TypeScript', 'Accessibility'].map((category) => (
                <Link 
                  key={category} 
                  to="/blog" 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center card-hover"
                >
                  <h3 className="font-semibold text-lg mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm">
                    Explore {category.toLowerCase()} articles
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
