var game = new Phaser.Game(480, 640, Phaser.AUTO, 'Bubble Game', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var bubble1, bubble2;


function preload() {
    game.load.image('bubble1', 'assets/bubble1.png');
    game.load.image('bubble2', 'assets/bubble2.png');
    game.load.image('bubble3', 'assets/bubble3.png');


}

function create() {
    game.stage.backgroundColor = "#000";

    game.physics.startSystem(Phaser.Physics.P2JS);

    bubble1 = game.add.sprite(game.world.width - 380, game.world.height - 50, 'bubble1');
    bubble2 = game.add.sprite(game.world.width - 245, game.world.height - 50, 'bubble2');
    //    bubble3 = game.add.sprite(game.world.width - 110, game.world.height - 50, 'bubble3');

    bubbles = game.add.group();
    bubbles.add(bubble1);
    bubbles.add(bubble2);
    //    bubbles.add(bubble3);

    game.physics.p2.enable(bubbles);


    bubbles.forEach(function (bubble) {
        bubble.body.setCircle(50);
    });

    var bubbleMaterial = game.physics.p2.createMaterial('bubbleMaterial');
    var worldMaterial = game.physics.p2.createMaterial('worldMaterial');

    bubble1.body.setMaterial(bubbleMaterial);
    bubble2.body.setMaterial(bubbleMaterial);

    game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

    var contactMaterial = game.physics.p2.createContactMaterial(bubbleMaterial, worldMaterial);

    contactMaterial.friction = 0;
    contactMaterial.restitution = 1.0;
    //    contactMaterial.stiffness = 0;
    //    contactMaterial.relaxation = 0;
    //    contactMaterial.frictionStiffness = 0;
    //    contactMaterial.frictionRelaxation = 0;
    //    contactMaterial.surfaceVelocity = 0;

    bubble1.body.damping = 0;
    bubble1.body.velocity.x = 200;
    bubble1.body.velocity.y = 200;

    bubble2.body.damping = 0;
    bubble2.body.velocity.x = -100;
    bubble2.body.velocity.y = 250;
}

function update() {}

function render() {}
