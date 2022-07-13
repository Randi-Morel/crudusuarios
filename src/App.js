import React from 'react'
import {Añadir} from './components/Añadir';
import {IconButton, Table} from '@mui/material'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";

class UserModel {
    id= null;
    fullName= '';
    age= '';
    email= '';
}

export default function App() {
    const [users, setUsers] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [model, setModel] = React.useState(new UserModel());


    const onReset = () => {
        setModel(new UserModel())
        setOpen(false)
    }

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    const nuevoUsuario = () => {
        let id = uuidv4()
        let userList = [...users]
        userList.push({...model, id})
        setUsers(userList)
        onReset()
    };

    const updateUser = () => {
        let userList = [...users]
        userList.splice(users.findIndex(u => u.id === model.id), 1, model);
        setUsers(userList)
        onReset()
    }

    const onEdit = (userId) => {
        let userList = [...users]
        let currentUser = userList.find(u => u.id === userId)
        setModel(prevState => ({...prevState, ...currentUser}))
        setOpen(true)
    }

    const onDelete = (userId) => {
        let userList = [...users].filter(u => u.id !== userId)
        setUsers(userList)
        onReset()
    }

    const onChange = ({target}) => {
        const {name, value} = target
        setModel(prevState => ({...prevState, [name]: value}))
    }


    return (
        <div>
            <h1>
                User List
            </h1>

            <Button variant='outlined' onClick={()=>setOpen(true)}>Nuevo Usuario</Button>
            <Añadir open={open} close={onReset} model={model} nuevoUsuario={nuevoUsuario} updateUser={updateUser}  onChange={onChange}/>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Users</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Mail</TableCell>
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell align="center">{user.fullName}</TableCell>
                                <TableCell align="center">{user.age}</TableCell>
                                <TableCell align="center">{user.email}</TableCell>

                                <TableCell align='center'>
                                    <IconButton onClick={()=>onEdit(user.id)} style={{marginRight: 25}} aria-label="delete">
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton onClick={()=>onDelete(user.id)} style={{marginRight: 15}} aria-label="delete">
                                        <ClearIcon color='error'/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
