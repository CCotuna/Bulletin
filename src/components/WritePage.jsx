import React, { useState } from 'react';

function WritePage() {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // You can implement your form submission logic here
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="content">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="10"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-olivine text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default WritePage;
