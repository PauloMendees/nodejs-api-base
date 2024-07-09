
## How to run the project

### 1. Clone the project

Open the folder that you want to clone the project in some terminal and run the following code: 

``git clone https://github.com/PauloMendees/nodejs-api-base.git``

### 2. Install dependencies

In the same terminal, go to the clonned project with: ``cd nodejs-api-base``.

Then run the following command: ``npm install`` or ``yarn``

### 3. Add necessary environment variables:

In the clonned projet create one archive ``.env`` on the source of the project and add the following variables:

```
DATABASE_URL=<type your connection string here>

JWT_SECRET_KEY=<type some key here>
```

### 4. Run the project

To run the project you just to run the following command: ``yarn dev`` or ``npm run dev``

### 5. Visualize swagger

Go to ``http://localhost:8080/api`` in any browser to visualize swagger