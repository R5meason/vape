/**
 * Created by Melynda Eason on 11/13/2016.
 */

$( document ).ready(function() {
    retrieveData();
    console.log( "Info Loaded" );
});

var vapeData={};

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

var retrieveData = function() {
    fbRef.ref('juice').on('value', function (snapshot) {
    })
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