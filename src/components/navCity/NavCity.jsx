import scss from "./NavCity.module.scss"
import { Link } from "react-router-dom"

function NavCity() {
  return (
    <div className={scss.navCity__group}>
        <div className={scss.navLink__block}>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
        </div>
    </div>
  )
}

export default NavCity