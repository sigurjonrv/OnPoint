import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => System.import('./Fighters'),
  ssrMode: 'boundary',
  name: 'Fighters',
});
