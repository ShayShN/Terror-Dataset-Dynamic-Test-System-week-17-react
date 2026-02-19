// import csvParser from 'csv-parser';

// // const csv = require('csv-parser')
// // const fs = require('fs')
// const results = [];

// fs.createReadStream('db/terrorData.csv')
//   .pipe(csvParser())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
    //     console.log(results);
    //     // [
        //     //   { NAME: 'Daffy Duck', AGE: '24' },
        //     //   { NAME: 'Bugs Bunny', AGE: '22' }
        //     // ]
        //   });
        
        // import { readFileFS, writeFileFS } from "./handle-files.js";
        
        // const pathData = "db/terrorData.csv"
        
        // export const getAllData = async (req, res) => {
            //     try {
                //         const dataMassage = await readFileFS(pathData)
                //         if (!dataMassage || dataMassage.length === 0) {
//             return res.status(404).send("data is empty")
//         }
//         return res.json({data: dataMassage});

//     } catch (err) {
    //         console.error(err);
//         return res.status(500).send("getAllData error")
//     }
// }
import fs from "fs"

export const getAllData = async (req, res) => {
    const rows = [];
    let count = 0
    fs.readFile("db/terrorData.csv", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const lines = data.split("\n");
        for (let i = 0; i < lines.length; i++) {
            const cells = lines[i].split(",");
            rows.push(cells);
        }
        res.json(rows);
    })

};