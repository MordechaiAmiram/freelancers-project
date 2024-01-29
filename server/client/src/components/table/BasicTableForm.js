import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Checkbox, FormControlLabel } from '@mui/material';

export default function BasicTableForm({ usersOnHold, handleConfirm, handleChange, checked }) {
  console.log(usersOnHold);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>שם פרטי</TableCell>
              <TableCell>שם משפחה</TableCell>
              <TableCell align="right">טלפון</TableCell>
              <TableCell align="right">אימייל</TableCell>
              <TableCell align="right">תחום</TableCell>
              <TableCell align="right">סוג חשבון</TableCell>
              <TableCell align="right">כותרת</TableCell>
              <TableCell align="right">אודות</TableCell>
              <TableCell align="right">אזור שירות</TableCell>
              <TableCell align="right">לאישור</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersOnHold?.map((user, index) => (
              <TableRow
                key={user.userId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.firstName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.lastName}
                </TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.categoryName}</TableCell>
                <TableCell align="right">{user.accountType}</TableCell>
                <TableCell align="right">{user.title}</TableCell>
                <TableCell align="right">{user.about}</TableCell>
                <TableCell align="right">{user.serviceLocation}</TableCell>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                  <FormControlLabel
                    label="אשר"
                    control={<Checkbox
                      checked={checked[index]}
                      onChange={(e) => { handleChange(e, index, user.userId) }} 
                      />}
                  />
                </Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleConfirm}>אישור</Button>
    </>
  );
}