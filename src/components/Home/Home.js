import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './home.css'




function Home() {
    
    const navigate = useNavigate();

  return (
    <div className='box'>
        <div className='model'>
            <p style={{marginRight:"20px"}}>Know the tentative price of laptop according to your configurations</p>
            <Button variant="contained" color='success' onClick={() => {
                navigate('/laptopPricePredictor')
            }} >Go</Button>
        </div>
        <div className='model'>
            <p style={{marginRight:"20px"}}>Know the realTime prices of houses in Bengaluru at defferent cities</p>
            <Button variant="outlined" color='secondary' 
            onClick={() => {
                navigate('/housePricePredictor')
            }} 
            >Go</Button>
        </div>
        
    </div>
  )
}

export default Home