
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header section */}
        <section className="bg-gradient-to-r from-blog-purple/10 to-blog-pink/10 py-16">
          <div className="blog-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Contact Us
              </h1>
              <p className="text-lg text-gray-700">
                Have questions or suggestions? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact information */}
        <section className="py-16">
          <div className="blog-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-blog-purple/10 rounded-full flex items-center justify-center">
                  <Mail size={28} className="text-blog-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Our friendly team is here to help.</p>
                <a href="mailto:hello@blogverse.com" className="text-blog-purple font-medium hover:underline">
                  hello@blogverse.com
                </a>
              </div>
              
              {/* Phone */}
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-blog-pink/10 rounded-full flex items-center justify-center">
                  <Phone size={28} className="text-blog-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Mon-Fri from 9am to 5pm.</p>
                <a href="tel:+15553452345" className="text-blog-pink font-medium hover:underline">
                  +1 (555) 345-2345
                </a>
              </div>
              
              {/* Office */}
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-blog-teal/10 rounded-full flex items-center justify-center">
                  <MapPin size={28} className="text-blog-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Office</h3>
                <p className="text-gray-600 mb-4">Come say hello at our office.</p>
                <p className="text-blog-teal font-medium">
                  123 Tech Lane, San Francisco, CA 94107
                </p>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Send us a <span className="gradient-text">Message</span>
              </h2>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-16 bg-gray-50">
          <div className="blog-container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">How can I become a contributor?</h3>
                <p className="text-gray-700">
                  To become a contributor, simply register an account, verify your email, and submit your first article through the "Write a Blog" page. Our editorial team will review your submission and provide feedback.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Do you accept guest posts?</h3>
                <p className="text-gray-700">
                  Yes, we welcome guest posts from experts in web development, design, and related fields. Please use our contact form to pitch your idea before submitting a full article.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">How long does the review process take?</h3>
                <p className="text-gray-700">
                  Our editorial team typically reviews submissions within 3-5 business days. You'll receive an email notification once your article has been reviewed with any feedback or the publication date.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Can I republish my article elsewhere?</h3>
                <p className="text-gray-700">
                  Yes, you retain ownership of your content. We ask that you wait at least two weeks after publication on BlogVerse before republishing elsewhere and include a canonical link back to the original article.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
