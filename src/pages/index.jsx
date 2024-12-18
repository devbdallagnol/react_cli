import { useState, useEffect, useMemo } from "react";

const Teste = () => {
  // useState
  const [age, setAge] = useState(36);

  const handleChangeName = () => {
    setAge((prev) => (prev === 36 ? 32 : 36));
  };

  const calculo = useMemo(() => {
    console.log("calculou!", age);
    return 10 * age;
  }, [age]);

  console.log("renderizou", calculo);

  return (
    <div>
      <h3>useState</h3>
      <p>{age}</p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  );
};

export { Teste };
