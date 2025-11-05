import React from 'react'

function BlogList(props) {

    const list = props.list
    const title = props.title
    const deleteButton = props.deleteButton
    const viewButton = props.viewButton
  return (
    <>
    <div className="blog-list">
        <h2>{ title }</h2>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <tr>
                <th>Id</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th>Image</th>
                <th>Veprimet</th>
            </tr>
        { list.map( (item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.price}</td> 
                <td>
                  <img src={item.image} alt={item.model}  style={{width:"100px", height:"auto", borderRadius:"8px"}}/>
                </td>
                <td>
                   <button onClick={() => props.deleteButton(item.id)}>Delete</button>
                   <button>Edit</button>
                   <button onClick={() => props.viewButton(item.id)}>View</button>
                </td>
            </tr>
        ))
        }
        </table>
    </div>
    </>
  )
}

export default BlogList