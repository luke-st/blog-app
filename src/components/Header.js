import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
import { history } from '../routers/AppRouter'

const onClick = () => history.push('/login')

export const Header = ({ startLogout }, props) => (
    <header className="header">
        <div className='content-container'>
            <div className='header__content'>
                <Link className="header__title" to="/dashboard">
                    <h1>YouBlog</h1>
                </Link>
                {!!props.auth ? (
                    <button className='button button--link' onClick={startLogout}>Logout</button>
                ) : (
                    <button className='button button--link' onClick={onClick}>Login</button>
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