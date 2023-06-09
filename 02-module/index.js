import { dirname, join } from 'node:path';
import { readFile } from "node:fs";
import {fileURLToPath}from "node:url";
import { log } from 'node:console';

const __filename =fileURLToPath(import.meta.url);
const __dirname =dirname(__filename);

readFile(join(__dirname,"read.txt"),"utf-8",(err,data) =>{
    if(err){
        console.log(err);
    }
log(data)
});