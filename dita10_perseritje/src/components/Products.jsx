import React, { useEffect, useState } from 'react';
import BlogList from './BlogLists';

function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/list')
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const deleteButton = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const viewButton = (id) => {
    const newList = list.filter((item) => item.id === id);
    setList(newList);
  };

  const handleSaveEdit = (id, updatedData) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    setList(newList);

    // Optional: send PUT or PATCH to your API here
    // fetch(`http://localhost:4000/list/${id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(updatedData),
    // });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      {list && (
        <BlogList
          list={list}
          title="Phones"
          deleteButton={deleteButton}
          viewButton={viewButton}
          onSaveEdit={handleSaveEdit} 
        />
      )}
    </>
  );
}

export default Home;