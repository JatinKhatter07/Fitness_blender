const data = JSON.parse(localStorage.getItem('signIn'))
const userData = JSON.parse(localStorage.getItem('user'))
// console.log("data")
let output = ""
for(i in data){
    for(j in userData){
        if (data[i].userid === userData[j].uName) {
            // console.log('display')
           output = `<img class="menu-img" src="${data[i].filename}"/>`
            document.getElementById('showName').innerHTML = "Hi! " + data[i].fname + "...!"
        }
    }
}
// localStorage.removeItem('user')
// console.log(output)
document.getElementById('menu-img').innerHTML = output
