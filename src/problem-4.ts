{
    // 

    // Circle and Rectangle

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

    // 
}