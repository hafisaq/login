import react from 'react'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Toggle =()=>{

    return(
        <div>
            
            
            <Switch {...label} defaultChecked />
        </div>

    )
}


export default Toggle;