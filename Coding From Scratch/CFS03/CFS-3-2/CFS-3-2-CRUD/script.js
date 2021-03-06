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
    showPosts();
}

function showPosts()
{
    //Clear out the div every time this function is run
    document.getElementById("blogPosts").innerHTML = "";

    //Utilize the for in loop to display all of the properties of the objects within the array collection[]
   for (var i in collection) {
        document.getElementById("blogPosts").innerHTML += "<div class='post'><h1 class='myTitle'>" + collection[i].title + "</h1><p class='body'>" + collection[i].body + "</p>" + "<img class='image' width='250' src = '" + collection[i].image + "'/>" + "<h6 class='date'>" + collection[i].date + "</h6>" + "</div><br>";
    }

    var title = document.getElementById('title');
    var body = document.getElementById('body');
    var image = document.getElementById('image');

    //
    title.value = "";
    body.value = "";
    image.value = "";
}

showPosts();