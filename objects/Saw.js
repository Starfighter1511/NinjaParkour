export class Saw extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        //Aufruf der Konstruktor Methode von Phaser.Physics.Arcade.Sprite   
        super(scene, x + 14, y - 14, "saw");

        //Hinzufügen des Objekts zur Szene
        scene.add.existing(this);

        //Hinzufügen des Objekts zur Physik Engine
        scene.physics.add.existing(this);

        //Größe der Bounding Box
        this.body.setSize(38, 38);

        //Deaktiviere gravity
        this.body.allowGravity = false;

        //Nicht bewegbar
        this.body.immovable = true;

        this.create();
    }

    create = () => {
        //Erstelle Stehanimation
        this.anims.create({
            key: 'on',
            frames: this.anims.generateFrameNumbers('saw_on'),
            frameRate: 20,
            repeat: -1
        });
        this.play("on");
    }
}
  

