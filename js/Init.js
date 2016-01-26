function clear () {
    $("#Main>table").remove();
}
function Init () {
    clear();
    var Show = [false];
    var Jump = Math.floor(Math.random()*8+1);
    for(var i=0; i<3; i++){
        data[i] = [];
        for(var j=0; j<3; j++){
            if(Jump == i*3+j){
                data[i][j] = " ";
                x = i;
                y = j;
                continue;
            }
            var rd = Math.floor(Math.random()*8+1);
            while(Show[rd]) rd = Math.floor(Math.random()*8+1);
            Show[rd] = true;
            data[i][j] = rd;
        }
    }
    show();
    state = 1;
    $("input[name=start]").val("重新開始");
    $("#intro").hide();
}

function show () {
    /*
    var $table = $(document.createElement('table'));
    $table.appendTo($("#Main"));
    for(var i in data){
        var $tr = $(document.createElement('tr'));
        $tr.appendTo($table);
        for(var j in data[i]){
            var $td = $(document.createElement('td'));
            $td.text(data[i][j]);
            $td.appendTo($tr);
            console.log(i + "," + j + " : " + data[i][j]);
        }
    }
    */
    var tb = document.createElement("table");
    tb.border = 2;
    for(var i in data){
        var tr = tb.insertRow(i);
        for(var j in data){
            var td = tr.insertCell(j);
            td.innerHTML = data[i][j];
        }
    }
    document.getElementById("Main").appendChild(tb);
}