import React, { useState } from 'react';
import ReorderItem from './components/ReorderItem';
import times from 'lodash/times';
import uniqueId from 'lodash/uniqueId';

import './App.scss';

const createThing = () => uniqueId('Thing ');

const initialThings = times(3, createThing);

function App() {
  const [things, setThings] = useState(initialThings);

  const addThing = () => setThings(things.concat(createThing()));

  const removeThing = thing => setThings(things.filter(t => t !== thing));

  return (
    <div className="app">
      <div className="reorder-list">
        {things.map((thing) => (
          <ReorderItem key={thing} onDelete={() => removeThing(thing)}>
            {thing}
          </ReorderItem>
        ))}
      </div>
      <button className="add-button" onClick={addThing}>
        Add Another Thing
      </button>
    </div>
  );
}

export default App;
