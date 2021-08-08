const refs = {
  getDays: document.querySelector('span[data-value="days"]'),
  getHours: document.querySelector('span[data-value="hours"]'),
  getMins: document.querySelector('span[data-value="mins"]'),
  getSecs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  updateClockface({ days, hours, mins, secs }) {
    refs.getDays.textContent = days;
    refs.getHours.textContent = hours;
    refs.getMins.textContent = mins;
    refs.getSecs.textContent = secs;
  }

  start() {
    const startTime = this.targetDate.getTime();
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
      this.updateClockface({ days, hours, mins, secs });
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Feb 15, 2022"),
});
