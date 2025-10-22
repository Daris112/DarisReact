import React,{useState, useEffect} from 'react'

function usefetch(url) {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
      useEffect( () => {
        setTimeout( () => {
          fetch(url)
          .then( (res) => {
            return res.json()
          })
          .then( (data) => {
            setLoading(false);
            setList(data)
            console.log(data)
          })
          .catch( (err) => {
            setLoading(false);
            setError(err.message)
          })
        }, 1000)
      }, [])

  return {
    list,
    error,
    loading
  }
}
export default usefetch