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

    
    console.log(dataType[model][id]);

    if(dataType[model][id] == 0) {
        $.getJSON(romLinks[model][id], function(stats) {
            element = document.getElementById("%totaldownloadsid%" + id).innerHTML = stats.total;
    
            element = document.getElementById("%topgeoid%" + id).innerHTML = stats.summaries.geo.top;
    
            element = document.getElementById("%topoperatingosid%" + id).innerHTML = stats.summaries.os.top;
    
            element = document.getElementById("%statsupdatedid%" + id).innerHTML = stats.stats_updated;
    
        });
    }

}

let names = ["Xiaomi Mi 9T", "Samsung Galaxy J5 2015", "Xiaomi Redmi Note 4", "Huawei P8/P9 Lite 2017"];
let codenames = ["davinci", "j5nlte", "mido", "prague/hi6250"];
let cpus = ["Qualcomm Snapdragon 730, SDM730", "Qualcomm Snapdragon 410, MSM8916", "Qualcomm Snapdragon 625, MSM8953", "HiSilicon Kirin 655, Hi6250"];
let gpus = ["Adreno 618", "Adreno 306", "Adreno 506", "Mali-T830MP2"];
let memory = ["6 GB", "1.5 GB", "2 GB / 3 GB / 4 GB", "3 GB / 4 GB"];
let shippedsoft = ["Android 9, MIUI 10", "Android 5.1 Lollipop, TouchWiz", "Android 6.0 Marshmallow, MIUI 8", "Android 7.0 Nougat, EMUI 5"];
let storage = ["64 GB / 128 GB", "8 GB", "32 GB / 64 GB", "16 GB / 32 GB"];
let battery = ["4000 mAh", "2600 mAh", "4100 mAh", "3000 mAh"];
let display = ["6.39 inches AMOLED", "5.00 inches AMOLED", "5.50 inches IPS", "5.20 inches IPS"];
let images = ["src/img/davinci.png", "src/img/j5nlte.png", "src/img/mido.png", "src/img/prague.png"];

var roms = [
    ["ShapeShiftOS", "Extended-UI", "LegionOS", "AwakenOS", "PixelExtended", "AOSP-Extended"],
    ["DerpFest / AOSiP"],
    ["DerpFest", "Descendant"],
    ["AICP"]
];

// 0 = sf
// 1 = non sf
var dataType = [
    [0, 1, 1, 1, 1, 1],
    [1],
    [1, 1],
    [1]
];

var romLinks = [
    ["https://sourceforge.net/projects/shapeshiftos/files/davinci/stats/json?start_date=2000-01-01&end_date=2099-01-01", "Extended-UI", "LegionOS", "AwakenOS", "PixelExtended", "AOSP-Extneded"],
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
var deviceimage = document.getElementById("device-image");

var downloadsContainer = document.getElementById("device-display");

var model = 0;

if ($(document).width() > 1200) toggleMenu();

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var downloads = document.querySelector("#downloads");
var maincontent = document.querySelector(".main-content");

document.addEventListener('scroll', function () {
    const scrollTarget = isInViewport(downloads) ?
        maincontent :
        downloads;

    $(".arrow-down").on('click', function(event){
        scrollTarget.scrollIntoView({
            behavior: 'smooth'
        });
    }); 
}, {
    passive: true
});

swapModel(model, 1);



function swapModel(number, type = 0) {
    $(window).scrollTop(0);
    if (type==0) {
        if ($(document).width() < 830) toggleMenu();
    }
    model = number;
    devicename.innerHTML = names[model];
    devicecodename.innerHTML = codenames[model];
    devicecpu.innerHTML = cpus[model];
    devicegpu.innerHTML = gpus[model];
    devicememory.innerHTML = memory[model];
    devicesoft.innerHTML = shippedsoft[model];
    devicestorage.innerHTML = storage[model];
    devicebattery.innerHTML = battery[model];
    devicedisplay.innerHTML = display[model];
    deviceimage.src = images[model];
    swapRoms(model);
}

function swapRoms(model) {

    document.getElementById('downloads').innerHTML = "";

    for (let i = 0; i < roms[model].length; i++) {

        val = '<div class="dropdown-download"><div class="collapsed-view" onclick="toggleDropdownRom(%iddropdown%)"><div><p class="rom-name-title">rom name:</p><p class="rom-name">%romname%</p></div><button class="dropdown-arrow"><span class="material-icons">keyboard_arrow_down</span></button></div><div class="expanded-view" id="%iddropdowndiv%"><div id="shapeshift" class="stats"><h3>Downloads:</h3><h4><span class="ssosTotalDownloads" id="%totaldownloadsid%">%totaldownloads%</span></h4><h3>Country with most downloads:</h3><h4><span class="ssosTopGeo" id="%topgeoid%">%topgeo%</span><span class="ssosTopGeoPercent"></span></h4><h3>Operating system with most downloads:</h3><h4><span class="ssosTopOs" id="%topoperatingosid%">%topoperatingos%</span><span class="ssosTopOsPercent"></span></h4><h5>Stats updated: <span class="ssosStatsUpdated" id="%statsupdatedid%">%statsupdated%</span></h5><a href="https://sourceforge.net/projects/shapeshiftos/files/davinci/" class="download-button">Download</a></div></div></div>';
        val = val.replace("%romname%", roms[model][i]);
        val = val.replace("%iddropdown%", i);
        val = val.replace("%totaldownloadsid%", "%totaldownloadsid%" + i);
        val = val.replace("%iddropdowndiv%", i);
        val = val.replace("%topgeoid%", "%topgeoid%" + i);
        val = val.replace("%topoperatingosid%", "%topoperatingosid%" + i);
        val = val.replace("%statsupdatedid%", "%statsupdatedid%" + i);

        //%linkk% = download link;

        document.getElementById('downloads').innerHTML += val;
    }

}

// DARK MODE

const root = document.querySelector(':root');
let mode = window.matchMedia('(prefers-color-scheme: dark)');
let modeSwitch = document.getElementById("dark-mode-switch");

// Set colors
function setColors() {
    if (modeSwitch.innerHTML === "dark_mode") {
        root.style.setProperty('--background', 'rgb(24, 26, 27)');
        root.style.setProperty('--foreground', 'rgb(32, 35, 37)');
        root.style.setProperty('--font', "rgb(202, 198, 191)");
        root.style.setProperty('--white', "#000");
    } else if (modeSwitch.innerHTML === "light_mode") {
        root.style.setProperty('--background', "#fff");
        root.style.setProperty('--foreground', "rgb(240,240,240)");
        root.style.setProperty('--font', "#282a36");
        root.style.setProperty('--white', "#fff");
    }
}
setColors();

// Allow user to change mode via switch
function toggle() {
    if (modeSwitch.innerHTML === "light_mode") {
        modeSwitch.innerHTML = "dark_mode";
    } else if (modeSwitch.innerHTML === "dark_mode") {
        modeSwitch.innerHTML = "light_mode";
    }
    setColors();
}

// Set mode to either dark or light based of user OS preference
function readMode() {
    if (mode.matches === true ) {
        modeSwitch.innerHTML = "dark_mode";
    } else {
        modeSwitch.innerHTML = "light_mode";
    }
    setColors();
}

readMode();

mode.addListener(readMode);
