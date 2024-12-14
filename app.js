// const amount=12

// if(amount==12){
//     console.log("its 12")
// }else{
//     console.log("other nos")
// }
// console.log("Ended")

// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(module)
// console.log(process)

// setInterval(()=>{
//     console.log("Hello World")
// },1000)

// setTimeout(()=>{
//  console.log("hello world")
// },3000)
// let hell=require("./module")
// hello=hello.hello
// hell("bala")

// const name=require("./names")
// console.log(name)
//  hell(name.prem)

// const data=require("./alternative_syntax")
// console.log(data)

// require("./grenade")

// const os=require("os")
// const user=os.userInfo()
// console.log(user)

// console.log(`Uptime of the system ${os.uptime()} seconds`)

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem()
// }

// console.log(currentOS)

 const path=require("path")
// console.log(path.sep)

//const filePath=path.join("/content","subfolder","test.txt")
// console.log(filePath)

// const base=path.basename(filePath)
// console.log(base)

// const absolutePath=path.resolve(__dirname,"content","subfolder","test.txt")
// console.log(absolutePath)

// const {readFileSync,writeFileSync}=require("fs")
// console.log("start")
// const first=readFileSync("./content/first.txt","utf-8")
// const second=readFileSync("./content/second.txt","utf-8")
// console.log(first,second)

// writeFileSync("./content/result-sync.txt",`here is the result : ${first},......${second}`) for writing
// writeFileSync("./content/result-sync.txt",`here is the result : ${first},......${second}`,{flag:'a'})
// console.log("done")
// console.log("next")
//  const {readFile,writeFile}=require("fs")
// console.log("Start")
//  readFile("./content/first.txt","utf-8",(err,result)=>{
//     if(err){console.log(err);return null;}
   
//     const first=result;
//     readFile("./content/second.txt","utf-8",(err,result)=>{
//         if(err){
//             console.log(err)
//             return null;
//         }
//         const second=result;
//         writeFile("./content/result-sync.txt",`here is the result : ${first},......${second}`,(err,result)=>{
//             if(err){
//                 console.log(err)
//                 return;
//             }console.log("done with this task")
//         })
//     })
    
//  })
//  console.log("next")

// const http=require("http")

// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     if(req.url=="/"){
//       res.end("Welcome to our homepage")
//     }
//     else if(req.url=="/about"){
//         res.end("Welcome to our about page")
//       }else{
//            res.end(`<h1>Oops!!</h1>
//                     <p>404 page</p>
//                     <a href="/">Go back home</a>`)
//       }
   
// })

// server.listen(5000)

const _=require("lodash")

const item=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(item)
console.log(newItems)