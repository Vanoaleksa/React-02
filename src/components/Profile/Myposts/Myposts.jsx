import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {

  let postsData = [
    { id: '1', message: 'Visca el Barca!', likecounts:'100' },
    { id: '2', message: 'Visca el Catalunya!', likecounts:'30' },
  ]

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
        <Post message={postsData[0].message} likecounts={postsData[0].likecounts} />
        <Post message={postsData[1].message} likecounts={postsData[1].likecounts} />
      </div>
    </div>
  );
}
export default Myposts;