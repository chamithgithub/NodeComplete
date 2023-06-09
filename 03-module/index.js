import { isUtf8 } from "node:buffer";
import { error, log } from "node:console";
import { appendFile, readFile, rm, writeFile } from "node:fs";
import { dirname, join } from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname =dirname(__filename);

// readFile(join(__dirname,"read.txt"),{
//     encoding:'Utf-8'
// },(err,data)=>{
//     if(!err){
//         log(data);
//     }
//     log(err);
// }
// )

// writeFile(join(__dirname,"write.txt"),"ABC Company",(err) =>{
//     if(err){
//     log(err);
//     }
// })

// appendFile(join(__dirname,"write.js"),
// `
// const a = 'chamith';

// console.log(a);
// `
// ,(err) =>{
//     if(!err){
//     log("document write");
//     }
// })

rm(join(__dirname,"write.txt"),(err) => !err && log("file is delete"));