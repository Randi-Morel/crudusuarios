import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Añadir = ({nuevoUsuario, updateUser, model, open, close, onChange}) => {

    const onClick = () => {
        if (model.id) {
            updateUser()
        } else {
            nuevoUsuario()
        }
    }

    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle> {model.id ? "Actualizar" : "Agregar"} Usuario</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Informacion de Usuario
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fullName"
                        name="fullName"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={model.fullName}
                        onChange={onChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="age"
                        name="age"
                        label="Age"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={model.age}
                        onChange={onChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={model.email}
                        onChange={onChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Cancel</Button>
                    <Button onClick={onClick}>{model.id ? "Actualizar" : "Agregar"}</Button>
                </DialogActions>
            </Dialog>


        </div>
    )
}
