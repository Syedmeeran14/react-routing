import React from 'react'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './Components/Navbar'
import All  from './Components/All'
import Fsd from './Components/Fsd'
import DataScience from './Components/DataScience'
import CyberSecurity from './Components/CyberSecurity'
import Career from './components/Career'
import cr1 from './images/cr1.jpg'
import cr2 from './images/cr2.jpg'
import cr3 from './images/cr3.jpg'
import cr4 from './images/cr4.jpg'
import cr5 from './images/cr5.jpg'
import cr6 from './images/cr6.jpg'
import cr7 from './images/cr7.jpg'
import cr8 from './images/cr8.jpg'
import cr9 from './images/cr9.jpg'
import fsd1 from './images/fsd1.jpg'
import fsd2 from './images/fsd2.jpg'
import fsd3 from './images/fsd3.jpg'
import fsd4 from './images/fsd4.jpg'
import fsd5 from './images/fsd5.jpg'
import cs1 from './images/cs1.jpg'
import cs2 from './images/cs2.jpg'
import cs3 from './images/cs3.jpg'
import cs4 from './images/cs4.jpg'
import cs5 from './images/cs5.jpg'
import ds1 from './images/ds1.jpg'
import ds2 from './images/ds2.jpg'
import ds3 from './images/ds3.jpg'
import ds4 from './images/ds4.jpg'
import ds5 from './images/ds5.jpg'


function App() {
  let info = [
    {
      image: cr5,
      field: "Career Paths",
      content: "With the development of technology, most of us started forgetting about mechanical engineering which pioneered.",
    },
    {
      image: fsd1,
      field: "Full Stack Development",
      content: "Embark on a coding odyssey! Master the art of full stack development to create seamless web experiences.",
    },
    {
      image: cr9,
      field: "Career Paths",
      content: "chemical engineering is among the most employable subjects in the world. Chemical engineers' expertise in developing commercial products and processes means that they can expect high salaries when starting work.",
    },
    {
      image: ds1,
      field: "Data Science",
      content: "Decode the language of data! Become a data sorcerer, turning raw information into actionable insights.",
    },
    {
      image: cr1,
      field: "Career Paths",
      content: "The scope of this field is visibly wide with many job prospects to offer such as electrical engineers, Electronics engineers, network engineers, manufacturing engineers, product development, product design, system management, control system.",
    },
    {
      image: fsd2,
      field: "Full Stack Development",
      content: "Craft digital wonders! Full stack developers, your journey to career happiness begins here.",
    },
    {
      image: fsd3,
      field: "Full Stack Development",
      content: "Architect the digital world! Dive into full stack frameworks and shape the future of web development.",
    },
    {
      image: fsd4,
      field: "Full Stack Development",
      content: "Frontend Syllabus decoded! From programming basics to React, sculpt your journey into frontend mastery.",
    },
    {
      image: fsd5,
      field: "Full Stack Development",
      content: "As a full-stack developer, having the right set of tools is crucial for your success.",
    },
    {
      image: cr2,
      field: "Career Paths",
      content: "The demand for ECE professionals is consistently high, driven by the ever-expanding technology sector. Virtually every aspect of our daily lives, from smartphones to autonomous vehicles, relies on electronics and communication systems.",
    },
    {
      image: cr3,
      field: "Career Paths",
      content: "What if I say that blockchain is going to be the next big thing? ",
    },
    {
      image: cr4,
      field: "Career Paths",
      content: "Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at.",
    },
    {
      image: cs1,
      field: "Cyber Security",
      content: "Guardians of the digital realm! Dive into cybersecurity and shield against the onslaught of cyber threats.",
    },
    {
      image: cs2,
      field: "Cyber Security",
      content: "Decrypt the salary cipher! Cybersecurity analysts, secure your career with lucrative rewards.",
    },
    {
      image: cr6,
      field: "Career Paths",
      content: "The world is moving towards modernization leading to an increase in the popularity of civil.",
    },
    {
      image: cs3,
      field: "Cyber Security",
      content: "Defenders of data fortresses! Join the ranks of cybersecurity professionals and ensure digital safety.",
    },
    {
      image: cr7,
      field: "Career Paths",
      content: "Aeronautical engineering is a good career option for the students in india. After B Tech in Aeronautical Engineering, you can work with the ISRO, NASA, DRDO, HAL, NAL, MRO, etc., along with a good salary.",
    },
    {
      image: cs4,
      field: "Cyber Security",
      content: "Safeguard digital frontiers! Cybersecurity professionals, your expertise is the shield against cyber threats.",
    },
    {
      image: cs5,
      field: "Cyber Security",
      content: "Master the triad of security! Network, cloud, and physical security—your keys to cybersecurity mastery.",
    },
    {
      image: ds2,
      field: "Data Science",
      content: "Elevate beyond code! Data science, the path to a lucrative future—where insights transform into gold.",
    },
    {
      image: ds3,
      field: "Data Science",
      content: "Unlock the data vault! Data scientists, where algorithms meet artistry to predict the future.",
    },
    {
      image: cr8,
      field: "Career Paths",
      content: "Pursuing a career in marine engineering can be a great choice for those passionate about ships, technology, and the sea.",
    },
    {
      image: ds4,
      field: "Data Science",
      content: "Chart the data frontier! Data science evolves—specialize, innovate, and shape the future of analytics.",
    },
    {
      image: ds5,
      field: "Data Science",
      content: "Interpret data symphonies! AI and Machine Learning guide data scientists to insights beyond imagination.",
    },
    
  ];
  
  return <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/all' element={<All info={info}/>} />
    <Route path='/full-stack-development' element={<Fsd info={info}/>} />
    <Route path='/data-science' element={<DataScience info={info}/>} />
    <Route path='/cyber-security' element={<CyberSecurity info={info}/>} />
    <Route path='/career' element={<Career info={info}/>} />
    <Route path='*' element={<Navigate to='/all' />} />
  </Routes>
  </BrowserRouter>
  </>
}

export default App