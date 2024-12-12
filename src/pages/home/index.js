import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button title="teste 01">Teste 1</Button>
      <Button title="teste 02" variant='secondary'>Teste 2</Button>
      <Link to="/login">Fazer login</Link>
    </>);
};

export { Home };