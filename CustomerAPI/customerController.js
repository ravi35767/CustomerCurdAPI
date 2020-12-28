// Importing Product Model
const Customers = require("../models/customerModel");


// Handler to insert a Customer into the mongoDb
module.exports.insertCustomer = async(req, res) => {
    try{
        const customer = new Customers({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
             email: req.body.email,
             gender: req.body.gender,
             address: req.body.address,
             country: req.body.country,
             city: req.body.city,
             zipCode: req.body.zipCode,
             phoneNumber: req.body.phoneNumber
        });
        const cust = await customer.save();
        res.status(201).json(cust)
    }catch(error){
        res.status(400).json({error_msg: "Error Inserting the customer"})
    }
}


// Handler to fetch all Customer from mongodb
module.exports.viewCustomer = async(req, res) => {
    try{
        const all_Customer = await Customers.find({ })
        .then((data)=>{
            return res.json(data);
        })
        .catch((error)=>{
            console.log("Error",error);
        });
        return all_Customer;
    }catch(error){
        res.status(400).json({error_msg: "Error retrieving Data from Database"});
    }
}

// Handler to delete a Customer from the mongoDb
module.exports.deleteCustomer = async(req, res) => {
    try{
        const cust_id = req.params.id;
        if(cust_id === null){
            res.status(500).json({error_msg: "No records associated with this customer"});
        }
        await Customers.findByIdAndDelete(cust_id,(err)=>{
            if(err){
                res.status(500).json({error_msg: "Error Deleting the record"});
            }else{
                res.status(200).json({error_msg:"Deleted the customer successfully"});
            }
        });
    }catch(error){
        res.status(400).json({error_msg: "Error Deleting the record"});
    }
}

// Handler to Update a Customer into the mongoDb
module.exports.editCustomer = async(req, res) => {
    const cust_id = req.params.id;
    if(cust_id === null){
        res.status(500).json({error_msg: "No records associated with this customer"});
    }
    const updatedCustomer = req.body;
    await Customers.findByIdAndUpdate(cust_id,updatedCustomer, (err)=>{
        if(err){
            res.status(500).json({error_msg: "Error Updating the record"});
         }else{
            res.status(200).json({error_msg:"successfully updated record" });
         }
    });
}
