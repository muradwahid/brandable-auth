import { Link, Outlet } from "react-router";
import siteLogo from "../assets/logo.png";

const Layout = () => {
  return (
    <div>
      <nav className="w-full py-5 border-b-[0.5px] border-b-[#171819]">
        <div className="xl:w-[1400px] lg:w-4/5 md:w-5/6 w-[90%] mx-auto flex items-center justify-between relative">
          <Link to="/user/profile">
            <img className="w-[116px] h-[52px]" src={siteLogo} alt="" />
          </Link>
          <div className="hidden md:block">
            <div className="flex gap-12">
              <p className="text-[15px]">Publications</p>
              <p className="text-[15px]">Conferences</p>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;