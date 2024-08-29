import React, { useEffect, useState } from 'react'
import Links from '../Components/Outletcomponents/Links'

export const LinkPage = () => {
  const [linkData, setLinkData] = useState([{},{},{title:"test",description:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ratione tempore! Commodi necessitatibus ad repudiandae quas voluptatem quia exercitationem odio in, libero perspiciatis ipsa nam blanditiis optio quae eligendi placeat!    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ratione tempore! Commodi necessitatibus ad repudiandae quas voluptatem quia exercitationem odio in, libero perspiciatis ipsa nam blanditiis optio quae eligendi placeat!    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ratione tempore! Commodi necessitatibus ad repudiandae quas voluptatem quia exercitationem odio in, libero perspiciatis ipsa nam blanditiis optio quae eligendi placeat!"}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example endpoint; modify according to your real API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Simulate data transformation
        const transformedData = data.map(post => ({
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam in sint ea, quas debitis architecto quam assumenda iste perspiciatis quibusdam consectetur ullam quia asperiores ratione repellendus obcaecati eveniet fugit nulla000?",
          id: post.id,
          title: post.title,
          url: `https://example.com/${post.id}` // Placeholder URL
        }));
        
        setLinkData(transformedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className='w-full overflow-auto'>
      {linkData.length > 0 ? (
        linkData.map((x, i) => <Links data={x} key={i} />)
      ) : (
        <div>No links available</div>
      )}
    </div>
  );
}
