import { Fab, Tooltip } from "@material-ui/core";
import { useEffect } from "react";
import { connect, useDispatch, useStore } from "react-redux";
import { getUsers } from "../redux/actions/user";
import UserCard from "./userCard"
import Add from '@material-ui/icons/Add'
import { useState } from "react";
import AddDialog from "./dialogs/addDialog";


const mapStateToProps = (state: any) => {
    if (state.users.length === 0) {
        // console.log(state);
        return {}
    }

    return state;
}


const HomeConnecter = ({ users }: any) => {
    const store = useStore();
    const [addDialog,setAddDialog]=useState(false);

    useEffect(() => {
        // console.log(users);

    }, [users])

    const onCloseDialog=()=>{
        setAddDialog(false)
    }

    if (users === undefined) {
        return (<>
            <UserCard loading={true} />
            <UserCard loading={true} />
            <UserCard loading={true} />
        </>)
    }

    return (
        <div>

            {
                users.map((el: any) => {
                    return <UserCard key={el.id} user={el.id} website={el.website} phone={el.phone} email={el.email} name={el.name} username={el.username} />
                })
            }

            <div style={
                {
                    position:"fixed",
                    top:"85%",
                    left:"88%",
                }
            }>
                <Tooltip title="Add" aria-label="add">
                    <Fab color="primary">
                        
                        <Add onClick={()=>setAddDialog(true)}/>
                    </Fab>
                </Tooltip>
            </div>
            <AddDialog dialogOpne={addDialog} onCloseDialog={onCloseDialog}/>
        </div>
    );
}


const Home = connect(mapStateToProps)(HomeConnecter);
export default Home;