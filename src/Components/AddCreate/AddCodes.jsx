import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Editor } from '@monaco-editor/react';
import languageOptions from './lang';
import { submitCode } from '../../firebase/submitServices';

const AddCodes = forwardRef(({ userId }, ref) => {
  const [code, setCode] = useState('// Your code here\nconsole.log("Hello, world!");');
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('javascript');
  useImperativeHandle(ref, () => ({
    submit: async () => {
      try {
        await submitCode({ title, code, language, userId:"hi" });
        console.log('Code submitted successfully');
      } catch (error) {
        console.error('Error submitting code:', error);
      }
    }
  }));

  return (
    <div className='p-2 bg-gray-800 text-white'>
      <form className='space-y-6'>
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
          />
        </div>
      </form>
    </div>
  );
});

export default AddCodes;
