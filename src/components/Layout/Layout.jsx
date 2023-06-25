import { NavLink, Outlet } from "react-router-dom";
import css from './Layout.module.css';

const Layout = () => {
    return(
    <>
        <header className={css.header}>
            <ul className={css.list}>
                <li className={css.item}>
                    <NavLink to="/" className={css.link}> Home page </NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/movies" className={css.link}>Movies</NavLink>
                </li>
            </ul>
        </header>
        <main>
            <div>
              <Outlet/>
            </div>
        </main>
    </>
    )
}

export default Layout;