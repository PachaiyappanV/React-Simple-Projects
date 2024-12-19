import { useEffect, useState } from "react";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("PachaiyappanV");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    if (!userName.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []); // Fetch default user on mount

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center mt-8 text-gray-900 tracking-wide">
        GitHub Profile Finder
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={userName}
          placeholder="Enter GitHub Username"
          onChange={(e) => setUserName(e.target.value)}
          className="w-full max-w-sm px-4 py-2 border-2 border-gray-300 rounded-l-lg focus:outline-none   focus:border-blue-500"
        />
        <button
          onClick={fetchUserData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-lg transition duration-300"
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="text-center text-gray-500 text-lg">Loading...</div>
      )}

      {error && <div className="text-center text-red-500 text-lg">{error}</div>}

      {userData && (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col items-center p-6">
            <img
              src={userData.avatar_url}
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4 border-4 border-gray-300"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {userData.name || "No Name"}
            </h2>
            <p className="text-gray-600 mb-2">@{userData.login}</p>
            {userData.bio && (
              <p className="text-gray-700 mb-4 text-center">{userData.bio}</p>
            )}

            <div className="flex justify-around w-full mt-4">
              <div className="text-center">
                <p className="font-bold text-gray-700">{userData.followers}</p>
                <p className="text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-700">{userData.following}</p>
                <p className="text-gray-500">Following</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-700">
                  {userData.public_repos}
                </p>
                <p className="text-gray-500">Repositories</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubProfileFinder;
