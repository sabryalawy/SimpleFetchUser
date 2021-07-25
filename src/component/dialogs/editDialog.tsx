import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { updateUser } from "../../redux/actions/user";
import store from "../../redux/store";

const EditDialog = ({ dialogOpne, onCloseDialog, user }: any) => {

    const [address, setAddress] = useState(user.address);
    const [dataUser, setDataUser] = useState(user);
    const dispatch = useDispatch();

    const handleEdit = () => {
        // setDataUser({
        //     ...dataUser,
        //     address: { ...dataUser.address, city:address.city,street:address.city,zipcode:address.zipcode }
        // })
        // console.log(address);
        // console.log(dataUser);
        
        store.dispatch(updateUser(dataUser))

        onCloseDialog();
    }

    return (

        <Dialog
            open={dialogOpne}
            onClose={onCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Edit " + user.name}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" color="textPrimary">
                    <div>
                        <TextField style={{ margin: "2%" }} onChange={(e) => setDataUser({ ...dataUser, name: e.target.value })} required id="standard-required" label="Name" defaultValue={user.name} />
                        <TextField style={{ margin: "2%" }} onChange={(e) => setDataUser({ ...dataUser, username: e.target.value })} required id="standard-required" label="User Name" defaultValue={user.username} /><br />
                        <TextField style={{ margin: "2%" }} onChange={(e) => setDataUser({ ...dataUser, phone: e.target.value })} required id="standard-required" label="phone" defaultValue={user.phone} /><br />
                        address:-<br />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, address:{...dataUser.address,city: e.target.value} })} id="standard-required" label="City" defaultValue={user.address.city} />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, address:{...dataUser.address,street: e.target.value} })}  id="standard-required" label="Street" defaultValue={user.address.street} />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, address:{...dataUser.address,zipcode: e.target.value} })} id="standard-required" label="ZIP-CODE" defaultValue={user.address.zipcode} /><br />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, company: { name: e.target.value } })} id="standard-required" label="Company Name" defaultValue={user.company.name} />
                        <TextField style={{ margin: "2%" }} required onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} id="standard-required" label="Email" defaultValue={user.email} />

                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleEdit} color="primary">
                    SAVE
                </Button>
                <Button onClick={onCloseDialog} color="primary" autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>

    );
}

export default EditDialog;