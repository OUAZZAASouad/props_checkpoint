import Card from '../components/Card'
import Image from '../components/Image'
import Data from '../components/Data'
import Icons from '../components/Icons'
import Button from '../components/Button'
import PropTypes from 'prop-types'
const Profile = ({fullname, profession, bio, handleName, children}) => {
    let content = {
        display:'grid', 
        gridTemplateColumns : '1fr 2fr',
        gridColumnGap : '20px',
        height : '100%'
    }
    return(
        <div style = {content}>
            <Card fex_style = 'space-around'>
                <Image img = {children}></Image>
                <div>
                    <Data fullname = {fullname} profession = {profession}/>
                    <Icons/>
                </div>
                <Button handleName = {handleName} fullname = {fullname}/>
            </Card>
           <Card fex_style = 'center' >
                <p style = {{textAlign : 'justify', fontStyle : 'italic'}}>{bio}</p>
           </Card>
            
        </div>
    );}

Profile.defaultProps = {
    fullname : 'user name'
}

Profile.propTypes = {
    fullname : PropTypes.string
};
export default Profile;