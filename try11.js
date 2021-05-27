<script>
    var reqInfo = {};
      var valMessage = 
      {        
            fn: "First Name is Required",
            ln: "Last Name is Required",
            sDate: "Leave Start Date is Required",
            eDate: "Leave End Date is Required",
            leaveType: "Leave Type is Required"
        };


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function() 
    {
      const options = 
      {        
            setDefaultDate : true,
            autoClose : true,
            showClearBtn: true,
            format : 'dd/mm/yyyy'
        };
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, options);

    });


    document.getElementById("btn").addEventListener("click",btnSubmit);

  
function btnSubmit(){
   //Assign values to Array from Page
  reqInfo = { 
  fn : document.getElementById("fn").value,
  ln : document.getElementById("ln").value,
  leaveType : document.getElementById("leaveType").value,
  sDate : document.getElementById("sDate").value,
  eDate : document.getElementById("eDate").value,
  comments : document.getElementById("comments").value
  }

  var idKeys = Object.keys(valMessage);
  var allValid = true;
  idKeys.forEach(function(id)) {
    if (isEleValid(id,reqInfo[id],valMessage[id])) {
      allValid = false;
    }
  }

  if (allValid()) {
    addRecord();
    M.toast({html: 'Request Submitted!'});
  }
}

//function to check value is entered for Elements if not flast a message
function isEleValid(id,val, message) {
  if (val === "") {
    M.toast({html: message});
    return false;
  } 
  return true;  
}

// function findLabelForEle(el) {
//    var idVal = el;
//    labels = document.getElementsByTagName('label');
//    for( var i = 0; i < labels.length; i++ ) {
//       if (labels[i].htmlFor == idVal)
//            return labels[i];
//    }
// }

function addRecord() {
    //Call code.js function to feed into google sheet
    google.script.run.addReq(reqInfo);

    //After feeding into google sheet empty the page fileds
    document.getElementById("fn").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("sDate").value = "";
    document.getElementById("eDate").value = "";
    document.getElementById("leaveType").value = "";
    document.getElementById("comments").value = "";

}

</script>