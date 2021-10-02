import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import "../styles/card.styles.css"


const Card = ({task, index, icon}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    className = "card"
                >
                    <h4>{task.title}</h4>
                    <div className="card-content">
                        {icon}
                        <span>{task.points}</span>
                    </div>
                </div>

            )}
        </Draggable>
    )
}

export default Card
