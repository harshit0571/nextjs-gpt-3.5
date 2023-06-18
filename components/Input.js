function Input({ Prompt, setPrompt, getGPT, setisLoading }) {
  const clear = () => {
    setPrompt("");
  };
  const Ask = () => {
    setisLoading(true);
    getGPT();
  };
  return (
    <div>
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="ask gpt3.5"
            aria-label="Full name"
            value={Prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={Ask}
          >
            ASK
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
            onClick={clear}
            type="button"
          >
            clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
