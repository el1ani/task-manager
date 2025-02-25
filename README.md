# Task Management Application

This is a simple task management application built with TypeScript and Express. It allows users to create, read, update, and delete tasks.

## Project Structure

```
task-management
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains the task controller
│   │   └── taskController.ts
│   ├── models                # Contains the task model
│   │   └── taskModel.ts
│   ├── routes                # Contains the task routes
│   │   └── taskRoutes.ts
│   └── types                 # Contains TypeScript types
│       └── index.ts
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Features

- Create a new task
- Retrieve all tasks
- Update an existing task
- Delete a task

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd task-management
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

The application will be available at `http://localhost:4200`.

## API Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks` - Get all tasks
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID

#   t a s k - m a n a g e r  
 #   t a s k - m a n a g e r  
 