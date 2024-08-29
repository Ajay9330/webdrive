import React, { useEffect, useState } from 'react';
import Codes  from '../Components/Outletcomponents/Codes';
import { useSelector } from 'react-redux';
export const CodePage = ({ data }) => {
  const [codeData, setCodeData] = useState(data || []);
  const [loading, setLoading] = useState(!data); 
  const [error, setError] = useState(null); 
  const view=useSelector(state=>state.tools.showMode);
  useEffect(()=>{
    console.log("CodePage rendered");
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!data) {
          const response = await fetch("http://api.github.com/users/ajay9330/repos");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const d = await response.json();
          setCodeData(d);
        }
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data]); // Dependencies array

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex flex-wrap gap-4 md:gap-6 self-start '>
      {/* <h1>CodePage</h1> */}
      {codeData.map((code, index) => (
        <Codes key={index} info={code} view={view} />
      ))}
    </div>
  );
};
