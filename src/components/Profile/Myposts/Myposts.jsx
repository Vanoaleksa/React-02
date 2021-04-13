import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {
  return (
    <div>
      My posts
      <div>
<textarea></textarea>   
<button>New post</button> 
      </div>
      <div className={s.posts}>
        <Post message='Visca el Barca!' likecounts='100'/>
        <Post message='Vaisca el Catalunya!' likecounts='30'/>
        
      </div>
    </div>    
  );
}
export default Myposts;