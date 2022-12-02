import React, {useState, useEffect} from 'react';
import getUserInfo from './utilities/decodeJwt';
import Alert from 'react-bootstrap/Alert';
import Stack from 'react-bootstrap/Stack';

//  test change

const Test = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      
    const obj = getUserInfo()
    setUser(obj)
     
    }, [])
    
  return (
    <Stack direction="verticle" gap={2}>
      <div className="mx-2">
        <h4>Authenticated User</h4>
      </div>
      <Alert variant='primary' className="mx-2">
        {JSON.stringify(user, null, 2)}
      </Alert>
    </Stack>
  )
}

export default Test