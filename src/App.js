import whiskey from './images/whiskey.jpg'
import duke from './images/duke.jpg'
import perry from './images/perry.jpg'
import tubby from './images/tubby.jpg'
import './App.css';
import Dogs from './Dogs';
import DogDetails from "./DogDetails";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const App  = ({dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
]}) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="dogs" element={<Dogs dogs={dogs} />}/>
          <Route path="dogs/:name" element={<DogDetails dogs={dogs} />}/>
          <Route path="*" element={<Navigate to="./dogs" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
