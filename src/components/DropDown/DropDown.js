import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import './dropDown.css';


export default function ControlledOpenSelect({page,data, namee,name, setDummy,setscreenResolution,dummy }) {
  const [values, setValues] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setValues(event.target.value);
    name === 'ScreenResolution' ? (setscreenResolution(event.target.value)) : ( setDummy({...dummy,[namee]:event.target.value}) );
   

    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={ page === '1' ? "lefty" : "header"}>
        <FormControl fullWidth  sx={{mt: 2}}>
            <InputLabel id="demo-controlled-open-select-label">{name}</InputLabel>
            <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={values}
            label={namee}
            onChange={(event) => {handleChange(event);}}
            required
            >
            {data?.map((user) =>
                namee === "Touchscreen" || namee === "IPS" ? (
                user == "1" ? (
                    <MenuItem name={namee} key={user} value={user}>
                    YES
                    </MenuItem>
                ) : (
                    <MenuItem name={namee} key={user} value={user}>
                    NO
                    </MenuItem>
                )
                ) : (
                <MenuItem name={namee}  key={user} value={user}>
                    {user}
                </MenuItem>
                )
            )}
            
            </Select>
           
        </FormControl>
        

    </div>
  );
}
