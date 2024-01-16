import App from './app'
const app = new App()

app.app.listen(process.env.PORT, () => {
  console.log('backend online')
})
