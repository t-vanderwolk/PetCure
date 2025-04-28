// src/pages/Blog.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Blog() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Pawfect Decor: Styling Your Home for Pets and People',
      content: `At PetCure, we believe your home should feel as chic as it is cozy — even for your pets! Think plush, washable rugs, sleek dog beds that blend with your furniture, and neutral-toned emery stair pads for effortless style. A few well-placed pink accents (hello, PediSteps!) can make your home feel like a designer haven for both humans and four-legged family members.`,
      createdAt: 'April 28, 2025, 10:00 AM',
      comments: [],
    },
    {
      id: 2,
      title: 'The Secret to Stress-Free Dog Nail Grooming',
      content: `Tired of wrestling with clippers or loud, scary grinders? Our PediSteps and PediWalk mats offer a passive, natural solution that files your dog’s nails while they simply walk around! No stress. No sedation. Just easy daily care that protects your floors, your sanity, and your pup's paws.`,
      createdAt: 'April 28, 2025, 11:00 AM',
      comments: [],
    },
    {
      id: 3,
      title: 'Dog Park Drama: Celebrity Dogs Spill the Tea!',
      content: `Word on the street is that Lady Gaga’s Frenchies are starting their own fashion line — and Suki Waterhouse’s dachshund is reportedly "not impressed." Meanwhile, Tika the Iggy has been throwing some serious side-eye at any pup who shows up at the park in last season’s harness. Stay tuned for more canine couture drama — it’s getting juicy! 🐾👑`,
      createdAt: 'April 28, 2025, 12:00 PM',
      comments: [],
    },
  ]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [commentText, setCommentText] = useState({});

  // Handle Create or Update Post
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPostId !== null) {
      setPosts(posts.map(post => post.id === editingPostId ? { ...post, title, content } : post));
      setEditingPostId(null);
    } else {
      const newPost = {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toLocaleString(),
        comments: [],
      };
      setPosts([newPost, ...posts]);
    }
    setTitle('');
    setContent('');
  };

  // Handle Delete Post
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // Handle Edit Post
  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingPostId(post.id);
  };

  // Handle Add Comment
  const handleAddComment = (postId, text) => {
    if (!text.trim()) return;
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, { id: Date.now(), text }] } 
        : post
    ));
    setCommentText(prev => ({ ...prev, [postId]: '' }));
  };

  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen overflow-x-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">

        {/* Blog Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-8 text-center"
        >
          PetCure Blog
        </motion.h1>

        {/* Blog Form */}
        <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-md border border-pink-200 mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">
            {editingPostId ? 'Edit Post' : 'Create New Post'}
          </h2>
          <input 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 text-sm sm:text-base mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea 
            placeholder="Write your blog post here..." 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 text-sm sm:text-base mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 h-40 resize-none"
            required
          />
          <button 
            type="submit"
            className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition text-base"
          >
            {editingPostId ? 'Update Post' : 'Publish Post'}
          </button>
        </form>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 text-sm sm:text-base">No blog posts yet. Start by writing one!</p>
          ) : (
            posts.map(post => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-md border border-pink-200"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-pink-600 mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">{post.content}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-gray-500 gap-2 mb-6">
                  <span>{post.createdAt}</span>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleEdit(post)}
                      className="text-pink-500 hover:text-pink-700 font-semibold"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(post.id)}
                      className="text-red-400 hover:text-red-600 font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-6">
                  <h4 className="text-pink-500 font-bold mb-2">Comments</h4>
                  {post.comments.length === 0 ? (
                    <p className="text-gray-400 text-sm mb-4">No comments yet. Be the first to comment!</p>
                  ) : (
                    <ul className="mb-4 space-y-2">
                      {post.comments.map(comment => (
                        <li key={comment.id} className="bg-pink-50 p-3 rounded-lg text-sm text-gray-700 border border-pink-100">
                          {comment.text}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={commentText[post.id] || ''}
                      onChange={(e) => setCommentText(prev => ({ ...prev, [post.id]: e.target.value }))}
                      className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                    />
                    <button
                      onClick={() => handleAddComment(post.id, commentText[post.id])}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition text-sm"
                    >
                      Post
                    </button>
                  </div>
                </div>

              </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}

export default Blog;