@extends('layouts.dashboard')

@section('header')
<style>
    .autocomplete {
  /*the container must be positioned relative:*/
  position: relative;
  display: inline-block;
}
input {
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px;
}
input[type=text] {
  background-color: #f1f1f1;
  width: 100%;
}
input[type=submit] {
  background-color: DodgerBlue;
  color: #fff;
}
.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}
.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}
.autocomplete-items div:hover {
  /*when hovering an item:*/
  background-color: #e9e9e9;
}
.autocomplete-active {
  /*when navigating through the items using the arrow keys:*/
  background-color: DodgerBlue !important;
  color: #ffffff;
}
</style>
@endsection

@section('content')
<div class="row gy-12 g-xl-8">
    <!--begin::Col-->
    <div class="col-xxl-12">
        <!--begin::Table Widget 1-->
        <div class="card">
            <!--begin::Header-->
            <div class="card-header border-0 pt-5 pb-3">
                <!--begin::Card title-->
                <h3 class="card-title fw-bolder fs-2 text-black" style="padding: 7px;">Suggest User</h3>
            </div>
            <div class="row p-3">
                <div class="col-3"><b>User to Suggest</b>
                    <div class="autocomplete" id="fromd">
                        <input type="text" id="from" class="form-control" onChange="fromChange(event)"/>
                    </div>
                </div>
                <div class="col-3"><b>To Followers of</b>
                    <div class="autocomplete" id="fromd">
                        <input type="text" id="to" class="form-control" onChange="toChange(event)"/>
                    </div>
                </div>
                <div class="col-3 d-flex align-items-center"><b>Skip Duplicates</b><input type="checkbox" class="ms-3" name="skip" id="skip" /></div>
                <div class="col-3 d-flex justify-content-end"><button class="btn btn-primary w-75" onclick="send()">Send</button></div>
            </div>
            <div class="row p-3">
                <div class="col-6">
                    <b>Email Subject</b> <input class="form-control" type="text" name="subject" id="subject" />
                </div>
                <div class="col-6" style="font-weight: bold;">
                    <div><span>Followers: </span><span id="followers"></span></div>
                    <div><span>Duplicates: </span><span id="duplicate"></span></div>
                    <div><span>To Message: </span><span id="send"></span></div>
                </div>
            </div>
            <h3 class="p-3"><b>Suggested History</b></h3>
            <div class="customized-scrollbar mb-10" style="max-width: 100% !important;overflow: auto !important;">
                <table class="table table-striped gy-7 gs-7" id="usertable">
                    <thead>
                        <tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                            <th><input id="username" onkeyup="search(event, 'username')" placeholder="Username" class="form-control"></th>
                            <th><input id="followersof" onkeyup="search(event, 'followersof')" placeholder="followersof" class="form-control"></th>
                            <th><input id="subject" onkeyup="search(event, 'subject')" placeholder="Subject" class="form-control"></th>
                            <th>Date Sent</th>
                            <th>No of emails sent</th>
                            <th>No of users skipped</th>
                        </tr>
                    </thead>
                    <tbody id="admins">
                        @foreach ($suggests as $suggest)
                            <tr>
                                <td>{{$suggest->from}}</td>
                                <td>{{$suggest->to}}</td>
                                <td>{{$suggest->subject}}</td>
                                <td>{{$suggest->created_at}}</td>
                                <td>{{$suggest->send}}</td>
                                <td>{{$suggest->skip}}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
    </div>
    <!--end::Col-->
</div>
@endsection
@section('js-file')
<script>
    function toggle(id, action="") {
        let isExecuted = true;
        if (action == 'delete')
            isExecuted = confirm("Are you sure to restore this account?");
        if (isExecuted)
            sendRequest('{{route('admin.toggle')}}', '{{csrf_token()}}', {id, action});
    }
    function verify(id) {
        sendRequest('{{route('admin.verifyUser')}}', '{{csrf_token()}}', {id});
    }
    function remove(id) {
        const isExecuted = confirm("Are you sure to delete this account?");
        if (isExecuted)
            sendRequest('{{route('admin.remove')}}', '{{csrf_token()}}', {id});
    }
    function search(event, field) {
        table = document.getElementById('admins');
        for (let i = 0; i < table.children.length; i++) {
            let content = table.children[i].children[1].innerHTML;
            if (field == 'username') content = table.children[i].children[2].children[0].innerHTML;
            else if (field == 'referr') content = table.children[i].children[3].innerHTML;
            if (content.indexOf(event.target.value) != -1)
                table.children[i].style.display = 'table-row';
            else table.children[i].style.display = 'none';
        }
    }

    function send() {
        const from = $('#from').val();
        const to = $('#to').val();
        const subject = $('#subject').val();
        const duplicate = $('#skip').prop('checked');
        sendRequest("{{route('admin.sendsuggest')}}", "{{csrf_token()}}", {from, to, subject, duplicate: duplicate ? 1 : 0});
    }

    var availableTags = [
      @foreach ($users as $user)
        "{{$user->username}}",
      @endforeach
    ];
    
    function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
        }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
        }
    }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
    }
    autocomplete(document.getElementById("from"), availableTags);
    autocomplete(document.getElementById("to"), availableTags);

    let fromuser, touser;

    function fromChange(event) {
        fromuser = event.target.value;
        getdata();
    }

    function toChange(event) {
        touser = event.target.value;
        getdata();
    }

    function getdata() {
        if (availableTags.indexOf(fromuser) != -1 && availableTags.indexOf(touser) != -1) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': "{{csrf_token()}}"
                }
            });
            $.post("{{route('admin.suggestskip')}}", {fromuser, touser}, function(res) {
                $("#followers").html(res.total);
                $("#duplicate").html(res.total - res.send);
                $("#send").html(res.send);
            });
        }
    }

</script>
@endsection