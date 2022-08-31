import './style.scss'

const Header = () => {
    const logout = () => {
        localStorage.removeItem("access_token");
        window.location.reload();
    }
    return (
        <div className='header'>
            <div className='left'>
                <h1 className='title'>Product List</h1>
                <button className='btn-create'>Create new</button>
            </div>
            <div>
                <button onClick={logout} className='btn-logout'>Logout</button>
            </div>
        </div>
    )
}

export default Header
