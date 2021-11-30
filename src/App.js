
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Layer1 } from './layer1';

function App() {
  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 4] }}>
        <ambientLight />
        <pointLight position={[10, 20, 10]} />
        <pointLight position={[-5, -15, 30]} />
        <Layer1/>
       
      </Canvas>
    </div>
  )
}

export default App;
