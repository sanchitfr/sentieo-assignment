import React, {useState} from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import "../styles/cardList.styles.css"

import Col from './col.component'
import dataset from '../data';

const CardList = () => {

    const [data, setData] = useState(dataset)

    const onDragEnd = result => {
        const { destination, source, draggableId, type } = result;
        //If there is no destination
        if (!destination) {return}
        
        //If source and destination is the same
        if (destination.droppableId === source.droppableId && destination.index === source.index) { return }
        
        //If you're dragging columns
        if (type === 'column') {
            const newColumnOrder = Array.from(data.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);
            const newState = {
                ...data,
                columnOrder: newColumnOrder
            }
            setData(newState)
            return;
        }

        //Anything below this happens if you're dragging tasks
        const start = data.columns[source.droppableId];
        const finish = data.columns[destination.droppableId];
        //If dropped inside the same column
        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }
            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn
                }
            }
            setData(newState)
            return;
        }

        //If dropped in a different column
        const startTasks = Array.from(start.taskIds);
        startTasks.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTasks
        }
        const finishTasks = Array.from(finish.taskIds);
        finishTasks.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTasks
        }
        const newState = {
            ...data,
            columns: {
                ...data.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }

        setData(newState)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='all-columns' direction='horizontal' type='column'>
                {(provided) => (
                <div className="card-list" {...provided.droppableProps} ref={provided.innerRef}>
                    <div className="row">
                        {data.columnOrder.map((id, index) => {
                        const column = data.columns[id];
                        const tasks = column.taskIds.map(taskId => data.tasks[taskId]) 
                        return <Col key={column.id} tasks={tasks} column={column} index={index} />
                        })}
                        {provided.placeholder}
                    </div>
                </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}
export default CardList;
