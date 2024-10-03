import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import languageOptions from './lang';

const AddCodes = ({ onSubmit }) => {
  const [code, setCode] = useState('// Your code here\nconsole.log("Hello, world!");');
  const [title, setTitle] = useState('Code Title');
  const [language, setLanguage] = useState('javascript'); // Default language

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Call the passed-in onSubmit handler
    onSubmit({ title, code, language });

    // Optionally reset form fields or show a success message
    // setTitle('');
    // setCode('');
  };

  return (
    <div className='p-2 bg-gray-800 text-white '>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <input
            
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full p-2 rounded-md bg-gray-900 border border-gray-700 text-white'
            placeholder='Enter title here'
          />
        </div>
        
        <div>
          <div className='m-4'>
          <select
            id='language'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='px-3 py-2 rounded-md border border-gray-700 bg-gray-900 text-white'
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
          <Editor
            height='300px'
            language={language} // Dynamic language
            value={code}
            onChange={(value) => setCode(value || '')}
            theme='vs-dark' // You can change the theme
            // Include onValidate if you want validation for supported languages
            // onValidate={markers => console.log('Validation markers:', markers)}
          />
        </div>
        
       

      </form>
    </div>
  );
};

export default AddCodes;
