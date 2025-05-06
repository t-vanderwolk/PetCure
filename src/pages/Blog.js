// src/pages/Blog.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Blog() {
  const currentUser = 'admin'; // Replace this with auth logic if available

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Pawfect Decor: Styling Your Home for Pets and People',
      content: `At PetCure, we believe your home should feel as chic as it is cozy — even for your pets! Think plush, washable rugs, sleek dog beds that blend with your furniture, and neutral-toned emery stair pads for effortless style. A few well-placed pink accents (hello, PediSteps!) can make your home feel like a designer haven for both humans and four-legged family members.

[Insert visual: Living room featuring blush PediSteps and modern pet decor]`,
      createdAt: 'April 28, 2025, 10:00 AM',
      author: 'admin',
      comments: [],
    },
    {
      id: 2,
      title: 'The Secret to Stress-Free Dog Nail Grooming',
      content: `Tired of wrestling with clippers or loud, scary grinders? Our PediSteps and PediWalk mats offer a passive, natural solution that files your dog’s nails while they simply walk around! No stress. No sedation. Just easy daily care that protects your floors, your sanity, and your pup's paws.

[Insert visual: Close-up of a dog’s paw using PediWalk on a light beige carpet]`,
      createdAt: 'April 28, 2025, 11:00 AM',
      author: 'admin',
      comments: [],
    },
    {
      id: 3,
      title: 'Dog Park Drama: Celebrity Dogs Spill the Tea!',
      content: `Word on the street is that Lady Gaga’s Frenchies are starting their own fashion line — and Suki Waterhouse’s dachshund is reportedly "not impressed." Meanwhile, Tika the Iggy has been throwing some serious side-eye at any pup who shows up at the park in last season’s harness. Stay tuned for more canine couture drama — it’s getting juicy! 🐾👑

[Insert visual: Illustrated gossip column featuring cartoon celeb dogs]`,
      createdAt: 'April 28, 2025, 12:00 PM',
      author: 'admin',
      comments: [],
    },
    {
      id: 48089,
      title: "Nail the Look: Matching Your Pet's Paw-dicure to Your Decor",
      content: `Your home is an extension of your style — and now, your dog’s nails can be too! Pair blush-toned PediSteps with gold-accented decor or opt for neutral textures that blend seamlessly into modern spaces. Our customizable emery kits let you match your pet’s care routine with your aesthetic goals.

[Insert visual: A chic interior with blush PediSteps matching throw pillows and decor accents]`,
      createdAt: 'May 06, 2025, 12:51 AM',
      author: 'admin',
      comments: [],
    },
    {
      id: 62892,
      title: "How Often Should You File Your Dog’s Nails?",
      content: `While every dog is different, most pups need nail filing every 1–2 weeks to prevent overgrowth. But with PetCure’s passive filing design, you don’t have to calendar grooming days anymore — just let your dog walk naturally on PediSteps or PediWalk throughout the day!

[Insert visual: Infographic showing typical nail growth rates and risks of overgrown nails]`,
      createdAt: 'May 06, 2025, 12:51 AM',
      author: 'admin',
      comments: [],
    },
    {
      id: 44208,
      title: "From Pain to Polished: How Nail Care Transforms Senior Dogs",
      content: `Older dogs often struggle with joint pain made worse by long nails. PetCure helps senior pets stay mobile and comfortable without the stress of manual trims. Smooth steps, quiet filing, and safer movement — all in one simple solution.

[Insert visual: Before/after photos of a senior dog using PediSteps]`,
      createdAt: 'May 06, 2025, 12:51 AM',
      author: 'admin',
      comments: [],
    },
    {
      id: 64982,
      title: "Home Safe Home: Why Emery Pads Beat Anti-Slip Tape",
      content: `Traditional anti-slip solutions look industrial and wear down fast. PediSteps offer style, comfort, and function all in one — while also keeping your dog’s nails naturally filed. No more unsightly tape or foam strips on your stairs.

[Insert visual: Side-by-side comparison of stairs with anti-slip tape vs. PediSteps]`,
      createdAt: 'May 06, 2025, 12:51 AM',
      author: 'admin',
      comments: [],
    },
    {
      id: 67955,
      title: "Designing a Dog-Friendly Staircase That Doesn’t Sacrifice Style",
      content: `It’s possible to create a pet-safe staircase without giving up aesthetics. Use our emery-textured PediSteps in pastel, neutral, or patterned finishes that feel intentional and elegant. Blending pet care with interior design has never been this easy.

[Insert visual: A luxury staircase with custom-colored PediSteps and matching railing or wallpaper accents]`,
      createdAt: 'May 06, 2025, 12:51 AM',
      author: 'admin',
      comments: [],
    }
  ]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [commentText, setCommentText] = useState({});

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
        author: currentUser,
        comments: [],
      };
      setPosts([newPost, ...posts]);
    }
    setTitle('');
    setContent('');
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingPostId(post.id);
  };

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

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-8 text-center"
        >
          PetCure Blog
        </motion.h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md border border-pink-200 mb-10">
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
            className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition"
          >
            {editingPostId ? 'Update Post' : 'Publish Post'}
          </button>
        </form>

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
                <p className="text-gray-700 whitespace-pre-line mb-4">{post.content}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 mb-6">
                  <span>{post.createdAt}</span>
                  {post.author === currentUser && (
                    <div className="flex space-x-4">
                      <button onClick={() => handleEdit(post)} className="text-pink-500 hover:text-pink-700 font-semibold">Edit</button>
                      <button onClick={() => handleDelete(post.id)} className="text-red-400 hover:text-red-600 font-semibold">Delete</button>
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <h4 className="text-pink-500 font-bold mb-2">Comments</h4>
                  {post.comments.length === 0 ? (
                    <p className="text-gray-400 mb-4">No comments yet. Be the first to comment!</p>
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
                      className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    <button
                      onClick={() => handleAddComment(post.id, commentText[post.id])}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition"
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


