import React, { useState } from 'react';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [voiceMessage, setVoiceMessage] = useState(null);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleVoiceMessageChange = (event) => {
    setVoiceMessage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, description, files, voiceMessage });
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow my-11">
      <h2 className="text-lg font-bold text-center mb-5">Post a Real-Time Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload Photos/Videos</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            multiple
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload Voice Message</label>
          <input
            type="file"
            onChange={handleVoiceMessageChange}
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            accept="audio/*"
          />
        </div>

        <button type="submit" className="w-full mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md transition duration-200">
          Submit Update
        </button>
      </form>
    </div>
  );
};

export default UploadForm;