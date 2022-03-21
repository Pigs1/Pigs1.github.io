/**
    Displays the title screen and menu.
    Code by Rob Kleffner, 2011
*/

Mario.TitleState = function () {
    this.drawManager = null;
    this.camera = null;
    this.logoY = null;
    this.bounce = null;
    this.font = null;
};

Mario.TitleState.prototype = new Enjine.GameState();

Mario.TitleState.prototype.Enter = function () {

    Mario.GlobalMapState = new Mario.MapState();
    //set up the global main character variable
    Mario.MarioCharacter = new Mario.Character();
    Mario.MarioCharacter.Image = Enjine.Resources.Images["smallMario"];

};

Mario.TitleState.prototype.Exit = function () {

};

Mario.TitleState.prototype.Update = function (delta) {

};

Mario.TitleState.prototype.Draw = function (context) {

};

Mario.TitleState.prototype.CheckForChange = function (context) {

    context.ChangeState(Mario.GlobalMapState);

};
