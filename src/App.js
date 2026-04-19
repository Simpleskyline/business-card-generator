import { useState } from "react";
import "./App.css";
import CardForm from "./components/CardForm";
import CardPreview from "./components/CardPreview";

function App() {
  const [cardData, setCardData] = useState({
    name: "",
    title: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    address: "",
  });

  function handleChange(e) {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Business Card Generator
      </h1>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        <div className="flex-1">
          <CardForm cardData={cardData} onChange={handleChange} />
        </div>

        <div className="flex-1">
          <CardPreview cardData={cardData} />
        </div>
      </div>
    </div>
  );
}

export default App;
