class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timer();
  }

  getRefs() {
    const timerRef = document.querySelector(this.selector);
    return {
      days: timerRef.querySelector('[data-value="days"]'),
      hours: timerRef.querySelector('[data-value="hours"]'),
      mins: timerRef.querySelector('[data-value="mins"]'),
      secs: timerRef.querySelector('[data-value="secs"]'),
    };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.getRefs().days.textContent = days;
    this.getRefs().hours.textContent = hours;
    this.getRefs().mins.textContent = mins;
    this.getRefs().secs.textContent = secs;
  }

  timer() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.updateClockface(deltaTime);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Feb 15, 2022"),
});
