const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors());
app.use(express.static('./public'));

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
    'buffalo sabres': {
        'team': 'Buffalo Sabres',
        'year': 0
    },
    'calgary flames': {
        'team': 'Calgary Flames',
        'year': 1989
    },
    'carolina hurricanes': {
        'team': 'Carolina Hurricanes',
        'year': 2006
    },
    'chicago blackhawks': {
        'team': 'Chicago Blackhawks',
        'year': [1934, 1938, 1961, 2010, 2013, 2015]
    },
    'colorado avalanche': {
        'team': 'Colorado Avalanche',
        'year': [1997, 2001, 2022]
    },
    'columbus blue jackets': {
        'team': 'Columbus Blue Jackets',
        'year': 0
    },
    'dallas stars': {
        'team': 'Dallas Stars',
        'year': [1999]
    },
    'detroit red wings': {
        'team': 'Detroit Red Wings',
        'year': [1936, 1937, 1943, 1950, 1952, 1954, 1955, 1997, 1998, 2002, 2008]
    },
    'edmonton oilers': {
        'team': 'Edmonton Oilers',
        'year': [1984, 1985, 1987, 1988, 1990]
    },
    'florida panthers': {
        'team': 'Florida Panthers',
        'year': 0
    },
    'los angeles kings': {
        'team': 'Los Angeles Kings',
        'year': [2012, 2014]
    },
    'minnesota wild': {
        'team': 'Minnesota Wild',
        'year': 0
    },
    'montreal canadiens': {
        'team': 'Montreal Canadiens',
        'year': [1916, 1924, 1930, 1931, 1944, 1946, 1953, 1956, 1957, 1958, 1959, 1960, 1965, 1966, 1968, 1969, 1971, 1973, 1976, 1977, 1978, 1979, 1986, 1993]
    },
    'nashville predators': {
        'team': 'Nashville Predators',
        'year': 0
    },
    'new jersey devils': {
        'team': 'New Jersey Devils',
        'year': [1995, 2000, 2003]
    },
    'new york islanders': {
        'team': 'New York Islanders',
        'year': [1980, 1981, 1982, 1983]
    },
    'new york rangers': {
        'team': 'New York Rangers',
        'year': [1928, 1933, 1940, 1994]
    },
    'ottawa senators': {
        'team': 'Ottawa Senators',
        'year': 0
    },
    ' philadelphia flyers': {
        'team': 'Philadelphia Flyers',
        'year': [1974, 1975]
    },
    'pittsburgh penguins': {
        'team': 'Pittsburgh Penguins',
        'year': [1991, 1992, 2008, 2016, 2017]
    },
    'st. louis blues': {
        'team': 'St. Louis Blues',
        'year': 2019
    },
    'san jose sharks': {
        'team': 'San Jose Sharks',
        'year': 0
    },
    'seattle kraken': {
        'team': 'Seattle Kraken',
        'year': 0
    },
    'tampa bay lightning': {
        'team': 'Tampa Bay Lightning',
        'year': [2004, 2020, 2021]
    },
    'toronto maple leafs': {
        'team': 'Toronto Maple Leafs',
        'year': [1918, 1922, 1932, 1942, 1945, 1947, 1948, 1949, 1951, 1962, 1963, 1964, 1967]
    },
    'vancouver canucks': {
        'team': 'Vancouver Canucks',
        'year': 0
    },
    'vegas golden knights': {
        'team': 'Vegas Golden Knights',
        'year': 2023
    },
    'washington capitals': {
        'team': 'Washington Capitals',
        'year': 2018
    },
    'winnipeg jets': {
        'team': 'Winnipeg Jets',
        'year': 0
    },
    'unknown': {
        'team': 'Unknown',
        'year': 'Unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/:name', (req, res) => {
    const teamName = req.params.name.toLowerCase()
    if(teams[teamName]) {
        res.json(teams[teamName].year);
    }else {
        res.json(teams['unknown'].year);
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});