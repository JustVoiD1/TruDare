import { useState } from "react";
// import {motion} from "motion/react"
const App = () => {


  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState(""); // 'truth' or 'dare'
  const [question, setQuestion] = useState("");
  const [rating, setRating] = useState("pg"); // default: 'pg'

  const fetchQuestion = async (type, rating) => {
    setType(type);
    setRating(rating);
    const res = await fetch(`https://api.truthordarebot.xyz/v1/${type}?rating=${rating}`);

    const data = await res.json();
    // console.log(data);
    setQuestion(data.question);
  };

  return (<>
    <div className="gradient-bg - inset-0">
      <div className="gradient-container absolute inset-0 pointer-events-none">
        <div className="g1 absolute inset-0 " />
        <div className="g2 absolute inset-0 " />
        <div className="g3 absolute inset-0 " />
        <div className="g4 absolute inset-0 " />
        <div className="g5 absolute inset-0 " />
      </div>
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="absolute top-[100px] text-5xl font-bold mb-6 text-center w-full">Truth or Dare</h1>

        <div className="absolute top-[30px] right-[30px] mb-4">
          <label className="mr-2 font-semibold text-white">Age Rating:</label>
          <select
            className="p-2 rounded text-white "
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option className="text-black" value="pg">PG (Kids)</option>
            <option className="text-black" value="pg13">PG-13 (Teens)</option>
            <option className="text-black" value="r">R (Adults)</option>
          </select>
        </div>

        {question && (
          <div className="my-auto bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl max-w-lg text-center border-4 border-white/20 backdrop-blur-md">
            <p className="text-xl font-bold drop-shadow-md">{question}</p>
          </div>
        )}

        <div className="fixed bottom-[8vh] flex gap-4 mb-6 mt-20">
          <button
            onClick={() => fetchQuestion("truth", rating)}
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-8 py-5 text-lg font-semibold text-white rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            Truth
          </button>
          <button
            onClick={() => fetchQuestion("dare", rating)}
            className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 px-8 py-5 text-lg font-semibold text-white rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            Dare
          </button>

        </div>





      </div>

    </div>

  </>
  );
};

export default App;
