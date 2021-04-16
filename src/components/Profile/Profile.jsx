import s from './Profile.module.css';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <ProfileInfo />
      <Myposts />
    </div>
  );
}
export default Profile;