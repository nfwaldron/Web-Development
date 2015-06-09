// Create and array to store our blog post objects
var collection = [];

// The post object will store out posts. Its properties
// include the title of the post, a body, and in image. 
function post(title,body,image)
{
	this.title = title;
	this.body = body;
	this.image = image;
	this.date = Date();
}


function addPost()
{
    // Store the values the user inputs as the title, body, and image.
    // Values will be captured from the input box on the HTML page
    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;
    var image = document.getElementById('image').value;

    // Create an new object of the post class, and store the values captured
    // from the HTML input field, and stored in our variables earlier 
    var newPost = new post(title, body, image);

    // Use the push() function to add the post object to our array of objects.
    collection.push(newPost);
    
    // Display in the console.
    console.log(collection);
}