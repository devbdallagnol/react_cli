import { useState } from "react";

const Teste = () => {
  const [name, setName] = useState("Bruno");

  const handleChangeName = () => {
    setName(prev => prev === "José" ? 'Augusto' : 'Pablo');
  };

  return (<>
  <div>
    <p>{name}</p>
  </div>
  <button onClick={handleChangeName}>Alterar</button>
  </>)};

export { Teste };
