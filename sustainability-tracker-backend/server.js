const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DATA_FILE = 'actions.json';

app.use(cors());
app.use(express.json());

// Load actions from file
const loadActions = () => {
    try {
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } catch (error) {
        return [];
    }
};

// Save actions to file
const saveActions = (actions) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(actions, null, 2));
};

// GET all actions
app.get('/api/actions', (req, res) => {
    res.json(loadActions());
});

// POST a new action
app.post('/api/actions', (req, res) => {
    const { action, date, points } = req.body;
    if (!action || !date || typeof points !== 'number') {
        return res.status(400).json({ message: 'Invalid request payload' });
    }

    let actions = loadActions();
    const newAction = { id: actions.length + 1, action, date, points };
    actions.push(newAction);
    saveActions(actions);

    res.status(201).json(newAction);
});

// DELETE an action
app.delete('/api/actions/:id', (req, res) => {
    let actions = loadActions();
    const actionId = parseInt(req.params.id);

    actions = actions.filter(a => a.id !== actionId);
    saveActions(actions);

    res.status(200).json({ message: 'Action removed' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
