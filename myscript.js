fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        // console.log(data);
    });

function appendData(data) {
    let mainContainer = document.getElementById("list");
    for (let i = 0; i < data.length; i++) {

        let li = document.createElement("li");
        li.setAttribute("data-id",i+1);
        li.setAttribute("id", i + 1);
        li.innerHTML = data[i].name + ',' + 'id:' + data[i].id + ', username:' + data[i].username + ', email:' + data[i].email + ', phone' + data[i].phone + ', website:' + data[i].website;

        mainContainer.appendChild(li);
        //let dataset = li.getAttribute("data-id");
        

    }
};
let elements=document.getElementsByTagName("li");
//console.log(elements);

//let datasetvalue=onclick.tagret.id;
//let datasetvalue=elements.dataset.id;
//let datasetvalue=elements.getAttribute("data-id");
//let datasetvalue=5;
//console.log(datasetvalue);
let item = document.getElementById("list");
item.onclick = function (event) {
    location.href = `index0.html?Id=${event.target.id}`;
}