import "./App.css";
import Card from "./components/Card";

function App() {
  const person = {
    name: "Lokeshwar",
    description: "A TA in the 100xDevs Cohort 2.0",
    socialMedia: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
      other: "https://www.example.com",
    },
    interests: ["Ionic", "Open Source", "App Dev"],
  };

  return (
    <div className="App">
      <Card
        name={person.name}
        description={person.description}
        socialMedia={person.socialMedia}
        interests={person.interests}
      />
    </div>
  );
}

export default App;
