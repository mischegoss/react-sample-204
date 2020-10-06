import React from 'react';
import About from './components/about';
import Nav from "./components/nav";
import ContactForm from "./components/Contact/index"

function App() {

  return (
    <div>
      <main>
      <ContactForm/>
      <Nav/>
      <About/>
      </main>
    </div>
  )
}

export default App;
