import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import store from "../redux/store";
import EditDialog from "./dialogs/editDialog";

const UserDetalise = ({ match }: any) => {
    const [user, setUser]: any = useState();
    const [dialogOpne, setDialog] = useState(false);

    const onCloseDialog=()=>{
        store.getState().users.map((el: any) => {

            if (el.id == match.params.id) {

                setUser(el);
            }
        })

        setDialog(false);
    }

    const onOpenDialog=()=>{
        setDialog(true);
    }

    useEffect(() => {
        store.getState().users.map((el: any) => {

            if (el.id == match.params.id) {

                setUser(el);
            }
        })


    }, [match, user,store]);


    if (!user || user === undefined) {
        return (<Card >
            <CardActionArea >
                <CardMedia
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <CircularProgress />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>)
    }


    return (
        <div style={{ width: "70%", marginTop: "5%", marginLeft: "auto", marginRight: "auto" }}>

            <Card variant="outlined">
                <CardContent style={{ textAlign: "left" }}>
                    <Typography variant="h5" component="h2">
                        {user.name}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>

                        {user.username}<br />
                        {user.id}
                    </Typography>

                    <Typography variant="body2" component="p">
                        phone :- {user.phone}<br /><br />
                        address:-<tr />
                        {user.address.city}<tr />
                        {user.address.street}<tr />
                        {user.address.zipcode}
                        <br /><br />
                        Company :- {user.company.name}
                        <br />

                    </Typography>
                    <Typography color="textSecondary">
                        {user.email}
                    </Typography>
                </CardContent>
                <CardActions style={{ textAlign: "right" }}>
                    <Button color="primary" size="small" onClick={()=>setDialog(true)} >Edit</Button>
                </CardActions>
            </Card>
            <EditDialog dialogOpne={dialogOpne} onCloseDialog={onCloseDialog} user={user}/>
        </div>
    )
}

export default UserDetalise;