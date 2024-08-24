
const Title = () => (
    <a href="/" className="heading">
        <h1>React Eats</h1>
    </a>
)
const Header = () => {
    return (
        <>
            <div className="header">
                <Title/>
                    <div className="nav-items">
                    <ul>
                    <li>About</li>
                    <li>Help</li>
                    <li>Contract</li>
                    <li>Cart</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                    </ul>
                </div>
            </div>
        </>
    ); 
}

export default Header;