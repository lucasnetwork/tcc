// import mongoose,{Schema} from "mongoose";

// // Definindo o esquema (schema) do modelo
// const LogSchema = new Schema({
//   program: {
//     type: String,
//     required: true
//   },
//   priority: {
//     type: String,
//     required: true,
//   },
//   message: {
//     type: String,
//     required: true
//   },
//   isodate: {
//     type: String,
//     required: true
//   },
//   host: {
//     type: String,
//     required: true
//   },
//   facility: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Definindo o modelo (model)
// const Log = mongoose.model('Log', LogSchema);

// // Exportando o modelo (model) para uso em outros arquivos
// export default Log;