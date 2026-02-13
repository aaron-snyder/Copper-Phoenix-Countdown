function getNextFridayFivePM() {
    const now = new Date();
    const target = new Date();

    
    const day = now.getDay(); 
    const daysUntilFriday = (7 - day + 7) % 7;

    target.setDate(now.getDate() + daysUntilFriday);
    target.setHours(17, 0, 0, 0);

    if (now > target) {
        target.setDate(target.getDate() + 7);
    }

    return target;
}

function updateCountdown() {
    const now = new Date();
    const target = getNextFridayFivePM();
    const diff = target - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "IT'S FRIDAY 5PM!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
        `${days} : ${hours} : ${minutes} : ${seconds}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
