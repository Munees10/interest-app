import { TextField,Stack,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {
  const [interest,setInterest] = useState(0)
  const [principal,setprincipal] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleValid,setIsPrincipleValid] = useState(true)
  const [isRateValid,setIsRateValid] = useState(true)
  const [isYearValid,setIsisYearValid] = useState(true)
  const validateInput  = (e) =>{
    //{key} = object -> object Destructure
    const {name,value} = (e.target)
    //logic to check number validation - regular expression 
    if(!!value.match(/^[0-9]+$/)){
      if(name==='principal'){
        setprincipal(value)
        setIsPrincipleValid(true)
      }else if(name==='rate'){
        setRate(value)
        setIsRateValid(true)
      }else if(name==='year'){
        setYear(value)
        setIsisYearValid(true)
      }
      
    }else{
      if(name==='principal'){
        setprincipal(value)
        setIsPrincipleValid(false)
      }else if(name==='rate'){
        setRate(value)
        setIsRateValid(false)
      }else if(name==='year'){
        setYear(value)
        setIsisYearValid(false)
      }
    

    
    }
  }
  const handleCalculate = (e) =>{
    e.preventDefault()
    if(!principal ||!rate || !year ){
      alert("please fill the form completely!!!")
    }else{
      setInterest(principal*rate*year/100)
    }
  }
  const handleReset = (e) =>{
    setInterest(0)
    setprincipal(0)
    setRate(0)
    setYear(0)
    setIsPrincipleValid(true)
    setIsRateValid(true)
    setIsisYearValid(true)
  }
  

  return ( 
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark ">
      <div style={{width:'500px'}} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest Easily</p>
        <div  style={{height:'150px'}} className='interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-light rounded shadow' >
          <h1>₹ {''} {interest}</h1>

          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" value={principal || ""} name='principal' onChange={(e)=>validateInput(e)}
          />
          </div>
          {
            !isPrincipleValid &&
            <div className='mb-3 text-danger fw-bolder'>
              *invalid user input
            </div>
          }

          <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isRateValid &&
            <div className='mb-3 text-danger fw-bolder'>
              *invalid user input
            </div>
          }

          <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic" label="Time Peroid ( Yr )" variant="outlined" name='year' value={year || ""} onChange={(e)=>validateInput(e)}  />
          </div>
          {
            !isYearValid &&
            <div className='mb-3 text-danger fw-bolder'>
              *invalid user input
            </div>
          }

          <Stack direction="row" spacing={2}>
                <Button  type='submit' style={{height:'70px',width:'200px'}} variant="contained" disabled ={isPrincipleValid && isRateValid && isYearValid?false:true}>CALCULATE</Button>
                <Button onClick={handleReset} style={{height:'70px',width:'200px'}} variant="outlined">RESET</Button>
          </Stack>

        </form>
      </div>

    </div>
  );
  }

export default App;
