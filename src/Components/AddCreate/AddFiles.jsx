import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classNames from 'classnames';

const AddFiles = ({ onFilesChange }) => {
  const [files, setFiles] = useState([]);

  // Function to handle accepted files
  const handleDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => ({ file, title: '' }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    if (onFilesChange) onFilesChange([...files, ...newFiles]);
  };

  // Function to handle file deletion
  const handleDeleteFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    if (onFilesChange) onFilesChange(updatedFiles);
  };



  // Function to handle title change
  const handleTitleChange = (index, newTitle) => {
    const updatedFiles = files.map((file, i) => 
      i === index ? { ...file, title: newTitle } : file
    );
    setFiles(updatedFiles);
    if (onFilesChange) onFilesChange(updatedFiles);
  };

  // Initialize the dropzone
  const { getRootProps, getInputProps, isDragActive, isFocused } = useDropzone({
    onDrop: handleDrop,
    multiple: true, // Allow multiple file uploads
  });

  // Handle form submission
  const handleSubmit = () => {
    // Placeholder for form submission logic
    console.log('Submitting files:', files);
    // Example: You might want to upload files or process them
  };

  return (
    <div className='p-4 m-2 bg-gray-800 border border-gray-700 rounded-lg'>
      <h2 className='text-lg font-semibold text-white mb-4'>Add Files</h2>
      
      <div
        {...getRootProps()}
        className={classNames('border-2 border-dashed border-gray-600 p-4 text-center cursor-pointer mb-4', {
          'bg-blue-700': isDragActive,
          'bg-gray-500': isFocused
        })}
      >
        <input {...getInputProps()} />
        <p className='text-white'>Drag 'n' drop some files here, or click to select files</p>
      </div>
      

      
      <ul className='list-disc p-2 text-white'>
        {files.map((fileObj, index) => (
          <li key={index} className='flex flex-col mb-4 border-[1px] p-2 rounded-xl border-gray-400 border-opacity-50'>
            <div className='flex items-center justify-between flex-wrap gap-2 '>
              <span className='text-white'>{fileObj.file.name}</span>  
              <input
              type='text'
              value={fileObj.title}
              onChange={(e) => handleTitleChange(index, e.target.value)}
              placeholder='Enter title'
              className='mt-2 p-2 border border-gray-600 rounded-md bg-gray-700 text-white'
            />

              <button
                onClick={() => handleDeleteFile(index)}
                className='ml-2 p-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 material-symbols-outlined'
              >
                Delete
              </button>
            </div>
          
          </li>
        ))}
      </ul>
      

    </div>
  );
};

export default AddFiles;
