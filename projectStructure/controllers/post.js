let users = [
  {
    id: 1,
    name: "Ayaan Mohamed",
    email: "ayaan@gmail.com",
    age: 22
  },
  {
    id: 2,
    name: "Fatima Ali",
    email: "fatima@gmail.com",
    age: 25
  },
  {
    id: 3,
    name: "Zubeyr Hassan",
    email: "zubeyr@gmail.com",
    age: 28
  },
  {
    id: 4,
    name: "Khalid Abdi",
    email: "khalid@gmail.com",
    age: 21
  },
  {
    id: 5,
    name: "Hodan Yusuf",
    email: "hodan@gmail.com",
    age: 24
  },
  {
    id: 6,
    name: "Abdirahman Noor",
    email: "abdi@gmail.com",
    age: 30
  },
  {
    id: 7,
    name: "Sahra Omar",
    email: "sahra@gmail.com",
    age: 23
  },
  {
    id: 8,
    name: "Mohamed Ahmed",
    email: "mohamed@gmail.com",
    age: 27
  },
  {
    id: 9,
    name: "Leyla Farah",
    email: "leyla@gmail.com",
    age: 26
  },
  {
    id: 10,
    name: "Ismail Ibrahim",
    email: "ismail@gmail.com",
    age: 29
  }
];

exports.getPostData = (req,res)=> {
    const getPostData = req.body;
    if(!getPostData.name || !getPostData.email || !getPostData.age) {
       return res.status(400).send("Invalid data");
    }
    const newPost = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }
    users.push(newPost);
    res.status(201).json(newPost);
}