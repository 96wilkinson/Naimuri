# Naimuri
Naimuri challenge

## Getting the application to work correctly
### Pre-requisites 
- clone down the repo
- Make sure you have an up to date NPM (for this project I used 9.5.1)
- npm install
- from the parent directory you can run npm install
- Once the application is running you should see some console output that it is running on port 3000 unless changed in app.js
- Once the application is running you can either use postman or use a curl to send a post

### Input
an example post would be 
```sh
curl --location 'http://localhost:3000/' \
--header 'Content-Type: application/json' \
--data '{
    "body":"4 eeeeddoonnnsssrv"
}'
```
### Output
which should return 
```sh
{
    "line1": "rose",
    "line2": "oven",
    "line3": "send",
    "line4": "ends"
}
```
### Limitations
The application needs more time to get up to a seven letter word. Currently the application will only produce a word square of a 4 letter word. There would be needed changes to arrayCreator and matchOrchestrator to allow this progress.

## The challenge
This challenge is to produce a word square. In a word square you are given a grid with letters
arranged that spell valid English language words when you read from left to right or from top to
bottom, with the requirement that the words you spell in each column and row of the same
number are the same word. For example, the first row and the first column spell the same
word, the second row and second column do, too, and so on. The challenge is that in arranging
those letters that you spell valid words that meet those requirements.
One variant is where you're given an n*n grid and asked to place a set of letters inside to meet
these rules, and that’s our challenge: given the grid dimensions and a list of letters, can you
produce a valid word square.


an example can be seen below
### Input
4 eeeeddoonnnsssrv

### output
rose
oven
send
Ends

## Walkthrough of the application

### Sending data
In app.js there are 2 routes a get route and a post route. The get route is just to see  if the app was responding and testing how it sent data back. The 2nd route is a post route, which requires an input from the user. This input should have the number of letters in the word square and the letters which make up the word square.
### Handling data
Once the data has been sent to the post route, the application then splits the data into 2 sections the number of letters and the letters themselves into 2 arrays.
### Reducing the number of words
Once that is complete I then try and count the unique letters that appear in the word square which are the letters that appear diaganally. This is to help my search later.
I then get the full array of letters which appear in the dicitionary.
I reduce the number of words in this array by elimiating words which dont have the number of letters sent in by the user returning the updated list.
I then reduce the array with words which do not contain a unique letter and return the updated list.
### Match Orchestrator
Finally I send the array to the match orchestrator.]
match orchestrator creates a series of arrays based on the number of letters in the word square.
It then cycles in 4 different for-if loops checking the words one line at a time with varying if statements if the words match each other as they are suppossed to. Once a word collection is found to match each other as the word square intended we then check this solution against the letters sent in to see if they were all used. If they were all used we return a json of the word square.

## Things to improve
- getting a 5 letter word square to work
- getting a 7 letter word square  to work
- improve array creation to be more dynamic
- refactor massive for-if loops  
- Create a interactive user page via html rather than cURL/Postman