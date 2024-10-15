import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
  mobileNumber:{type:String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  shopCategory:{type: String},
  shopName:{type:String},
  shopAddress:{type:String},
  GST: {type:String}
 
});

const User = mongoose.model('User', userSchema);
export default User;


