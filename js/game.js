<<<<<<< HEAD
var game = new Phaser.Game(480, 640, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

var bubble1, bubble2, bubble3, bubbles;
=======
var game = new Phaser.Game(480, 640, Phaser.AUTO, 'Bubble Game', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var bubble1;
>>>>>>> master


function preload() {
    game.load.image('bubble1', 'assets/bubble1.png');
<<<<<<< HEAD
    game.load.image('bubble2', 'assets/bubble2.png');
    game.load.image('bubble3', 'assets/bubble3.png');
}

function create() {
    game.stage.backgroundColor = '#ccc';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    bubble1 = game.add.sprite(50, game.world.height - 50, 'bubble1');
    bubble2 = game.add.sprite(200, game.world.height - 50, 'bubble2');
    bubble3 = game.add.sprite(350, game.world.height - 50, 'bubble3');

    bubbles = game.add.group();
    bubbles.add(bubble1);
    bubbles.add(bubble2);
    bubbles.add(bubble3);

    bubbles.enableBody = true;

    bubbles.setAll('anchor.x', 0.5);
    bubbles.setAll('anchor.y', 0.5);

    bubbles.forEach(function (bubble) {
        game.physics.arcade.enable(bubble);
        bubble.body.collideWorldBounds = true;
        bubble.body.bounce.set(1);
    });

    bubble1.body.velocity.setTo(200, 200);
    bubble2.body.velocity.setTo(250, 250);
    bubble3.body.velocity.setTo(100, 200);
}

function update() {
    game.physics.arcade.collide(bubbles, bubbles);
}
=======
    //    game.load.image('bubble2', 'assets/bubble2.png');
    //    game.load.image('bubble3', 'assets/bubble3.png');


}

function create() {
    game.stage.backgroundColor = "#000";

    game.physics.startSystem(Phaser.Physics.P2JS);

    bubble1 = game.add.sprite(game.world.centerX, game.world.centerY, 'bubble1');

    game.physics.p2.enable(bubble1);

    bubble1.body.setCircle(50);

    var bubbleMaterial = game.physics.p2.createMaterial('bubbleMaterial', bubble1.body);
    var worldMaterial = game.physics.p2.createMaterial('worldMaterial');

    game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

    var contactMaterial = game.physics.p2.createContactMaterial(bubbleMaterial, worldMaterial);

    contactMaterial.friction = 0;
    contactMaterial.restitution = 1.0;
    contactMaterial.stiffness = 0;
    contactMaterial.relaxation = 0;
    contactMaterial.frictionStiffness = 0;
    contactMaterial.frictionRelaxation = 0;
    contactMaterial.surfaceVelocity = 0;

    bubble1.body.damping = 0;
    bubble1.body.velocity.x = 200;
    bubble1.body.velocity.y = 200;
}

function update() {}

function render() {}
>>>>>>> master
