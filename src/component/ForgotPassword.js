import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotpassword } = useUserAuth();

  const [Loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [message,setMessage] = useState("");
  // const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      setMessage('')
      setError("")
      setLoading(true)
      await forgotpassword(email.current.value)
      setMessage('check your inbox')
  
    } catch {
      setError("Failed to reset passsword")
    }
     
     setLoading(false)
  }


  return (
    <>
      <div className="p-4 box">

      
      {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}


        <Form onSubmit={handleSubmit}>
          <h3> Forgot Password ? </h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <p>
               Please enter your email
            </p>
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
            
              Reset Password
            </Button>
          </div>

        </Form>
        <hr />
        
      </div>
      <div className="p-4 box mt-3 text-center">
        <Link to="/"> Login? </Link>
      </div>
    </>
  )

 }


export default ForgotPassword;