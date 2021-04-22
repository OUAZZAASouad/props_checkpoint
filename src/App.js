import './App.css';
import Profile from './profile/Profile'
import avatar from './images/avatar.jpg'

const  App = () => {
  let user = {
    fullname   : 'John Sullivan',
    profession : 'Human Resources specialist',
    image      : avatar,
    bio        : 'John Sullivan is a Human Resources specialist with a decadeof successful experience in hiring and employee management. John specializes in Human Resource technologies and regularly attends national training sessions to showcase new HR tech trends, such as self-service, wellness apps, and people analytics tools.'
  }
  const handleName = (fullname) => alert(fullname); 
  return (
    <div className = 'warpper'>
      <div className="content">
        <Profile {...user} handleName = {handleName}>
          {user.image}
        </Profile>
      </div>
    </div>
  );
}

export default App;
