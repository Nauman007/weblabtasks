const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connection Successful'))
    .catch(err => console.error('could not connect', err))

const courseSchema = new mongoose.Schema(
    {
        name: String,
        author:String,
        tags: [String],
        date: { type: Date, default: Date.now },
        isPublished: Boolean
    }
);

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
    name: 'mongoose.js Course',
    author: 'Nauman',
    tags: ['nodejs', 'backend'],
    isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses = await Course.find();
    console.log(courses);
}
async function getCoursesFiltered() {
    const courses = await Course
        .find({ author: 'Nauman', isPublished: true })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

async function getCoursesByOperator()
{
    const courses = await Course
        .find({ price: { $gte: 10, $lte: 20 } })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

async function getCoursesWithLogicalOperators() {
    const courses = await Course
        .find()
        .or([{ author: 'Nauman' }])
        .and([])
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}
async function getCoursesWithRe(){
    const courses = await Course
        .find({ author: /^Mosh/ })
        .find({ author: /Hamedani$/ })
        .limit(10)
        .select({ name: 1, tags: 1 });
    console.log(courses);
}
 
async function getCoursesAgregateFunction() {
    const courses = await Course
        .find({ author: 'Nauman', isPublished: true })
        .limit(10)
        .sort({ name: 1 })
        .count();
    console.log(courses);
}


//createCourse();
//getCourses();
//getCoursesFiltered();
//getCoursesByOperator();//confusion about output
//getCoursesWithLogicalOperators();//confusion about output
//getCoursesWithRe();//confusion about output
//getCoursesAgregateFunction();