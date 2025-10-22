import React from 'react'

function BlogLists(props) {

    const list = props.list
    const title = props.title
    const deleteButton = props.deleteButton
    const viewButton = props.viewButton

  return (
    <>
        <h1>{ title }</h1>
         {list.map((item) => (
          <div key={item.id}>
            <h2>{ item.name }</h2>
            <p>{ item.age }</p>
            <p>{ item.city }</p>
            <button onClick={ () => deleteButton(item.id)}>Delete</button>
            <button onClick={ () => viewButton(item.id)}>View</button>
            <button >Edit</button>
            <hr />
          </div>
        

       ) )}
    </>
  )
}

export default BlogLists