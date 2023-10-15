import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../../Constants";
import { RootState } from "../../../store";
import { toggleSidebar } from "../../../store/reducers/sidebarReducer";
import Container from "../ContainerWrapper";
import NavLink from "../NavLink";

const Navbar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  return (
    <header className="dark:bg-neutral-900 bg-zinc-100  border-b dark:border-neutral-800 md:py-3 py-2 fixed top-0 right-0 left-0  w-full">
      <Container>
        <nav className="flex justify-between items-center ">
          <Link to="/">
            <h2 className="text-xl font-semibold">Crypto World</h2>
          </Link>
          <ul className="gap-5 items-center hidden lg:flex">
            {routes.map((route) => {
              const Icon = route.icon;
              return (
                <li key={route.to}>
                  <NavLink to={route.to}>
                    <Icon size={20} />
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <button
            className="lg:hidden dark:hover:bg-neutral-800 hover:bg-zinc-200 p-2 rounded transition-all ease-in-out duration-200"
            onClick={() => dispatch(toggleSidebar())}
          >
            <AiOutlineMenu size={20} />
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
