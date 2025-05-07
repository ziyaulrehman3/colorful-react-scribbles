
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2025",
    summary: "Discover the emerging trends that will shape web development in the coming year.",
    content: `
      # The Future of Web Development in 2025

      Web development continues to evolve at a rapid pace. As we look ahead to 2025, several key trends are emerging that will shape the industry.

      ## 1. AI-Driven Development

      Artificial intelligence is revolutionizing how we build websites and web applications. From automated code generation to intelligent testing tools, AI is becoming an indispensable part of the web developer's toolkit.

      ## 2. WebAssembly Expansion

      WebAssembly (Wasm) is gaining traction as a way to run high-performance code in browsers. In 2025, we expect to see more applications leveraging Wasm for complex computations that were previously not possible in browser environments.

      ## 3. Edge Computing

      With the rise of edge computing platforms, web applications are being deployed closer to users than ever before. This paradigm shift is enabling faster load times and more resilient applications.

      ## 4. Immersive Experiences

      Virtual and augmented reality experiences on the web will become more common as WebXR matures and hardware becomes more accessible to everyday users.

      ## 5. Sustainability Focus

      Energy-efficient web design will gain prominence as developers and organizations prioritize reducing the carbon footprint of their digital products.

      These trends represent both challenges and opportunities for web developers. Those who stay ahead of the curve will be well-positioned to create innovative, efficient, and engaging web experiences in 2025 and beyond.
    `,
    category: "Technology",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
    },
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    date: "May 5, 2025",
    readTime: "6 min read"
  },
  {
    id: "2",
    title: "Creating Beautiful UI Animations with React",
    summary: "Learn how to implement smooth, eye-catching animations in your React applications.",
    content: `
      # Creating Beautiful UI Animations with React

      Animations can significantly enhance the user experience of your React applications. When implemented correctly, they provide visual feedback, guide users' attention, and make interfaces feel more polished and responsive.

      ## Why Animations Matter

      Well-crafted animations serve several important purposes:
      - They help users understand state changes
      - They create a sense of continuity between different views
      - They add personality and polish to your application

      ## Animation Libraries for React

      While you can create animations with plain CSS, several libraries make implementing complex animations much easier:

      ### Framer Motion

      Framer Motion provides a simple declarative API for animations:

      \`\`\`jsx
      import { motion } from "framer-motion";

      const Card = () => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Card content
        </motion.div>
      );
      \`\`\`

      ### React Spring

      React Spring uses a physics-based approach to create natural-feeling animations:

      \`\`\`jsx
      import { useSpring, animated } from "react-spring";

      const Card = () => {
        const props = useSpring({ opacity: 1, from: { opacity: 0 } });
        return <animated.div style={props}>Card content</animated.div>;
      };
      \`\`\`

      ## Performance Considerations

      When implementing animations, always be mindful of performance:
      - Prefer animating CSS properties that don't trigger layout recalculations
      - Use hardware acceleration when appropriate
      - Test animations on lower-powered devices

      With these principles and tools in mind, you can create delightful animations that enhance your React applications without compromising performance.
    `,
    category: "Design",
    author: {
      name: "Jordan Lee",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3"
    },
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    date: "April 28, 2025",
    readTime: "8 min read"
  },
  {
    id: "3",
    title: "Mastering State Management in Modern JavaScript Applications",
    summary: "Compare different state management approaches and learn when to use each one.",
    content: `
      # Mastering State Management in Modern JavaScript Applications

      Effective state management is crucial for building maintainable and scalable JavaScript applications. As applications grow in complexity, having a solid strategy for managing state becomes increasingly important.

      ## The Evolution of State Management

      State management has evolved significantly over the years:
      - Simple component state
      - Prop drilling
      - Context API
      - Flux architecture
      - Redux and similar libraries
      - Atomic state management (Recoil, Jotai)
      - Server state management (React Query, SWR)

      ## When to Use Different Approaches

      ### Local Component State

      For simple UI state that doesn't need to be shared:

      \`\`\`jsx
      function Counter() {
        const [count, setCount] = useState(0);
        return (
          <button onClick={() => setCount(count + 1)}>
            Count: {count}
          </button>
        );
      }
      \`\`\`

      ### Context API

      For state that needs to be accessed by multiple components:

      \`\`\`jsx
      const ThemeContext = createContext();

      function App() {
        const [theme, setTheme] = useState('light');
        return (
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <MainContent />
          </ThemeContext.Provider>
        );
      }
      \`\`\`

      ### Redux

      For complex applications with many state interactions:

      \`\`\`jsx
      // In a reducer file
      function counterReducer(state = { value: 0 }, action) {
        switch (action.type) {
          case 'counter/incremented':
            return { value: state.value + 1 };
          default:
            return state;
        }
      }
      \`\`\`

      ## New Paradigms: Server State

      Libraries like React Query have introduced a distinction between client and server state:

      \`\`\`jsx
      function Products() {
        const { data, isLoading } = useQuery('products', fetchProducts);
        
        if (isLoading) return <LoadingSpinner />;
        return <ProductList products={data} />;
      }
      \`\`\`

      ## Conclusion

      There's no one-size-fits-all solution for state management. The best approach depends on your application's specific needs. By understanding the strengths and weaknesses of different state management techniques, you can make informed decisions that lead to more maintainable code.
    `,
    category: "JavaScript",
    author: {
      name: "Samantha Morris",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
    },
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    date: "April 21, 2025",
    readTime: "10 min read"
  },
  {
    id: "4",
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    summary: "Learn how to make your web applications inclusive and accessible to all users.",
    content: `
      # Building Accessible Web Applications: A Comprehensive Guide

      Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with websites and tools. By following accessibility best practices, you not only make your application usable by a wider audience but also improve the experience for all users.

      ## Core Principles of Web Accessibility

      The Web Content Accessibility Guidelines (WCAG) define four main principles:

      1. **Perceivable**: Information must be presentable to users in ways they can perceive.
      2. **Operable**: User interface components must be operable by all.
      3. **Understandable**: Information and operation must be understandable.
      4. **Robust**: Content must be robust enough to be interpreted by a variety of user agents.

      ## Practical Implementation Tips

      ### Semantic HTML

      Use the right HTML elements for their intended purpose:

      \`\`\`html
      <!-- Instead of this -->
      <div class="button" onclick="submitForm()">Submit</div>

      <!-- Use this -->
      <button type="submit">Submit</button>
      \`\`\`

      ### Keyboard Navigation

      Ensure all interactive elements can be accessed and operated with a keyboard:

      \`\`\`jsx
      const NavigationLink = ({ href, children }) => {
        return (
          <a
            href={href}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.location.href = href;
              }
            }}
          >
            {children}
          </a>
        );
      };
      \`\`\`

      ### ARIA Attributes

      When HTML semantics aren't enough, use ARIA attributes:

      \`\`\`html
      <div role="alert" aria-live="assertive">
        Form submitted successfully!
      </div>
      \`\`\`

      ### Color Contrast

      Ensure sufficient contrast between text and background:

      \`\`\`css
      /* Good contrast */
      .button {
        background-color: #2b3d59;
        color: #ffffff;
      }

      /* Poor contrast - avoid */
      .button-bad {
        background-color: #7a88a1;
        color: #ffffff;
      }
      \`\`\`

      ## Testing Your Application

      Regular accessibility testing should be part of your development process:

      - Use screen readers like NVDA or VoiceOver
      - Try keyboard-only navigation
      - Use automated tools like Axe or Lighthouse
      - Conduct user testing with people who have disabilities

      ## Conclusion

      Accessibility is not an afterthought—it should be integrated into your development process from the beginning. By making your web applications accessible, you ensure that everyone, regardless of ability, can use and benefit from your work.
    `,
    category: "Accessibility",
    author: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
    },
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    date: "April 15, 2025",
    readTime: "12 min read"
  },
  {
    id: "5",
    title: "Getting Started with TypeScript in 2025",
    summary: "A beginner's guide to implementing TypeScript in your JavaScript projects.",
    content: `
      # Getting Started with TypeScript in 2025

      TypeScript has become an essential tool for JavaScript developers, providing static typing, improved tooling, and better code organization. If you're new to TypeScript or looking to refresh your knowledge, this guide will help you get started.

      ## Why TypeScript?

      TypeScript offers several advantages over plain JavaScript:

      - **Static typing**: Catch errors during development rather than at runtime
      - **Better tooling**: Enhanced autocomplete, refactoring tools, and documentation
      - **Improved maintainability**: Types serve as documentation and make code easier to understand
      - **Modern ECMAScript features**: Use the latest JavaScript features with backward compatibility

      ## Setting Up a TypeScript Project

      ### Installation

      Start by installing TypeScript globally or as a dev dependency:

      \`\`\`bash
      # Global installation
      npm install -g typescript

      # Project installation
      npm install --save-dev typescript
      \`\`\`

      ### Configuration

      Create a \`tsconfig.json\` file to configure TypeScript:

      \`\`\`json
      {
        "compilerOptions": {
          "target": "ES2020",
          "module": "ESNext",
          "strict": true,
          "esModuleInterop": true,
          "skipLibCheck": true,
          "forceConsistentCasingInFileNames": true,
          "outDir": "./dist"
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules"]
      }
      \`\`\`

      ## Basic TypeScript Concepts

      ### Type Annotations

      Add types to variables, function parameters, and return values:

      \`\`\`typescript
      // Variable typing
      let name: string = "Alex";
      let age: number = 30;
      let isActive: boolean = true;

      // Function typing
      function greet(person: string): string {
        return \`Hello, \${person}!\`;
      }
      \`\`\`

      ### Interfaces and Types

      Define shapes for objects:

      \`\`\`typescript
      // Interface
      interface User {
        id: number;
        name: string;
        email: string;
        active?: boolean; // Optional property
      }

      // Type alias
      type UserRole = "admin" | "editor" | "viewer";

      // Using interfaces and types
      function updateUser(user: User, role: UserRole): void {
        console.log(\`Updating \${user.name} to role \${role}\`);
      }
      \`\`\`

      ### Generics

      Create reusable components:

      \`\`\`typescript
      // Generic function
      function getFirst<T>(array: T[]): T | undefined {
        return array[0];
      }

      const firstNumber = getFirst<number>([1, 2, 3]); // Type: number | undefined
      const firstString = getFirst<string>(['a', 'b', 'c']); // Type: string | undefined
      \`\`\`

      ## Integrating with React

      TypeScript works seamlessly with React:

      \`\`\`tsx
      import React, { useState } from 'react';

      interface ButtonProps {
        text: string;
        onClick: () => void;
        color?: 'primary' | 'secondary';
      }

      const Button: React.FC<ButtonProps> = ({ text, onClick, color = 'primary' }) => {
        return (
          <button 
            className={\`btn btn-\${color}\`} 
            onClick={onClick}
          >
            {text}
          </button>
        );
      };

      export default Button;
      \`\`\`

      ## Conclusion

      TypeScript offers substantial benefits for JavaScript projects of all sizes. By starting with these fundamentals and gradually incorporating more advanced features, you'll improve your code quality and developer experience.

      Remember that TypeScript is flexible—you can adopt it incrementally and adjust the strictness level to suit your project's needs.
    `,
    category: "TypeScript",
    author: {
      name: "Elena Kim",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
    },
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    date: "April 7, 2025",
    readTime: "9 min read"
  }
];
