type Props = {
    href: string
    name: string
    path: string
}

function Navbar(props: Props) {
    return (
        <a className={`navButton ${props.href === props.path ? "border-b-blue-300" : "border-b-blue-950"}`} href={props.href}>
            <p>{props.name}</p>
        </a>
    );
}

export default Navbar;
