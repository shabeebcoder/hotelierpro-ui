import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function Task({ task, index }) {
    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided) => (
                <div
                    className="rounded-lg p-2 mb-2 mx-3 cursor-pointer flex justify-between flex-col bg-yellow-200 "
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className="flex p-2">
                        <p>{task.text}</p>
                    </div>
                    <div className="flex justify-between p-2">
                        <span>task assigned for</span>
                        <span>task assigned by</span>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
}

export default Task;
