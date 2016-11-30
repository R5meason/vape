/**
 * Created by Melynda Eason on 11/13/2016.
 */

$(document).ready(function () {
    retrieveData();
    console.log("Info Loaded");

    var query = firebase.database().ref("juice").orderByKey();
    query.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                console.log(childSnapshot.key);
                console.log(childSnapshot.val());
                var info = childSnapshot.val();
                nameHold.push(info.name);
                brandHold.push(info.brand);
                nicHold.push(info.nicotine);
                ratingHold.push(info.rating);
                ratioHold.push(info.ratio);
                sizeHold.push(info.size);
                notesHold.push(info.notes);
            });
        });
});


var nameHold = [];
var brandHold = [];
var nicHold = [];
var ratingHold = [];
var ratioHold = [];
var sizeHold = [];
var notesHold = [];

var displayJuiceData = function () {
    for (var i = 0; i < nameHold.length; i++) {
        console.log(nameHold[i] + " " + brandHold[i] + " " + nicHold[i] + " " + ratingHold[i] + " " + ratioHold[i] + " " + sizeHold[i] + " " + notesHold[i]);
    }
};

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

var retrieveData = function (section) {
    fbRef.ref(section).on('value', function (snapshot) {
        if (section === "juice") {
            vapeData.juice = snapshot.val();
            console.log("Juice Data: ", vapeData.juice);
        }
        else if (section === "parts") {
            vapeData.parts = snapshot.val();
            console.log("Parts Data: ", vapeData.parts);
        }
    });
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