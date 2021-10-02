import logo from './logo.svg';
import './App.css';
import Page from './page';
import Carousel from './carousel/index.jsx';
import Axios from './components/axios/index.jsx';
import WhatsNew from './components/whatsNew';
import { Suspense } from 'react';

function App() {
  return (
<div>
  {/* <Carousel/> */}
  <Suspense fallback={<h1>loading</h1>}> <Page  /></Suspense>
 {/* <WhatsNew/> */}
{/* <Axios/> */}
 {/* <WhatsNew/> */}
</div>
  );
}

export default App;
