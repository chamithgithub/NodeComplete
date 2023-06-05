import {dirname,join} from "path";
import { readFile } from "fs";
import { fileURLToPath } from "url";       //es module scop type
const __filename =fileURLToPath(import.meta.url);
const __dirname =dirname(__filename);


readFile(join(__dirname,'myName.txt'),(err, data)=>{
    if (err) {
        console.log(err);

    }
    console.log(data.toString());
});