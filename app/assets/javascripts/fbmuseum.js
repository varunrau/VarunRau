// // Some convenience variables
// var aspectRatio = window.innerWidth / window.innerHeight;
// var unitsize = 250;
// var wallheight = unitsize;
// var walkspeed = 100;
// var lookspeed = .045;
// var maplength = 10;
// var mapLength = mapLength;

// var camStartPosX = 0;
// var camStartPosZ = 0;

// // A basic map. I'll write a script to generate this later.
// var map = new Array(); 

// var mapWidth;
// var mapHeight;

// // Some more convenience methods
// var t = THREE;
// var scene, cam, renderer, controls, clock, projector, model, skin;
// var mouse = { x: 0, y: 0};

// var photos = new Array();
// var redditPhotos = new Array();

// // This is called when the document is ready. We'll show a simple start
// // screen then when the user is ready we'll start the main animation loop.
// $(document).ready(function() {
// });

// $.getJSON('http://www.reddit.com/r/aww/.json?jsonp=?', function(data) {
//     var redditData = data.data.children;
//     for (var i = 0; i < redditData.length; i++) {
//         // console.log(redditData[i].data.url);
//         redditPhotos[i] = redditData[i].url;
//     }
// })

// var picsReady = function() {
//     for (var i = 0; i < friendPics.length; i++) {
//         var mesh = new t.MeshLambertMaterial({map: t.ImageUtils.loadTexture(friendPics[i]),});
//         photos[i] = mesh;
//     }
//     var index = 1;
//     for (var i = 0; i < 100; i++) {
//         var mapVal = new Array();
//         mapVal[0] = index;
//         mapVal[1] = 0;
//         mapVal[2] = index + 1;
//         index += 2;
//         map[i] = mapVal;
//     }
//     map[map.length] = new Array(0, index + 1, 0);
//     mapWidth = map.length;
//     mapHeight = map[0].length;
//     start();
//     animate();
// }

// var start = function() {
//   clock = new t.Clock();
//   projector = new t.Projector();
//   scene = new t.Scene();
//   scene.fog = new t.FogExp2(0xD6F1FF, 0.0005); // We'll add fog, so we can see depth in this world

//   setup();

//   cam = new t.PerspectiveCamera(60, aspectRatio, 1, 10000);
//   cam.position.y = unitsize * .5; // Raise the camera off the ground
//   cam.position.x = camStartPosX;
//   cam.position.z = camStartPosZ;
//   scene.add(cam);

//   // Insert code to control the camera
//   controls = new t.FirstPersonControls(cam);
//   controls.movementSpeed = walkspeed;
//   controls.lookSpeed = lookspeed;


//   renderer = new t.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.domElement.style.backgroundColor = '#ADEAEA';
//   document.body.appendChild(renderer.domElement); // Add our HTML canvas to the DOM

//   document.addEventListener('mousemove', onMouseMove, false);
// };

// var onMouseMove = function(e) {
//     e.preventDefault();
//     mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
// 	mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
// };

// var animate = function() {
//     requestAnimationFrame(animate);
//     render();
// };

// var render = function() {
//     var del = clock.getDelta();
//     controls.update(del);
//     renderer.render(scene, cam); // Repaint the scene
// };

// var setup = function() {
//     // Let's create the floor!
//     var floor = new t.Mesh(
// 			new t.CubeGeometry(mapWidth * unitsize, 10, mapWidth * unitsize),
//             new t.MeshLambertMaterial({map: t.ImageUtils.loadTexture('/assets/hardwood.jpeg'),})
// 			//new t.MeshLambertMaterial({color: 0xEDCBA0,/*map: t.ImageUtils.loadTexture('images/floor-1.jpg')*/})
// 	);
// 	scene.add(floor);

//     var cube = new t.CubeGeometry(unitsize, wallheight, 5);
//     // Let's create the walls
//     for (var i = 0; i < mapWidth; i++) {
//         for (var j = 0, m = map[i].length; j < m; j++) {
//             if (map[i][j]) {
//                 // We want to use a different image for each of the walls.
//                 // So we give the image a different texture
//                 var wall = new t.Mesh(cube, photos[map[i][j]]);
//                 wall.position.x = (i - mapWidth/2) * unitsize;
//                 wall.position.y = wallheight/2;
//                 wall.position.z = (j - mapWidth/2) * unitsize;
//                 camStartPosX = wall.position.x;
//                 camStartPosZ = wall.position.z;
//                 scene.add(wall); // Add the wall to the scene 
//             }
//         }
//     }
//     var directionalLight1 = new t.DirectionalLight(0xF7EFBE, 0.7);
//     directionalLight1.position.set(0.5, 1, 0.5);
//     scene.add(directionalLight1);

