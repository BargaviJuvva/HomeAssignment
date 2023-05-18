const array = require("./heartbeat.json");
let beats, time, median, sum = 0, length = 0, maxiDate;

for (let i = 472; i <= array.length; i++) {
    const element = array[i];

    beats = array.map((item) => item.beatsPerMinute)

    beats.forEach(num => {
        sum += num;
    })


    length = beats.length;
    median = sum / length;

    time = array.map((item) => item.timestamps)

}
maxiDate = new Date(
    Math.max(
        ...time.map(element => {
            return new Date(element.endTime);
        }),
    ),
);
console.log("MAX Beats==> " + Math.max(...beats));
console.log("MIN Beats==> " + Math.min(...beats));
console.log("MEDIAN Beats ==> " + median);
console.log("latestDataTimestamp ==> " +maxiDate);



