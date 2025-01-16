import React, { useEffect, useState } from 'react';
import gearimg from '../assets/gear.svg';
import truckimg from '../assets/truck.svg';
import { Link } from 'react-router-dom';
import supabase from '../../supabaseClient';



const DashNav = () => {
  const [userName, setUserName] = useState('John Doe');
  const [userAvatar, setUserAvatar] = useState('https://www.w3schools.com/howto/img_avatar.png');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        // Assuming the avatar and name are in user_metadata
        setUserName(user.user_metadata?.name || 'Guest');
        setUserAvatar(user.user_metadata?.avatar_url || 'https://www.w3schools.com/howto/img_avatar.png');
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 fixed top-0 z-10 w-full p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={userAvatar}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden sm:block text-lg">{userName}</div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/orders" className="text-white hover:text-purple-500">
            <img src={truckimg} alt="Orders" className="h-10" />
          </Link>
          <Link to="/settings" className="text-white hover:text-purple-500">
            <img src={gearimg} alt="Settings" className="h-10" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DashNav;
