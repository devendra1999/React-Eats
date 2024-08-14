import logo from '../utils/logo.png'

const Title = () => (
    <a href="/">
        <img 
            className="logo"
            alt="logo"
            src= {logo}
        />
    </a>
)
const Header = () => {
    return (
        <>
            <div className="header">
                <Title/>
                    <div className="nav-items">
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>React-Eats Corporate</li>
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