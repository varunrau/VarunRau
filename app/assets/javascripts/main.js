// Some convenience variables
var aspectRatio = window.innerWidth / window.innerHeight;
var unitsize = 250;
var wallheight = unitsize;
var walkspeed = 100;
var lookspeed = .045;
var maplength = 10;
var mapLength = mapLength;

// A basic map. I'll write a script to generate this later.
var map = new Array(); 

var mapWidth;
var mapHeight;

// Some more convenience methods
var t = THREE;
var scene, cam, renderer, controls, clock, projector, model, skin;
var mouse = { x: 0, y: 0};

var photos = new Array();


// This is called when the document is ready. We'll show a simple start
// screen then when the user is ready we'll start the main animation loop.
$(document).ready(function() {
    console.log("Starting");
});

var picsReady = function() {
    for (var i = 0; i < friendPics.length; i++) {
        var mesh = new t.MeshLambertMaterial({map: t.ImageUtils.loadTexture(friendPics[i]),});
        photos[i] = mesh;
    }
    console.log("photos");
    console.log(photos);
    var index = 1;
    for (var i = 0; i < friendPics.length - 10; i++) {
        var mapVal = new Array();
        mapVal[0] = index;
        mapVal[1] = 0;
        mapVal[2] = index + 1;
        index++;
        map[i] = mapVal;
    }
    console.log("map creation done");
    map[map.length] = new Array(0, index + 1, 0);
    mapWidth = map.length;
    mapHeight = map[0].length;
    start();
    animate();
}

var start = function() {
  clock = new t.Clock();
  projector = new t.Projector();
  scene = new t.Scene();
  scene.fog = new t.FogExp2(0xD6F1FF, 0.0005); // We'll add fog, so we can see depth in this world

  cam = new t.PerspectiveCamera(60, aspectRatio, 1, 10000);
  cam.position.y = unitsize * .5; // Raise the camera off the ground
  cam.position.x = 330;
  cam.position.z = -490;
  scene.add(cam);

  // Insert code to control the camera
  controls = new t.FirstPersonControls(cam);
  controls.movementSpeed = walkspeed;
  controls.lookSpeed = lookspeed;

  setup(); // This will set up the scene including rendering the map

  renderer = new t.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.backgroundColor = '#ADEAEA';
  document.body.appendChild(renderer.domElement); // Add our HTML canvas to the DOM

  document.addEventListener('mousemove', onMouseMove, false);
};

var onMouseMove = function(e) {
    e.preventDefault();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
	mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
};

var animate = function() {
    requestAnimationFrame(animate);
    render();
};

var render = function() {
    var del = clock.getDelta();
    controls.update(del);
    renderer.render(scene, cam); // Repaint the scene
};

var setup = function() {
    // Let's create the floor!
    var floor = new t.Mesh(
			new t.CubeGeometry(mapWidth * unitsize, 10, mapWidth * unitsize),
            new t.MeshLambertMaterial({map: t.ImageUtils.loadTexture('/assets/hardwood.jpeg'),})
			//new t.MeshLambertMaterial({color: 0xEDCBA0,/*map: t.ImageUtils.loadTexture('images/floor-1.jpg')*/})
	);
	scene.add(floor);

    var cube = new t.CubeGeometry(unitsize, wallheight, unitsize);
    // Let's create the walls
    for (var i = 0; i < mapWidth; i++) {
        for (var j = 0, m = map[i].length; j < m; j++) {
            if (map[i][j]) {
                // We want to use a different image for each of the walls.
                // So we give the image a different texture
                console.log("Getting photo " + map[i][j]);
                console.log("Photo url: " + photos[map[i][j]]);
                var wall = new t.Mesh(cube, photos[map[i][j]]);
                wall.position.x = (i - mapWidth/2) * unitsize;
                wall.position.y = wallheight/2;
                wall.position.z = (j - mapWidth/2) * unitsize;
                scene.add(wall); // Add the wall to the scene 
            }
        }
    }
    var directionalLight1 = new t.DirectionalLight(0xF7EFBE, 0.7);
    directionalLight1.position.set(0.5, 1, 0.5);
    scene.add(directionalLight1);

    var directionalLight2 = new t.DirectionalLight(0xF7EFBE, 0.5);
    directionalLight2.position.set(-0.5, -1, -0.5);
    scene.add(directionalLight2);
};


function sector(vector) {
    var x = Math.floor((vector.x + unitsize) / 2 / unitsize + mapWidth/2);
    var z = Math.floor((vector.z + unitsize) / 2 / unitsize + mapWidth/2);
    return {x: x, z: z};
}

function collision(vector) {
    //var sec = sector(vector);
    return false;//map[sec.x][sec.z] > 0;
}



// Load the SDK Asynchronously
      (function(d){
         var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement('script'); js.id = id; js.async = true;
         js.src = "//connect.facebook.net/en_US/all.js";
         ref.parentNode.insertBefore(js, ref);
       }(document));

      // Init the SDK upon load
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '248605301932783' // Use your app id, not this one. :P
        });

        // listen for and handle auth.statusChange events
        FB.Event.subscribe('auth.statusChange', function(response) {
          if (response.authResponse) {
            // user has auth'd your app and is logged into Facebook
            FB.api('/me', function(me){
              if (me.name) {
                document.getElementById('auth-displayname').innerHTML = me.name;
              }
            })
            FB.api('/me/friends?fields=name,id,picture', function(response) {
                friendPics = new Array();
                for (var i = 0; i < response.data.length; i++) {
                    var datum = response.data[i];
                    friendPics[i] = datum.picture.data.url;
                }
                picsReady();
            });
            document.getElementById('auth-loggedout').style.display = 'none';
            document.getElementById('auth-loggedin').style.display = 'block';
          } else {
            // user has not auth'd your app, or is not logged into Facebook
            document.getElementById('auth-loggedout').style.display = 'block';
            document.getElementById('auth-loggedin').style.display = 'none';
          }
        });

        // respond to clicks on the login and logout links
        document.getElementById('auth-loginlink').addEventListener('click', function(){
          FB.login(function(response) {}, {scope: 'friends_photos'});
        });
        document.getElementById('auth-logoutlink').addEventListener('click', function(){
          FB.logout();
        }); 
      } 

