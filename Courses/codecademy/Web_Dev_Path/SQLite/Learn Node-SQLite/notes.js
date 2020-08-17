// OPENING A DATABASE
    // require()
        const sqlite3 = require('sqlite3');
    // open db
        const db = new sqlite3.Database('./db.sqlite');

// RETRIEVING ALL ROWS
    // db.all()
        db.all("SELECT * FROM Dog WHERE breed='Corgi'", (error, rows) => {
            printQueryResults(rows)
        });

// RETRIEVING A SINGLE ROW
    // .find() - bring back one row
    // db.get()
    db.get("SELECT * FROM Dog WHERE owner_name = 'Charlie'", (error, row) => {
        printQueryResults(row); 
      });
    
// USING PLACEHOLDERS
    // JS variable value placed in the SQL query
    // db.run()
    const furLength1 = "short";
    const furLength2 = "long";
    const furColor1 = "brown";
    const furColor2 = "grey";

    const findDogByFur = (length, color) => {
    db.all(
        "SELECT * FROM Dog WHERE fur_length = $furLength AND fur_color = $furColor", 
        {
        $furLength: length,
        $furColor: color
        }, 
        (error, rows) => {
        printQueryResults(rows);
        }
    );
    });

    findDogByFur(furLength1, furColor1); // prints all dogs with short brown fur.
    findDogByFur(furLength2, furColor1); // prints all dogs with long brown fur.
    findDogByFur(furLength1, furColor2); // prints all dogs with short grey fur.
    findDogByFur(furLength2, furColor2); // prints all dogs with long grey fur

    // ANOTHER EXAMPLE
    const { printQueryResults } = require('./utils');
    const sqlite = require('sqlite3');

    const db = new sqlite.Database('./db.sqlite');

    const ids = [1, 25, 45, 100, 360, 382];
    // your code below:
    ids.forEach((el, i) => {
    console.log(el);
        db.get("SELECT * FROM TemperatureData WHERE id = $id",
            {
            $id: el
            },
            (err, row) => {
            printQueryResults(row);
        });
    });

// USING db.run()
    // SQL commands that do not return rows - INSERT, CREATE..
    // this will be modified with INSERT but not CREATE
    const sqlite = require('sqlite3');

    const db = new sqlite.Database('./db.sqlite');

    const newRow = {
    location: 'Istanbul, Turkey',
    year: 1976,
    }
    // Your code below!

    db.run('INSERT INTO TemperatureData (location, year) VALUES ($location, $year)', {
    $location: newRow.location,
    $year: newRow.year
    }, function(error) {
    // handle errors here!

    console.log(this.lastID);
    });

// HANDLING ERRORS GRACEFULLY
    // For db.run(), db.each(), db.get(), and db.all() first argument is error
        // if no error it will be null
        const newRow = {
            location: 'Istanbul, Turkey',
            year: 1976,
            tempAvg: 13.35
          }
          
          db.run('INSERT INTO TemperatureData (location, year, temp_avg) VALUES ($location, $year, $tempAvg)', {
            $location: newRow.location,
            $year: newRow.year,
            $tempAvg: newRow.tempAvg
          }, function(error) {
            // handle errors here!
            if (error) {
              return console.log(error);
            }
            console.log(this.lastID);
            db.get("SELECT * FROM TemperatureData WHERE id = $id",
            {
              $id: this.lastID
            },
            (error, row) => {
              printQueryResults(row);
            });
          });

// USING db.each()
    // takes  a query & a callback function to perform on each row
    // takes an optional second callback - called when all queries are complete
db.each("SELECT * FROM Dog WHERE breed = 'Labrador'", 
  (error, row) => {
    // This gets called for every row our query returns
    console.log(`${row.name} is a good dog`);
  },
  (error, numberOfRows) => {
    // This gets called after each of our rows have been processed
    console.log(`There were ${numberOfRows} good dogs`);
});

const { addClimateRowToObject, calculateAverages, printQueryResults } = require('./utils');
const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

// your code below:
const temperaturesByYear = {};

db.each("SELECT * FROM TemperatureData", (err, row) => {
  addClimateRowToObject(row, temperaturesByYear);
},
(err, numOfRows) => {
  const averageTemperatureByYear = calculateAverages(temperaturesByYear);
  printQueryResults(averageTemperatureByYear);
});

// CREATING A NEW TABLE
const { calculateAverages, addClimateRowToObject, logNodeError, printQueryResults } = require('./utils');
const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

const temperaturesByYear = {};

// start by wrapping all the code below in a serialize method

db.run('DROP TABLE IF EXISTS Average', error => {
  if (error) {
    throw error;
  }
  db.each('SELECT * FROM TemperatureData',
    (error, row) => {
      if (error) {
        throw error;
      }
      addClimateRowToObject(row, temperaturesByYear);
    }, 
    error => {
      if (error) {
        throw error;
      }
      const averageTemperatureByYear = calculateAverages(temperaturesByYear);
      db.run('CREATE TABLE Average (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)', logNodeError);
      averageTemperatureByYear.forEach(row => {
        db.run('INSERT INTO Average (year, temperature) VALUES ($year, $temp)', {
					$year: row.year,
        	$temp: row.temperature
      	}, err => {
          if (err) {
            console.log(err);
          }
        });
      });
    }
  );
});

// SERIAL QUERIES
    // Queries are run regardless of the order its been put in so this is why we put them in nested callbakcs
    // db.run("DROP TABLE Dog", error => {
    //     db.run("CREATE TABLE Dog", error => {
    //       db.run("INSERT INTO Dog (breed, name, owner, fur_color, fur_length) VALUES ('Dachschund', 'Spike', 'Elizabeth', 'Brown', 'Short')", error => {
    //       }
    //     }
    //   }

      // another way to do this..
      db.serialize(() => {                                                                                                                          
        db.run("DROP TABLE Dog");
        db.run("CREATE TABLE Dog");
        db.run("INSERT INTO Dog (breed, name, owner, fur_color, fur_length) VALUES  ('Dachshund', 'Spike', 'Elizabeth', 'Brown', 'Short')");
      });
    
      const { calculateAverages, addClimateRowToObject, logNodeError, printQueryResults } = require('./utils');
        const sqlite = require('sqlite3');

        const db = new sqlite.Database('./db.sqlite');

        const temperaturesByYear = {};

        // start by wrapping all the code below in a serialize method
        db.serialize(() => { 
        db.run('DROP TABLE IF EXISTS Average', error => {
            if (error) {
            throw error;
            }
        })
        db.run('CREATE TABLE Average (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)', logNodeError);
        db.each('SELECT * FROM TemperatureData',
            (error, row) => {
            if (error) {
                throw error;
            }
            addClimateRowToObject(row, temperaturesByYear);
            }, 
            error => {
            if (error) {
                throw error;
            }
            const averageTemperatureByYear = calculateAverages(temperaturesByYear);
            averageTemperatureByYear.forEach(row => {
                db.run('INSERT INTO Average (year, temperature) VALUES ($year, $temp)', {
                $year: row.year,
                $temp: row.temperature
                }, err => {
                if (err) {
                    console.log(err);
                }
                });
            });
            db.all('SELECT * FROM Average',
            (error, row) => {
            printQueryResults(row)
            })
            });
        });