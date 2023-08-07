import { useState } from "react";
import axios from "axios";

/*write a custom hook called useFlip 
which will hold the business logic for flipping any type of card*/

//two elements
//1 - flip card  2-toggle flip state

function useFlip(initialFlipState = true) {
  const [isFlipped, setFlipped] = useState(initialFlipState);

  const flip = () => {
    setFlipped((isUp) => !isUp);
  };

  return [isFlipped, flip];
}

function useAxios(keyInLS, baseUrl) {
  const [responses, setResponses] = keyInLS;

  const addResponseData = async (
    formatter = (data) => data,
    restOfUrl = ""
  ) => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses((data) => [...data, formatter(response.data)]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}

export { useFlip, useAxios };
