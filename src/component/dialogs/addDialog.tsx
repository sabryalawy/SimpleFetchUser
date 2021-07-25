import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { addUser, updateUser } from "../../redux/actions/user";
import store from "../../redux/store";

const AddDialog = ({ dialogOpne, onCloseDialog }: any) => {

    const [dataUser, setDataUser] = useState({
        id:"",
        name:"",
        username:"",
        phone:"",
        email:"",
        company:{name:""},
        address:{city:"",street:"",zipcode:""}
    });
    const dispatch = useDispatch();

    useEffect(()=>{
        var lastId=0;
        lastId=store.getState().users.length;
        lastId+=1;
        setDataUser({
            ...dataUser,
            id:lastId.toString()
        })        
    },[]);

    const handleEdit = () => {

        store.dispatch(addUser(dataUser))

        onCloseDialog();
    }

    return (

        <Dialog
            open={dialogOpne}
            onClose={onCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Add New user</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" color="textPrimary">
                    <div>
                        <TextField style={{ margin: "2%" }} onChange={(e) => setDataUser({ ...dataUser, name: e.target.value })} required id="standard-required" label="Name" defaultValue="" />
                        <TextField style={{ margin: "2%" }} onChange={(e) => setDataUser({ ...dataUser, username: e.target.value })} required id="standard-required" label="User Name" defaultValue="" /><br />
                        <TextField style={{ margin: "2%" }} onChange={(e) => setDataUser({ ...dataUser, phone: e.target.value })} required id="standard-required" label="phone" defaultValue="" /><br />
                        address:-<br />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, address:{...dataUser.address,city: e.target.value} })} id="standard-required" label="City" defaultValue="" />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, address:{...dataUser.address,street: e.target.value} })}  id="standard-required" label="Street" defaultValue="" />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, address:{...dataUser.address,zipcode: e.target.value} })} id="standard-required" label="ZIP-CODE" defaultValue="" /><br />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, company: { name: e.target.value } })} id="standard-required" label="Company Name" defaultValue="" />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} id="standard-required" label="Email" defaultValue="" />

                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleEdit} color="primary">
                    ADD
                </Button>
                <Button onClick={onCloseDialog} color="primary" autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>

    );
}

export default AddDialog;