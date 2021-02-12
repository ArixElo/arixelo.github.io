function toggleMenu() {
    var element = document.getElementById("menu-ul");
    element.classList.toggle("ul-showing");

    element = document.getElementById("menu-nav");
    element.classList.toggle("nav-showing");

    element = document.getElementById("container-nav");
    element.classList.toggle("container-nav-showing");

    element = document.getElementById("menu-icon");
    element.classList.toggle("menu-icon-opened");
}

function toggleDropdownRom(id) {
    var element = document.getElementById(id);
    element.classList.toggle("expanded-view-showing");
}

let names = ["Xiaomi Mi 9T", "Samsung Galaxy J5 2015", "Xiaomi Redmi Note 4", "Huawei P8/P9 Lite 2017"];
let codenames = ["davinci", "SM-J500F", "mido", ""];
let cpus = ["Octa-core Qualcomm Snapdragon 730", "Qualcomm Snapdragon 410", "Qualcomm Snapdragon 625", "HiSilicon Kirin 655"];
let gpus = ["Adreno 540", "Adreno 306", "Adreno 506", "Mali-T830MP2"];
let memory = ["6 GB / 8 GB", "1.5 GB", "2 GB / 3 GB / 4 GB", "3 GB / 4 GB"];
let shippedsoft = ["Android 9, MIUI 10", "Android 5.1 Lollipop", "Android 6.0 Marshmallow", "Android 7.0 Nougat"];
let storage = ["64 GB / 128 GB", "8 GB", "32 GB / 64 GB", "16 GB / 32 GB"];
let battery = ["4000 mAh", "2600 mAh", "4100 mAh", "3000 mAh"];
let display = ["6.39 inches OLED", "5.00 inch AMOLED", "5.50 inches IPS", "5.20 inches IPS"];

var roms = [
    ["ShapeShiftOS", "Extended-UI", "LegionOS", "AwakenOS", "PixelExtended", "AOSP-Extneded"],
    ["DerpFest / AOSiP"],
    ["DerpFest", "Descendant"],
    ["AICP"]
];


var devicename = document.getElementById("device-name");
var devicecodename = document.getElementById("device-codename");
var devicecpu = document.getElementById("device-cpu");
var devicegpu = document.getElementById("device-gpu");
var devicememory = document.getElementById("device-memory");
var devicesoft = document.getElementById("device-soft");
var devicestorage = document.getElementById("device-storage");
var devicebattery = document.getElementById("device-battery");
var devicedisplay = document.getElementById("device-display");

var downloadsContainer = document.getElementById("device-display");

var model = 1;

swapModel(model);

function swapModel(model) {
    model = model;
    devicename.innerHTML = names[model];
    devicecodename.innerHTML = codenames[model];
    devicecpu.innerHTML = cpus[model];
    devicegpu.innerHTML = gpus[model];
    devicememory.innerHTML = memory[model];
    devicesoft.innerHTML = shippedsoft[model];
    devicestorage.innerHTML = storage[model];
    devicebattery.innerHTML = battery[model];
    devicedisplay.innerHTML = display[model];

    swapRoms(model);
}

// %romname% = rom name  

function swapRoms(model) {

    document.getElementById('downloads').innerHTML = "";

    for (let i = 0; i < roms[model].length; i++) {
        val = '<div class="dropdown-download"><div class="collapsed-view"><div><p class="rom-name-title">rom name:</p><p class="rom-name">%romname%</p></div><button class="dropdown-arrow" onclick="toggleDropdownRom(%iddropdown%)"><img src="src/svg/arrow_down.svg"></button></div><div class="expanded-view" id="%iddropdowndiv%"><div id="shapeshift" class="stats"><h3>Downloads:</h3><h4><span class="ssosTotalDownloads">%totaldownloads%</span></h4><h3>Country with most downloads:</h3><h4><span class="ssosTopGeo">%topgeo%</span><span class="ssosTopGeoPercent"></span></h4><h3>Operating system with most downloads:</h3><h4><span class="ssosTopOs">%topoperatingos%</span><span class="ssosTopOsPercent"></span></h4><h5>Stats updated: <span class="ssosStatsUpdated">%statsupdated%</span></h5></div></div></div>';
        val = val.replace("%romname%", roms[model][i]);
        val = val.replace("%iddropdown%", i);
        val = val.replace("%iddropdowndiv%", i);
    
    
        //%totaldownloads%
    
        //%topgeo%
    
    
        //%topoperatingos%
    
    
        //%statsupdated%
    
        document.getElementById('downloads').innerHTML += val;
    }

}






