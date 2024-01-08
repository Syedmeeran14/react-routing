import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  let navigate = useNavigate()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <>
  <h2 style={{ textAlign:'center',fontFamily:'serif'}}><b>React Router Task</b></h2>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
          <Tab label="All" onClick={()=>navigate('/all')} />
          <Tab label="Full Stack Development"onClick={()=>navigate('/full-stack-development')} />
          <Tab label="Data Science" onClick={()=>navigate('/data-science')} />
          <Tab label="Cyber Security"  onClick={()=>navigate('/cyber-security')} />
          <Tab label="Career" onClick={()=>navigate('/career')} />
      </Tabs>
    </Box>
    </>
}

export default Navbar