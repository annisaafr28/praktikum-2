const express = require("express") //memanggil library express js
const bodyParser= require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express()

//penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

//penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

//penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    //req merupakan variabel yang berisi data request
    //res merupakan variabel yang berisi data response dari endpoint
    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    //memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

//endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
    //:name dan :age -> diberikan titik 2 didepan menunjukkan "name" dan "age"
    //bersifat dinamis yang dapat diganti nilainya saat melakukan req

    //menampung data yg dikirimkan
    let name = req.params.name //menagmbil nilai pd parameter name 
    let age = req.params.age //menagmbil nilai pd parameter age
    
    //membuat objek yg berisi data yg akan dijadikan response
    //response berisi data nama & umur sesuai dengan nilai parameter
    let response = {
        nama: name,
        umur: age
    }

    //memberikan response dengan format JSON yang berisi objek diatas 
    res.json(response)
})

//end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) //mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) //mengambil nilai lebar dari body
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})