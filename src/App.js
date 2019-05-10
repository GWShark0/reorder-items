import React, { useCallback, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import times from 'lodash/times';
import uniqueId from 'lodash/uniqueId';
import ReorderItem from './components/ReorderItem';
import reorder from './util/reorder';

import './App.scss';

const createThing = () => uniqueId('Thing ');

const initialThings = times(3, createThing);

function App() {
  const [things, setThings] = useState(initialThings);

  const addThing = () => setThings(things.concat(createThing()));

  const removeThing = thing => setThings(things.filter(t => t !== thing));

  const onDragEnd = useCallback((result) => {
    const { source, destination } = result;
    if (destination) {
      setThings(reorder(things, source.index, destination.index));
    }
  }, [things]);

  return (
    <div className="app">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="reorder-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {things.map((thing, index) => (
                <Draggable draggableId={thing} index={index} key={thing}>
                  {(provided) => (
                    <ReorderItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onDelete={() => removeThing(thing)}
                    >
                      {thing}
                    </ReorderItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button className="add-button" onClick={addThing}>
        Add Another Thing
      </button>
    </div>
  );
}

export default App;
