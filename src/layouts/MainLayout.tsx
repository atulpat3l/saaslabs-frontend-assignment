import { Link, Outlet, useLocation } from "react-router";
import "./MainLayout.css";
import {
  AlertCircleIcon,
  HouseIcon,
  LoaderIcon,
  SettingsIcon,
} from "lucide-react";

const MainLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <Link to="/" className={isActive("/")}>
            <HouseIcon size={20} className="nav-link-icon" />
            <span className="nav-link-text">Home</span>
          </Link>
          <Link to="/loading" className={isActive("/loading")}>
            <LoaderIcon size={20} className="nav-link-icon" />
            <span className="nav-link-text">Loading</span>
          </Link>
          <Link to="/error" className={isActive("/error")}>
            <AlertCircleIcon size={20} className="nav-link-icon" />
            <span className="nav-link-text">Error</span>
          </Link>
          <Link to="/configurable" className={isActive("/configurable")}>
            <SettingsIcon size={20} className="nav-link-icon" />
            <span className="nav-link-text">Configurable</span>
          </Link>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
