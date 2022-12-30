import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./house.css"
import ControlledOpenSelect from '../DropDown/DropDown';
import { Button, TextField } from '@mui/material';
import ColoredLine from '../common/ColoredLine';

const url = `http://127.0.0.1:5000/housePricePredictor`;
function House() {

    const [formData,setformData] = useState("")
    const [price,setPrice] = useState("");
    const [sendData,setsendData] = useState({
        location:"",
        total_sqft:"",
        bath:"",
        bhk:"",
    })


    useEffect(() => {
        const fetchApi = async () => {
          const url = `http://127.0.0.1:5000/formDatah`;
          const responce = await fetch(url);
          const resJson = await responce.json();
          console.log(resJson);
          setformData(JSON.parse(JSON.stringify(resJson)));
        };
        fetchApi();
      }, []);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(sendData)

        axios.post(url, sendData).then((responce) => {
            setPrice(responce);
            console.log(price);
        });

    }
    
  return (
    <div className='whole'>
        <div className="Title">House Price Predictor</div>
        <div className="form">
            <form onSubmit={(event) => {
                handleSubmit(event);
            }}
            method="POST">

                
                <div className='textField'>

                    <ControlledOpenSelect name="Location" data={formData.location} namee="location" dummy={sendData} setDummy={setsendData} />

                    <ColoredLine color="white" />

                    <ControlledOpenSelect  name="Number of bathrooms" data={formData.bath} namee="bath" dummy={sendData} setDummy={setsendData} />
                </div>

                <TextField
                    style={{marginBottom:'0.5rem'}}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    label="Total area(square feets)"
                    name="total_sqft"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={(event) => {
                        event.preventDefault();

                        setsendData({ ...sendData,[event.target.name]: event.target.value });
                    }}
                    />

                <TextField
                style={{marginBottom:'0.5rem'}}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                label="BHK (Bedroom, Hall, Kitchen)"
                name="bhk"
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
          <p>{price.data === "Infinity\n" ? ("Form inputs are invalid!") : (`Price ₨:${price.data}`) }</p>
        </div>
      )}
    </div>
  )
}

export default House