// Initialize Firebase
var config = {
    apiKey: "AIzaSyCL2MDj_c4oPiHX4seu6TSQeuuEi51NjJk",
    authDomain: "vapedata.firebaseapp.com",
    databaseURL: "https://vapedata.firebaseio.com",
    storageBucket: "vapedata.appspot.com",
    messagingSenderId: "988632448397"
};
firebase.initializeApp(config);
var fbRef = firebase.database();

$(document).ready(function () {

    console.log("Ready");

    $('.displayBtn').click(function () {
        var divId = $(this).attr("data-param");
        $('.displayDiv').hide();
        $('#' + divId).show();
        });

    var queryJ = firebase.database().ref("juice").orderByKey();
    queryJ.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                // console.log(childSnapshot.key);
                // console.log(childSnapshot.val());
                var infoJ = childSnapshot.val();
                j_nameHold.push(infoJ.name);
                j_brandHold.push(infoJ.brand);
                j_nicHold.push(infoJ.nicotine);
                j_ratingHold.push(infoJ.rating);
                j_ratioHold.push(infoJ.ratio);
                j_sizeHold.push(infoJ.size);
                j_notesHold.push(infoJ.notes);
            });
        });
    var queryP = firebase.database().ref("parts").orderByKey();
    queryP.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                // console.log(childSnapshot.key);
                // console.log(childSnapshot.val());
                var infoP = childSnapshot.val();
                p_nameHold.push(infoP.name);
                p_brandHold.push(infoP.brand);
                p_typeHold.push(infoP.type);
                p_notesHold.push(infoP.notes);
            });
        });
});

var j_nameHold = ["Name"];
var j_brandHold = ["Brand"];
var j_nicHold = ["Nicotine"];
var j_ratingHold = ["Rating"];
var j_ratioHold = ["Ratio"];
var j_sizeHold = ["Size"];
var j_notesHold = ["Comments"];

var p_nameHold = ["Name"];
var p_brandHold = ["Brand"];
var p_typeHold = ["Type"];
var p_notesHold = ["Comments"];


var displayJuiceData = function () {
    for (var i = 0; i < j_nameHold.length; i++) {
        document.getElementById("j_nameHold").innerHTML = j_nameHold.join("<br>");
        document.getElementById("j_brandHold").innerHTML = j_brandHold.join("<br>");
        document.getElementById("j_nicHold").innerHTML = j_nicHold.join("<br>");
        document.getElementById("j_ratingHold").innerHTML = j_ratingHold.join("<br>");
        document.getElementById("j_ratioHold").innerHTML = j_ratioHold.join("<br>");
        document.getElementById("j_sizeHold").innerHTML = j_sizeHold.join("<br>");
        document.getElementById("j_notesHold").innerHTML = j_notesHold.join("<br>");
    }
};

var displayPartsData = function () {
    for (var i = 0; i < p_nameHold.length; i++) {
        document.getElementById("p_nameHold").innerHTML = p_nameHold.join("<br>");
        document.getElementById("p_brandHold").innerHTML = p_brandHold.join("<br>");
        document.getElementById("p_typeHold").innerHTML = p_typeHold.join("<br>");
        document.getElementById("p_notesHold").innerHTML = p_notesHold.join("<br>");
    }
};


var jAdd = function (name, brand, nic, rating, ratio, size, note) {
    var data = {
        name: name,
        brand: brand,
        nicotine: nic,
        rating: rating,
        ratio: ratio,
        size: size,
        notes: note
    };
    fbRef.ref('juice').push(data);
    document.getElementById('jName').value = "";
    document.getElementById('jBrand').value = "";
    document.getElementById('jNic').value = "";
    document.getElementById('jRating').value = "";
    document.getElementById('jRatio').value = "";
    document.getElementById('jSize').value = "";
    document.getElementById('jNote').value = "";
    document.getElementById("jConfirm").innerText = "Juice Info Added"
};

var pAdd = function (name, brand, type, note) {
    var data = {
        name: name,
        brand: brand,
        type: type,
        notes: note
    };
    fbRef.ref('parts').push(data);
    document.getElementById('pName').value = "";
    document.getElementById('pBrand').value = "";
    document.getElementById('pType').value = "";
    document.getElementById('pNote').value = "";
    document.getElementById("pConfirm").innerText = "Parts Info Added"
};