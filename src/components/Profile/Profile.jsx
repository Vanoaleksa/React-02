import s from './Profile.module.css';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <Myposts posts={props.state.posts} />
    </div>
  );
}
export default Profile;