import { useState, useEffect } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null); // To store fetched data
  const [isLoading, setIsLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track any errors

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { ...options, signal });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        if (signal.aborted) return;
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}

function UseFetchHook() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Posts</h1>
      <h1 onClick={(e) => console.log(e)} className=" cursor-pointer">
        click me
      </h1>

      {isLoading && <p className="text-blue-600">Loading...</p>}

      {error && (
        <p className="text-red-600 bg-red-100 p-4 rounded-md shadow">
          Error: {error}
        </p>
      )}

      {data && (
        <ul className="w-full max-w-xl bg-white shadow-md rounded-lg divide-y divide-gray-200">
          {data.map((post) => (
            <li key={post.id} className="p-4 hover:bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-700">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UseFetchHook;
