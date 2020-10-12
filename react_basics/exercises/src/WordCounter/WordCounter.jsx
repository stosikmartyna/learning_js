import React, { useState } from 'react';

export const WordCounter = () => {
  const [numberOfWords, setNumberOfWords] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const words = value.trim().split(/\s+/).length;
    setNumberOfWords(words);
  }

  return (
    <>
      <p>Number of words: {numberOfWords}</p>
      <textarea onChange={handleInputChange}></textarea>
    </>
  );
}