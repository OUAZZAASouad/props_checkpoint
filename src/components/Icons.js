import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

var arr = new Array(5);
const Icons = () => {
    return (
        <div style = {{display : 'flex', justifyContent : 'space-around'}}>
                        {arr.fill(0).map(item => 
                        <FontAwesomeIcon icon={faStar} color = 'yellow' size="lg" />
                        
                        )}
        </div>
    )
    
}

export default Icons;