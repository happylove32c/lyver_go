import React, { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';


const Home = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        // Assuming the user's name is in their metadata or users table
        setUserName(user.user_metadata?.name || 'Guest');
      } else {
        setUserName('Guest');
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <main className="min-h-screen flex justify-center items-center bg-gray-800">
      <h1 className='text-white text-3xl' >Welcome, {userName}</h1>
      </main>
    </div>
  );
};

export default Home;
