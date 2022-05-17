import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Navbar,Alignment ,Button,Colors} from "@blueprintjs/core";
export default function Header() {
    return (

        <Navbar style={{ background: Colors.GREEN2 }}>
        <Navbar.Group align={Alignment.LEFT}>
            
            
            <Button style={{ color: Colors.WHITE}} className="bp4-minimal"  text="Home" />
            
        </Navbar.Group>
    </Navbar>

    )
}