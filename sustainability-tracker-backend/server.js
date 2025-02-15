const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const PORT = 3000;
const DATA_FILE = "data.json";

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Sustainability Tracker API is running!');
});

// Load sustainability actions from JSON file
const loadActions = () => {
    if (fs.existsSync(DATA_FILE)) {
        return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    }
    return [];
};

// Save sustainability actions to JSON file
const saveActions = (actions) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(actions, null, 2), "utf-8");
};

// GET Endpoint - Fetch all sustainability actions
app.get("/api/actions", (req, res) => {
    const actions = loadActions();
    res.json(actions);
});

// POST Endpoint - Add a new sustainability action
app.post("/api/actions", (req, res) => {
    const { id, action, date, points } = req.body;

    if (!id || !action || !date || !points) {
        return res.status(400).json({ error: "All fields are required" });
    }

    let actions = loadActions();
    actions.push({ id, action, date, points });
    saveActions(actions);

    res.status(201).json({ message: "Action added successfully" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
