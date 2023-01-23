//Content Toggle.
function bricksableContentToggle() {
    bricksQuerySelectorAll(document, ".brxe-ba-content-toggle, .bricks-element-ba-content-toggle").forEach((function (e) {
        var n = e.querySelector(".ba-content-toggle-item.active"),
            c = e.querySelector(".ba-content-toggle-tab-item"),
            t = bricksQuerySelectorAll(e, ".ba-content-toggle-item"),
            slider = e.querySelector('.ba-content-toggle-slider');
        slider.style.left = n.offsetLeft + 'px';
        slider.style.width = n.offsetWidth + 'px';
        slider.style.height = n.offsetHeight + 'px';
        slider.style.transition = 'width 0.35s, height 0.35s, left 0.35s';
        t.forEach((function (r, i) {
            var o = bricksQuerySelectorAll(e, ".ba-content-toggle-tab-item");
            r.addEventListener("click", (function () {
                t.forEach((function (e, t) {
                    t === i ? r.classList.add("active") : e.classList.remove("active")
                    t === i ? r.setAttribute("aria-hidden", "true") : e.setAttribute("aria-hidden", "false")
                })), o.forEach((function (e, t) {
                    var animation = e.getAttribute("data-animation");
                    t === i ? e.classList.add("show-content", "bricks-animated", animation) : e.classList.remove("show-content", "bricks-animated", animation)
                    t === i ? e.setAttribute("aria-hidden", "true") : e.setAttribute("aria-hidden", "false")
                }));
                slider.style.left = r.offsetLeft + "px";
                slider.style.width = r.offsetWidth + "px";
                slider.style.height = r.offsetHeight + "px";
            }))
        }))
    }));
}
document.addEventListener("DOMContentLoaded", (function (e) {
    if (bricksIsFrontend) {
        bricksableContentToggle();
    }
}));