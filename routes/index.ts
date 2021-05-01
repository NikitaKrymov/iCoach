module.exports = (app: any, client: any) => {
    require('./authRoutes')(app, client);
    require('./trainerRoutes')(app, client);
    app.get('/', (req: any, res: any) => {
        console.log("Server is up and running. Status: 200");
    });
}