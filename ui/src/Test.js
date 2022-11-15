import React, {useState, useEffect} from 'react'
import getUserInfo from './utilities/decodeJwt'

const Test = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      
    const obj = getUserInfo()
    setUser(obj)
     
    }, [])
    
  return (
    <div>
        <h1>{JSON.stringify(user)}</h1>
    </div>
  )
}

export default Test