const mongoose = require("mongoose");

const geocoder = require('../utils/geocoder')
// A model kidolgozása után használjuk a köztes szoftvert
// A mentés előtt fog lefutni
TrainingSchema.pre('save', async function (next) {
 const loc = await geocoder.geocode(this.address)
 this.location = {
  type: 'Point',
  coordinates: [loc[0].longitude, loc[0].latitude],
  formattedAddress: loc[0].formattedAddress,
  street: loc[0].streetName,
    city: loc[0].city,
  state: loc[0].state,
  zipcode: loc[0].zipcode,
  country: loc[0].countryCode,
 }
 // Formázott címünk lesz, 
  // nincs szükség 
  // az eredeti címre
 this.address = undefined
 next()
})

 module.exports = mongoose.model("Training", TrainingSchema, "trainings");
        