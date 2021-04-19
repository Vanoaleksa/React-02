import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {

  let posts = [
    { id: '1', message: 'Visca el Barca!', likecounts: '100' },
    { id: '2', message: 'Visca el Catalunya!', likecounts: '30' },
  ]

  let postsElements = posts.map(p => <Post message={p.message} likecounts={p.likecounts} />);

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
        {postsElements}
      </div>
    </div>
  );
}
export default Myposts;