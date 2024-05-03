function Navbar() {

    return (
        <div className="flex h-16 w-screen bg-blue-950 px-16 items-center">
            <a className={"navButton"} href={"/"}>
                <p>Homepage</p>
            </a>
            <a className={"navButton"} href={"/example"}>
                <p>Example page</p>
            </a>
        </div>
    );
}

export default Navbar;
