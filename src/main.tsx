import {createRoot} from 'react-dom/client';
import {App2} from './App';
import {store} from './store';
import {StoreProvider} from '@goser/app-state';

const rootElement = document.createElement('div');
document.body.append(rootElement);
const root = createRoot(rootElement);

root.render(<StoreProvider store={store}>
    <App2 />
</StoreProvider>);