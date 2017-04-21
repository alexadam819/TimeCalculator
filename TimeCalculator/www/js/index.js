/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
app.initialize();
/*
window.onload = function () {
    var seconds = document.getElementById("secondsDD");
    var minutes = document.getElementById("minutesDD");
    var hours = document.getElementById("hoursDD");

    for (var i = 0; i < 60; i++) {
        var optionNumberSeconds = document.createElement("option");
        optionNumberSeconds.text = i;
        optionNumberSeconds.value = i;
        seconds.add(optionNumberSeconds);

        var optionNumberMinutes = document.createElement("option");
        optionNumberMinutes.text = i;
        optionNumberMinutes.value = i;
        minutes.add(optionNumberMinutes);

        var optionNumberHours = document.createElement("option");
        optionNumberHours.text = i;
        optionNumberHours.value = i;
        hours.add(optionNumberHours);
    }
}
*/
var globalSeconds = 0;
function calculateTime(operation) {
    var seconds = document.getElementById("secondsDD").value;
    var minutes = document.getElementById("minutesDD").value;
    var hours = document.getElementById("hoursDD").value;
    var operator = "+";
    var globalHolder = globalSeconds;
    var timeString = '<p>' + operator + ' ' + document.getElementById("hoursDD").value + ' hrs : ' + document.getElementById("minutesDD").value + ' mins : ' + document.getElementById("secondsDD").value + ' secs</p>';
    console.log(timeString);
    (seconds === "") ? seconds = 0 : seconds = seconds; 
    (minutes === "") ? minutes = 0 : minutes = minutes * 60;
    (hours === "") ? hours = 0 : hours = (hours * 60) * 60;
    
    if (operation === "add") {
        globalHolder += (+seconds) + (+minutes) + (+hours);
    } else{
        globalHolder -= ((+seconds) + (+minutes) + (+hours));
        operator = "-"
    }

    if (globalHolder < 0) {
        alert("No such thing as negative time!");
    } else{
        globalSeconds = globalHolder;
        var totalSeconds = globalSeconds % 60;
        var totalHours = Math.floor(globalSeconds / 3600);
        var totalMinutes = (globalSeconds - totalSeconds - (totalHours * 3600) ) / 60;

        document.getElementById("totalHours").textContent = totalHours;
        document.getElementById("totalMinutes").textContent = totalMinutes;
        document.getElementById("totalSeconds").textContent = totalSeconds;
        document.getElementById("previousInputs").innerHTML += timeString;
    }

    document.getElementById("secondsDD").value = "";
    document.getElementById("minutesDD").value = "";
    document.getElementById("hoursDD").value = "";
};