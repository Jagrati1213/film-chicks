import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../utils/redux/slice/UserSlice';
import { toggleRecommendationView } from '../../utils/redux/slice/GptSlice';
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase/Firebase';
import { FaSignOutAlt } from "react-icons/fa";

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((store) => store.user);
    const gpt = useSelector((store) => store.gpt);
    const [isMenuShowMenu, setIsMenuShow] = useState(false);

    // Toggle recommendation
    const handleToggleRecommendationView = () => {
        dispatch(toggleRecommendationView());
    }

    // SignOut
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    }

    // Toggle dropdown
    const toggleMenu = () => {
        setIsMenuShow(!isMenuShowMenu);
    }

    return (
        <header className="header">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={'/browse'}>
                    <h3 className='header-logo-name'>
                        FilmChicks
                    </h3>
                </Link>
                {
                    (user !== null || localStorage.getItem('user')) &&
                    <div
                        className="inline-block relative"
                        onClick={toggleMenu}>

                        <div className="toggle-btn">
                            <span className="mr-1 hidden lg:inline-block">Hi,Welcome </span>
                            <img src={user?.photoURL} className='w-8 mx-3 object-cover rounded-full' alt="film_clicks_avatar" />
                        </div>

                        <ul onClick={toggleMenu}
                            className={`right-0 absolute ${isMenuShowMenu ? 'block' : 'hidden'} header-dropdown`}
                        >

                            <li onClick={handleSignOut}
                                className="header-dropdown-list">
                                SignOut<FaSignOutAlt />
                            </li>
                            {/* <li onClick={handleToggleRecommendationView}
                                className='header-dropdown-list'>
                                <Link to={'/browse'}> {!gpt.showRecommendation ? 'Get Recommendation' : 'Back to Home'}</Link>
                            </li> */}
                        </ul>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header