import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../../Constants";
import { RootState } from "../../../store";
import { toggleSidebar } from "../../../store/reducers/sidebarReducer";
import NavLink from "../NavLink";

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-neutral-900 dark:text-gray-400 bg-opacity-70 h-screen w-full absolute inset-0 transition-all duration-300 ease-linear ${
        isOpen ? "visible" : "invisible"
      }`}
      onClick={() => dispatch(toggleSidebar())}
    >
      <aside
        className={`dark:bg-neutral-900 bg-zinc-100 h-screen md:w-[30%] w-[80%] border-r dark:border-neutral-800 shadow-2xl transition-all duration-300 ease-linear ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="p-5 flex justify-between gap-5 items-center">
            <Link to="/">
              <h2 className="text-xl font-semibold">Crypto World</h2>
            </Link>
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="dark:hover:bg-neutral-800 hover:bg-zinc-200 p-2 rounded transition-all ease-in-out duration-200"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>
          <ul>
            {routes.map((route) => {
              const Icon = route.icon;
              return (
                <li
                  onClick={() => dispatch(toggleSidebar())}
                  key={route.to}
                  className="py-3 px-5 dark:hover:bg-neutral-800 hover:bg-zinc-200"
                >
                  <NavLink to={route.to}>
                    <Icon size={20} />
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
