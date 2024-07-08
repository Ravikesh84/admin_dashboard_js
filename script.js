async function fun(){
    let r = await fetch("http://localhost:3000/student")
    let c = await r.json()
    let sh = document.getElementById('showdata')
    let d = c.map((e)=>`
    <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.marks}</td>
    </tr>

    `).join("")
    sh.innerHTML = d
}
fun()

function insert1(){
    let data ={
        id:document.getElementById('id').value,
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        marks:document.getElementById('marks').value
    }
    fetch("http://localhost:3000/student" , {
        method:"POST",
        headers:{   
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
    })
}