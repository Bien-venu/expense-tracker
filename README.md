# Expense Tracker

A simple and intuitive expense tracking application built with React. The Expense Tracker allows you to manage, categorize, and visualize your expenses with ease. All expense data is stored locally using `localStorage`, making it lightweight and quick to set up.

## Features

- **Add, Edit, and Delete Expenses:** Easily manage your expenses by adding, editing, or deleting them.
- **Expense Summary:** View a quick summary of your total expenses.
- **Category Filter:** Filter expenses based on their category using a dynamically generated dropdown.
- **Visual Representation:** A doughnut chart to show the breakdown of expenses by category.
- **LocalStorage Integration:** All expenses are stored in `localStorage` for persistent data without a backend.

## Installation and Setup

Follow these instructions to set up the project locally:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Instructions

1. **Clone the Repository:**

   Open your terminal and clone the repository using the following command:

   ```bash
   git clone https://github.com/Bien-venu/expense-tracker.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd expense-tracker
   ```

3. **Install Dependencies:**

   Use npm or Yarn to install the required dependencies:

   ```bash
   npm install
   ```

4. **Start the Development Server:**

Launch the development server to run the project locally:

```bash
npm run start
```

The project should now be running locally. Open your web browser and navigate to:

```
http://localhost:3000
```

### **Build for Production:**

To create a production-ready build of the project:

```bash
npm run build
```

The build files will be located in the `build/` directory.

## Project Structure

Here's a quick overview of the project structure:

```
expense-tracker/
│
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Components like ExpenseForm, ExpenseList, ExpenseSummary
│   ├── utils/             # Helper functions (localStorage.js)
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point for React
│   └── styles/            # Styles for the application
│
├── package.json           # Project configuration and dependencies
├── README.md              # Project documentation
└── .gitignore             # Files to ignore in version control
```

## Contact

For any inquiries or support, please contact:

- **Ishimwe Sibomana Bienvenu**: [isbienvenu3@gmail.com](mailto:isbienvenu3@gmail.com)
