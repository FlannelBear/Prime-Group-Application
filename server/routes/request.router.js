const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const craftTable = require('../modules/router-modules/request-router/craftTable');
const requestTransaction = require('../modules/router-modules/request-router/requestTransaction');

/**
 * GET route template
 */
router.get('/requestTable', (req, res) => {
    // Uses craftTable module to retrieve Request information and package with all necessary data (rooms, availability)
    const result = craftTable();
    res.send(result);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    requestTransaction(req.body)
        .then(result => res.sendStatus(201))
        .catch(error=>console.log('Error handling POST for /api/request: ', error));
});

const testBody = {
    location_type_id: 1,
    est_duration: 2.5,
    rooms: [
        {
            room_id: 1,
            cleanliness_score: 3
        },
        {
            room_id: 2,
            cleanliness_score: 4
        }
    ],
    contactInfo: {
        first_name: 'Joshua',
        last_name: 'Evans',
        email: 'joshua.evans1294@gmail.com',
        location_address: '6408 16th ave s',
        phone_number: '6122064555',
        cleaning_type_id: 1
    },
    calendarObjects: [
        {   
            start: new Date(12, 30, 2018, 8, 30, 0),
            end: new Date(12, 30, 8, 10, 30, 0)
        },
        {
            start: new Date(12, 31, 2018, 4, 0, 0),
            end: new Date(12, 31, 2018, 8, 30, 0)
        }
    ]
}

module.exports = router;