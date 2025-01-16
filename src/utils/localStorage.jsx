

const employees = [
    {
        "id": 1,
        "email": "e@e.com",
        "password": "123",
        "firstname": "Aarav",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare monthly report",
                "taskDescription": "Compile and submit the monthly performance report.",
                "taskDate": "2025-01-10",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team meeting",
                "taskDescription": "Attend the weekly team meeting.",
                "taskDate": "2025-01-05",
                "category": "Meetings"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Update client database",
                "taskDescription": "Ensure all client information is up-to-date.",
                "taskDate": "2025-01-12",
                "category": "Database Management"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstname": "Ishita",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design new logo",
                "taskDescription": "Create a new logo for the upcoming product launch.",
                "taskDate": "2025-01-15",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback session",
                "taskDescription": "Organize a session to gather client feedback.",
                "taskDate": "2025-01-14",
                "category": "Client Relations"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Software update",
                "taskDescription": "Ensure all systems are updated to the latest software version.",
                "taskDate": "2025-01-03",
                "category": "IT Support"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstname": "Vihaan",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Marketing strategy",
                "taskDescription": "Develop a marketing strategy for Q1.",
                "taskDate": "2025-01-20",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Product demo",
                "taskDescription": "Prepare a demo for the new product.",
                "taskDate": "2025-01-18",
                "category": "Product Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Budget review",
                "taskDescription": "Review the budget for the current project.",
                "taskDate": "2025-01-06",
                "category": "Finance"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstname": "Ananya",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Inventory check",
                "taskDescription": "Conduct an inventory check for the warehouse.",
                "taskDate": "2025-01-22",
                "category": "Logistics"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Safety training",
                "taskDescription": "Organize safety training for new employees.",
                "taskDate": "2025-01-17",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Policy update",
                "taskDescription": "Update company policies in the internal portal.",
                "taskDate": "2025-01-02",
                "category": "Administration"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstname": "Rohan",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review code for the latest feature development.",
                "taskDate": "2025-01-19",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Data analysis",
                "taskDescription": "Analyze the sales data for the last quarter.",
                "taskDate": "2025-01-16",
                "category": "Analytics"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Server maintenance",
                "taskDescription": "Complete the scheduled server maintenance.",
                "taskDate": "2025-01-04",
                "category": "IT Support"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
]


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
    
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
    
}