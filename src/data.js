const TicketData = {
    "ticket-1":{
        id: "ticket-1",
        title: "Create trello clone app",
        type: "story",
        criticality: "Critical",
        points: 8,
        status: "inDev"
    },
    "ticket-2":{
        id: "ticket-2",
        title: "Fix font family style",
        type: "bug",
        criticality: "High",
        points: 3,
        status: "inDev"
    },
    "ticket-3":{
        id: "ticket-3",
        title: "Create readable readme.md file",
        type: "documnetation",
        criticality: "Low",
        points: 1,
        status: "todo"
    },
    "ticket-4":{
        id: "ticket-4",
        title: "Make git repository and upload source code",
        type: "story",
        criticality: "Medium",
        points: 3,
        status: "devComplete"
    },
    "ticket-5":{
        id: "ticket-5",
        title: "Deploy app using git pages",
        type: "story",
        criticality: "High",
        points: 3,
        status: "todo"
    }
}

const columns = {
   "col-1": {
        id: "col-1",
        taskIds: ["ticket-3", "ticket-5"],
        title: "Todo",
        icon: "✏️"
    }, 
    "col-2": {
        id: "col-2",
        taskIds: ["ticket-1", "ticket-2"],
        title: "In development",
        icon: "🕐"
    }, 
    "col-3":{
        id: "col-3",
        taskIds: ["ticket-4"],
        title: "Dev complete",
        icon: "☑️"
    }, 
    "col-4":{
        id: "col-4",
        taskIds: [],
        title: "Staging",
        icon: "📝"
    }, 
    "col-5":{
        id:"col-5",
        taskIds: [],
        title: "Done",
        icon: "✅",
    }
};

const columnOrder = ["col-1", "col-2","col-3","col-4","col-5"]

const dataset = {tasks : TicketData, columns, columnOrder}

export default dataset;