const express = require('express')
const router = express.Router()

const { getAllJobs, getJob, createJpb, updateJob, deleteJob } = require('../controllers/jobs')

router.route('/').post(createJpb).get(getAllJobs)
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)


module.exports = router