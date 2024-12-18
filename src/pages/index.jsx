import { useState, useEffect, useMemo, useCallback } from "react";

const Teste = () => {
  // useState
  const [age, setAge] = useState(36);
  const [name, setName] = useState("Bruno");

  const handleChangeName = useCallback(() => {
    setName((prev) => (prev === "Bruno" ? "José" : "Bruno"));
  }, []);

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log("AgeAtual: ", age, " | NewAge: ", newAge)
    setAge((prev) => (prev === 36 ? 32 : 36));
  }, []);

  const calculo = useMemo(() => {
    console.log("calculou!", age);
    return 10 * age;
  }, [age]);

  return (
    <div>
      <h3>useState</h3>
      <div>
        <p>Idade: {age}</p>
      </div>
      <div>
        <p>Nome: {name}</p>
      </div>
      <button onClick={handleChangeAge}>Alterar Idade</button>
      <button onClick={handleChangeName}>Alterar Nome</button>
    </div>
  );
};

export { Teste };
