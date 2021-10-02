import React from "react";
import { Droppable, Draggable } from 'react-beautiful-dnd'
import '../styles/col.styles.css'

import Card from "./card.component";

const Col = ({column, index, tasks}) => {
    return (
        <Draggable draggableId={column.id} index={index}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}>
                        <h3 {...provided.dragHandleProps}>{column.title}</h3>
                        <Droppable droppableId={column.id} type='task'>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}  
                                    className="col"
                                >
                                    {tasks.map((task, index) => <Card key={task.id} task={task} icon={column.icon} index={index} />)}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>

                )}
        </Draggable>
    );
};

export default Col;