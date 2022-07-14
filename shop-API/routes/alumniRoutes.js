const express = require("express"),
  router = express.Router(),
  Alumni = require("../models/Alumni");

router.get("/alumni/register", (req, res) => {
  res.send("alumni registration form");
});

router.post("/alumni/register", async (req, res) => {
  try {
    const newAlumni = new Alumni(req.body);
    await newAlumni.save();
    res.json({ message: "new Alumni member registered", newAlumni });
    console.log(newAlumni);
  } catch (error) {
    res.status(400).send("failed to register Alumni member");
    console.log(error);
  }
});

router.get("/alumni/getList", async (req, res) => {
  try {
    const alumniList = await Alumni.find({});
    res.json({ message: "List registered Alumni", alumniList });
    console.log(alumniList);
  } catch (error) {
    res.status(400).send("Failed to find Alumni");
    console.log(error);
  }
});

router.get("/alumni/:id", async (req, res) => {
  try {
    const oneAlumni = await Alumni.findOne({ _id: req.params.id });
    res.json({ message: "Alumni member details", oneAlumni });
    console.log(oneAlumni);
  } catch (error) {
    res.status(400).send("unrecognized Id");
    console.log(error);
  }
});

//postman says deleted but it ain't deleting from the db
router.delete("/alumni/:id", async (req, res) => {
  try {
    await Alumni.deleteOne({ _id: req.params.id });
    res.json({ message: "Alumni member successfully deleted" });
    // console.log(oneAlumni);
  } catch (error) {
    res.status(400).json("unable to delete Alumni member");
    // console.log(error);
  }
});

router.patch("/alumni/:id", async (req, res) => {
  try {
    const options = { new: true };
    const updatedAlumni = await Alumni.findOneAndUpdate({ _id: req.params.id },{
      $set:{
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        role:req.body.role,
        department:req.body.department
      }
    },
    options
    );
    res.json({ message: "Alumni member updated", updatedAlumni });
    console.log(updatedAlumni);
  } catch (error) {
    res.status(400).send("unrecognized Id");
    console.log(error);
  }
});

module.exports = router;
