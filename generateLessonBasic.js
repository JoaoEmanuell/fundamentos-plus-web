const fs = require('node:fs');

const ps = require("prompt-sync");

const prompt = ps();


// paths 

const pathToJson = "./public/data"
const pathToDataJson = `${pathToJson}/data.min.json`
const pathToLessons = `${pathToJson}/lessons`

// json's

const lessonInDataJson = {
    "id": 0,
    "title": "",
    "author": "",
    "unlocked": true
}

const lessonStructure = {
    "title": "",
    "author": "",
    "description": [],
    "video": "",
    "lesson-transcription": "", // "jesus-e-deus_compressed.pdf",
    "pages": []
}

// get information's

const cycleNumber = prompt("Número do ciclo: ")
const lessonNumber = Number(prompt("Id da lição: "))
const name = prompt("Nome da lição: ")
const pdfName = `${name.toLocaleLowerCase().replaceAll(' ', '-')}_compressed.pdf`
const author = prompt("Nome do autor: ")
const video = prompt("Link do embed: ")

// replace in json's

lessonInDataJson['title'] = name
lessonInDataJson['id'] = lessonNumber
lessonInDataJson['author'] = author

lessonStructure['title'] = name
lessonStructure['lesson-transcription'] = pdfName
lessonStructure['author'] = author
lessonStructure['video'] = video

const dataJson = JSON.parse(fs.readFileSync(pathToDataJson).toString())
dataJson['cycles'][cycleNumber]['lessons'].push(lessonInDataJson)
fs.writeFileSync(pathToDataJson, JSON.stringify(dataJson))

fs.writeFileSync(`${pathToLessons}/${lessonNumber}.min.json`, JSON.stringify(lessonStructure))