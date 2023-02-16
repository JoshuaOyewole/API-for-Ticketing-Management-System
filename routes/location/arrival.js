const router = require("express").Router();
const {
  getArrival,
  getAllArivalDestinations,
  addArrivalDestinations,
  deleteArrivalDestination,
} = require("../../controllers/destination/arrival");

router.get("/", getAllArivalDestinations);
router.get("/:id", getArrival);
router.post("/", addArrivalDestinations);
router.delete("/:id", deleteArrivalDestination);

module.exports = router;
