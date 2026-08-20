import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

export default function AppLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="brand-mark">CRS Gateway</p>
          <h1 className="brand-title">Course Registration Portal</h1>
        </div>

        <div className="topbar-right">
          <nav className="nav-links" aria-label="Main navigation">
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Mon hoc
            </NavLink>
            <NavLink
              to="/registrations"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Dang ky
            </NavLink>
          </nav>

          <div className="user-box">
            <span>{user?.username}</span>
            <span className="pill">{user?.role}</span>
            <button type="button" className="btn ghost" onClick={logout}>
              Dang xuat
            </button>
          </div>
        </div>
      </header>

      <main className="content-wrap">
        <Outlet />
      </main>
    </div>
  );
}
