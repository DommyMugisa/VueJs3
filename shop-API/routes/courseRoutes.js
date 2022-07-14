const express = require("express"),
  router = express.Router(),
  Course = require("../models/Course");

router.get("/", (req, res) => {
  res.send("It works!");
});

router.post("/course/register", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json({ message: "new Course member registered", newCourse });
    console.log(newCourse);
  } catch (error) {
    res.status(400).send("failed to register Course member");
    console.log(error);
  }
});

router.get("/course/getList", async (req, res) => {
  try {
    const courseList = await Course.find({});
    res.json({ message: "List registered Course", courseList });
    console.log(courseList);
  } catch (error) {
    res.status(400).send("Failed to find Course");
    console.log(error);
  }
});

router.get("/course/:id", async (req, res) => {
  try {
    const oneCourse = await Course.findOne({ _id: req.params.id });
    res.json({ message: "Course member details", oneCourse });
    console.log(oneCourse);
  } catch (error) {
    res.status(400).send("unrecognized Id");
    console.log(error);
  }
});

//postman says deleted but it ain't deleting from the db
router.delete("/course/:id", async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.params.id });
    res.json({ message: "Course member successfully deleted" });
    // console.log(oneCourse);
  } catch (error) {
    res.status(400).json("unable to delete Course member");
    // console.log(error);
  }
});

router.patch("/course/:id", async (req, res) => {
  try {
    const options = { new: true };
    const updatedCourse = await Course.findOneAndUpdate({ _id: req.params.id },{
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
    res.json({ message: "Course member updated", updatedCourse });
    console.log(updatedCourse);
  } catch (error) {
    res.status(400).send("unrecognized Id");
    console.log(error);
  }
});

module.exports = router;
