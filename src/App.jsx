import { Principal } from './components/layout/Principal';
import { SeccionPersonal } from './components/organisms/SeccionPersonal';
import { SeccionExperiencia } from './components/organisms/SeccionExperiencia';
import { SeccionProyectos } from './components/organisms/SeccionProyectos';
import { SeccionContacto } from './components/organisms/SeccionContacto';
import {ConfigProvider} from "antd";
import './App.css';

function App() {
  return (
      <ConfigProvider
          theme={{
              token: {
                  colorPrimary: '#722ed1',
                  colorBgContainer: '#ffffff',
                  fontFamily: 'Inter, sans-serif',
              },
          }}
      >
          <Principal>
              <SeccionPersonal />
              <SeccionExperiencia />
              <SeccionProyectos />
              <SeccionContacto />
          </Principal>
      </ConfigProvider>
  );
}

export default App;