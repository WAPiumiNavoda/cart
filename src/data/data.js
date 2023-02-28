const pizza = [
    {
      _id: "1",
      title: "Day 1 of college",
      image:"https://i.ibb.co/dGbbM24/gym.jpg",
      content:
        "I made a few new friends and introduced myself to a lot of new teachers.",
      category: "College", 
      variants:["small","large","medium"],
      prize:[
        {
          small: 99,
          large: 199,
          medium: 399
        }
      ],
    },
    {
      _id: "2",
      image:"https://i.ibb.co/dGbbM24/gym.jpg",
      title: "Learned some Node JS",
      content: "Learned how to create a server in node JS and my first API",
      category: "Learning",
      variants:["small","large","medium"],
      prize:[
        {
          small: 99,
          large: 199,
          medium: 399
        }
      ]
    },
    {
      _id: "3",
      title: "Watched some Anime",
      image:"https://i.ibb.co/dGbbM24/gym.jpg",
      content: "Finished 2 seasons of Attack on Titan and My Hero academia.",
      category: "Entertainment",
      variants:["small","large","medium"],
      prize:[
        {
          small: 99,
          large: 199,
          medium: 399
        }
      ]
    },
    {
      _id: 4,
      title: "Started React JS",
      image:"https://i.ibb.co/dGbbM24/gym.jpg",
      content:
        "Made my first App in React JS, feels awesome to learn something new. I aim to be a full stack dev someday",
      category: "Learning",
      variants:["small","large","medium"],
      prize:[
        {
          small: 99,
          large: 199,
          medium: 399
        }
      ]
    },
  ];
  
  module.exports = pizza;