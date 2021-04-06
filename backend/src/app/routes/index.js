const router = require("express").Router();
const faker = require("faker");
const Article = require("../model/Article");

router.get("/create", async (req, res) => {
  for (let i = 0; i < 100; i++) {
    await Article.create({
      title: faker.name.title(),
      imageURL: faker.image.imageUrl(),
      description: faker.lorem.paragraph(),
    });
  }
  res.send("Received");
});

router.get("/articles", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

module.exports = router;
