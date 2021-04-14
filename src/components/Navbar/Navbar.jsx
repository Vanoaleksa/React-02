import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.activelink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`} >
          <NavLink to='/dialogs' activeClassName={s.activelink}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' activeClassName={s.activelink}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' activeClassName={s.activelink}> Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' activeClassName={s.activelink}>Settings</NavLink>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;