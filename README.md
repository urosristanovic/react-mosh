# react-mosh

Open <b>cmd</b> and run <b>mongod</b>.

Don't have: <i>C:\data\db\ </i>? </br>
Just: <b>md C:\data\db</b>

Run again <b>mongod</b>. </br>
Should have <i>'waiting for connections on port <b>27017</b>.'</i> </br>
This means that mongoDb server is running.

Go to MongoDB Compass and connect to default values (localhost, 27017).

Go to <b>vidly-api-node</b>. Install dependecies: <b>npm install</b>.</br>
Seed database with some sample data.</br>
Open <b>cmd</b> inside vidly-api-node folder and run <b>node seed.js</b>.</br>

Check the data inside MongoDB Compass (should have vidly db and inside genres, movies).

If everything is okay, start webserver, <b>node index.js</b></br>
Go to web browser and go to:</br> 
- <i>http://localhost:3900/api/movies</i></br>
- <i>http://localhost:3900/api/genres</i></br>

Done, enjoy!
