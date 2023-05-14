function getSelectedItems() {
  var rows = document.getElementById('admins').children;
  var selectedIds = Array();
  for (i = 0; i < rows.length; i++) {
      var row = rows[i];
      if (row.children[0].children[0].checked)
          selectedIds.push(Number(row.children[1].innerHTML));
  }
  return selectedIds;
}

function sendRequest(url, token, payload, reload=true) {
  $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': token
    }
  });
  $.post(url, payload, function(res) {
      if (res=="success" && reload)
          location.reload();
      if (res != "success")
          alert('something went wrong');
  });
}
