const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{
        model: Product
      }]
  })
  .then((categoryData) => res.status(200).json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    include: [{
        model: Product
      }],
    where: {
      id: req.params.id
    }
  })
  .then((categoryData) => res.status(200).json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((categoryInput) => res.json(categoryInput))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then((categoryInput) => {
    if (!categoryInput) {
      res.status(404).json({ message: `Sorry, I'm unable to find a category` });
    }
   res.json(categoryInput)
  })  
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((deleteCategory) => {
    res.json(deleteCategory);
  }).catch((err) => {
    console.log(err);
    res.json(err);
  })
});

module.exports = router;
