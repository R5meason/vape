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

    console.log("Info Loaded");

    var queryJ = firebase.database().ref("juice").orderByKey();
    queryJ.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                console.log(childSnapshot.key);
                console.log(childSnapshot.val());
                var infoJ = childSnapshot.val();
                nameHold.push(infoJ.name);
                brandHold.push(infoJ.brand);
                nicHold.push(infoJ.nicotine);
                ratingHold.push(infoJ.rating);
                ratioHold.push(infoJ.ratio);
                sizeHold.push(infoJ.size);
                notesHold.push(infoJ.notes);
            });
        });
    var queryP = firebase.database().ref("parts").orderByKey();
    queryP.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                console.log(childSnapshot.key);
                console.log(childSnapshot.val());
                var infoP = childSnapshot.val();
                p_nameHold.push(infoP.name);
                p_brandHold.push(infoP.brand);
                p_typeHold.push(infoP.type);
                p_notesHold.push(infoP.notes);
            });
        });
});

var nameHold = ["Name"];
var brandHold = ["Brand"];
var nicHold = ["Nicotine"];
var ratingHold = ["Rating"];
var ratioHold = ["Ratio"];
var sizeHold = ["Size"];
var notesHold = ["Comments"];

var p_nameHold = ["Name"];
var p_brandHold = ["Brand"];
var p_typeHold = ["Type"];
var p_notesHold = ["Comments"];


var displayJuiceData = function () {
    for (var i = 0; i < nameHold.length; i++) {
        document.getElementById("nameHold").innerHTML = nameHold.join("<br>");
        document.getElementById("brandHold").innerHTML = brandHold.join("<br>");
        document.getElementById("nicHold").innerHTML = nicHold.join("<br>");
        document.getElementById("ratingHold").innerHTML = ratingHold.join("<br>");
        document.getElementById("ratioHold").innerHTML = ratioHold.join("<br>");
        document.getElementById("sizeHold").innerHTML = sizeHold.join("<br>");
        document.getElementById("notesHold").innerHTML = notesHold.join("<br>");
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
    // console.log(name, brand, nic, rating, ratio, size, note);
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