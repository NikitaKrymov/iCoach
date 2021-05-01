import fs from 'fs';
const Course = require('../models/Course');

module.exports = (app: any, client: any) => {

    app.post('/api/createNewCourse', async (req: any, res: any) => {
        const { newCourse: { title, description, accessToContent, imageURL, programStart, contentVisibility, coursePrice, numberOfPurchases, trainer, totalUsers }, backgroundImageUrl } = req.body;

        try {
            const newCourse = new Course({
                title,
                description,
                accessToContent,
                imageURL : backgroundImageUrl,
                programStart,
                contentVisibility,
                coursePrice,
                trainer,
            });
            await newCourse.save();
            res.send({
                code: 200
            })
        } catch (e) {
            console.log(e);
            res.send({
                code: 500
            })
        }
    });

    app.post('/api/uploadBackgroundImageFile', async (req: any, res: any) => {
        const file = req.files.backgroundImageFile;
        console.log(req.files.backgroundImageFile);
        try {
            fs.writeFile(`/Users/nikitakrymov/Projects/iCoach/iCoach/uploads/${file.name}`, file.data, 'binary', (err) => {
                if (err) {
                    return err;
                } 
            });
            fs.readFile(`/Users/nikitakrymov/Projects/iCoach/iCoach/uploads/${file.name}`, (err: any, data: any) => {
                if (err) {
                    return err;
                }
                res.send({
                    code: 200,
                    imageURL: data.toString('base64')
                })
            });
        } catch (e) {
            console.log(e);
        }
    });

    app.get('/api/fetchCourses', async (req: any, res: any) => {
        const { userID } = req.query;
        try {
            const courses = await Course.find({ trainer: userID });

            // const file = fs.readFile(courses[0].imageURL, (err: any, data: any) => {
            //     if (err) {
            //         return err;
            //     }
            //     console.log(data.toString('base64'));
            // });
            // console.log(file);
            res.send({
                code: 200,
                courses: courses
            });
            // res.send({
            //     code: 200,
            //     courses: courses.map((course: any) => {
            //         return { course: course, imageURL: res.sendFile(course.imageURL )}
            //     })
            // });
        } catch (e) {
            console.log(e);
        }
    })
}