function resizeInfo() {
    let imp = document.getElementsByClassName("impressum")[0];
    if (imp.className === "impressum") {
        imp.className += " show";
    } else {
        imp.className = "impressum";
    }
    window.scrollTo(0,document.body.scrollHeight);
}