# ml5-example
Simple example showcasing ml5js.org library

### Usage

To use this repository you will need to clone it to your machine.
Then you need to install the dependencies and start the server.

Installing dependencies
```
npm install
```

Starting the server
```
npm start
```

After you've done that you simply add any images you like, as jpg format, into the images directory. Rename them to use a number in sequence starting with zero followed by the jpg extension. Example 0.jpg, 1.jpg, 2.jpg a.s.o.

Then you change the simple-classification.html to be aware of the number of images you have on disk.

You need to change the line
```
randomNum = getRandomInt(12500);
```

To the number of images you have so for instance if you have 3 images you change it to 3.
```
randomNum = getRandomInt(3);
```