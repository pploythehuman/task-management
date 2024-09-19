## Stories
**Functional Requirements**
<ol>
  <li>System must provide an input for users to create tasks.</li>
  <li>System must display a list of uncompleted tasks.</li>
  <li>System must allow marking a task as completed.</li>
  <li>System must allow users to edit the name of each task.</li>
</ol>

**Non-Functional Requirements**
<ol>
  <li>System must be responsive across devices from iPhone SE to Desktop monitor.</li>
</ol>
System must be responsive across devices from iPhone SE to Desktop monitor.

## Demo
<img width="440" alt="Screenshot 2024-09-19 at 22 47 23" src="https://github.com/user-attachments/assets/5ebdd22c-dcc3-4f4a-9355-e9625c912da9">
<img width="1728" alt="Screenshot 2024-09-19 at 22 47 13" src="https://github.com/user-attachments/assets/b230028d-6dc7-48bc-b21b-522a993b53cd">

https://github.com/user-attachments/assets/8d0d1a3b-e8d6-4977-a790-280b30635459



## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm or yarn
- MySQL (for the backend database)

### Installation

#### Backend

1. Navigate to the [backend](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fkanokpon.n%2FDocuments%2FPersonal%2Ftask-management%2Ftask-management%2Fbackend%22%2C%22path%22%3A%22%2FUsers%2Fkanokpon.n%2FDocuments%2FPersonal%2Ftask-management%2Ftask-management%2Fbackend%22%2C%22scheme%22%3A%22file%22%7D%7D) directory:

    ```bash
    cd backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn
    ```

3. Create a `.env` file in the [backend](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fkanokpon.n%2FDocuments%2FPersonal%2Ftask-management%2Ftask-management%2Fbackend%22%2C%22path%22%3A%22%2FUsers%2Fkanokpon.n%2FDocuments%2FPersonal%2Ftask-management%2Ftask-management%2Fbackend%22%2C%22scheme%22%3A%22file%22%7D%7D) directory and add your database configuration:

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=task-management
    ```

4. Set up the database schema:

    - Open your MySQL client (e.g., MySQL Workbench, phpMyAdmin, or the MySQL command line).
    - Execute the `schema.sql` script to create the database and tables:

    ```bash
    mysql -u root -p < schema.sql
    ```

5. Start the backend server:

    ```bash
    npm start
    # or
    yarn start
    ```

#### Frontend

1. Navigate to the [frontend](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fkanokpon.n%2FDocuments%2FPersonal%2Ftask-management%2Ftask-management%2Ffrontend%22%2C%22path%22%3A%22%2FUsers%2Fkanokpon.n%2FDocuments%2FPersonal%2Ftask-management%2Ftask-management%2Ffrontend%22%2C%22scheme%22%3A%22file%22%7D%7D) directory:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn
    ```

3. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

### Backend Tests

To run the backend tests, navigate to the [backend](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fkanokpon.n%2FDocuments%2FPersonal%2Ftask-management%2Ftask-management%2Fbackend%22%2C%22path%22%3A%22%2FUsers%2Fkanokpon.n%2FDocuments%2FPersonal%2Ftask-management%2Ftask-management%2Fbackend%22%2C%22scheme%22%3A%22file%22%7D%7D) directory and run:

```bash
npm test
# or
yarn test
