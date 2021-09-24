import '../css/Profile.css';
import {Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Profile=()=>{
    return(
        <Switch>
            <div className="profile_component">
                <Link className="signin" to="signin">Signin</Link>
                <Link className="signup" to="signup">Signup</Link>
            </div>
        </Switch>
    )
}

export default Profile;