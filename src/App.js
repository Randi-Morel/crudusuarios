import React from 'react'
import { Añadir } from './components/Añadir';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

export default function App() {
  const [users, setUsers] = React.useState([]);

  const nuevoUsuario = (name, age, gmail) => {
    setUsers([
      {
        name,
        age,
        gmail
      },
      ...users]);
  };

  console.log(users);
  return (
    <div>
      <h1>
        User List
      </h1>

      <Añadir nuevoUsuario={nuevoUsuario}/>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Users</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Gmail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
              >
                {/* <TableCell component="th" scope="row">
                  {user.name}
                </TableCell> */}
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.age}</TableCell>
                <TableCell align="center">{user.gmail}</TableCell>
                <TableCell align='right'>
                  <EditIcon />
                </TableCell>
                <TableCell align='right'>
                  <ClearIcon color='error' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}