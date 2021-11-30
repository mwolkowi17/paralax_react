
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Layer1 } from './layer1';
import { Layer2 } from './layer2';

function App() {
  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 30] }}>
        <ambientLight />
        <pointLight position={[10, 20, 10]} />
        <pointLight position={[-5, -15, 30]} />
        <Layer1/>
        <Layer2/>
       
      </Canvas>
    </div>
  )
}

export default App;
