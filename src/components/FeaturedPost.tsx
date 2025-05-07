
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogData';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="block group">
      <article className="grid md:grid-cols-2 gap-6 bg-white rounded-xl overflow-hidden shadow-lg card-hover">
        <div className="relative h-64 md:h-full overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blog-purple text-white text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-10 h-10 rounded-full object-cover"
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
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blog-purple transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-6">
            {post.summary}
          </p>
          
          <span className="inline-flex items-center text-blog-purple font-medium">
            Read full article
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedPost;
