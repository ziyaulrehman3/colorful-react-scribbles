
import { useState } from 'react';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter posts by category if a category is selected
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header section */}
        <section className="bg-gradient-to-r from-blog-purple/10 to-blog-pink/10 py-16">
          <div className="blog-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Blog Articles
              </h1>
              <p className="text-lg text-gray-700">
                Explore our collection of articles on web development, design, and technology trends.
              </p>
            </div>
          </div>
        </section>
        
        {/* Categories filter */}
        <section className="py-8 border-b">
          <div className="blog-container">
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null 
                    ? 'bg-blog-purple text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button 
                  key={category} 
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category 
                      ? 'bg-blog-purple text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog posts grid */}
        <section className="py-12">
          <div className="blog-container">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">No posts found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogList;
