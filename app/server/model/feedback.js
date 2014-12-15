// app/models/feedback.js

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var feedback_subject = ["Categorías para los mensajes (opcional)", "Algo no funciona",
"Uso inadecuado de compart.io","Tengo una sugerencia/idea", 
"Sobre la plataforma", "¡Quiero ayudar!", "Comentarios generales"];
//                            
// define the schema for our MESSAGE model
var feedbackSchema = mongoose.Schema({
    name:      { type: String, default: '' },
    email:     { type: String, default: '' },
    message:   { type: String, default: '' },
    subject  : { type: String, enum: feedback_subject}
}); // end categorySchema

module.exports = mongoose.model('Feedback', categorySchema);


