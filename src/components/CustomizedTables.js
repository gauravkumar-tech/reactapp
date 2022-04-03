import *  as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import './Confrence.css'




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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function CustomizedTables() {

    const [tableData, settableData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () =>{
        let data ;
        const body= await fetch('http://localhost:8080/confrence', {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
            },
            body : JSON.stringify(data)
          }).then(response => response.json());
          settableData(body.conferenceRoom);
    }

    const deleteRecord = async (roomcode)=>{
        settableData(tableData.filter(e=>e.roomCode!=roomcode))

        const body= await fetch('http://localhost:8080/deleteConfrence/' + roomcode, {
        method: 'DELETE',
        })
        getData();
    }
    

    


  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          
            <StyledTableCell>Room code</StyledTableCell>
            <StyledTableCell align="right">Room Name</StyledTableCell>
            <StyledTableCell align="right">Room Capacity</StyledTableCell>
            <StyledTableCell align="right">Room Floor</StyledTableCell>
            <StyledTableCell align="right">Room location</StyledTableCell>
            <StyledTableCell align="right">Creation Date</StyledTableCell>
            <StyledTableCell align="right">Purpose</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>

        </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.roomCode}>

              <StyledTableCell component="th" scope="row">
                {row.roomCode}
              </StyledTableCell>
              <StyledTableCell align="right">{row.roomName}</StyledTableCell>
              <StyledTableCell align="right">{row.roomCapacity}</StyledTableCell>
              <StyledTableCell align="right">{row.roomFloor}</StyledTableCell>
              <StyledTableCell align="right">{row.roomLocation}</StyledTableCell>
              <StyledTableCell align="right">{row.creationDate}</StyledTableCell>
              <StyledTableCell align="right">{row.purpose}</StyledTableCell>

              <StyledTableCell align="right"> 
              <div className={row.status === 'Active' ? 'active' : 'inactive'}> {row.status}</div>
               </StyledTableCell>


              <StyledTableCell align="right">
                <Button variant="contained" size="small">
               Edit
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" size="small" onClick={()=>{deleteRecord(row.roomCode)}}>
                Delete
                </Button>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}