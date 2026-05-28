import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header-logo">
          <a href="#">
            <img src="/runappicon.png" alt="icon" id="icon" />
          </a>
        </h1>

        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-item">
              <Link to="/upload">走行距離入力フォーム</Link>
            </li>
            <li>
              <Link to="/create">ユーザー登録フォーム</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
