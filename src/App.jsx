import React from "react";
import Header from "src/components/Header";
import Section from "src/components/Section";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Section title="What is React?">
        <p>
          React is a JavaScript library developed by Facebook for building user interfaces. It uses a component-based architecture to build reusable UI elements and efficiently update the DOM using a virtual DOM.
        </p>
        </Section>
        <Section title="Benefits of React">
          <ul>
            <li>Component-based architecture for reusable code</li>
            <li>Fast rendering using a virtual DOM</li>
            <li>Strong ecosystem and community support</li>
            <li>Easy integration with other libraries or frameworks</li>
            <li>Efficient state management with hooks</li>
          </ul>
        </Section>
    </div>
  );
}

export default App;
