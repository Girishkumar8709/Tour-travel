import Tour from "../models/Tour.js"
import Review from "../models/Review.js"
import { CommandSucceededEvent } from "mongodb"


export const createReview = async (req,res) =>{
    const tourId =req.params.tourId
    const newReview = new Review({...req.body})
    try{

        const savedReview = await newReview.save()

        //after creating a new review now update the review array of the tour
        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id}
        })

       return res.status(200).json({success:true,message:"Review Submited",data:savedReview})
    } catch (err){
       return res.status(500).json({success:false,message:"failed to submit"})
    }
}
