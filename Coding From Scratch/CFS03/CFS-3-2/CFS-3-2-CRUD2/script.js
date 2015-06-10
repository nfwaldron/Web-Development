// For the CRUD method, we are going to create, read, store, and delete blog posts.
// To do this we are going to create an array to store objects of the 'blog' class.
// We will use the object constructor method to create a 'blog' class. we will also create
// A function called addPost() to create new posts, and store them in the new object.

// Create an empty array which will store our blog objects
var postArray = [];

function blogPost(title, body, image)
{
	this.title = title; // The this keyword acts as a placeholder that refers to the instantiation of the object creates using this class
						// It will refer to whatever object calls this method, when the method is used.
	this.body = body;
	this.image = image;
	this.date = Date();
}


////////////// CREATE and READ Array

function addPost()
{
	var title = document.getElementById("myTitle").value; // Store the value of the HTML element with an Id of 'myTitle' in the variable title
	var body = document.getElementById("myBody").value;
	var image = document.getElementById("myImage").value;

	// Create an object of the class blogPost using the variables that store the values of the HTML entries as the values of the properties of our
	// instantiation of our blogPost object.
	// You must include the keyword new, to allow for dynamic creation of a new object.
	var newBlogPost = new blogPost(title,body,image);

	// Push the new blog post into the postArray
	postArray.push(newBlogPost);

	// Display the array in the console
	console.log(postArray);

	// Display the post in HTML document
	showPost();
}

function showPost()
{
	// Clear out the HTML Element every time the function is run
	document.getElementById('blogPostDisplay').innerHTML = "";


	// Utilize a for in loop to display all of the property values for the objects in the array, postArray
	for( var i in postArray)
	{
		document.getElementById('blogPostDisplay').innerHTML += "<h3 id ='myTitleDisplay'>" + postArray[i].title 
		+ "</h3><article id= 'myBodyDisplay'>" + postArray[i].body + "</article><img src='" 
		+ postArray[i].image; + "class='img-responsive' alt='Responsive Image'>"
	}

}


