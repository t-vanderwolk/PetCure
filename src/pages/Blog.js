// src/pages/Blog.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);

  // Handle Create or Update
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPostId !== null) {
      // Update post
      setPosts(posts.map(post => 
        post.id === editingPostId ? { ...post, title, content } : post
      ));
      setEditingPostId(null);
    } else {
      // Create new post
      const newPost = {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toLocaleString(),
      };
      setPosts([newPost, ...posts]);
    }
    setTitle('');
    setContent('');
  };

  // Handle Delete
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // Handle Edit
  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingPostId(post.id);
  };

  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6">

        {/* Blog Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-pink-600 mb-10 text-center"
        >
          PetCure Blog
        </motion.h1>

        {/* Blog Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md border border-pink-200 mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            {editingPostId ? 'Edit Post' : 'Create New Post'}
          </h2>
          <input 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea 
            placeholder="Write your blog post here..." 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 h-40 resize-none"
            required
          />
          <button 
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition"
          >
            {editingPostId ? 'Update Post' : 'Publish Post'}
          </button>
        </form>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No blog posts yet. Start by writing one!</p>
          ) : (
            posts.map(post => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-pink-200"
              >
                <h3 className="text-2xl font-bold text-pink-600 mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
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
              </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}

export default Blog;