Shred Searcher

Shred searcher is a brand new way to checkout mountains in the New England area. This is a single page application
built using react.js. You can look at the monutains for each state, then see a bunch of useful information about each mountain.

You can add mountains to your 'Shred Wish List' or to the places you've been. You can also directly visit the webpages of the
resorts.

Important Information:

When running the development page, it will automatically host to http://localhost:3000

In order for the webpage to render properly, the db.json file will also need to be hosted onto a server.
The webpage is configuired to pull data from http://localhost:4000/mountains.
To host the JSON server on port 4000 type:

json-server --watch db.json --port 4000

If you wish to not host the server on port 4000, you must change the fetch locations in src/pages/Maine.js, Mountain.js, NewHampshire.js, Vermont.js