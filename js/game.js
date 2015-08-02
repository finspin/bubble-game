var game = new Phaser.Game(480, 640, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

var bubble1, bubble2, bubble3, bubbles;


function preload() {
    game.load.image('bubble1', 'assets/bubble1.png');
    game.load.image('bubble2', 'assets/bubble2.png');
    game.load.image('bubble3', 'assets/bubble3.png');
}

function create() {
    game.stage.backgroundColor = '#ccc';
<<<<<<< HEAD
    game.physics.startSystem(Phaser.Physics.P2JS);
=======
    game.physics.startSystem(Phaser.Physics.ARCADE);
>>>>>>> gh-pages

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
<<<<<<< HEAD
        game.physics.p2.enable(bubble);
        //        game.physics.arcade.enable(bubble);
=======
        game.physics.arcade.enable(bubble);
>>>>>>> gh-pages
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
