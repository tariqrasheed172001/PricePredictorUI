import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ColoredLine from '../common/ColoredLine'
import ControlledOpenSelect from '../DropDown/DropDown'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './car.css'

const url = `http://127.0.0.1:5000/carPricePredictor`;
function Car() {
  const [formData,setformData] = useState("")
  const [price,setPrice] = useState("")
  const [sendData,setsendData] = useState({
    name:"",
    company:"",
    year:"",
    kms_driven:"",
    fuel_type:"",
  })

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://127.0.0.1:5000/formDatac`
      const responce = await fetch(url);
      const resJson = await responce.json();
      // console.log(resJson);
      setformData(JSON.parse(JSON.stringify(resJson)));
      // console.log(formData.company)
    };
    fetchApi();
  }, []);

  const handleSubmit = (event) =>{
    event.preventDefault()

    console.log(sendData)

    axios.post(url,sendData).then((res) => {
      setPrice(res)
      console.log(price)
    })
  }

  return (
    <div className='wholee'>
        <div className="Titlee">Car Price Predictor</div>
        <div className="formm">
            <form onSubmit={(event) => {
                handleSubmit(event);
            }}
            method="POST">

                
                <div className='textFieldd'>
                    <ControlledOpenSelect name="Name" namee="name" data={formData.name} dummy={sendData} setDummy={setsendData} />

                    <ColoredLine color="white" />

                    <ControlledOpenSelect name="Company" namee="company" data={formData.company} dummy={sendData} setDummy={setsendData} />
                </div>
                <div className='textFieldd'>
                    <ControlledOpenSelect name="Year" namee="year" data={formData.year} dummy={sendData} setDummy={setsendData}/>

                    <ColoredLine color="white" />

                    <ControlledOpenSelect name="Fuel type" namee="fuel_type" data={formData.fuel_type} dummy={sendData} setDummy={setsendData} />
                </div>

                <TextField
                    style={{marginBottom:'1rem',marginTop:'1rem'}}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    label="Kilometers travelled"
                    name="kms_driven"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={(event) => {
                        event.preventDefault();

                        setsendData({ ...sendData,[event.target.name]: event.target.value });
                    }}
                /> 
                
                <div className="buttonn">
                
                <Button
                fullWidth
                type="submit"
                className="button"
                variant="contained"
                >
                Predict
            </Button>
            </div> 
            </form>
        </div>
        {price !== "" && (
        <div className="result">
          <p>{
            price.data === "Infinity\n" ? ("Form inputs are invalid!") :<p><CurrencyRupeeIcon style={{marginTop:'0rem'}} /> {`${price.data}`}  </p>
            }</p>
        </div>
      )}
    </div>
  )
}

export default Car