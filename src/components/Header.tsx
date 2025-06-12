type NavProps = {
    setPage: (page:string) => void
}

export const Header = ({setPage}: NavProps) => {
    return (
        <header>
            <h1>The Hunter's Journal</h1>
            <nav>
                <button onClick={() => setPage("home")}>Home</button>
                <button onClick={() => setPage("about")}>About Us</button>
                <button onClick={() => setPage("careers")}>Careers</button>
                <button onClick={() => setPage("report")}>Report a Monster</button>
            </nav>
        </header>
    )
}