//     var directionalLight2 = new t.DirectionalLight(0xF7EFBE, 0.5);
//     directionalLight2.position.set(-0.5, -1, -0.5);
//     scene.add(directionalLight2);
// };


// function sector(vector) {
//     var x = Math.floor((vector.x + unitsize) / 2 / unitsize + mapWidth/2);
//     var z = Math.floor((vector.z + unitsize) / 2 / unitsize + mapWidth/2);
//     return {x: x, z: z};
// }

// function collision(vector) {
//     //var sec = sector(vector);
//     return false;//map[sec.x][sec.z] > 0;
// }



// // Load the SDK Asynchronously
//       (function(d){
//          var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
//          if (d.getElementById(id)) {return;}
//          js = d.createElement('script'); js.id = id; js.async = true;
//          js.src = "//connect.facebook.net/en_US/all.js";
//          ref.parentNode.insertBefore(js, ref);
//        }(document));

//       // Init the SDK upon load
//       window.fbAsyncInit = function() {
//         FB.init({
//           appId      : '248605301932783' // Use your app id, not this one. :P
//         });

//         // listen for and handle auth.statusChange events
//         FB.Event.subscribe('auth.statusChange', function(response) {
//           if (response.authResponse) {
//             // user has auth'd your app and is logged into Facebook
//             FB.api('/me', function(me){
//               if (me.name) {
//                 document.getElementById('auth-displayname').innerHTML = me.name;
//               }
//             })
//             FB.api('/me/friends?fields=name,id,picture.type(large)', function(response) {
//                 friendPics = new Array();
//                 for (var i = 0; i < response.data.length; i++) {
//                     var datum = response.data[i];
//                     friendPics[i] = datum.picture.data.url;
//                 }
//                 picsReady();
//             });
//             document.getElementById('auth-loggedout').style.display = 'none';
//             document.getElementById('auth-loggedin').style.display = 'block';
//           } else {
//             // user has not auth'd your app, or is not logged into Facebook
//             document.getElementById('auth-loggedout').style.display = 'block';
//             document.getElementById('auth-loggedin').style.display = 'none';
//           }
//         });

//         // respond to clicks on the login and logout links
//         document.getElementById('auth-loginlink').addEventListener('click', function(){
//           FB.login(function(response) {}, {scope: 'friends_photos'});
//         });
//         document.getElementById('auth-logoutlink').addEventListener('click', function(){
//           FB.logout();
//         }); 
//       } 
// THREE.FirstPersonControls = function(object, domElement) {
//     this.object = object;
//     this.target = new THREE.Vector3(0, 0, 0);

//     this.domElement = (domElement !== undefined) ? domElement : document;

//     this.movementSpeed = 1.0;
//     this.lookSpeed = 0.0005;

//     this.noFly = false;
//     this.lookVertical = true;
//     this.autoForward = false;

//     this.activeLook = true;
//     this.clickMove = false;

//     this.heightSpeed = false;
//     this.heightCoef = 1.0;
//     this.heightMin = 0.0;

//     this.constrainVertical = false;
//     this.verticalMin = 0;
//     this.verticalMax = Math.PI;

//     this.autoSpeedFactor = 0.0;

//     this.mouseX = 0;
//     this.mouseY = 0;

//     this.lat = 0;
//     this.lon = 0;
//     this.phi = 0;
//     this.theta = 0;

//     this.pause = false;

//     this.moveForward = false;
//     this.moveBackward = false;
//     this.moveLeft = false;
//     this.moveRight = false;

//     if (this.domElement == document) {
//         this.viewHalfX = window.innerWidth / 2;
//         this.viewHalfY = window.innerHeight / 2;
//     } else {
//         this.viewHalfX = this.domElement.offsetWidth / 2;
//         this.viewHalfY = this.domElement.offsetHeight / 2;
//         this.domElement.setAttribute('tabindex', -1);
//     }

