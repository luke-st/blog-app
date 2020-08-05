import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
import { history } from '../routers/AppRouter'

const onClick = () => history.push('/login')

export const Header = (props) => (
    <header className="header">
        <div className='content-container'>
            <div className='header__content'>
                <Link className="header__title" to="/">
                    <h1>YouBlog</h1>
                </Link>
                {props.auth.displayname ? (
                    <div className='header__name'>
                    <p>Hi, <span>{props.auth.displayname[0]}</span><button className='button button--link' onClick={props.startLogout}>Logout</button></p>
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