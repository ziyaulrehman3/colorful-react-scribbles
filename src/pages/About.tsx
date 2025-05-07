
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header section */}
        <section className="bg-gradient-to-r from-blog-purple/10 to-blog-pink/10 py-16">
          <div className="blog-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                About BlogVerse
              </h1>
              <p className="text-lg text-gray-700">
                Learn more about our platform and our mission to share knowledge.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story section */}
        <section className="py-16">
          <div className="blog-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose lg:prose-xl">
                <p>
                  BlogVerse was founded in 2023 with a simple mission: to create a space where knowledge about web development, 
                  design, and technology could be shared freely and accessibly. What started as a small passion project has 
                  grown into a thriving community of writers, readers, and learners.
                </p>
                <p>
                  We believe that the best way to learn is by sharing knowledge. Our platform enables experts and enthusiasts 
                  alike to contribute their insights, experiences, and tutorials, helping others grow in their own journeys.
                </p>
                <p>
                  As technology continues to evolve at a rapid pace, staying informed and up-to-date has never been more important. 
                  BlogVerse aims to be your trusted companion in navigating the ever-changing landscape of web development and design.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-16 bg-gray-50">
          <div className="blog-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-xl text-gray-700 italic">
                  "To empower creators and learners by providing a platform for sharing knowledge, 
                  fostering community, and promoting continuous growth in web development and design."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-blog-purple">Knowledge Sharing</h3>
                  <p className="text-gray-700">
                    We believe in the power of shared knowledge and aim to make quality content accessible to everyone.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-blog-teal">Community Building</h3>
                  <p className="text-gray-700">
                    We foster a supportive community where members can connect, collaborate, and grow together.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-blog-pink">Continuous Learning</h3>
                  <p className="text-gray-700">
                    We promote a mindset of lifelong learning and staying current with evolving technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="py-16">
          <div className="blog-container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team member 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-blog-purple font-medium mb-3">Founder & Editor</p>
                  <p className="text-gray-600 text-sm">
                    Web developer and designer with a passion for creating beautiful, accessible websites.
                  </p>
                </div>
              </div>
              
              {/* Team member 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3" 
                    alt="Michael Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                  <p className="text-blog-teal font-medium mb-3">Lead Developer</p>
                  <p className="text-gray-600 text-sm">
                    Full-stack developer specializing in React and modern JavaScript frameworks.
                  </p>
                </div>
              </div>
              
              {/* Team member 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3" 
                    alt="Alicia Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Alicia Patel</h3>
                  <p className="text-blog-pink font-medium mb-3">Content Strategist</p>
                  <p className="text-gray-600 text-sm">
                    Content expert with a background in technical writing and UX design.
                  </p>
                </div>
              </div>
              
              {/* Team member 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" 
                    alt="David Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Rodriguez</h3>
                  <p className="text-blog-orange font-medium mb-3">Community Manager</p>
                  <p className="text-gray-600 text-sm">
                    Community builder and social media expert passionate about connecting people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-gray-50">
          <div className="blog-container">
            <div className="bg-gradient-to-r from-blog-purple to-blog-pink rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Join Our Community
                </h2>
                <p className="text-white/90 mb-8">
                  Become a part of our growing community of writers and readers. Share your knowledge and learn from others.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="px-6 py-3 rounded-lg bg-white text-blog-purple font-medium hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="/add-blog" 
                    className="px-6 py-3 rounded-lg bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    Write for Us
                  </a>
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

export default About;
