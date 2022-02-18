let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }

];
const modifiedPlayList = playList.map((item) => item)
console.log(modifiedPlayList)
// function createListElement() {
//     const li = document.createElement("li");
//     li.textContent = "im vadik";
//     return li;
// }

// function appendChildren (parent, children) {
//     children.forEach(function(child) {
//         parent.appendChildren(child)
//     });
// }

// let myList = document.getElementById('myID');
// console.log(myList)

for (i = 0; i <= modifiedPlayList.length; i++) {
    const h3 = document.createElement("h3");
    h3.textContent = modifiedPlayList.author;
    const ADDP = document.getElementsByClassName("wrapper")[0];
    ADDP.append(h3);
}ж




    // Завдання 2

const manipulateDOM = () => {
    DIV.classList.add("box")
    BUTTON.classList.add("buttonHidden")
}

const superManipulateDOM = () => {
    DIV.classList.add("box_hidden_two")
    BUTTONTWO.classList.add("buttonHidden")
    BUTTON.classList.add("buttonVisable")
}

const DIV = document.getElementById("myID")
const BUTTON = document.getElementById("buttonID")
const BUTTONTWO = document.getElementById("buttonTwoID")

    // Завдання 3