import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BodyOnlyExample() {
  const {id} = useParams();
  const navigate=useNavigate()
  useEffect(()=>{
      if(id){
    axios.get(`http://localhost:8000/users/getUserById/${id}`)
    .then(function(response){
      const user = response.data.data
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setAge(user.age);
      setGender(user.gender);
    })
    .catch(function(error){
      console.log(error)
    })
  }
  },[id])
    const updateUser=()=>{
    axios.put(`http://localhost:8000/users/updateUser/${id}`,{
      name:name,
      email:email,
      phone:phone,
      age:age,
      gender:gender
    })
    
    .then(function(response){
      swal("Success", "User updated successfully", "success");
      navigate('/')
    })
    .catch(function(error){
      console.log(error)
    })
  }

  const[name, setName] = useState("")
  const[nameError, setNameError] = useState(false)
  const[nameLenError, setNameLenError] = useState(false)
  const[email, setEmail] = useState("")
  const[emailError, setEmailError] = useState(false)
  const[emailPatternError, setEmailPatternError] = useState(false)
  const[phone, setPhone] = useState("")
  const[phoneError, setPhoneError] = useState(false)
  const[phonePatternError, setPhonePatternError] = useState(false)
  const[age, setAge] = useState("")
  const[gender, setGender] = useState("")

  const addUser=()=>{
        axios.post('http://localhost:8000/users/createUser',{
          name:name,
          email:email,
          phone:phone,
          age:age,
          gender:gender,
        })
        .then(function(response){
          console.log(response)
          swal("Success", "User added successfully", "success")
          navigate('/')
          setName("")
          setEmail("")
          setPhone("")
          setAge("")
          setGender("")
        })
      .catch(function(error){
        console.log(error)
      })
    }

  const userFormValidate = () =>{
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let valid = true;
    if(name){
      if(name.length >= 3){
        setNameLenError(false)
      }else{
        setNameLenError(true)
        valid = false;
      }
    setNameError(false)
    }else{
      setNameError(true)
      setNameLenError(false)
      valid = false;
    }
        if(email){
      if(emailPattern.test(email)){
        setEmailPatternError(false)
      }else{
        setEmailPatternError(true)
        valid = false;
      }
    setEmailError(false)
    }else{
      setEmailError(true)
      setEmailPatternError(false)
      valid = false;
    }
    if(phone){
      if(phone.length>=10){
        setPhonePatternError(false)
      }else{
        setPhonePatternError(true)
        valid = false;
      }
    setPhoneError(false)
    }else{
      setPhoneError(true)
      setPhonePatternError(false)
      valid = false;
    }
    if(valid){
      if(id){
        updateUser()
      }else{
        addUser()
      }
      
    }
  }

  const validateName =(event) =>{
    const {value} = event.target
    setName(value)
    if(value){
      setNameError(false)
      if(name.length >= 3){
        setNameLenError(false)
      }else{
        setNameLenError(true)
        valid = false;
      }
    }
    else{
      setNameError(true)
      setNameLenError(false)
    }
  }
  const validateEmail =(event) =>{
    const {value} = event.target
    setEmail(value)
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(value){
      setEmailError(false)
      if(emailPattern.test(email)){
        setEmailPatternError(false)
      }else{
        setEmailPatternError(true)
      }
    }
    else{
      setEmailError(true)
      setEmailPatternError(false)
    }
  }
  const validatePhone =(event) =>{
    const {value} = event.target
    setPhone(value)
    if(value){
      setPhoneError(false)
      if(phone.length>=10){
        setPhonePatternError(false)
      }else{
        setPhonePatternError(true)
      }
    }
    else{
      setPhoneError(true)
      setPhonePatternError(false)
    }
  }
  const validateAge =(event) =>{
    const {value} = event.target
    setAge(value)
  }
  const validateGender = (event) =>{
  const {value} = event.target
  setGender(value)
}

 
  return (
    <section className=" user-form-bg min-vh-100 d-flex justify-content-center align-items-center">
      <div className="py-5">
        <Card style={{ width: "30rem", backgroundColor: "#68d28c" }}>
          <Card.Title className="text-center fs-1 py-4">Add User</Card.Title>
          <Form className="px-5 py-4">
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Name<span style={{color:"red"}}> *</span></Form.Label>
              <Form.Control type="text" placeholder="Enter Name" value={name} onChange={validateName}/>
              {nameError == true ? <span style={{color:"red"}} id="NameError">Name is Required</span>:""}
              {nameLenError == true ? <span style={{color:"red"}} id="NameLenError">Name should contain atleast 3 character</span>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address<span style={{color:"red"}}> *</span></Form.Label>
              <Form.Control type="email" placeholder="name@example.com" value={email} onChange={validateEmail}/>
              {emailError == true ? <span style={{color:"red"}} id="EmailError">Email is Required</span>:""}
              {emailPatternError == true ? <span style={{color:"red"}} id="EmailPatternError">Please Enter Valid email</span>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone<span style={{color:"red"}}> *</span></Form.Label>
              <Form.Control type="number" placeholder="Enter Phone Number" value={phone} onChange={validatePhone}/>
              {phoneError == true ? <span style={{color:"red"}} id="PhoneError">Phone Number is Required</span>:""}
              {phonePatternError == true ? <span style={{color:"red"}} id="PhonePatternError">Please Enter Valid Phone Number</span>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter Age" value={age} onChange={validateAge}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gender</Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Male"
                    name="group1"
                    type={type}
                    value="Male"
                    onChange={validateGender}
                    checked={gender == "Male"}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="group1"
                    type={type}
                    value="Female"
                    onChange={validateGender}
                    checked={gender == "Female"}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Other"
                    name="group1"
                    type={type}
                    value="Other"
                    onChange={validateGender}
                    checked={gender == "Other"}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button style={{backgroundColor: "#0d3a1d", border:"none" }} onClick={userFormValidate}>Add User</Button>
            </div>
            
          </Form>
        </Card>
      </div>
    </section>
  );
}

export default BodyOnlyExample;
