var game = new Phaser.Game(480, 640, Phaser.AUTO, 'Bubble Game', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var b1, b2, bubble1, bubble2;


function preload() {}

function create() {
    game.stage.backgroundColor = "#000";

    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);

    var bubbleCollisionGroup = game.physics.p2.createCollisionGroup();
    game.physics.p2.updateBoundsCollisionGroup();

    b1 = game.add.graphics();
    b1.beginFill(0xFF0000, 1);
    b1.drawCircle(0, 0, 50);

    bubble1 = game.add.sprite(game.world.width - 380, game.world.height - 50);
    bubble1.addChild(b1);
    bubble1.anchor.setTo(0.5, 0.5);

    b2 = game.add.graphics();
    b2.beginFill(0xFFFFFF, 1);
    b2.drawCircle(0, 0, 50);

    bubble2 = game.add.sprite(game.world.width - 245, game.world.height - 50);
    bubble2.addChild(b2);
    bubble2.anchor.setTo(0.5, 0.5);


    bubbles = game.add.group();
    bubbles.add(bubble1);
    bubbles.add(bubble2);

    game.physics.p2.enable(bubbles);

    bubbles.forEach(function (bubble) {
        bubble.body.setCircle(50);
        bubble.body.setCollisionGroup(bubbleCollisionGroup);
        bubble.body.collides([bubbleCollisionGroup, bubbleCollisionGroup]);
    });

    var bubbleMaterial = game.physics.p2.createMaterial('bubbleMaterial');
    var worldMaterial = game.physics.p2.createMaterial('worldMaterial');

    bubble1.body.setMaterial(bubbleMaterial);
    bubble2.body.setMaterial(bubbleMaterial);

    game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

    var contactMaterial = game.physics.p2.createContactMaterial(bubbleMaterial, worldMaterial);

    contactMaterial.friction = 0;
    contactMaterial.restitution = 1.0;


    bubble1.body.damping = 0;
    bubble1.body.velocity.x = 200;
    bubble1.body.velocity.y = -200;

    bubble2.body.damping = 0;
    bubble2.body.velocity.x = -100;
    bubble2.body.velocity.y = 250;
}

function update() {}

function render() {}
