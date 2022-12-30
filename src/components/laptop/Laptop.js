import React, { useEffect, useState } from "react";
import axios from "axios";
import './laptop.css';
import ControlledOpenSelect from "../DropDown/DropDown";
import { Button, TextField } from "@mui/material";
import ColoredLine from "../common/ColoredLine";

const url = `http://127.0.0.1:5000/predict/price`;
function Laptop() {
  const [price, setPrice] = useState("");
  const [formData, setformData] = useState("");
  const [inches, setInches] = useState("");
  const [screenResolution, setscreenResolution] = useState("");

  const [dummy, setDummy] = useState({
    // company: "",
    // Type: "",
    // Ram: "",
    // Weight: "",
    // Touchscreen: "",
    // IPS: "",
    // Ppi: "",
    // Cpubrand: "",
    // HDD: "",
    // SSD: "",
    // Gpubrand: "",
  });

  const ScreenResolution = [
    "1280 x 1024",
    "1366 x 768",
    "1600 x 900",
    "1920 x 1080",
    "1920 x 1200",
    "2560 x 1440",
    "3440 x 1440",
    "3840 x 2160",
  ];

  // let data = {
  //   company: "Apple",
  //   TypeName: "Ultrabook",
  //   Ram: 8,
  //   Weight: 0.92,
  //   Touchscreen: 0,
  //   IPS: 1,
  //   Ppi: 226.41,
  //   Cpubrand: "AMD Processor",
  //   HDD: 0,
  //   SSD: 0,
  //   Gpubrand: "Intel",
  // };

  // var dummy = {}
  const calcPPI = () => {
    var inchess = parseInt(inches);
    let length = parseInt(screenResolution.slice(0, 4));
    let breadth = parseInt(screenResolution.slice(6, 11));

    // console.log(typeof(length),typeof(breadth),typeof(inchess))

    const temp = Math.pow(length, 2) + Math.pow(breadth, 2);
    const ppi = parseFloat(Math.pow(temp, 0.5) / inchess);

    dummy['Ppi'] = ppi;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(url, dummy).then((responce) => {
      setPrice(responce);
      console.log(price);
    });
    console.log(dummy);
    console.log(inches);
    console.log(screenResolution);
    calcPPI();
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://127.0.0.1:5000/formData`;
      const responce = await fetch(url);
      const resJson = await responce.json();
      console.log(resJson);
      setformData(JSON.parse(JSON.stringify(resJson)));
      // console.log(formData.company)
    };
    fetchApi();
  }, []);

  return (
    <div className="boxer">
      <div className="title">Laptop Price Predictor</div>
      <div className="fform">
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          method="POST"
        >
        <div className="dropDownFields">
        <ControlledOpenSelect
            setDummy={setDummy}
            namee="company"
            name="company"
            data={formData.company}
            dummy={dummy}
            page='0'
          />
          <ColoredLine color={"white"} />
          <ControlledOpenSelect
            setDummy={setDummy}
            namee="TypeName"
            name="Type"
            data={formData.Type}
            dummy={dummy}
            page='1'
          />
        </div>

        <div className="dropDownFields">

          <ControlledOpenSelect
            setDummy={setDummy}
            namee="Ram"
            name="Ram in GB"
            data={formData.Ram}
            dummy={dummy}
            page='0'
          />
          <ColoredLine color={"white"} />
          <ControlledOpenSelect
            setDummy={setDummy}
            name="Touchscreen"
            namee="Touchscreen"
            data={formData.touchscreen}
            dummy={dummy}
            page='1'
          />
        </div>

          

        <div className="dropDownFields">
          <ControlledOpenSelect
            setDummy={setDummy}
            name="IPS"
            namee="IPS"
            data={formData.ips}
            dummy={dummy}
            page='0'
          />
          <ColoredLine color={"white"} />
          <ControlledOpenSelect
            setDummy={setDummy}
            name="CPU Brand"
            namee="Cpubrand"
            data={formData.cpubrand}
            dummy={dummy}
            page='1'
          />
          </div>

        <div className="dropDownFields">

          <ControlledOpenSelect
            setDummy={setDummy}
            name="HDD in GB"
            namee="HDD"
            data={formData.hdd}
            dummy={dummy}
            page='0'
          />
          <ColoredLine color={"white"} />
          <ControlledOpenSelect
            setDummy={setDummy}
            name="SSD in GB"
            namee="SSD"
            data={formData.ssd}
            dummy={dummy}
            page='1'
          />
        </div>

        <div className="dropDownFields">
          <ControlledOpenSelect
            setDummy={setDummy}
            name="GPU Brand"
            namee="Gpubrand"
            data={formData.gpubrand}
            dummy={dummy}
            page='0'
          />
          <ColoredLine color={"white"} />
          <ControlledOpenSelect
            setDummy={setDummy}
            name="ScreenResolution"
            namee="ScreenResolution"
            data={ScreenResolution}
            dummy={dummy}
            setscreenResolution={setscreenResolution}
            page='1'
          />
        </div>
        
          
          <div className="TextField">
            <TextField
              className="field"
              id="outlined-basic"
              label="Weight in kg"
              name="Weight"
              variant="outlined"
              required
              fullWidth
              onChange={(event) => {
                event.preventDefault();

                setDummy({ ...dummy,[event.target.name]: event.target.value });
              }}
            />
          </div>
          <div className="TextField">
            <TextField
              className="field"
              id="outlined-basic"
              label="Inches"
              name="inches"
              variant="outlined"
              required
              fullWidth
              onChange={(event) => {
                event.preventDefault();

                setInches(event.target.value);
              }}
            />
          </div>

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
        <div className="rresult">
          <p>Price ₨ :{price.data}</p>
        </div>
      )}

      {/* <p>{res}</p> */}
    </div>
  );
}

export default Laptop;
