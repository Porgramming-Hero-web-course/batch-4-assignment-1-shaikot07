


Here is the blog about (The significance of union and intersection types in Typescript.)

------------------------------------------------------


Union and intersection types are important feature in TypeScript that help ensure type safety in our code. Union types allow a variable to be one of several possible types,and it  denote by the "|" operator

intersection and union types are similar. they are implement in completely different way. A intersection type is a type that merge several kinds into one This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given.and The "&" operator is used to create the intersection type

now we explore the union and intersection code example 

Union type :

    type Circle = {
        shape: 'circle';
        radius: number;
    }
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;

    }
    type Shape = Circle | Rectangle;


    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === 'circle') {
            return Math.PI * shape.radius * shape.radius;
        } else if (shape.shape === 'rectangle') {
            return shape.width * shape.height
        }

    };

    const circle = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangle = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

    // console.log(circle);
    // console.log(rectangle);

in this example the Shape type can be either Circle or Rectangle. The calculateShapeArea function can accept shape and handle base on the shape property

intersection type:

interface Student { 
  SId: number; 
  studentName: string; 
} 
  
interface Teacher { 
  tId: number; 
  teacherName: string; 
} 
  
type TestType = Student & Teacher;  
let result: TestType = { 
  SId: 10, 
  studentName: "shaikot", 
  tId: 20, 
  teacherName: "MR.x", 
}; 
  
console.log(result.tId); 
console.log(result.studentName);

in this example, the TestType type combine the properties of both student and teacher. The result object must now include all properties from both types making it effectively a Student and a Teacher
