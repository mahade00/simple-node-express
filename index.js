const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('intall NODE MOON! hello from my second node sever');
});

const users = [
    {id:00, name:'Mahade', age: 33, email: 'taka@gmail.com', mobile: '01853-358969'},
    {id:01, name:'Hassan', age: 33, email: 'hassan@gmail.com', mobile: '01853-358969'},
    {id:02, name:'Ripon', age: 33, email: 'ripon@gmail.com', mobile: '01853-358969'},
    {id:03, name:'Hasib', age: 33, email: 'hasib@gmail.com', mobile: '01853-358969'},
    {id:04, name:'Sohel', age: 33, email: 'sohel@gmail.com', mobile: '01853-358969'},
    {id:05, name:'Rasel', age: 33, email: 'rasel@gmail.com', mobile: '01853-358969'},
]

app.get('/users', (req, res) => {    
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResults = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResults);
    } else {
        res.send(users);
    }
   
})

//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})


// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges','banana','apple']);
})

app.get('/fruits/mangoes/fazlii', (req, res) => {
    res.send('WOW !! So Sweet...');
})
app.listen(port, () => {
    console.log('install ! Listening to Port', port);
})