let ref = document.getElementById("controls")
    let add = document.getElementById("add");
    let par = document.getElementById("of");
    let i = 0;
    add.addEventListener("click", () => {
        const cover = document.createElement("div")
        cover.className = "content slidedown";
        const note = document.createElement("textarea")
        const butt = document.createElement("input")
        note.className = "con";
        note.value = "";
        note.placeholder = "Write your idea here...";
        butt.className = "rem";
        butt.type = "button";
        butt.value = "-";
        cover.appendChild(note);
        cover.appendChild(butt);
        par.insertBefore(cover, ref);
        setTimeout(() => {
            cover.classList.add("added");
        }, 300)

    })
    par.addEventListener("click", function (e) {
        if (e.target.classList.contains("rem")) {
            const pd = e.target.closest(".content");
            pd.classList.add("remove");

            setTimeout(() => {
                pd.classList.add("slideup");
            }, 200)
            setTimeout(() => {
                pd.remove();
                save();
            }, 400)
        }
    })
    function save() {
        const arr = [];
        let list = document.getElementsByClassName("con");
        for (let i = 0; i < list.length; i++) {
            arr.push(list[i].value);
        }
        const str = JSON.stringify(arr);
        localStorage.setItem("data", str);
    }
    let timer;
    par.addEventListener("input", () => {
        clearTimeout(timer);
        timer = setTimeout(save, 1000);
    });
    par.addEventListener("click", () => {
        clearTimeout(timer);
        timer = setTimeout(save, 1000);
    });
    function load() {
        const str = localStorage.getItem("data");
        const list = JSON.parse(str);
        for (let i = 0; i < list.length; i++) {
            const cover = document.createElement("div")
            cover.className = "content";
            const note = document.createElement("textarea")
            const butt = document.createElement("input")
            note.className = "con";
            note.value = list[i];
            note.placeholder = "Write your idea here...";
            butt.className = "rem";
            butt.type = "button";
            butt.value = "-";
            cover.appendChild(note);
            cover.appendChild(butt);
            par.insertBefore(cover, ref);
        }
    }
    window.onload = load;
