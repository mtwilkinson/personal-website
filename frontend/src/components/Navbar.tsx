import NavbarButton from "./NavbarButton.tsx";

function Navbar() {

    return (
        <div className="flex h-16 w-screen bg-blue-950 px-16 items-center">
            <NavbarButton href={"/"} path={window.location.pathname}  name={"Homepage"} />
            <NavbarButton href={"/example"} path={window.location.pathname}  name={"Example"} />
        </div>
    );
}

export default Navbar;
