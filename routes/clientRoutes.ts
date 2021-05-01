module.exports = (app: any, client: any) => {
    //REGISTER THE CLIENT
    app.post('/api/registerClient', (req: any, res: any) => {
        console.log(req.body.newClient);
    })
}