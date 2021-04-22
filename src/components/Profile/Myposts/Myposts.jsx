import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likecounts={p.likecounts} />);

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