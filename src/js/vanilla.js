import data from "../common/serviceAPI";

const userList = document.querySelector('#userList');
const postList = document.querySelector('#postList');

// Get Users
data.getUsers().then(json => json.forEach((val, key) => {
    const li = document.createElement('li');
    li.innerText = ' Name: ' + val.name + ' - ' + ' Email: ' + val.email;
    userList.appendChild(li);
  })
);    

/*  // Get Posts
data.getPosts().then(json =>  json.forEach((val, key) => {
    const div = document.createElement('div')
    const title = document.createElement('h3');
    const desc = document.createElement('p');
    const divider = document.createElement('hr');

    title.innerText = val.title.toUpperCase();
    desc.innerText = val.body;
    div.appendChild(title);
    div.appendChild(desc);
    
    postList.appendChild(div);
    postList.appendChild(divider);
  })
);*/