import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea> </textarea>
        </div>
        <div>
          <button>New post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Visca el Barca!' likecounts='100' />
        <Post message='Vaisca el Catalunya!' likecounts='30' />
      </div>
    </div>
  );
}
export default Myposts;