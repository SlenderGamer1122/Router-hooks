import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home = () => {
  return (
    <div style={{justifyContent:'center' ,height:'860px', display: 'flex', backgroundImage:`url(${'https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'})`, backgroundSize: 'contain' }}>
    
      WELCOME

<Form style={{ width: '300px' }} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Stay signed in" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Log in
      </Button>
    </Form>

    
    </div>
  )
}

export default Home