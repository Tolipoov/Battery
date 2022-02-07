// Start Code 
navigator.getBattery().then(battery=>{
    var percentage= document.querySelector('.percentage');
    var percent= document.querySelector('.percent');
    var isCharging= document.querySelector('.isCharging');

    function updateAllBatteryInfo(){
        updateChargeInfo();
        updateLevelInfo();
    }
    
    updateAllBatteryInfo();
    
    function updateLevelInfo(){
        percentage.style.width = battery.level * 100 + '%';
        percent.innerHTML=battery.level * 100 + '%';
    }
    function updateChargeInfo(){
        isCharging.innerHTML=battery.charging ? "Your device charging" : "No";
    }
    
    battery.addEventListener('levelchange', () =>{
        updateLevelInfo();
    });
    battery.addEventListener('chargingcharge', () =>{
        updateLevelInfo();
    });
});
// Finish Code 
