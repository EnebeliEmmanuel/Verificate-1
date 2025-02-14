import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar/index"
import Header from "../../component/Navbar/Header"
import {
    Box,
    Button,
    Flex,
    Image,
   Text,
   Icon,
   Grid, 
   GridItem,
   Center, 
  } from "@chakra-ui/react";
  import {AiOutlineCheckCircle } from "react-icons/ai";
import { Dash } from '../../component/Dash';
import { Completed } from '../Test/Completed/Completed';
import { Newtest } from '../Test/New/Newtest';
import { Payment } from '../Test/payment/Payment';
import { Info, Kickstart } from '../Test/Info/Info';
import { One } from '../Test/One/One';
import { Two } from '../Test/Two/Two';
// import { One } from '../Test/One/One';
  

const Body = () => {
  return (
    <Box>
      <Box w="15%">
        <Sidebar/>
      </Box>
      <Flex  w="85%" ml="15%" direction="column">
        <Box ml="50px"  >
          <Header/>
        </Box>

        {/* <Router> */}
          <Routes>
            <Route path="/dash" element={ <Dash/> } />
            <Route  path="/completed" element={ <Completed/> } />
            <Route path="/newtest" element={ <Newtest/> } />
            <Route path="/payment" element={ <Payment/> } />
            <Route path="/info" element={ <Info/> } />
            <Route path="/kickstart" element={ <Kickstart /> } />
            <Route path="/one" element={<One/>} />
            <Route path="/two" element={<Two/>} />
          </Routes>
        {/* </Router> */}
          
      </Flex>
    </Box>

  )
}

export default Body