const express = require('express');
const app = express();
const PORT = 3000

const teams = {
    'aneheim ducks': {
        'team': 'Anaheim Ducks',
        'year': 2007
    },
    'arizona coyotes': {
        'team': 'Arizona Coyotes',
        'year': 0
    },
    'boston bruins': {
        'team': 'Boston Bruins',
        'year': [1929, 1939, 1941, 1970, 1972, 2011]
    },
    'unknown': {
        'team': 'Unknown',
        'year': 'Unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const teamName = req.params.name.toLowerCase();
    if(teams[teamName]) {
        res.json(teams[teamName].year);
    }else {
        res.json(teams['unknown'].year);
    }
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});