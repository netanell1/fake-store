const req = require("express/lib/request")

require("dotenv").config()
const
express = require("express"),
app = express(),
PORT = process.env.PORT,
cors = require("cors"),
categoryRouter = require("./Router/categoryRouter"),
productRouter = require("./Router/productRouter")

require("./db")

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

categoryRouter(app)
productRouter(app)

app.listen(PORT || 8787, ()=> console.log(`Server is running...port: ${PORT}`))