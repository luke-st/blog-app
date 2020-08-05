import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
import { history } from '../routers/AppRouter'

const onClick = () => history.push('/login')

export const Header = ({ startLogout, auth }) => (
    <header className="header">
        <div className='content-container'>
            <div className='header__content'>
                <Link className="header__title" to="/dashboard">
                    <h1>YouBlog</h1>
                </Link>
                {console.log(auth)}
                {auth.displayname ? (
                    <div className='header__name'>
                    <p>Hi, <span>{auth.displayname[0]}</span><button className='button button--link' onClick={startLogout}>Logout</button></p>
                    </div>
                ) : (
                    <button className='button button--link' id='loginbutton' onClick={onClick}>Login</button>
                )}
            </div>
        </div>
    </header>
);

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)