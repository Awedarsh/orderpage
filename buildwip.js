<script>
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function() 
    {
      var options = 
      {        
            setDefaultDate: true,
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
    var reqInfo = {};
    reqInfo.fn = document.getElementById("fn").value;
    reqInfo.ln = document.getElementById("ln").value;
    reqInfo.leaveType = document.getElementById("leaveType").value;
    reqInfo.sDate = document.getElementById("sDate").value;
    reqInfo.eDate = document.getElementById("eDate").value;
    reqInfo.comments = document.getElementById("comments").value;

    //Call code.js function to feed into google sheet
    google.script.run.addReq(reqInfo);

    //After feeding into google sheet empty the page fileds
    document.getElementById("fn").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("sDate").value = "";
    document.getElementById("eDate").value = "";
    document.getElementById("leaveType").value = "";
    document.getElementById("comments").value = "";
    // M.updateTextFields();
    
    // var myApp = document.getElementById("app");
    // myApp.selectedIndex = 0;
    // M.FormSelect.init(myApp);
}

</script>