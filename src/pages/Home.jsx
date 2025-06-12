import React from 'react';
import Header from '../components/Header/Header.jsx';
import Categories from '../components/Categories/Categories.jsx';
import Choose from '../components/Choose/Choose.jsx';
import Question from '../components/Question/Question.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Home = () => {
  return ( 
    <>
    <Header/>
    <Categories/>
    <Choose/>
    <Question />
    <Footer/>
    </>
   );
}
 
export default Home;