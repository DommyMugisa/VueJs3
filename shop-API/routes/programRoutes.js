const express = require("express"),
  router = express.Router(),
  Program = require("../models/Program");

router.get("/", (req, res) => {
  res.send("It works!");
});

router.post("/program/register", async (req, res) => {
  try {
    const newProgram = new Program(req.body);
    await newProgram.save();
    res.json({ message: "new Program member registered", newProgram });
    console.log(newProgram);
  } catch (error) {
    res.status(400).send("failed to register Program member");
    console.log(error);
  }
});

router.get("/program/getList", async (req, res) => {
  try {
    const programList = await Program.find({});
    res.json({ message: "List registered Program", programList });
    console.log(programList);
  } catch (error) {
    res.status(400).send("Failed to find Program");
    console.log(error);
  }
});

router.get("/program/:id", async (req, res) => {
  try {
    const oneProgram = await Program.findOne({ _id: req.params.id });
    res.json({ message: "Program member details", oneProgram });
    console.log(oneProgram);
  } catch (error) {
    res.status(400).send("unrecognized Id");
    console.log(error);
  }
});

//postman says deleted but it ain't deleting from the db
router.delete("/program/:id", async (req, res) => {
  try {
    await Program.deleteOne({ _id: req.params.id });
    res.json({ message: "Program member successfully deleted" });
    // console.log(oneProgram);
  } catch (error) {
    res.status(400).json("unable to delete Program member");
    // console.log(error);
  }
});

router.patch("/program/:id", async (req, res) => {
  try {
    const options = { new: true };
    const updatedProgram = await Program.findOneAndUpdate({ _id: req.params.id },{
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
    res.json({ message: "Program member updated", updatedProgram });
    console.log(updatedProgram);
  } catch (error) {
    res.status(400).send("unrecognized Id");
    console.log(error);
  }
});

module.exports = router;
