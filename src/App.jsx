import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import About from './components/sections/About.jsx';
import Approach from './components/sections/Approach.jsx';
import Components from './components/sections/Components.jsx';
import Contact from './components/sections/Contact.jsx';
import Documents from './components/sections/Documents.jsx';
import Domain from './components/sections/Domain.jsx';
import Hero from './components/sections/Hero.jsx';
import Idea from './components/sections/Idea.jsx';
import Milestones from './components/sections/Milestones.jsx';
import Presentations from './components/sections/Presentations.jsx';
import './styles.css';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Idea />
        <Components />
        <Approach />
        <Domain />
        <Milestones />
        <Documents />
        <Presentations />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
