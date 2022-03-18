const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    attributes: ["id", "tag_name"],
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        as: "products",
        attributes: ["id", "product_name"],
      },
    ],
  }).then((dbTagData) => {
    if (dbTagData) {
      res.json(dbTagData);
    } else {
      res.status(404).json({ message: "No tags found" });
    }
  }
  ).catch((err) => {
    res.status(400).json(err);
  }
  );
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "tag_name"],
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        as: "products",
        attributes: ["id", "product_name"],
      },
    ],
  }).then((dbTagData) => {
    if (dbTagData) {
      res.json(dbTagData);
    } else {
      res.status(404).json({ message: "No tag found with this id" });
    }
  } 
  ).catch((err) => {
    res.status(400).json(err);
  }
  );
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      if (tag) {
        res.json(tag);
      } else {
        res.status(404).json({ message: "No tag found with this id" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((tag) => {
    if (!tag) {
      res.status(404).json({ message: "No tag found with this id" })
    } else {
      res.json({ message: "Tag successfully deleted" });
    }
  }
  ).catch((err) => {
    res.status(400).json(err);
  }
  );
});

module.exports = router;
