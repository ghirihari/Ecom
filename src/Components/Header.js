import '../App.css';
import AppBar from './AppBar';

function Header(props) {  
    return (
        <div>
        <AppBar 
            title="Ghost Of Uchiha" 
            tabs={props.tabs}
            toggle={props.toggle}
        />
        </div>
    );
}

export default Header;
