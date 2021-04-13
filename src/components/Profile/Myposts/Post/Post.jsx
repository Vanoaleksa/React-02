import s from './Post.module.css';

const Post = (props) => {
  return (

    <div className={s.item}>
      <img src='https://img.championat.com/c/900x900/news/big/u/i/istochnik-messi-perejdjot-v-pszh-letom-2021-goda_16070643101602168613.jpg' />
      {props.message}
      <div>
        <span>like {props.likecounts}</span>
      </div>
    </div>
  );
}
export default Post;