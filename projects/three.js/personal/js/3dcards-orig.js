var imagesDir = 'textures/cards/220x294/';
var imagesDirBg = 'textures/cube/SwedishRoyalCastle1/';

var jsonCardData = [
	["3421910", 1, 1 ],
	["3421911", 1, 2 ],
	["3421912", 1, 3 ],
	["3421913", 1, 4 ],
	["3421914", 1, 5 ],
	["3421915", 1, 6 ],
	["3421916", 1, 7 ],
	["3421917", 2, 1 ],
	["3424110", 2, 2 ],
	["3424111", 2, 3 ],
	["3424112", 2, 4 ],
	["3424113", 2, 5 ],
	["3424114", 2, 6 ],
	["3440200", 2, 7 ],
	["3424115", 3, 1 ],
	["3424116", 3, 2 ],
	["3424117", 3, 3 ],
	["3424710", 3, 4 ],
	["3424711", 3, 5 ],
	["3424712", 3, 6 ],
	["3424713", 3, 7 ],
	["3424714", 4, 1 ],
	["3424715", 4, 2 ],
	["3424716", 4, 3 ],
	["3424717", 4, 4 ],
	["3430103", 4, 5 ],
	["3430203", 4, 6 ],
	["3430403", 4, 7 ],
	["3430503", 5, 1 ],
	["3430603", 5, 2 ],
	["3430803", 5, 3 ],
	["3430903", 5, 4 ],
	["3431403", 5, 5 ],
	["3431703", 5, 6 ],
	["3432003", 5, 7 ],
	["3432103", 6, 1 ],
	["3432603", 6, 2 ],
	["3433103", 6, 3 ],
	["3433403", 6, 4 ],
	["3433703", 6, 5 ],
	["3433803", 6, 6 ],
	["3433903", 6, 7 ],
	["3434003", 7, 1 ],
	["3434203", 7, 2 ],
	["3434403", 7, 3 ],
	["3434803", 7, 4 ],
	["3435303", 7, 5 ],
	["3436103", 7, 6 ],
	["3436203", 7, 7 ]
];

var camera, scene, renderer;
var controls;
var body;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

function main() {
	body = document.getElementsByTagName("body")[0];
	init();
	animate();
}


function createBbView() {
	var w = 512 * 5;
	var sides = [
		{
			url: imagesDirBg + 'posx.jpg',
			position: new THREE.Vector3(-w, 0, 0),
			rotation: new THREE.Vector3(0, Math.PI / 2, 0)
		},
		{
			url: imagesDirBg + 'negx.jpg',
			position: new THREE.Vector3(w, 0, 0),
			rotation: new THREE.Vector3(0, -Math.PI / 2, 0)
		},
		{
			url: imagesDirBg + 'posy.jpg',
			position: new THREE.Vector3(0, w, 0),
			rotation: new THREE.Vector3(Math.PI / 2, 0, Math.PI)
		},
		{
			url: imagesDirBg + 'negy.jpg',
			position: new THREE.Vector3(0, -w, 0),
			rotation: new THREE.Vector3(-Math.PI / 2, 0, Math.PI)
		},
		{
			url: imagesDirBg + 'posz.jpg',
			position: new THREE.Vector3(0, 0, w),
			rotation: new THREE.Vector3(0, Math.PI, 0)
		},
		{
			url: imagesDirBg + 'negz.jpg',
			position: new THREE.Vector3(0, 0, -w),
			rotation: new THREE.Vector3(0, 0, 0)
		}
	];

	for (var i = 0; i < sides.length; i++) {

		var side = sides[ i ];

		var element = document.createElement('img');
		element.width = 1026 * 5; // 2 pixels extra to close the gap.
		element.src = side.url;

		var object = new THREE.CSS3DObject(element);
		object.position = side.position;
		object.rotation = side.rotation;
		scene.add(object);
	}
}

function createCardDivs() {
	for (var i = 0; i < jsonCardData.length; i++) {

		var item = jsonCardData[ i ];

		var element = document.createElement('div');
		element.className = 'element';

		var backgroundImagePath = "url(" + imagesDir + item[0] + ".jpg" + ")";
		element.id = item[0];
		element.style.backgroundImage = backgroundImagePath;

		var object = new THREE.CSS3DObject(element);
		object.position.x = Math.random() * 4000 - 2000;
		object.position.y = Math.random() * 4000 - 2000;
		object.position.z = Math.random() * 4000 - 2000;
		scene.add(object);

		objects.push(object);
	}
}

