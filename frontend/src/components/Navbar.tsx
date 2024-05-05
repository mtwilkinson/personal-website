import NavbarButton from "./NavbarButton.tsx";

function Navbar() {

    return (
        <div className="flex h-12 w-screen bg-blue-950 px-16">
            <NavbarButton href={"/"} name={"Homepage"} />
            <NavbarButton href={"/projects"} name={"Projects"} />
            <NavbarButton href={"/contact"} name={"Contact Michael"} />
            <NavbarButton href={"/example"} name={"Example"} />
        </div>
    );
}

export default Navbar;
