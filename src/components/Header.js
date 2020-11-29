import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import tinder from './../assets/tinder.jpg'


const Header = () => {
    return(
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img 
            className="header__logo"
            src={tinder}
            alt="tinder logo"
            />
        </div>
    )
}

export default Header