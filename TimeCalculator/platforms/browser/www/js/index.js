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

var globalSeconds = 0;

function calculateTime(operation) {
    var seconds = document.getElementById("secondsDD").value;
    var minutes = document.getElementById("minutesDD").value * 60;
    var hours = (document.getElementById("hoursDD").value * 60) * 60;
    var operator = "+";
    var globalHolder = globalSeconds;

    if (operation === "add"){
        globalHolder += (+seconds) + (+minutes) + (+hours);
    } else{
        globalHolder -= ((+seconds) + (+minutes) + (+hours));
        operator = "-"
    }
    
    if(globalHolder < 0){
        alert("No such thing as negative time!");
    }else{
        globalSeconds = globalHolder;
        var totalSeconds = globalSeconds % 60;
        var totalHours = Math.floor(globalSeconds / 3600);
        var totalMinutes = (globalSeconds - totalSeconds - (totalHours * 3600) ) / 60;

        document.getElementById("totalHours").textContent = totalHours;
        document.getElementById("totalMinutes").textContent = totalMinutes;
        document.getElementById("totalSeconds").textContent = totalSeconds;

        var timeString = '<p>' + operator + ' ' + document.getElementById("hoursDD").value + 'hrs : ' + document.getElementById("minutesDD").value + 'mins : ' + document.getElementById("secondsDD").value + 'secs</p>';
        document.getElementById("previousInputs").innerHTML += timeString;
    }
    document.getElementById("secondsDD").value = 0;
    document.getElementById("minutesDD").value = 0;
    document.getElementById("hoursDD").value = 0;
    

};