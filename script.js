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


var add = function (name, brand, nic, rating, ratio, size, note) {
    // console.log(name, brand, nic, rating, ratio, size, note);
    var data = {
        Name: name,
        Brand: brand,
        Nicotine: nic,
        Rating: rating,
        Ratio: ratio,
        Size: size,
        Notes: note
};
    fbRef.ref('juice').push(data);
    document.getElementById('name').value = "";
    document.getElementById('brand').value = "";
    document.getElementById('nic').value = "";
    document.getElementById('rating').value = "";
    document.getElementById('ratio').value = "";
    document.getElementById('size').value = "";
    document.getElementById('note').value = "";
};
