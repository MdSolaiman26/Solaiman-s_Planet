import express from 'express';
import { test } from '../controllers/user.controller.js';
const router = express.Router();

// Simple test route to check if user routes work
router.get('/test', test);
 

// Example route for future use
// router.post('/register', (req, res) => {
//     res.send('Register route coming soon');
// });

export default router;