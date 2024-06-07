// Bot pop-up intro
document.addEventListener("DOMContentLoaded", () => {
    const elemsTap = document.querySelector(".tap-target");
    // eslint-disable-next-line no-undef
    const instancesTap = M.TapTarget.init(elemsTap, {});
    instancesTap.open();
    setTimeout(() => {
        instancesTap.close();
    }, 4000);
});

window.addEventListener('load', () => {
    // initialization
    $(document).ready(() => {
        // Bot pop-up intro
        $("div").removeClass("tap-target-origin");

        // drop down menu for close, restart conversation & clear the chats.
        $(".dropdown-trigger").dropdown();

        // initiate the modal for displaying the charts,
        // if you dont have charts, then you comment the below line
        $(".modal").modal();

        // enable this if u have configured the bot to start the conversation.
        // showBotTyping();
        // $("#userInput").prop('disabled', true);

        // if you want the bot to start the conversation
        // customActionTrigger();

        // Display initial user message
        displayInitialUserMessage();
    });
    // Toggle the chatbot screen
    $("#profile_div").click(() => {
        $(".profile_div").toggle();
        $(".widget").toggle();
    });

    // clear function to clear the chat contents of the widget.
    $("#clear").click(() => {
        $(".chats").fadeOut("normal", () => {
            $(".chats").html("");
            $(".chats").fadeIn();
        });
    });

    // close function to close the widget.
    $("#close").click(() => {
        $(".profile_div").toggle();
        $(".widget").toggle();
        scrollToBottomOfResults();
    });

    // close function to close the widget when title is clicked
    $("#chat_header_title").click(() => {
        $(".profile_div").toggle();
        $(".widget").toggle();
        scrollToBottomOfResults();
    });

});
