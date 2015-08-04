var game = new Phaser.Game(480, 640, Phaser.AUTO, 'Bubble Game', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var bubble1;


function preload() {
    game.load.image('bubble1', 'assets/bubble1.png');
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