function createTableView() {
	for (var i = 0; i < objects.length; i++) {

		var item = jsonCardData[ i ];

		var object = new THREE.Object3D();
		object.position.x = ( item[ 1 ] * 240 ) - 1540;
		object.position.y = -( item[ 2 ] * 314 ) + 1100;

		targets.table.push(object);
	}
}

function createSphereView() {
	var vector = new THREE.Vector3();

	for (var i = 0, l = objects.length; i < l; i++) {
		var phi = Math.acos(-1 + ( 2 * i ) / l);
		var theta = Math.sqrt(l * Math.PI) * phi;

		var object = new THREE.Object3D();

		object.position.x = 1200 * Math.cos(theta) * Math.sin(phi);
		object.position.y = 1200 * Math.sin(theta) * Math.sin(phi);
		object.position.z = 1200 * Math.cos(phi);

		vector.copy(object.position).multiplyScalar(2);

		object.lookAt(vector);

		targets.sphere.push(object);
	}
}

function createHelixView() {
	var vector = new THREE.Vector3();

	for (var i = 0, l = objects.length; i < l; i++) {

		var phi = i * 0.205 + Math.PI;

		var object = new THREE.Object3D();

		object.position.x = 1600 * Math.sin(phi);
		object.position.y = -( i * 10 ) + 450;
		object.position.z = 1100 * Math.cos(phi);

		vector.copy(object.position);
		vector.x *= 2;
		vector.z *= 2;

		object.lookAt(vector);

		targets.helix.push(object);
	}
}

function createGridView() {
	for (var i = 0; i < objects.length; i++) {
		var object = new THREE.Object3D();

		object.position.x = ( ( i % 5 ) * 400 ) - 800;
		object.position.y = ( -( Math.floor(i / 5) % 5 ) * 400 ) + 800;
		object.position.z = ( Math.floor(i / 25) ) * 1000 - 2000;

		targets.grid.push(object);
	}
}

function createRender() {
	renderer = new THREE.CSS3DRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.domElement.style.position = 'absolute';
	document.getElementById('container').appendChild(renderer.domElement);

	body.style.webkitTransition = "-webkit-filter 3s";
	body.style.webkitFilter = "grayscale(0%) saturate(100%)";
}

function createControls() {
	controls = new THREE.TrackballControls(camera, renderer.domElement);
	controls.rotateSpeed = 0.5;
	controls.addEventListener('change', render);

	var button = document.getElementById('table');
	button.addEventListener('click', function (event) {
		body.style.webkitFilter = "grayscale(0%) saturate(100%)";
		transform(targets.table, 2000);
	}, false);

	var button = document.getElementById('sphere');
	button.addEventListener('click', function (event) {
		body.style.webkitFilter = "grayscale(0%) saturate(180%)";
		transform(targets.sphere, 2000);
	}, false);

	var button = document.getElementById('helix');
	button.addEventListener('click', function (event) {
		body.style.webkitFilter = "grayscale(100%) saturate(100%)";
		transform(targets.helix, 2000);
	}, false);

	var button = document.getElementById('grid');
	button.addEventListener('click', function (event) {
		body.style.webkitFilter = "grayscale(0%) saturate(100%)";
		transform(targets.grid, 2000);
	}, false);
}

function init() {

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
	camera.position.z = 1800;

	scene = new THREE.Scene();

	createBbView();

	createCardDivs();

	createTableView();

	createSphereView();

	createHelixView();

	createGridView();

	createRender();

	createControls();

	transform(targets.table, 5000);

	window.addEventListener('resize', onWindowResize, false);
}

function transform(targets, duration) {
	TWEEN.removeAll();

	for (var i = 0; i < objects.length; i++) {

		var object = objects[ i ];
		var target = targets[ i ];

		new TWEEN.Tween(object.position)
			.to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
			.easing(TWEEN.Easing.Exponential.InOut)
			.start();

		new TWEEN.Tween(object.rotation)
			.to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
			.easing(TWEEN.Easing.Exponential.InOut)
			.start();

	}

	new TWEEN.Tween(this)
		.to({}, duration * 2)
		.onUpdate(render)
		.start();
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);

	TWEEN.update();
	controls.update();
}

function render() {
	renderer.render(scene, camera);
}