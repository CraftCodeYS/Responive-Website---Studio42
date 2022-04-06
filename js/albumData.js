function albumData() {
    let slide = document.getElementById("slideList");
    for (let i = 0; i < album.length; i++) {

        const li = document.createElement("li");

        const img = document.createElement("img");
        img.setAttribute("src", album[i].image);

        const span = document.createElement("span");
        span.className="desc";
        
        const h1 = document.createElement("h3");
        h1.innerHTML=album[i].artist;

        const h2 = document.createElement("h7");
        h2.innerHTML=album[i].song;

        const h3 = document.createElement("p");
        h3.innerHTML=album[i].year + album[i].copyright;

        slide.appendChild(li);
        li.appendChild(img);
        li.appendChild(span);
        span.appendChild(h1);
        span.appendChild(h2);
        span.appendChild(h3);
    }
}

albumData();