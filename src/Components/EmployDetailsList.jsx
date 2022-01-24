import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    addDetails,
    getDetails
} from "../Redux/Employ/action";
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



export default function EmployDetailsList() {
    
    const {details}=useSelector(
        (state) => state.employ,
        shallowEqual
        );
        const dispatch = useDispatch();
       
    
    const getData = () => {
        return axios.get("http://localhost:3000/data")
        .then((response) =>{
            
            dispatch(getDetails(response.data))
           
            
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    
    useEffect(() => {
        getData();
    },[])
    console.log(details)
    
    return (
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Date of Claim/reimbursement</StyledTableCell>
              <StyledTableCell align="right">Purpose of Claim&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Amount To be Claimed&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Status&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
              details?.map((item)=> {
                  return <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                  {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.date}</StyledTableCell>
                  <StyledTableCell align="right">{item.purpose}</StyledTableCell>
                  <StyledTableCell align="right">{item.amount}</StyledTableCell>
                  <StyledTableCell align="right">{item.status}</StyledTableCell>
                </StyledTableRow>
  
              
              })
          }
            
          </TableBody>
        </Table>
      </TableContainer>
    );
  }