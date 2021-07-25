import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from "react-router-dom";


const UserCard = ({ user,username, name, email, phone, website, loading }: any) => {


    if (loading) {
        return (
            <div style={{ width: "70%", marginTop: "5%", marginLeft: "auto", marginRight: "auto" }}>
                <Card style={{ backgroundColor: "#eaf3f2"}}>
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
                </Card>
            </div>
        )
    }

    return (
        <div style={{ width: "70%", marginTop: "5%", marginLeft: "auto", marginRight: "auto" }}>
            <Card style={{ backgroundColor: "#eaf3f2"}}>
                <Link style={{textDecoration:"none",color:"inherit"}} to={"/userdetalies/"+user}>
                    <CardActionArea >
                        <CardMedia
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {username}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {name}<br />{email}

                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {phone}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    );
}

export default UserCard;
