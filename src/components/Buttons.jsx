import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-xl font-bold text-red-500">
        Hello Tailwindcss with react vite
      </h1>
      <div className="flex flex-col gap-4 p-6">
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transation">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strock-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          Primary
        </button>
        <button className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transation">
          <svg className="w-5 h-5" fill="none" storke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          Secondry
        </button>
        <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 1314 4l19 7"></path>
          </svg>
          Success
        </button>
        <button
          className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transation "
          disabled
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          Danger
        </button>
        <button
          className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg cursor-not-allowed opacity-50"
          disabled
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"></path>

          </svg>
          Disabled
        </button>
      </div>
      <div className="flex flex-col gap-6 p-8">
        <button className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 4v2m0 12v2m8-8h-2M4 12Hm15.36-6.361-1.42 1.42M6.36 6.36l4.94 7.78m12.02 12,02l-1.42-1.42-1.42M6.36 17.64l-1.42-1.42"></path>
          Loading...
        </button>

      </div>
    </>
  );
}

export default App;
