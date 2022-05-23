import { useContext } from "react";
import {When} from "react-if"; 
import {AuthContext} from "./context.js";

export default function Auth(props){
    const context = useContext(AuthContext);
    // const canDO1 = context.canDo(props.capability);

    return(
        <When condition={context.logIn && context.canDo(props.capability)}>
            {props.children}
        </When>
    )
}