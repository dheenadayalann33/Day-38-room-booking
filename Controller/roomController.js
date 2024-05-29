const rooms = [
    {room_id:1,seats:3,animites:['Books', 'Bathroom', 'Food'],price:1500},
    {room_id:2,seats:2,animites:['Books', 'Bathroom', 'Food'],price:1000},
    {room_id:3,seats:3,animites:['Books', 'Bathroom', 'Food'],price:1500},
    {room_id:4,seats:4,animites:['Books', 'Bathroom', 'Food'],price:2000},
    {room_id:5,seats:1,animites:['Books', 'Bathroom', 'Food'],price:500},
]

const booking = [
    {room_id:1,customer_name:'luffy',date:'10/04/2024',start_time:"12 O'clock",end_time:"11 O'clock",booked_status:true},
    {room_id:2,customer_name:'zoro',date:'06/04/2024',start_time:"12 O'clock",end_time:"11 O'clock",booked_status:true},
    {room_id:1,customer_name:'luffy',date:'24/02/2024',start_time:"12 O'clock",end_time:"11 O'clock",booked_status:true},
]
    

export const roomController = (req,res)=>{
    res.status(200).json({data:rooms})
}

export const roomControllerID =(req,res)=>{
    const id = req.params.id;
    const roomDeatiles = rooms.find((ele)=>ele.room_id == id)
    if(!roomDeatiles){
        res.status(200).json({data:'Room not found'})
    }else{
        res.status(200).json({data:roomDeatiles})
    }
}

export const roomCreate =(req,res)=>{

    const {seats,animites,price} = req.body
    const newRoom = {
        room_id:rooms.length + 1,
        seats:seats,
        animites:animites,
        price:price
    };
    rooms.push(newRoom);

    res.status(200).json({message:"Room added", data:newRoom});
}

export const roomBooking =(req,res)=>{
    const {room_id,customer_name,date,start_time,end_time} = req.body;
    const newBooking = {
        room_id:room_id,
        customer_name:customer_name,
        date:date,
        start_time:start_time,
        end_time:end_time,
        booked_status:true
    }
    booking.push(newBooking);
    res.status(200).json({message:"Booking added", data:newBooking})
}

export const allBooking = (req,res)=>{
    res.status(200).json({data:booking})
}

export const customerDetiles = (req,res)=>{
    const customerDetilesData = [];
    const counts = {}
    booking.forEach(function(i) { counts[i.customer_name] = (counts[i.customer_name]||0) + 1;});
    customerDetilesData.push(counts)
    res.status(200).json({customerCountData:customerDetilesData,allCustomerData:booking})
}

