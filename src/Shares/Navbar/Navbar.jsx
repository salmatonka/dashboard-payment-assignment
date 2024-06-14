import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../useHooks/useCart';

const Navbar = () => {
  const [cart] = useCart()
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLogOut = () => {
    logOut()
      .then(toast.warning('user logOut...!'))
      .catch(error => toast.error(error.message))
  }


  // menu items for show in header 
  const menuItem = <>
    <li><NavLink className="rounded-xl" to='/'>Home</NavLink></li>
    <li><NavLink to="/dashboard/cart">
      <button className="btn">
        <FaShoppingCart className="badge badge-primary"></FaShoppingCart>
        <div className="">+{cart?.length}</div>
      </button>
    </NavLink></li>
    <li><NavLink className=" rounded-xl" to='/blog'>Blog</NavLink></li>
    <li><NavLink className="rounded-xl" to='/abouttUs'>AboutUs</NavLink></li>
    <li><NavLink className="rounded-xl" to='/contctUs'>contactUs</NavLink></li>
    {
      user?.uid ?
        <>
          <li><NavLink className="rounded-xl " to='/service'>Service</NavLink></li>
          {/* <li><NavLink className="rounded-xl " to='/dashboard'>Dashboard</NavLink></li> */}
          <li><button onClick={handleLogOut}>Sign Out</button></li>
        </>
        :
        <li><Link to='/logIn'>Login</Link></li>
    }

  </>

  return (
    <div className="navbar text-white bg-[#1D59A0] shadow-xl z-10 fixed px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
            {menuItem}
          </ul>
        </div>

        <Link to='/' className="btn btn-ghost normal-case text-xl">
          <img alt="" className="w-12 h-12 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://previews.123rf.com/images/butenkow/butenkow1701/butenkow170102106/70227809-wedding-photographer-vector-illustration-of-icon.jpg" /> Wedding House</Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu menu-horizontal p-0">
            {menuItem}
          </ul>
        </div>
        <label htmlFor='dashboard-drawer' tabIndex={3} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
};


export default Navbar
