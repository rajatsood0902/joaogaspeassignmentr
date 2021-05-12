import './App.css';


import Navbar from './components/navbar/navbar';
import FrontPage from './components/front_page/front_page';
import Community from './components/community/community';
import Location from './components/location/location';
import OurMenu from './components/our_menu/our_menu';
import PopularRecipies from './components/popular_recipies/popular_recipies';
import Collaborate from './components/collaborate/collaborate';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontPage/>
      <Community/>
      <Location />
      <OurMenu />
      <PopularRecipies />
      <Collaborate />
      <Footer/>
    </div>
  );
}

export default App;
