'use strict'

const linkData = [
    {
        title: "New Sprint",
        links: [
            { text: "Leveransgrad vs resursdagar", url: "file://///id-infra02/Home/jgn/My Documents/IDATA/_Publish/New Sprint - Leveransgrad vs resursdagar.htm", class: "button1" },
            { text: "Leveransgrad (US - Bug) senaste sprintar", url: "file://///id-infra02/Home/jgn/My Documents/IDATA/_Publish/New Sprint - Leveransgrad (US - Bug) 10 resp 5 sprintar.htm", class: "button1" },
            { text: "Leveransgrad (US) - antal vs h", url: "file://///id-infra02/Home/jgn/My Documents/IDATA/_Publish/New Sprint Leveransgrad antal vs h.htm", class: "button1" },
            { text: "Senaste sprint", url: "file://///id-infra02/Home/jgn/My Documents/IDATA/_Publish/New Sprint - Leverans.htm", class: "button1" },
            { text: "RoadMap", url: "file://///id-infra02/Home/jgn/My Documents/IDATA/_Publish/RoadMap.htm", class: "button2" }
        ]
    },
    {
        title: "Time line",
        links: [
            { text: "Beslutade US", url: "file://///id-infra02/Home/jgn/My Documents/IDATA/_Publish/Time line - US - Alla beslutade US.htm", class: "button1" },
            { text: "Krav som ej ännu produktionssatta", url: "file://///id-infra02/Home/jgn/My Documents/IDATA/_Publish/Time line - US - Krav som ej produktionssatta.htm", class: "button2" }
        ]
    }
    // ... fyll på med fler sektioner
];



function renderLinks(isLocal) {
    const container = document.getElementById("linkContainer");
    container.innerHTML = ""; // rensa

    linkData.forEach(section => {
        const div = document.createElement("div");

        const header = document.createElement("h4");
        header.textContent = section.title;
        div.appendChild(header);

        section.links.forEach(link => {
            const a = document.createElement("a");
            isLocal ? a.href = "javascript:window.open('" + link.url + "')" : a.href = link.url;
            
            const btn = document.createElement("button");
            btn.className = "button " + link.class;
            btn.textContent = link.text;

            a.appendChild(btn);
            div.appendChild(a);
            div.appendChild(document.createElement("br"));
        });

        container.appendChild(div);
    });
}

renderLinks(getLink());


function getLink() {
    if (window.location.protocol === 'file:') {
        return 1==1; //"javascript:window.open('file://///";
    } else {
        return 1==0; //"file://///";
    }
}

