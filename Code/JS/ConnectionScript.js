const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'voterdata-dawabi.database.windows.net', // Replace with your host
    user: 'user_Stufies',      // Replace with your database username
    password: 'K3x!#4RbnjuTrgg!@TjY', // Replace with your database password
    database: 'Voter_Data' // Replace with your database name
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Generate HTML page for each entry in the table
const generateHTMLPage = (entry) => {
  const htmlContent = `
    <html>
      <head>
        <title>${entry.Full_Name}</title>
      </head>
      <body>
        <h1>${entry.Full_Name}</h1>
        <p>ID: ${entry.ID}</p>
        <p>Date of Birth: ${entry.DOB}</p>
        <p>Animal Type: ${entry.Animal_Type}</p>
        <p>Bio: ${entry.Bio}</p>
        <p>Social Media: ${entry.SCMem}</p>
      </body>
    </html>
  `;

  fs.writeFile(`./public/${entry.ID}.html`, htmlContent, err => {
    if (err) {
      console.error('Error writing HTML file:', err);
      return;
    }
    console.log(`HTML file for entry ${entry.ID} generated`);
  });
};

// Serve the HTML file for each entry
app.get('/entry/:id', (req, res) => {
  const entryId = req.params.id;
  connection.query('SELECT * FROM mytable WHERE ID = ?', [entryId], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.sendStatus(500);
      return;
    }

    if (results.length > 0) {
      generateHTMLPage(results[0]);
      res.sendFile(__dirname + `/public/${results[0].ID}.html`);
    } else {
      res.send('Entry not found');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://stuffie-log.netlify.app`);
});

