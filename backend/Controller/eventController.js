const CreateEvent = require("../models/createEvent");

const createEvent = async(req,res) => {
    try{
        const {
            title,
            date,
            time,
            venue,
            eventLink,
            description,
            department,
            eligibility
        } = req.body;

        const event = new CreateEvent({
            title,
            date,
            time,
            venue,
            eventLink,
            description,
            department,
            eligibility
        })
       
       
        await event.save();
        console.log("Created event", event );
        res.status(201).json({
            message:"Created event successfully",
            sucess:true
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"An erroe occured while creating event ",
            sucess:false
        })
    }
} 

const getEvents = async(req,res) =>{
    try{
    const events = await CreateEvent.find();
    if(events.length==0){
        return res.status(404).json({
            message:"No surprise bags found",
            sucess:false
        })
    }
    res.status(200).json({
        message:"Fetched bags successfully",
        sucess:true,
        events
    })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"An error occured while fetching the data",
            success:false
        })
    }
}

module.exports = {
    createEvent,
    getEvents
}