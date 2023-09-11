
$(document).ready(function () {
    const form = $("#message_form");
    form.submit(function (e) {
        e.preventDefault();
        const message = form.find('[name="message"]').val();
        const name = form.find('[name="name"]').val();
        const messageData = {
            message: message,
            name: name,
        };
        let messageDataArray = JSON.parse(localStorage.getItem("messageDataArray")) || [];
        messageDataArray.push(messageData);
        localStorage.setItem("messageDataArray", JSON.stringify(messageDataArray));
        window.location.href = "display_wall.html";
    });

    // display the stored data 
    const messageDataArray = JSON.parse(localStorage.getItem("messageDataArray"));
    if (messageDataArray && messageDataArray.length > 0) {
        $.each(messageDataArray, function (index, messageData) {
            $('.wall_wrapper').append(
                `
                <div class="item">
                    <p class="msg_content"> ${messageData.message} </p>
                    <h5 class="sender">${messageData.name} </h5>
                </div>
                `
            )
        });
    }
    else {
        $('.wall_wrapper').append(
            `
                <strong> There is no messages to show here ..  </strong>
            `
        )
    }

});

function smoothScrollTo(y, duration) {
    const startingY = window.scrollY;
    const diff = y - startingY;
    let start;

    // Use requestAnimationFrame for smooth animation
    function step(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, startingY + diff * progress);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    // Start the animation
    requestAnimationFrame(step);
}

function scrollWindow() {
    const scrollAmount = 20; // Adjust the scrolling speed as needed
    const duration = 500; // Adjust the duration for smoother scrolling

    // Calculate the destination position
    const to = window.scrollY + scrollAmount;

    // Scroll smoothly
    smoothScrollTo(to, duration);

    // If at the bottom, reset to the top
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setTimeout(() => {
            smoothScrollTo(0, duration);
        }, 2000); // Scroll to top after 2 seconds
    }
}

// Call the scrollWindow function every 2 seconds
setInterval(scrollWindow, 4000);
