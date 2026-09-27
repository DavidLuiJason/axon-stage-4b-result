import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerTestCapability } from './capabilities/registerTestCapability';
import { registerSettingsCapability } from './capabilities/registerSettings';
import { registerAxonToolsCapability } from './capabilities/registerAxonTools';
import { registerTestInterface } from './interfaces/registerTestInterface';
import { registerSettingsInterface } from './interfaces/registerSettings';
import { registerAxonToolsInterface } from './interfaces/registerAxonTools';

// Stage 2: explicit capability registration at startup (not React mount)
registerTestCapability();
// Stage 4A: Settings capability (declarative; not tied to modal open state)
registerSettingsCapability();
// Stage 4B: AXON Tools capability (declarative; not tied to currentScreen)
registerAxonToolsCapability();
// Stage 3: explicit interface registration at startup (not React mount)
registerTestInterface();
// Stage 4A: Settings interface (declarative; not tied to modal open state)
registerSettingsInterface();
// Stage 4B: AXON Tools interface (declarative; not tied to currentScreen)
registerAxonToolsInterface();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
