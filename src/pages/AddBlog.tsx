
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from 'sonner';

const AddBlog = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    summary: '',
    content: '',
    coverImage: ''
  });

  const categories = ['Technology', 'Design', 'JavaScript', 'TypeScript', 'Accessibility', 'Other'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Blog post submitted:', formData);
      toast.success('Blog post submitted successfully! It will be reviewed by our team.');
      setIsSubmitting(false);
      navigate('/blog');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header section */}
        <section className="bg-gradient-to-r from-blog-purple/10 to-blog-pink/10 py-16">
          <div className="blog-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Write a Blog
              </h1>
              <p className="text-lg text-gray-700">
                Share your knowledge and insights with our community.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog form section */}
        <section className="py-16">
          <div className="blog-container">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Title input */}
                <div className="space-y-2">
                  <label htmlFor="title" className="text-gray-700 font-medium">
                    Blog Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blog-purple focus:ring-1 focus:ring-blog-purple outline-none transition-colors"
                    placeholder="Enter a descriptive title"
                  />
                </div>
                
                {/* Category select */}
                <div className="space-y-2">
                  <label htmlFor="category" className="text-gray-700 font-medium">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blog-purple focus:ring-1 focus:ring-blog-purple outline-none transition-colors"
                  >
                    <option value="" disabled>Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* Cover image input */}
                <div className="space-y-2">
                  <label htmlFor="coverImage" className="text-gray-700 font-medium">
                    Cover Image URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="coverImage"
                    name="coverImage"
                    value={formData.coverImage}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blog-purple focus:ring-1 focus:ring-blog-purple outline-none transition-colors"
                    placeholder="https://example.com/image.jpg"
                  />
                  <p className="text-sm text-gray-500">
                    Provide a direct URL to an image (recommended size: 1200x800px)
                  </p>
                </div>
                
                {/* Summary textarea */}
                <div className="space-y-2">
                  <label htmlFor="summary" className="text-gray-700 font-medium">
                    Summary <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    required
                    rows={3}
                    maxLength={200}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blog-purple focus:ring-1 focus:ring-blog-purple outline-none transition-colors resize-none"
                    placeholder="Write a brief summary of your blog post (max 200 characters)"
                  ></textarea>
                </div>
                
                {/* Content textarea */}
                <div className="space-y-2">
                  <label htmlFor="content" className="text-gray-700 font-medium">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={15}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blog-purple focus:ring-1 focus:ring-blog-purple outline-none transition-colors"
                    placeholder="Write your blog content here. You can use Markdown for formatting..."
                  ></textarea>
                  <p className="text-sm text-gray-500">
                    Use Markdown for formatting: # for headings, ** for bold, * for italic, etc.
                  </p>
                </div>
                
                <div className="pt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    <span className="text-red-500">*</span> Required fields
                  </p>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => navigate('/blog')}
                      className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-lg gradient-bg font-medium text-white hover:opacity-90 transition-opacity flex items-center justify-center min-w-[120px]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : 'Submit Post'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Guidelines section */}
        <section className="py-16 bg-gray-50">
          <div className="blog-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Blog Submission <span className="gradient-text">Guidelines</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-blog-purple">Content Quality</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Content must be original and not published elsewhere</li>
                    <li>Minimum length of 800 words for comprehensive coverage</li>
                    <li>Include code examples when relevant to the topic</li>
                    <li>Proofread for grammar, spelling, and technical accuracy</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-blog-teal">Formatting</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Use descriptive headings and subheadings</li>
                    <li>Include images, diagrams, or screenshots when helpful</li>
                    <li>Format code snippets properly using markdown</li>
                    <li>Break content into readable sections and paragraphs</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-blog-pink">Topic Selection</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Choose topics relevant to web development and design</li>
                    <li>Focus on practical, actionable information</li>
                    <li>Cover emerging trends or best practices</li>
                    <li>Avoid promotional content or sales pitches</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-blog-orange">Review Process</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>All submissions are reviewed by our editorial team</li>
                    <li>Review process takes approximately 3-5 business days</li>
                    <li>You may be asked to make revisions before publication</li>
                    <li>Accepted posts will be scheduled for publication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddBlog;
