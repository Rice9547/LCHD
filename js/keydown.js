document.write("<script language='javascript' src='js/Init.js'></script>");
document.write("<script language='javascript' src='js/Check.js'></script>");


window.onkeydown = function (evt) {
    if(state == 0) return;
    switch(evt.keyCode){
        case 40:
            MoveDown();
            break;
        case 37:
            MoveLeft();
            break;
        case 39:
            MoveRight();
            break;
        case 38:
            MoveUp();
            break;
    }
}

function MoveDown () {
    if(x == 0) return;
    else{
        data[x][y] = data[x-1][y];
        data[x-1][y] = null;
        x--;
        clear();
        show();
        check();
    }
}

function MoveLeft () {
    if(y == 2) return;
    else{
        data[x][y] = data[x][y+1];
        data[x][y+1] = null;
        y++;
        clear();
        show();
        check();
    }
}

function MoveRight () {
    if(y == 0) return;
    else{
        data[x][y] = data[x][y-1];
        data[x][y-1] = null;
        y--;
        clear();
        show();
        check();
    }
}

function MoveUp () {
    if(x == 2) return;
    else{
        data[x][y] = data[x+1][y];
        data[x+1][y] = null;
        x++;
        clear();
        show();
        check();
    }
}