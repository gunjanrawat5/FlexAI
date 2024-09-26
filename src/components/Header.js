import logo from '../utils/Logo1.png'

const Header = () => {
    return(
        <div className='absolute z-10'>
            <img className='w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-r from-gray-300' src={logo} alt = "logo"/>
        </div>
    )
}

export default Header