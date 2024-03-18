import { getRandomNumberInRange, SetPerformanceTimer } from "./NumberDateUtilities.js";

const timer = new SetPerformanceTimer();
timer.start();
for (let i = 0; i < 100000000; i++) {
    getRandomNumberInRange(1,100);
}
timer.end();