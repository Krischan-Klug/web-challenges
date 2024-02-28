import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { initialEntries } from "./components/EntriesSection";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
