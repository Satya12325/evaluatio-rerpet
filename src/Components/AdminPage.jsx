import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useState } from "react";
import { Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import {setledDetails,
    removeDetails,
    toggleDetails,
    getDetail,
    filtereDateWise} 
    from "../Redux/Admin/action"



const StyleModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
const style = {
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3
};


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function Tableer({name,id,date,purpose,amount,status,onDelete,ontoggle,onstalled}){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
          
  
  return (
          <>
         
            <TableBody>
            
                 <StyledTableRow key={id} onClick={handleOpen}>
                    <StyledTableCell component="th" scope="row" >
                    {name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{date}</StyledTableCell>
                    <StyledTableCell align="right">{purpose}</StyledTableCell>
                    <StyledTableCell align="right">{amount}</StyledTableCell>
                    <StyledTableCell align="right">{`${status}`}</StyledTableCell>
                    
                  </StyledTableRow>
    
               
              
            </TableBody>
         
        <StyleModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <button onClick={()=>onDelete(id)} >REJECT</button>
            <button onClick={()=>ontoggle(id)}>IN-PROGRESS</button>
            <button onClick={()=>onstalled(id)}>Setiled</button>
          </Box>
        </StyleModal>
          </>
        )
}

export default function AdminPage() {
    const [filter,setFilter]=useState([]);
    const {details}=useSelector(
        (state) => state.admin,
        shallowEqual
        );
        const dispatch = useDispatch();
       console.log("filter", filter)
    
    const getData = () => {
        return axios.get("http://localhost:3000/data")
        .then((response) =>{
            setFilter(response)
            dispatch(getDetail(response.data))
          
            
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    
   


    useEffect(() => {
        getData();
    },[])
    console.log(details)
    const handleDelete = (id) => {
      const action = removeDetails(id);
      dispatch(action)
  }
  const handleToggle = (id) => {
      const action = toggleDetails(id);
      console.log(action)
  dispatch(action);
  }
 const handleSattled = (id) => {
   const action = setledDetails(id)
   dispatch(action)
 }
  const filterDate = ()=>{
    // const action = filtereDateWise(details)
    // dispatch(action)
    // console.log(action,"action")
    const sortcars = details.sort((a, b) => Date.parse(new Date(a.initialRegistration.split("/").reverse().join("-"))) - Date.parse(new Date(b.initialRegistration.split("/").reverse().join("-"))))
    dispatch(sortcars)
  }
    return (
        <>

      {/* <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Date of Claim/reimbursement</StyledTableCell>
              <StyledTableCell align="right">Purpose of Claim</StyledTableCell>
              <StyledTableCell align="right">Amount To be Claimed</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
              details?.map((item)=> {
                  return <StyledTableRow key={item.id} >
                  <StyledTableCell component="th" scope="row">
                  {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.date}</StyledTableCell>
                  <StyledTableCell align="right">{item.purpose}</StyledTableCell>
                  <StyledTableCell align="right">{item.amount}</StyledTableCell>
                  <StyledTableCell align="right"onClick={handleToggle}>{`${item.status}`}</StyledTableCell>
                  
                </StyledTableRow>
  
              
              })
          }
            
          </TableBody>
        </Table>
      </TableContainer>
      <StyleModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <button onClick={handleDelete} >REJECT</button>
          <button >IN-PROGRESS</button>
          <button>Setiled</button>
        </Box>
      </StyleModal> */}
       <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right"onClick={filterDate}>Date of Claim/reimbursement</StyledTableCell>
                <StyledTableCell align="right">Purpose of Claim</StyledTableCell>
                <StyledTableCell align="right">Amount To be Claimed</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>

          {
            details?.map((item)=>(
              <Tableer
              key={item.id}
              {...item}
              ontoggle={handleToggle}
              onDelete={handleDelete}
              onstalled={handleSattled}
              />
            ))
          }
           </Table>
        </TableContainer>
        </>
    );
  }