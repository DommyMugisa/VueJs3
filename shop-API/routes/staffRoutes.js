const express = require("express"),
  router = express.Router(),
  Staff = require("../models/Staff");

router.get("/staff/register", (req, res) => {
  res.send("staff registration form");
});

router.post("/staff/register", async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    await newStaff.save();
    res.json({ message: "new staff member registered", newStaff });
    console.log(newStaff);
  } catch (error) {
    res.status(400).send("failed to register staff member");
    console.log(error);
  }
});

router.get("/staff/getList", async (req, res) => {
  try {
    const staffList = await Staff.find({});
    res.json({ message: "List registered staff", staffList });
    console.log(staffList);
  } catch (error) {
    res.status(400).send("Failed to find staff");
    console.log(error);
  }
});

router.get("/staff/:id", async (req, res) => {
  try {
    const oneStaff = await Staff.findOne({ _id: req.params.id });
    res.json({ message: "staff member details", oneStaff });
    console.log(oneStaff);
  } catch (error) {
    res.status(400).send("unrecognized Id");
    console.log(error);
  }
});

//postman says deleted but it ain't deleting from the db
router.delete("/staff/:id", async (req, res) => {
  try {
    await Staff.deleteOne({ _id: req.params.id });
    res.json({ message: "staff member successfully deleted" });
    // console.log(oneStaff);
  } catch (error) {
    res.status(400).json("unable to delete staff member");
    // console.log(error);
  }
});

router.patch("/staff/:id", async (req, res) => {
  try {
    const options = { new: true };
    const updatedStaff = await Staff.findOneAndUpdate({ _id: req.params.id },{
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
    res.json({ message: "staff member updated", updatedStaff });
    console.log(updatedStaff);
  } catch (error) {
    res.status(400).send("unrecognized Id");
    console.log(error);
  }
});

module.exports = router;
