import React,{useState} from 'react';
import Header from '../components/ui/Header.jsx';
import Footer from '../components/ui/Footer.jsx';
import {ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import MyProjects from './MyProjects.jsx';
import Skills from './Skills.jsx';
import Cauvery from './Cauvery.jsx';
import Contact from './Contact.jsx';
import SignIn from './SignIn.jsx';
import ECommerce from './ECommerce.jsx';
import Nisarga from './Nisarga.jsx';
import Hobbies from './Hobbies.jsx';

function App() {

  const [selectedIndex , setSelectedIndex] = useState(0);
  const [value , setValue] = useState(0);

  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/"><Home value={value} setValue={setValue}/></Route> 
          <Route exact path="/myprojects"><MyProjects/></Route>
          <Route exact path="/cauvery" render={()=><Cauvery />} />
          <Route exact path="/ecommerce" render={()=><ECommerce/>} />
          <Route exact path="/nisarga" render={()=><Nisarga/>} />
          <Route exact path="/about" component={About} />
          <Route exact path="/hobbies" render={()=><Hobbies/>} />
          <Route exact path="/contact" render={()=><Contact />} />
          <Route exact path="/signin" render={()=><SignIn/>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
