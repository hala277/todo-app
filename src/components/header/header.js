import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Navbar,Alignment ,Button,Colors} from "@blueprintjs/core";
import { AuthContext } from "../../context/auth/context";
import { useContext } from "react";
import { When } from "react-if";

export default function Header() {
    const context = useContext(AuthContext);
    return (

        <When condition={context.logIn}>
        <Navbar style={{ background: Colors.GREEN2 }}>
        <Navbar.Group align={Alignment.LEFT}>
            
            
            <Button style={{ color: Colors.WHITE}} className="bp4-minimal"  text="Home" />
            <Button style={{ color: Colors.WHITE}} className="bp4-minimal"  text="logout"  onClick={context.logOut} />
            
        </Navbar.Group>
    </Navbar>
    </When>

    )
}