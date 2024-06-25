import React, { useEffect, useState } from "react";
import "../styles/App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const threeFirstWords = fact.split(" ", 3).join(" ");
        console.log("Three first words:", threeFirstWords);

        fetch(
          `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { _id } = response;
            const url = `/cat/${_id}/says/${threeFirstWords}`;
            setImageUrl(url);
          });
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      });
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt="imagen random de gatos de cataas.com"
        />
      )}
    </main>
  );
}
