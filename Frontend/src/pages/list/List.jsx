import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './List.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import VisibilityIcon from '@mui/icons-material/Visibility';

const List = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/Chartdatatable/')  // Replace with your API endpoint
      .then(response => {
        setRows(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="side">
      <Sidebar />
      <div className="table">
        <Navbar />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="tablecell">Tracking ID</TableCell>
                <TableCell className="tablecell">Student Name</TableCell>
                <TableCell className="tablecell">D.O.B</TableCell>
                <TableCell className="tablecell">Mobile</TableCell>
                <TableCell className="tablecell">Email</TableCell>
                <TableCell className="tablecell">IsActive</TableCell>
                <TableCell className="tablecell">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Rowid}>
                  <TableCell>{row.ReferenceNo}</TableCell>
                  <TableCell className="tablecell">
                    <div className="cellwrapper">
                      {row.name}
                    </div>
                  </TableCell>
                  <TableCell className="tablecell">{row.dob}</TableCell>
                  <TableCell className="tablecell">{row.mobile}</TableCell>
                  <TableCell className="tablecell">{row.emailid}</TableCell>
                  <TableCell className="tablecell">{row.isactive}</TableCell>
                  <TableCell className="tablecell">
                    <span className={`status ${row.status}`}>
                      {<VisibilityIcon className="eyeicon"/>}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default List;
