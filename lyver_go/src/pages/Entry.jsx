import React, { useState } from 'react';
import supabase from '../../supabaseClient';  // Import the Supabase client

const Entry = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      // Sign up with Supabase
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
  
      // Check if there was an error during sign up
      if (error) throw error;
  
      // Check if user exists in the response
      if (!user) {
        throw new Error('No user returned from sign up');
      }
  
      // You can optionally store the user's first and last name in your database
      const { data, error: insertError } = await supabase
        .from('users') // Assuming you have a users table
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            user_id: user.id, // Access user.id only if user exists
          },
        ]);
  
      if (insertError) throw insertError;
  
      // Handle successful sign up
      alert('Sign up successful!');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 border text-white rounded-lg shadow-lg max-w-4xl w-full flex flex-col lg:flex-row sm:flex-col overflow-hidden">
        {/* Left Section with Image and Gradient */}
        <div className="lg:w-1/2 sm:w-1/2 md:w-1/2 relative hidden lg:block">
          <img
            src="https://i.pinimg.com/736x/50/f6/f7/50f6f731a2ca23aa58cfe4f776ca80a8.jpg" // Replace with your image URL
            alt="Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-purple-700 opacity-70"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
            <div>
              <h1 className="text-3xl font-bold mb-2">lyvergo</h1>
              <button className="text-sm text-purple-300 hover:underline">
                Back to website →
              </button>
            </div>
            <div className="mt-auto">
              <p className="text-2xl font-semibold">Your shop, Your rules</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-gray-900 p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Create an account</h2>
            <p className="text-sm text-gray-400 mb-6">
              Already have an account?{' '}
              <a href="#" className="text-purple-500 hover:underline">
                Log in
              </a>
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>
                {/* Or Divider */}
            <div className="my-6 flex items-center justify-center">
                <hr className="w-1/4 border-t border-gray-400" />
                <span className="mx-4 text-sm text-gray-400">Or</span>
                <hr className="w-1/4 border-t border-gray-400" />
            </div>
          <div className="flex flex-col items-center mt-6">
            <div className="flex gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                <img
                  src="https://www.svgrepo.com/show/353817/google-icon.svg"
                  alt="Google"
                  className="h-5"
                />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
