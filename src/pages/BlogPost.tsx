
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the current blog post
  const post = blogPosts.find(post => post.id === id);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = post 
    ? blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3) 
    : [];
  
  useEffect(() => {
    // If post doesn't exist, redirect to blog list
    if (!post) {
      navigate('/blog');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  // If post is not found, return null (will redirect via useEffect)
  if (!post) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Back button */}
        <div className="blog-container pt-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-blog-purple transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to articles
          </Link>
        </div>
        
        {/* Header */}
        <header className="blog-container pt-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="px-4 py-1 bg-blog-purple text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">{post.author.name}</span>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Featured image */}
        <div className="w-full h-96 relative mb-12">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <article className="blog-container pb-12">
          <div className="max-w-4xl mx-auto prose lg:prose-xl">
            {/* Convert markdown-like content to HTML - simplified version */}
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold my-6">{paragraph.slice(2)}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold my-5">{paragraph.slice(3)}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold my-4">{paragraph.slice(4)}</h3>;
              }
              
              // Handle code blocks - simplified
              if (paragraph.startsWith('```')) {
                const code = paragraph.split('```')[1];
                return (
                  <pre key={index} className="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                );
              }
              
              // Handle unordered list items - simplified
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').map(item => item.slice(2));
                return (
                  <ul key={index} className="list-disc pl-6 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="my-1">{item}</li>
                    ))}
                  </ul>
                );
              }
              
              // Regular paragraph
              return <p key={index} className="my-4">{paragraph}</p>;
            })}
          </div>
        </article>
        
        {/* Share section */}
        <section className="bg-gray-50 py-12">
          <div className="blog-container">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Share this article</h3>
              <div className="flex justify-center gap-4">
                <button className="bg-[#1DA1F2] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Twitter
                </button>
                <button className="bg-[#4267B2] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Facebook
                </button>
                <button className="bg-[#0e76a8] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related posts section */}
        {relatedPosts.length > 0 && (
          <section className="py-16">
            <div className="blog-container">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Related <span className="gradient-text">Articles</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
