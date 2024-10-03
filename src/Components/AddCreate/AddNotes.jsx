import React, { useState } from 'react';

const AddNotes = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '' || content.trim() === '') {
      return; // Do nothing if title or content is empty
    }

    // Add the new note to the list
    setNotes([
      ...notes,
      {
        title,
        content,
        date: new Date().toISOString() // Include a date/time stamp
      }
    ]);

    // Reset the form fields
    setTitle('');
    setContent('');
  };

  // Handle note deletion
  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className='p-6 min-h-screen'>
      <h1 className='text-2xl font-semibold mb-4'>Add a Note</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='title' className='block text-lg font-medium mb-1'>Title:</label>
          <input
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='bg-black w-full p-2 border border-gray-300 rounded-md'
            placeholder='Enter note title'
            required
          />
        </div>

        <div>
          <label htmlFor='content' className='block text-lg font-medium mb-1'>Content:</label>
          <textarea
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='w-full p-2 border bg-black border-gray-300 rounded-md'
            placeholder='Enter note content'
            rows='5'
            required
          ></textarea>
        </div>

        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Add Note
        </button>
      </form>

      {/* Display added notes */}
      {notes.length > 0 && (
        <div className='mt-6'>
          <h2 className='text-xl font-semibold mb-2'>Notes:</h2>
          <ul className='space-y-4'>
            {notes.map((note, index) => (
              <li key={index} className='p-4 border border-gray-300 rounded-md'>
                <h3 className='text-lg font-semibold'>{note.title}</h3>
                <p className='mt-1'>{note.content}</p>
                <small className='text-gray-500'>{new Date(note.date).toLocaleString()}</small>
                <button
                  onClick={() => handleDeleteNote(index)}
                  className='mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddNotes;
