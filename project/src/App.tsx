import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-[#e1e2e4] flex flex-col items-center justify-center px-4 py-12 gap-12">
      {/* Hero Section */}
      <Hero />
      {/* Projects Section */}
      <Projects />
      {/* Skills Section */}
      <Skills />
      {/* Contact Section */}
     <Contacts />
    </div>
  );
}

export default App;
