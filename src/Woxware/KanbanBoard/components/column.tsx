import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';
import styles from './scroll.module.css';

function Column({ title, task, id }) {
    return (
        <div
            className={`bg-[#f4f5f7] rounded w-[20rem] h-[27rem] overflow-y-scroll border shadow ${styles.column}`}
        >
            <h3
                className="p-2 text-center uppercase bg-primary text-secondary font-semibold text-xl mt-4"
                style={{ scrollbarWidth: 'none' }}
            >
                {title}
            </h3>
            <Droppable droppableId={id}>
                {(provided) => (
                    <div
                        className="py-2 grow min-h-[100px] space-y-8 bg-[#f4f5f7]"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {task.map((task, pos) => (
                            <Task key={pos} index={pos} task={task} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default Column;
