
        const setClock = () => {
            const today = new Date()

            const { hour, minute, seconds, period} = formatTime(today);
           

            document.querySelector('.hour').textContent = hour;
            document.querySelector('.minute').textContent = minute;
            document.querySelector('.seconds').textContent = seconds;
            document.querySelector('.period').textContent = period;

            document.querySelector(".date").textContent = formatDate(today);

        }

        const formatTime = (todayDate) => {
            let hour = todayDate.getHours()
            let minute = todayDate.getMinutes()
            let seconds = todayDate.getSeconds()

            let period = hour >= 12? "PM" : "AM"

            hour = hour> 12 ? hour % 12 : hour;

            hour = hour< 10? `0${hour}` : hour;
           minute =minute< 10? `0${minute}` : minute;
            seconds = seconds< 10? `0${seconds}` : seconds;

            return {hour, minute, seconds, period}

        };

        const formatDate = (todayDate) => {
            
            const date = todayDate.getDate();
            const year = todayDate.getFullYear();
            const day = todayDate.toLocaleString("default", {weekday : "long"});
            const month = todayDate.toLocaleString("default", {month : "short"})

            return `${day} ${month} ${date},${year}`

        };

        setClock();
        setInterval(setClock, 1000)
