
    function roll() {
//        var moment=require("moment");
     //attack and defense strength validation and value selection
//      if(document.getElementById("attackStrength").value==""){
//        document.getElementById("attackStrength").style.backgroundColor='red';
//      }
//      if(document.getElementById("defenseStrength").value==""){
//      document.getElementById("defenseStrength").style.backgroundColor='red';
//      }
      var attackStrength = document.odds.attackStrength.value;
      var defenseStrength = document.odds.defenseStrength.value;
      
//      //attack and defense action rating validation and value selection
//      if(document.getElementById("attackRating").value==""){
//        document.getElementById("attackRating").style.backgroundColor='red';
//      }
//      if(document.getElementById("defenseRating").value==""){
//      document.getElementById("defenseRating").style.backgroundColor='red';
//      }
      var attackRating = document.actionRating.attackRating.value;
      var defenseRating = document.actionRating.defenseRating.value;
      
      //terrain Density validation and value selection
        var terrainDensity = document.getElementById("terrainDensity").value;
//      var terrainDensity = "";
//         var len = document.frmOne.terrainDensity.length;
//      console.log(len);
// var i;
//      for (i=0;i<len;i++){
//        if (document.frmOne.terrainDensity[i].checked){
//          terrainDensity= document.frmOne.terrainDensity[i].value;
//          break;
//        }
//      }
//      
//      if (terrainDensity==""){
//        document.getElementById("radio_error").innerHTML = "No Terrain Density Selected";
//        //return false;
//      }
//      else {
//        document.getElementById("radio_error").innerHTML = "";
//        //return true;
//      }
      //determine raw odds
      var rawOdds= attackStrength/defenseStrength;
      var roundDownOdds=Math.floor(rawOdds);
      console.log(roundDownOdds);
      //determine drm
      var drm=attackRating-defenseRating;
      //this section determines attack type and therefore surprise type
      var surpriseType= "";
        if (document.getElementById("overRun").value == ra ) {
            surpriseType="regularAttack"
        } else {
            surpriseType= "overRunAttack"
        };
        
            
//      var len = document.overRun.attackType.length;
// var i;
//      for (i=0;i<len;i++){
//        if (document.overRun.attackType[i].checked){
//          surpriseType= document.overRun.attackType[i].value;
//          break;
//        }
//      }
      //determine if surprise occurs... this needs some doublechecking probably
      var surpriseRoll=Math.floor(1+(12*Math.random()))+drm;
      
      var surpriseColumnShift = 0;
      if (surpriseType="regularAttack"){
      if (surpriseRoll>9){
        var surpriseColumnShift = Math.floor(1+(6*Math.random()));
      }
        else if (surpriseRoll <6){
          var surpriseColumnShift = -1*Math.floor(1+(6*Math.random()));
      }
      }
      else {
        if (surpriseRoll >=9){
          var surpriseColumnShift = Math.floor(1+(6*Math.random()));
      }
        else if (surpriseRoll <=6){
          var surpriseColumnShift = -1*Math.floor(1+(6*Math.random()));
      }
        else {
         surpriseColumnShift=0;
        }
      }
      console.log(surpriseRoll)
      console.log(surpriseColumnShift);
      //build combat table (better way to do this?)
       var ra= [ "AL2", "AL1Ao1", "AL1Ao1 Do1", "AL1 Do1", "Ao1 Do1", "Ao1 DL1Do1", "Ao1 Ae4 DL1Do2", "Ae4 DL1Do2", "Ae3 DL2Do2DG", "Ae2 DL2Do3DG"];
            var columnLength=15;
      //oddscolumn1
            var oddsColumn1 = [];
      
      for (i=0;i<6;i++){
      oddsColumn1.push(ra[0]);
      }
      for (i=0;i<2;i++){
        oddsColumn1.push(ra[1]);
      }
      for (i=0;i<4;i++){
        oddsColumn1.push(ra[2]);
      }
      for (i=0;i<2;i++){
        oddsColumn1.push(ra[4]);
      }
      for (i=0;i<1;i++){
        oddsColumn1.push(ra[5]);
      }
      //test
     // for (i=0;i<oddsColumn1.length;i++){
      //console.log(oddsColumn1[i]);
      //}
       //oddscolumn2
            var oddsColumn2 = [];
      
      for (i=0;i<6;i++){
      oddsColumn2.push(ra[0]);
      }
      for (i=0;i<1;i++){
        oddsColumn2.push(ra[1]);
      }
      for (i=0;i<3;i++){
        oddsColumn2.push(ra[2]);
      }
      for (i=0;i<1;i++){
        oddsColumn2.push(ra[3]);
      }
      for (i=0;i<2;i++){
        oddsColumn2.push(ra[4]);
      }
      for (i=0;i<2;i++){
        oddsColumn2.push(ra[5]);
      }
      //oddscolumn3
            var oddsColumn3 = [];
      
      for (i=0;i<5;i++){
      oddsColumn3.push(ra[0]);
      }
      for (i=0;i<1;i++){
        oddsColumn3.push(ra[1]);
      }
      for (i=0;i<3;i++){
        oddsColumn3.push(ra[2]);
      }
      for (i=0;i<1;i++){
        oddsColumn3.push(ra[3]);
      }
      for (i=0;i<2;i++){
        oddsColumn3.push(ra[4]);
      }
      for (i=0;i<2;i++){
        oddsColumn3.push(ra[5]);
      }
      for (i=0;i<1;i++){
        oddsColumn3.push(ra[6]);
      }
      //oddscolumn4
            var oddsColumn4 = [];
      
      for (i=0;i<4;i++){
      oddsColumn4.push(ra[0]);
      }
      for (i=0;i<1;i++){
        oddsColumn4.push(ra[1]);
      }
      for (i=0;i<3;i++){
        oddsColumn4.push(ra[2]);
      }
      for (i=0;i<1;i++){
        oddsColumn4.push(ra[3]);
      }
      for (i=0;i<2;i++){
        oddsColumn4.push(ra[4]);
      }
      for (i=0;i<2;i++){
        oddsColumn4.push(ra[5]);
      }
      for (i=0;i<2;i++){
        oddsColumn4.push(ra[6]);
      }
      //oddscolumn5
            var oddsColumn5 = [];
      
      for (i=0;i<3;i++){
      oddsColumn5.push(ra[0]);
      }
      for (i=0;i<1;i++){
        oddsColumn5.push(ra[1]);
      }
      for (i=0;i<3;i++){
        oddsColumn5.push(ra[2]);
      }
      for (i=0;i<1;i++){
        oddsColumn5.push(ra[3]);
      }
      for (i=0;i<2;i++){
        oddsColumn5.push(ra[4]);
      }
      for (i=0;i<3;i++){
        oddsColumn5.push(ra[5]);
      }
      for (i=0;i<2;i++){
        oddsColumn5.push(ra[6]);
      }
      //oddscolumn6
            var oddsColumn6 = [];
      
      for (i=0;i<2;i++){
      oddsColumn6.push(ra[0]);
      }
      for (i=0;i<1;i++){
        oddsColumn6.push(ra[1]);
      }
      for (i=0;i<2;i++){
        oddsColumn6.push(ra[2]);
      }
      for (i=0;i<2;i++){
        oddsColumn6.push(ra[3]);
      }
      for (i=0;i<2;i++){
        oddsColumn6.push(ra[4]);
      }
      for (i=0;i<3;i++){
        oddsColumn6.push(ra[5]);
      }
      for (i=0;i<2;i++){
        oddsColumn6.push(ra[6]);
      }
      for (i=0;i<1;i++){
        oddsColumn6.push(ra[8]);
      }
      //oddscolumn7
            var oddsColumn7 = [];
      
      for (i=0;i<1;i++){
      oddsColumn7.push(ra[0]);
      }
      for (i=0;i<1;i++){
        oddsColumn7.push(ra[1]);
      }
      for (i=0;i<2;i++){
        oddsColumn7.push(ra[2]);
      }
      for (i=0;i<2;i++){
        oddsColumn7.push(ra[3]);
      }
      for (i=0;i<1;i++){
        oddsColumn7.push(ra[4]);
      }
      for (i=0;i<4;i++){
        oddsColumn7.push(ra[5]);
      }
      for (i=0;i<1;i++){
        oddsColumn7.push(ra[6]);
      }
      for (i=0;i<1;i++){
        oddsColumn7.push(ra[7]);
      }
      for (i=0;i<2;i++){
        oddsColumn7.push(ra[8]);
      }
      //oddscolumn8
            var oddsColumn8 = [];
      
      
      for (i=0;i<1;i++){
        oddsColumn8.push(ra[1]);
      }
      for (i=0;i<2;i++){
        oddsColumn8.push(ra[2]);
      }
      for (i=0;i<2;i++){
        oddsColumn8.push(ra[3]);
      }
      for (i=0;i<1;i++){
        oddsColumn8.push(ra[4]);
      }
      for (i=0;i<3;i++){
        oddsColumn8.push(ra[5]);
      }
      for (i=0;i<1;i++){
        oddsColumn8.push(ra[6]);
      }
      for (i=0;i<2;i++){
        oddsColumn8.push(ra[7]);
      }
      for (i=0;i<2;i++){
        oddsColumn8.push(ra[8]);
      }
      for (i=0;i<1;i++){
        oddsColumn8.push(ra[9]);
      }
      //oddscolumn9
            var oddsColumn9 = [];
            
      
      for (i=0;i<2;i++){
        oddsColumn9.push(ra[2]);
      }
      for (i=0;i<2;i++){
        oddsColumn9.push(ra[3]);
      }
      for (i=0;i<1;i++){
        oddsColumn9.push(ra[4]);
      }
      for (i=0;i<3;i++){
        oddsColumn9.push(ra[5]);
      }
      for (i=0;i<1;i++){
        oddsColumn9.push(ra[6]);
      }
      for (i=0;i<2;i++){
        oddsColumn9.push(ra[7]);
      }
      for (i=0;i<3;i++){
        oddsColumn9.push(ra[8]);
      }
      for (i=0;i<1;i++){
        oddsColumn9.push(ra[9]);
      }
      //oddscolumn10
            var oddsColumn10 = [];
            
      
      for (i=0;i<1;i++){
        oddsColumn10.push(ra[2]);
      }
      for (i=0;i<2;i++){
        oddsColumn10.push(ra[3]);
      }
      for (i=0;i<1;i++){
        oddsColumn10.push(ra[4]);
      }
      for (i=0;i<3;i++){
        oddsColumn10.push(ra[5]);
      }
      for (i=0;i<1;i++){
        oddsColumn10.push(ra[6]);
      }
      for (i=0;i<2;i++){
        oddsColumn10.push(ra[7]);
      }
      for (i=0;i<3;i++){
        oddsColumn10.push(ra[8]);
      }
      for (i=0;i<2;i++){
        oddsColumn10.push(ra[9]);
      }
      //oddscolumn11
            var oddsColumn11 = [];
         
      for (i=0;i<2;i++){
        oddsColumn11.push(ra[3]);
      }
      for (i=0;i<4;i++){
        oddsColumn11.push(ra[5]);
      }
      for (i=0;i<1;i++){
        oddsColumn11.push(ra[6]);
      }
      for (i=0;i<2;i++){
        oddsColumn11.push(ra[7]);
      }
      for (i=0;i<3;i++){
        oddsColumn11.push(ra[8]);
      }
      for (i=0;i<3;i++){
        oddsColumn11.push(ra[9]);
      }
       //oddscolumn12
            var oddsColumn12 = [];
         
      for (i=0;i<1;i++){
        oddsColumn12.push(ra[3]);
      }
      for (i=0;i<3;i++){
        oddsColumn12.push(ra[5]);
      }
      for (i=0;i<1;i++){
        oddsColumn12.push(ra[6]);
      }
      for (i=0;i<3;i++){
        oddsColumn12.push(ra[7]);
      }
      for (i=0;i<3;i++){
        oddsColumn12.push(ra[8]);
      }
      for (i=0;i<4;i++){
        oddsColumn12.push(ra[9]);
      }
      //oddscolumn13
            var oddsColumn13 = [];
         
      for (i=0;i<1;i++){
        oddsColumn13.push("AL1 DL1o1");
      }
      for (i=0;i<2;i++){
        oddsColumn13.push(ra[5]);
      }
      for (i=0;i<1;i++){
        oddsColumn13.push(ra[6]);
      }
      for (i=0;i<2;i++){
        oddsColumn13.push(ra[7]);
      }
      for (i=0;i<3;i++){
        oddsColumn13.push(ra[8]);
      }
      for (i=0;i<6;i++){
        oddsColumn13.push(ra[9]);
      }
      
      
      //console.log(drm)
     // window.alert(rawOdds\n"actionRating"\n drm);
     //Choose which column the combat applies to
      var rawColumn = [];
      var combatResultsTable = oddsColumn1.concat( oddsColumn2, oddsColumn3, oddsColumn4, oddsColumn5, oddsColumn6, oddsColumn7, oddsColumn8, oddsColumn9, oddsColumn10, oddsColumn11, oddsColumn12, oddsColumn13);
      console.log(rawOdds);
      console.log(terrainDensity);
      if (terrainDensity==="Open"){
        if (rawOdds>= 13){
           rawColumn = 12
      } else if (rawOdds>= 11){
           rawColumn = 11
      } else if (rawOdds>= 9){
           rawColumn = 10
      } else if (rawOdds>= 7){
           rawColumn = 9
      } else if (rawOdds>= 5){
           rawColumn = 8
      } else if (rawOdds>= 4){
           rawColumn = 7
      } else if (rawOdds>= 3){
           rawColumn = 6
      } else if (rawOdds>= 2){
           rawColumn = 5
      } else if (rawOdds>= 1){
           rawColumn = 4
      } else if (rawOdds>= .5){
           rawColumn = 3
      } else if (rawOdds>= .333332){
           rawColumn = 2
      } else if (rawOdds>= .25){
           rawColumn = 1
      } else {
           rawColumn = 0;
       }}
      else if (terrainDensity === "Close"){
        if (rawOdds>= 18){
           rawColumn = 12
      } else if (rawOdds>= 15){
           rawColumn = 11
      } else if (rawOdds>= 12){
           rawColumn = 10
      } else if (rawOdds>= 10){
           rawColumn = 9
      } else if (rawOdds>= 8){
           rawColumn = 8
      } else if (rawOdds>= 6){
           rawColumn = 7
      } else if (rawOdds>= 4){
           rawColumn = 6
      } else if (rawOdds>= 3){
           rawColumn = 5
      } else if (rawOdds>= 2){
           rawColumn = 4
      } else if (rawOdds>= 1){
           rawColumn = 3
      } else if (rawOdds>= .5){
           rawColumn = 2
      } else if (rawOdds>= .3333332){
           rawColumn = 1
      } else {
           rawColumn = 0;
       }
      }
       else if (terrainDensity === "Very_Close"){
       if (rawOdds>= 24){
           rawColumn = 12
      } else if (rawOdds>= 21){
           rawColumn = 11
      } else if (rawOdds>= 18){
           rawColumn = 10
      } else if (rawOdds>= 15){
           rawColumn = 9
      } else if (rawOdds>= 12){
           rawColumn = 8
      } else if (rawOdds>= 9){
           rawColumn = 7
      } else if (rawOdds>= 6){
           rawColumn = 6
      } else if (rawOdds>= 4){
           rawColumn = 5
      } else if (rawOdds>= 3){
           rawColumn = 4
      } else if (rawOdds>= 2){
           rawColumn = 3
      } else if (rawOdds>= 1){
           rawColumn = 2
      } else if (rawOdds>= .5){
           rawColumn = 1
      } else {
           rawColumn = 0;
       }
      }
    
       else if (terrainDensity === "Extremely_Close"){
        if (rawOdds>= 52){
           rawColumn = 12
      } else if (rawOdds>= 44){
           rawColumn = 11
      } else if (rawOdds>= 36){
           rawColumn = 10
      } else if (rawOdds>= 28){
           rawColumn = 9
      } else if (rawOdds>= 20){
           rawColumn = 8
      } else if (rawOdds>= 16){
           rawColumn = 7
      } else if (rawOdds>= 12){
           rawColumn = 6
      } else if (rawOdds>= 8){
           rawColumn = 5
      } else if (rawOdds>= 4){
           rawColumn = 4
      } else if (rawOdds>= 3){
           rawColumn = 3
      } else if (rawOdds>= 2){
           rawColumn = 2
      } else if (rawOdds>= 1){
           rawColumn = 1
      } else {
           rawColumn = 0;
       }
      }
    //this line may not be necessary
     // else {window.alert("No Terrain Density Selected!!")}
      //console.log(rawColumn);
      //The resulting column after odds/terrain determination and surprise shift
      
      var correctedColumn = rawColumn+surpriseColumnShift;
      if (correctedColumn > 12 ){
        correctedColumn=12;
      }
      if (correctedColumn < 0 ){
        correctedColumn=0;
      }
     //actual combat die roll
      var combatRoll=(1+Math.floor(Math.random()*12));
      console.log(combatRoll);
      var combatResult= ""
      var correctedDieRoll = combatRoll+drm;
      if (correctedDieRoll>15){
        correctedDieRoll = 15;
      }
      if (correctedDieRoll<1){
        correctedDieRoll = 1;
      }
      //modify the die roll with the drm, correct column, and -1 for array naming convention
      var modifiedRoll=correctedColumn*15+correctedDieRoll-1;
      combatResult = combatResultsTable[modifiedRoll];
console.log(combatResult)
//Just so the user sees the "right" column, not the numerically correct one
var combatColumnForReturn = correctedColumn + 1;
	  var combatName=document.getElementById('attackID').value;
	  var combatDesc=document.getElementById('attackDescription').value;
	  var email1=document.getElementById('email').value;
	  var email2=document.getElementById('email2').value;
        var countAL1 = countResult(combatResult, "AL1");
        var countAL2 = countResult(combatResult, "AL2");
         var countDL1 = countResult(combatResult, "DL1");
         var countDL2 = countResult(combatResult, "DL2");
         var countAo1 = countResult(combatResult, "Ao1");
         var countAo2 = countResult(combatResult, "Ao2");
         var countDo1 = countResult(combatResult, "Do1");
          var countDo2 = countResult(combatResult, "Do2");
          var countDo3 = countResult(combatResult, "Do3");
          var countAe2 = countResult(combatResult, "Ae2");
          var countAe3 = countResult(combatResult, "Ae3");
          var countAe4 = countResult(combatResult, "Ae4");
        
//        var now=moment().format();
      newRoll= {
          
    "rollTitle": combatName,
    "rollDesc": combatDesc,
    "attackType":surpriseType,
    "terrainType":terrainDensity,
    "attackStrength":attackStrength,
    "attackCR":attackRating,
    "defenseStrength": defenseStrength,
    "defenseCR": defenseRating,
    "turnNum" :document.getElementById('turn').value,
    "rawDie" :combatResult,
    "AL1" : countAL1,
    "AL2" : countAL2,
    "Ao1" : countAo1,
    "Ao2" : countAo2,     
    "DL1" : countDL1,
    "DL2" : countDL2,
    "Do1" : countDo1,
    "Do2" : countDo2,
    "Do3" : countDo3,
    "Ae2" : countAe2,
    "Ae3" : countAe3,
    "Ae4" : countAe4,     
//    createdOn:now  
      }
//  currentAttack=newRoll;
         
//            $("#attack_info").load("/dynamic/attackResults.ejs");
        $("#combat_output").text(combatName+ "" +combatDesc+ " Email logs of this combat have been sent to:" + email1 + " and " + email2 +"The results of this combat:" + combatResult + "The odds were " + rawOdds+ ":1 in " + terrainDensity + " terrain " + " The drm-modified surprise roll was " + surpriseRoll + " with a resulting column shift of " + surpriseColumnShift + "The combat die roll result was " + combatRoll + " The drm was " + drm  + " Resulting in a modified roll of " + correctedDieRoll + " on the " + combatColumnForReturn + " column of the Combat Results Table ") 
        console.log(JSON.stringify(newRoll));
        document.getElementById("combatOutputJSON").value=JSON.stringify(newRoll);
        console.log(document.getElementById("combatOutputJSON").value)
        
        
//        $("#combat_output").text(+combatName+ "" +combatDesc+ " Email logs of this combat have been sent to:" + email1 + " and " + email2 +"The results of this combat:" + combatResult + "The odds were " + rawOdds+ ":1 in " + terrainDensity + " terrain " + " The drm-modified surprise roll was " + surpriseRoll + " with a resulting column shift of " + surpriseColumnShift + "The combat die roll result was " + combatRoll + " The drm was " + drm  + " Resulting in a modified roll of " + correctedDieRoll + " on the " + combatColumnForReturn + " column of the Combat Results Table ");
    
//	  document.getElementById("combat_output").text()= ("<p>"+combatName+ "</p> <p>" +combatDesc+ "</p> <p> Email logs of this combat have been sent to:" + email1 + " and " + email2 +"</p> <p>The results of this combat:" + combatResult + "</p>" + "<p>The odds were " + rawOdds+ ":1 in " + terrainDensity + " terrain </p>" + " <p> The drm-modified surprise roll was " + surpriseRoll + " with a resulting column shift of " + surpriseColumnShift + "</p>" + "<p>The combat die roll result was " + combatRoll + "</p>"+"<p> The drm was " + drm  + " Resulting in a modified roll of " + correctedDieRoll + " on the " + combatColumnForReturn + " column of the Combat Results Table </p>");
//        callback();
        return newRoll;
//};

// module.exports = roll;
 /*jquery*/
// 
 function countResult(input, query) {
    var count = new RegExp(query, "gi")
     return (input.match(count) || []).length;
 };
        
    }
//   module.exports=roll();  