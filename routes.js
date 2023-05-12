const express = require("express")
const router = express.Router()

router.use(function timeLog(req, res, next) {
  console.log({
    method: req.method,
    url: req.url,
    time: new Date()
  })
  next()
})

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.post("/", (req, res) => {
  const nama = req.body.nama
  const tempatLahir = req.body.tempatLahir
  const tanggalLahir = req.body.tanggalLahir
  const alamat = req.body.alamat

  res.send({
    nama,
    tempatLahir,
    tanggalLahir,
    alamat,
  })
})

router.get("/", (req, res) => {
  const nama = req.query.nama
  const tempatLahir = req.query.tempatLahir
  const tanggalLahir = req.query.tanggalLahir
  const alamat = req.query.alamat

  res.send({
    nama,
    tempatLahir,
    tanggalLahir,
    alamat,
  })
})

module.exports = router