//     this.onMouseDown = function (event) {
//         if (this.domElement !== document) {
//             this.domElement.focus();
//         }
//         event.preventDefault();
//         event.stopPropagation();

//         if (this.clickMove) {
//             switch (event.button) {
//                 case 0: this.moveForward = true; break;
//                 case 2: this.moveForward = true; break;
//             }
//         }
//         this.mouseDragOn = true;
//     };

//     this.onMouseUp = function(event) {
//         event.preventDefault();
//         event.stopPropagation();
//         if (this.clickMove) {
//             switch (event.button) {
//                 case 0: this.moveForward = false; break;
//                 case 2: this.moveBackward = false; break;
//             }
//         }
//         this.mouseDragOn = false;
//     };

//     this.onMouseMove = function(event) {
//         if (this.domElement === document) {
//             this.mouseX = event.pageX - this.viewHalfX;
//             this.mouseY = event.pageY - this.viewHalfY;
//         } else {
//             this.mouseX = event.pageX - this.domElement.offsetLeft - this.viewHalfX;
//             this.mouseY = event.pageY - this.domElement.offsetTop - thsi.viewHalfY;
//         }
//     };

//     this.onKeyDown = function(event) {
//         switch (event.keyCode) {
//             case 37: // left
//             case 65: // A
//                 this.moveLeft = true;
//                 break;
//             case 38: // up
//             case 87: // W
//                 this.moveForward = true;
//                 break;
//             case 39: // right
//             case 68: // D
//                 this.moveRight = true;
//                 break;
//             case 40: // down
//             case 83:
//                 this.moveBackward = true;
//                 break;
//             case 80:
//                 this.pause = !this.pause;
//                 break;
//         }
//     };

//      this.onKeyUp = function(event) {
//         switch (event.keyCode) {
//             case 37: // left
//             case 65: // A
//                 this.moveLeft = false;
//                 break;
//             case 38: // up
//             case 87: // W
//                 this.moveForward = false;
//                 break;
//             case 39: // right
//             case 68: // D
//                 this.moveRight = false;
//                 break;
//             case 40: // down
//             case 83:
//                 this.moveBackward = false;
//                 break;
//         }
//     };

//      this.update = function(del) {

//         // This part of the code is pretty self explanatory.
//         var moveSpeed = 0;

//         moveSpeed = del * this.movementSpeed;
//         if (this.pause) {
//             return;
//         }
//         if (this.moveForward) {
//             this.object.translateZ(-(moveSpeed));
//             if (collision(this.object.position)) {
//                 this.object.translateZ(moveSpeed);
//             }
//         }

//         if (this.moveBackward) {
//             this.object.translateZ(moveSpeed);
//             if (collistion(this.object.position)) {
//                 this.object.translateZ(- moveSpeed);
//             }
//         }

//         if (this.moveLeft) {
//             this.object.translateX(- moveSpeed);
//             if (collision(this.object.position)) {
//                 this.object.translate(moveSpeed);
//             }
//         }

//         if (this.moveRight) {
//             this.object.translateX(moveSpeed);
//             if (collision(this.object.position)) {
//                 this.object.translate(- moveSpeed);
//             }
//         }

//         var lookS = del * this.lookSpeed;
//         this.lon += this.mouseX * lookS;
//         if (this.lookVertical) {
//             this.lat -= this.mouseY * lookS;
//         }
//         this.lat = Math.max(-85, Math.min(85, this.lat));
//         this.phi = (90 - this.lat) * Math.PI / 180;
//         this.theta = this.lon * Math.PI / 180;

//         var targetPos = this.target;
//         var pos = this.object.position;

//         targetPos.x = pos.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
//         targetPos.y = pos.y + 100 * Math.cos(this.phi);
//         targetPos.z = pos.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);


//         this.lon += this.mouseX * lookS;

//         this.object.lookAt(targetPos);
//     };

//     this.domElement.addEventListener('mousemove', bind(this, this.onMouseMove), false);
//     this.domElement.addEventListener('mousedown', bind(this, this.onMouseDown), false);
//     this.domElement.addEventListener('mouseup', bind(this, this.onMouseUp), false);
//     this.domElement.addEventListener('keydown', bind(this, this.onKeyDown), false);
//     this.domElement.addEventListener('keyup', bind(this, this.onKeyUp), false);

//     function bind(obj, func) {
//         return function() {
//             func.apply(obj, arguments);
//         }
//     }
// }


