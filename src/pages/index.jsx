import { useState, useEffect } from "react";

const Teste = () => {
  // useState  
  const [name, setName] = useState("Bruno");

  const handleChangeName = () => {
    setName(prev => prev === "José" ? 'Augusto' : 'Pablo');
  };

  //useEffect
//   useEffect(() => {
//     alert("Renderizei") // renderiza 1x ou se name sofrer alteracao
//   }, [name]);

  const changeUser = () => {
    handleChangeName();
  }
  useEffect(() => {
    handleChangeName();
  }, [])


  return (<>

  <div>
    <h3>useState</h3>
    <p>{name}</p>
  </div>
  <button onClick={handleChangeName}>Alterar</button>
  <hr />
  </>)};

export { Teste };
