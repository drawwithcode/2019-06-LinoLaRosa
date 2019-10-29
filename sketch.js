function preload() {
    // put preload code here
}

var button;
var slider;
var xBox = 10;
var yBox = 10;
var xSel = 1100;
var ySel = 100;

function setup() {

    noCanvas();

    button = createButton("DON'T CLICK ME");
    button.size(100, 100);
    button.mousePressed(click1);

    checkbox = createCheckbox("DON'T CHECK ME");
    checkbox.checked(false);
    checkbox.changed(click2);

    sel = createSelect();
    sel.option("Don't change the option");
    sel.option('NOT THIS ONE');
    sel.changed(click5);

}

function draw() {

    var xButton = windowWidth / 2 - 50;
    var yButton = windowHeight / 2 - 50;

    if (dist(mouseX, mouseY, xButton, yButton) < 500) {
        xButton = xButton + random(-5, 5);
        yButton = yButton + random(-5, 5);
    }

    if (dist(mouseX, mouseY, xButton, yButton) < 100) {
        xButton = xButton + random(-15, 15);
        yButton = yButton + random(-15, 15);
        button.size(25, 25);
    }

    button.position(xButton, yButton);

    xBox = xBox + 1;
    checkbox.position(xBox, yBox);

    ySel = ySel + 1;
    sel.position(xSel, ySel);

}

function click1() {

    button2 = createButton("̻̈́̃͒r̶̦̱̩̐̑͋̑͊ŗ̸̛̙̰̠̮̠̈̈́̄̄̓̆̈͋͗͊́̃̕̕ó̴̞̖̽̐̎͂̓̍̉͒̐̒͐͝");
    button2.size(100, 100);
    button2.position(windowWidth / 2 - 50, windowHeight / 2 - 50);

    button3 = createButton("e̶̻̅̿̎͑̍̈́̃͒̚͘r̶̦̱̩̐̑͋̑͊ŗ̸̛̙̰̠̮̠̈̈́̄̄̓̆̈͋͗͊́̃̕̕ó̴̧̞̖͍͙͈̺̠̳̽̐̎͂̓̍̉͒̐̒͐͝r̷̫̘̳̗̗͙͖̳̱̆͋̃͜");
    button3.size(200, 100);
    button3.position(windowWidth / 2, windowHeight / 2 - 100);

    button4 = createButton("ȩ̶͍͙͈̺̠̳̅̿̎͑̍̚͘r̷̫̘̳̗̗͙͖̳̱̆͋̃͜");
    button4.size(150, 50);
    button4.position(windowWidth / 2 - 100, windowHeight / 2 - 150);

    button5 = createButton("DON'T TOUCH ANYTHING ELSE");
    button5.size(80, 80);
    button5.position(windowWidth / 2 - 80, windowHeight / 2 - 80);

}

function click2() {
    box2 = createCheckbox("You aren't listening to me are you?");
    box2.position(100, 100);
    box2.checked(false);
    box2.changed(click3);
}

function click3() {
    box3 = createCheckbox("This has to stop");
    box3.position(200, 200);
    box3.checked(false);
    box3.changed(click5);
}

function click5() {
    sel2 = createSelect();
    sel2.position(1100, 200);
    sel2.option("You're driving me crazy...");
    sel2.option('PLEASE STOP');
    sel2.changed(click6);
}

function click6() {
    sel3 = createSelect();
    sel3.position(1200, 300);
    sel3.option("Ok, let's play then...");
    sel3.option('MOVE THE SLIDERS!');
    sel3.changed(click7);
}

function click7() {
    slider = createSlider(10, 50, 20);
    slider.position(800, 100);
    slider.changed(click8);
    createP()
}

function click8() {
    slider2 = createSlider(10, 50, 20);
    slider2.position(100, 800);
    slider3 = createSlider(10, 50, 20);
    slider3.position(50, 50);
    slider4 = createSlider(10, 50, 20);
    slider4.position(400, 800);
    slider4.changed(click9);

}

function click9() {
    input = createInput("Ok, I give up... just don't change this text and then press enter please...");
    input.position(800, 800);
    input.size(500, 20);
    input.changed(click10);
}

function click10() {
    end = createElement("h1", "THE END");
    end.position(windowWidth / 2, windowHeight / 2 + 200);
}
