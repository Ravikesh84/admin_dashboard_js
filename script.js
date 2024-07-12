async function fun(){
    let r = await fetch("http://localhost:3000/student")
    let c = await r.json()
    let sh = document.getElementById('showdata')
    let d = c.map((e)=>`
    <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.author}</td>
       
        <td> <button onclick="mydelete(${e.id})"> Delete </button> </td>
        <td> <button onclick="myupdate(${e.id})"> Edit </button> </td>
    </tr>

    `).join("")
    sh.innerHTML = d
}
fun()

function mydelete(id){

    fetch(`http://localhost:3000/student/${id}`,{
        method:"DELETE"
    })
    .then((res)=>alert("Delete Successfully"))
}

function insert1(){
    let data ={
        id:document.getElementById('id').value,
        name:document.getElementById('name').value,
        author:document.getElementById('author').value,
    }
    fetch("http://localhost:3000/student" , {
        method:"POST",
        headers:{   
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
    })
}

// var storeid = 0
// function myupdate(id){
//     storeid = id;
//     document.getElementById("edit").style.display="block"
//     document.getElementById('id1').value=id
// }

// function update(){
//     let mydata = {
//         id:document.getElementById('id1').value,
//         name:document.getElementById('name1').value,
//         age:document.getElementById('age1').value,
//         marks:document.getElementById('marks1').value

//     }
//     fetch(`http://localhost:3000/student/${storeid}`,{
//         method:"PUT",
//         headers:{
//             "Content-Type":"application/json"
//             },
//             body:JSON.stringify(mydata)
//     })
//     .then((res)=>alert("Update Successfully"))
//     .catch(res=>alert("error"))
// }

async function myupdate(){
    let mydata = await fetch("http://localhost:3000/student")
    let con = await mydata.json()
    let show = document.getElementById('demo')
    let y = con.map((e)=>`
    <input type="text" value="${e.id}"> <br>
    <input type="text" value="${e.name}"> <br>
    <input type="text" value="${e.author}"> <br>
    `)
    show.innerHTML=y
}