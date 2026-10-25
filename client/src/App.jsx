import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <h2>Welcome to My Portfolio</h2>
          <p>This is the home section.</p>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>This is the about section.</p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <p>This is the projects section.</p>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <p>This is the contact section.</p>
        </section>
      </main>
    </>
  );
}

export default App;