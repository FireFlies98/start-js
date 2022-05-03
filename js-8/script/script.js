//    Завдання 1.   --->   Створити HTML-сторінку для відображення/редагування тексту. 
//  При відкритті сторінки текст відображається за допомогою тега div. 
//  При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 
//  При натисканні Ctrl +, замість textarea з'являється div з уже зміненим текстом. 
//  Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш. 

const text = document.getElementById("task_one");
const DIV_BLOCK = document.getElementById("text")


document.addEventListener("keyup", function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        const textarea = document.createElement("textarea");
        textarea.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget bibendum ante. In tempus tincidunt augue, id blandit erat dictum quis. Vivamus nisl lorem, hendrerit in urna et, iaculis interdum nulla. Maecenas id bibendum eros. Donec id elit elit. In quis justo suscipit, vehicula diam ac, interdum est. Aenean ligula velit, posuere ut magna id, venenatis vestibulum lorem. Nunc rutrum nunc ut orci molestie feugiat. Suspendisse nulla ante, suscipit non eros nec, consectetur mattis risus. Vestibulum luctus dolor neque, eu venenatis purus lacinia eget. Nunc auctor ac tortor ac bibendum. Etiam iaculis pellentesque mauris in mollis. Aliquam massa erat, tristique pellentesque lorem et, consequat commodo risus."
        textarea.classList.add("textArea")
        const DIV = document.getElementsByClassName("section_block")[0];
        DIV.append(textarea)
    } 
})


document.addEventListener("keyup", function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        DIV_BLOCK.classList.add("delete")

    }
})


// document.addEventListener("keyup", function (event) {
//     if(event.key = 'Control') {
//         const ASD = document.getElementsByClassName("textArea")
//         console.log(ASD)
//         ASD.classList.add("delete")
//         document.getElementById("text").value = ASD.textContent
//     }
// })



//  Завдання 3.
//  Створити HTML-сторінку з блоком тексту в рамці. 
//  Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

function qwe() {
    const FRAME_ICON = document.createElement("textarea");
    FRAME_ICON.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget bibendum ante. In tempus tincidunt augue, id blandit erat dictum quis. Vivamus nisl lorem, hendrerit in urna et, iaculis interdum nulla. Maecenas id bibendum eros. Donec id elit elit. In quis justo suscipit, vehicula diam ac, interdum est. Aenean ligula velit, posuere ut magna id, venenatis vestibulum lorem. Nunc rutrum nunc ut orci molestie feugiat. Suspendisse nulla ante, suscipit non eros nec, consectetur mattis risus. Vestibulum luctus dolor neque, eu venenatis purus lacinia eget. Nunc auctor ac tortor ac bibendum. Etiam iaculis pellentesque mauris in mollis."
    FRAME_ICON.classList.add("task_three")
    const PARENT = document.getElementsByClassName("task_three")[0]
    PARENT.append(FRAME_ICON)

}

qwe()
    

