import React, { useState } from 'react';

function BlogList(props) {
  const { list, title, deleteButton, viewButton, onSaveEdit } = props;
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ brand: "", model: "", price: "" });

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setFormData({
      brand: item.brand,
      model: item.model,
      price: item.price
    });
  };

  const handleSaveClick = () => {
    onSaveEdit(editingId, formData);
    setEditingId(null);
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  />
                ) : (
                  item.brand
                )}
              </td>

              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  />
                ) : (
                  item.model
                )}
              </td>

              <td>
                {editingId === item.id ? (
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                ) : (
                  `$${item.price}`
                )}
              </td>

              <td>
                <img
                  src={item.image}
                  alt={item.model}
                  style={{ width: "100px", height: "auto", borderRadius: "8px" }}
                />
              </td>

              <td>
                {editingId === item.id ? (
                  <>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => deleteButton(item.id)}>Delete</button>
                    <button onClick={() => handleEditClick(item)}>Edit</button>
                    <button onClick={() => viewButton(item.id)}>View</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlogList;
