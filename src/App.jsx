import React, { Suspense, lazy } from "react";
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Features = lazy(() => import("./components/Features"));
const TaskManager = lazy(() => import("./components/TaskManager"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[1.2rem]">Loading...</div>}>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="tasks">
          <TaskManager />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </Suspense>
  );
}


export default App;
