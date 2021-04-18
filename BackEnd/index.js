
const express = require('express')
const app = express()
const PORT = 80
const cors = require('cors')
// const passport = require('passport')
// const cookie = reqire('cookie')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const { json } = require('express')
const router = require('express').Router()



let health = {
    disease: [
        { id: 1, name: "โรคหวัดแมว", symptom1: "อาการเซื่องซึม", symptom2: "หายใจลำบาก ", symptom3: "มีไข้ ไอ จาม มีน้ำมูก", symptom4: "เบื่ออาหาร" },
        { id: 2, name: "โรคเยื่อบุในช่องท้องอักเสบ", symptom1: "อาการเซื่องซึม", symptom2: "สูญเสียการควบคุมการขับถ่าย", symptom3: "ผอมลงแต่ทรวงอกกับช่องท้องใหญ่ขึ้น", symptom4: "เบื่ออาหาร" }
    ]
}

app.use('/api', router)
router.use(cors({ origin: 'http://localhost:3000', credentials: true }))
// router.use(cors())
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.route('/disease')
    .get((req, res) => res.json(health))
    .post((req, res) => {
        try {

            let newHealth = {}
            newHealth.id = (health.disease.length) ? health.disease[health.disease.length - 1].id + 1 : 1
            newHealth.name = req.body.name
            newHealth.symptom1 = req.body.symptom1
            newHealth.symptom2 = req.body.symptom2
            newHealth.symptom3 = req.body.symptom3
            newHealth.symptom4 = req.body.symptom4

            health = { "disease": [...health.disease, newHealth] }
            res.json(health)
        }
        catch {
            res.json({ status: "Fail! T_T" })
        }
    })


router.route('/disease/:dis_id')
    .get((req, res) => {

        let ID = health.disease.findIndex(item => (item.id === +req.params.dis_id))
        if (ID >= 0) {
            res.json(health.disease[ID])
        }
        else {
            res.json({ status: "Can't Find" })
        }
    })
    .put((req, res) => {

        let ID = health.disease.findIndex(item => (item.id === +req.params.dis_id))
        if (ID >= 0) {
        
            health.disease[ID].name = req.body.name
            health.disease[ID].symptom1 = req.body.symptom1
            health.disease[ID].symptom2 = req.body.symptom2
            health.disease[ID].symptom3 = req.body.symptom3
            health.disease[ID].symptom4 = req.body.symptom4
            res.json(health.disease[ID])
        }
        else {
            res.json({ status: "Can't Update" })
        }
    })
    .delete((req, res) => {
        let ID = health.disease.findIndex(item => (item.id === +req.params.dis_id))
        if (ID >= 0) {
            health.disease = health.disease.filter(item => item.id !== +req.params.dis_id)
            res.json(health)

        }
        else {
            res.json({ status: "Can't Delete" })
        }

    })





app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))