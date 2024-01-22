const image = document.querySelector(".button_scroll");
const buttonToTop = document.querySelector(".to_top");
const buttonToBottom = document.querySelector(".to_bottom");
const imageBefore = "media/scroll-top-btn-off.png";
const imageAfter = "media/scroll-top-btn-on.png";
const buttonBefore = "media/scroll-bottom-btn-off.png";
const buttonAfter = "media/scroll-bottom-btn-on.png";
image.addEventListener("mouseover", () => {
    image.src = imageAfter;
});

image.addEventListener("mouseout", () => {
    image.src = imageBefore;
});

image.addEventListener("click", () => {
    window.scrollTo(0,0)
    });

buttonToTop.addEventListener("mouseover", () => {
    buttonToTop.src = imageAfter;
});

buttonToTop.addEventListener("mouseout", () => {
    buttonToTop.src = imageBefore;
});

buttonToTop.addEventListener("click", () => {
    window.scrollTo(0,0)
});

buttonToBottom.addEventListener("mouseover", () => {
    buttonToBottom.src = buttonAfter;
});

buttonToBottom.addEventListener("mouseout", () => {
    buttonToBottom.src = buttonBefore;
});

buttonToBottom.addEventListener("click", () => {
    window.scrollTo(document.body.scrollWidth, document.body.scrollHeight);
});