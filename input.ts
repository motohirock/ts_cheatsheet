import * as fs from "fs"
{
    // basicinput
    // const inputs = fs.readFileSync("/dev/stdin", "utf8")
    // console.log(inputs)
    // if neet to split with space
    
    const inputAfterSplit = fs.readFileSync("/dev/stdin", "utf-8").split(" ")
    console.log(inputAfterSplit)
}