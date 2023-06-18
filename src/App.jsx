import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="flex  bg-gradient-to-r from-[#672280] to-[#A426D0]">
      <nav className="flex items-center px-5 py-1 m-2 space-x-3">
        <img src="./images/troll-face.png" className="w-20" />

        <h1 className="font-bold text-3xl text-white">MemeGenerator</h1>
      </nav>
    </div>
  );
}

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allImg, setImg] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setImg(data.data.memes));
  }, []);


  function getMemeImage() {
    const memesArray = allImg;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className=" p-5 mt-20 grid grid-cols-2 gap-8">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          className="border h-12 p-3 min-w-full md:w-96 border-black focus:outline-none"
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          className="border h-12 p-3 min-w-full md:w-96 border-black focus:outline-none"
        />
        <button
          className=" mx-auto mt-10 grid grid-cols-1 w-full ml-28 md:ml-80 bg-gradient-to-r from-[#672280] to-[#A426D0] text-white rounded-md p-3"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative mx-auto">
        <h1 className=" absolute left-1/3 p-5 ml-5 text-4xl text-center text-white font-bold shadow-black uppercase">
          {meme.topText}
        </h1>

        <img src={meme.randomImage} className="mx-auto max-w-2xl" />

        <h1 className="absolute left-1/4 p-5 ml-20 bottom-3 text-4xl text-center text-white font-bold shadow-black uppercase">
          {meme.bottomText}
        </h1>
      </div>
    </main>
  );
}

export default App;
export { Meme };
