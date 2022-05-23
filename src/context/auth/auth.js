import { useContext } from "react";
import {When} from "react-if"; 
import {AuthContext} from "./context.js";

export default function Auth(props){
    const context = useContext(AuthContext);
    const canDO = context.canDo(props.capability);

    return(
        <When condition={context.logIn && canDO}>
            {props.children}
        </When>
    )
}