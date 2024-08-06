const mongoose=require("mongoose")
const connectDB= async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        // res.status(200).send({
        //     message:"database connected"
        // })
        console.log(`database is connected.bgGreen.white`)
    }
    catch(error)
    {
        // res.status(504).send(
        //     {
        //         message:`internal service error ${error}`,
        //         success:false,
        //         description:`database not connected`,
        //     })
            console.log(`error occured ${error}` .bgRed.white)
    }   
}

module.exports = connectDB;