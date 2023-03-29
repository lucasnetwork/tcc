import App from './app'

const app = new App()

app.app.listen(3333,()=>{
    console.log("backend online")
})