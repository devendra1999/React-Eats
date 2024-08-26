import { Link } from "react-router-dom";

const Title = () => (
    <h1 >
    <Link to="/" className="heading">
        React Eats
    </Link>
    </h1>
)
const Header = () => {
    return (
        <>
            <div className="header">
                <Title />
                <div className="nav-items">
                    <ul>
                        <Link to="about" className="tags">About</Link>
                        <Link to="help" className="tags">Help</Link>
                        <Link to="contact" className="tags">Contact</Link>
                        <Link to="cart" className="tags">Cart</Link>
                        <Link to="login" className="tags">Login</Link>
                        <Link to="sign-up" className="tags">Sign Up</Link>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;