const router = require("express").Router();

const {
  getAllDepartures,
  addDeparture,
  deleteDeparture,
} = require("../../controllers/destination/departure");

router.get("/", getAllDepartures);
router.post("/", addDeparture);
router.delete("/:id", deleteDeparture);

module.exports = router;
