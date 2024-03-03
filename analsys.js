const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const time = req.body.question1;
    const activity = req.body.question2;
    const cost = req.body.question3;
    const distance = req.body.question4;

    console.log(`Time: ${time}`);
    console.log(`Activity: ${activity}`);
    console.log(`Cost: ${cost}`);
    console.log(`Distance: ${distance}`);

    let activityList = [];

    if (time === "Thirty minutes") {
        activityList.push("Playing a video game($0)(0 Miles)", "Watching TV($0)(0 Miles)", "Reading comics($0)(0 Miles)",
            "Listening to music($0)(0 Miles)");
    } else if (time === "One hour") {
        activityList.push("Watching a movie($0)(0 Miles)", "Listening to the radio($0)(0 Miles)", "Going on a hike($0)(25 Miles or more)");
    } else if (time === "Two hours") {
        activityList.push("Playing a board game($0)(0 Miles)", "Going to the theater($20)(5 Miles)",
            "Going to the art museum($50)(10 Miles)");
    } else if (time === "Three hours or more") {
        activityList.push("Reading a book($0)(0 Miles)", "Playing an entire video game($50)(0 Miles)",
            "Playing a sport($0)(5 Miles)", "Going to a theme park($100)(25 Miles or more)");
    }

    if (activity === "Watch something") {
        activityList = activityList.filter(item => item.includes("Watching"));
    } else if (activity === "Listen to something") {
        activityList = activityList.filter(item => item.includes("Listening"));
    } else if (activity === "Play something") {
        activityList = activityList.filter(item => item.includes("Playing"));
    } else if (activity === "Read something") {
        activityList = activityList.filter(item => item.includes("Reading"));
    } else if (activity === "Go somewhere") {
        activityList = activityList.filter(item => item.includes("Going"));
    }
    console.log('Activity list after time check:', activityList);

    console.log(`Activity list after activity check: ${activityList}`);

    activityList = activityList.filter(item => item.includes(`(${cost.trim()})`));
    activityList = activityList.filter(item => item.includes(`(${distance.trim()})`));

    console.log(`Activity list after cost and distance check: ${activityList}`);

    const activities = activityList.length ? activityList.join(', ') : "No activities found";
    res.send(activities);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
