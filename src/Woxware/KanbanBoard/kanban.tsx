import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/column';
import NewTask from './components/newTask';

export default function KanbanBoard() {
    const [task, setTask] = useState({});
    const handleData = (data) => setIncomplete([...incomplete, data]);
    const [incomplete, setIncomplete] = useState([]);
    const [inprogress, setInprogress] = useState([]);
    const [completed, setCompleted] = useState([]);
    const handleDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
            return;
        const sourceIndex = source.index,
            destinationIndex = destination.index;
        let updatedList;
        if (source.droppableId === destination.droppableId) {
            if (source.droppableId === '1') {
                const [removedItem] = incomplete.splice(sourceIndex, 1);
                updatedList = [...incomplete];
                updatedList.splice(destinationIndex, 0, removedItem);
                setIncomplete(updatedList);
            } else if (source.droppableId === '2') {
                const [removedItem] = inprogress.splice(sourceIndex, 1);
                updatedList = [...inprogress];
                updatedList.splice(destinationIndex, 0, removedItem);
                setInprogress(updatedList);
            } else {
                const [removedItem] = completed.splice(sourceIndex, 1);
                updatedList = [...completed];
                updatedList.splice(destinationIndex, 0, removedItem);
                setCompleted(updatedList);
            }
        } else {
            if (source.droppableId === '1') {
                let [removedItem] = incomplete.splice(sourceIndex, 1);
                if (destination.droppableId === '2')
                    updatedList = [...inprogress];
                else updatedList = [...completed];
                updatedList.splice(destinationIndex, 0, removedItem);
                if (destination.droppableId === '2') setInprogress(updatedList);
                else setCompleted(updatedList);
            } else if (source.droppableId === '2') {
                let [removedItem] = inprogress.splice(sourceIndex, 1);
                if (destination.droppableId === '1')
                    updatedList = [...incomplete];
                else updatedList = [...completed];
                updatedList.splice(destinationIndex, 0, removedItem);
                if (destination.droppableId === '1') setIncomplete(updatedList);
                else setCompleted(updatedList);
            } else {
                let [removedItem] = completed.splice(sourceIndex, 1);
                if (destination.droppableId === '2')
                    updatedList = [...inprogress];
                else updatedList = [...incomplete];
                updatedList.splice(destinationIndex, 0, removedItem);
                if (destination.droppableId === '2') setInprogress(updatedList);
                else setIncomplete(updatedList);
            }
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <h2 className="scroll-m-20 mt-8 tracking-tight text-3xl font-semibold first:mt-0 uppercase text-center">
                progress board
            </h2>
            <div className="flex justify-between items-center mt-6">
                <Column title={'To do'} task={incomplete} id={'1'} />
                <Column title={'in progress'} task={inprogress} id={'2'} />
                <Column title={'Done'} task={completed} id={'3'} />
            </div>
            <div>
                <NewTask FormData={handleData} />
            </div>
        </DragDropContext>
    );
}
