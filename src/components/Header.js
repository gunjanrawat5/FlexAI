import { useNavigate } from 'react-router-dom';
import logo from '../utils/Logo1.png';
import { auth} from '../utils/firebase';
import {signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = ()=> {
        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
    }
    return (
        <div className='relative w-full p-4 bg-gray-100'>  {/* Ensured full width and some padding */}
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <img
                    className='w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-r from-gray-300'
                    src={logo}
                    alt="logo"
                />

                {/* User Icon and Sign Out */}
                {user &&<div className='flex items-center'>
                    <img
                        alt='user-icon'
                        className='w-12 h-12 rounded-full'
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    />
                    <button onClick={handleSignOut} className='ml-4 px-4 py-2 bg-red-500 text-white rounded'>
                        Sign Out
                    </button>
                </div>
                }
            </div>
        </div>
    );
}

export default Header;
