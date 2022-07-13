import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Añadir = (props) => {

const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [email, setEmail] = React.useState("");


    // const manejarFormulario = (event) => {
    //     setEmail(event.target.value);
    // };

    const handleCloseSubmit = (event) => {
        event.preventDefault();
        // if (email.trim() !== "") {
        //     props.nuevoUsuario(email);
        //     setEmail("");
        // }
        props.nuevoUsuario(name, age, email);
        setOpen(false);
    };

  return (
    <div>
        <Button variant='outlined' onClick={handleClickOpen}>Nuevo Usuario</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Agregar Usuario</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Informacion de Usuario
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="fullName"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="age"
                    label="Age"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={age}
                    onChange={({target}) => setAge(target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleCloseSubmit}>Guardar</Button>
            </DialogActions>
        </Dialog>


    </div>
  )
}
