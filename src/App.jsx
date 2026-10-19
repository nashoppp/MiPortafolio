import { Principal } from './components/layout/Principal';
import { SeccionPersonal } from './components/organisms/SeccionPersonal';
import { SeccionExperiencia } from './components/organisms/SeccionExperiencia';
import { SeccionProyectos } from './components/organisms/SeccionProyectos';
import { SeccionContacto } from './components/organisms/SeccionContacto';

function App() {
  return (
      <Principal>
        <SeccionPersonal />
        <SeccionExperiencia />
        <SeccionProyectos />
        <SeccionContacto />
      </Principal>
  );
}

export default App;