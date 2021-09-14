const timer = (id, deadline) => {

	const getRemainingTime = (endtime) => {
		const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
	};

	const setClock = (selector, endtime) => {
		const timerSelector = document.querySelector(selector);

		const days = timerSelector.querySelector('#days');
		const hours = timerSelector.querySelector('#hours');
		const minutes = timerSelector.querySelector('#minutes');
		const seconds = timerSelector.querySelector('#seconds');

		const timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getRemainingTime(endtime);

			days.textContent = addZero(t.days);
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);


			if (t.total <= 0) {
				days.textContent = "00";
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";

				clearInterval(timeInterval);
			}
		}
	};

	function addZero(num) {
		if (num <= 9) {
			return `0${num}`;
		}

		return num;
	}

	try {
		setClock(id, deadline);
	} catch(e) {};
};

export default timer;