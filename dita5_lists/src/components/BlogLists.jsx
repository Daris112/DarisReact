import React from 'react'

function BlogLists(props) {

    const list = props.list
    const title = props.title

  return (
    <>
        <h1>{ title }</h1>
         {list.map((item) => (
          <div key={item.id}>
            <h2>{ item.name }</h2>
            <p>{ item.age }</p>
            <p>{ item.city }</p>
            <hr />
          </div>
        

       ) )}
    </>
  )
}

export default BlogLists