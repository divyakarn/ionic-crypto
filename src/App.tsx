import { Redirect, Route,Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {Menu} from './components/Navigation/Ion-nav/Menu';
import Search from './pages/SearchPage';
import WatchList from './pages/WatchList';
import Home from './pages/Home';
import Details from './pages/Details/Details';
import Allcoins from './pages/AllCoins/Allcoins';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    
    <IonReactRouter>
    <Menu/>
    <IonRouterOutlet id='main'>
    <Route exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/watchList"component={WatchList} />
        <Route exact path="/search" component={Search}/>
        <Route exact path="/details" component={Details} />
        <Route exact path="/allCoins" component={Allcoins} />

    </IonRouterOutlet>
     
    </IonReactRouter>
  </IonApp>
);

export default App;
