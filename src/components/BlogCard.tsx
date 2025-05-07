
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogData';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="block group">
      <article className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blog-purple text-white text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-blog-purple transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 mb-4">
            {post.summary}
          </p>
          
          <span className="inline-flex items-center text-blog-purple font-medium">
            Read more
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
