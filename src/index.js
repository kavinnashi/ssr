import express from 'express';
import renderer from "./helpers/renderer";
const app= express();
app.listen(3000,()=>{
    console.log("3000")
});
app.use(express.static("public"));
app.get('/', (req,res)=>{
 
  res.send(renderer(req));

});