$(document).ready(function () {
    var rowEvents = $('#rowEvents')
    $.ajax({
        url: "http://localhost:3000/api",
        success: function (data) {
            $.extend({}, data)
            var events = []

            var html = `<tr id="rowEvents">
                            <td>${$data[i].tanggal}</td>
                            <td>${$data[i].judul}</td>
                            <td>${$data[i].nama}</td>
                            <td>${$data[i].email}</td>
                            <td>
                                <span class="pull-right">
                                    <button class="btn btn-warning" onclick="editEvent(data[i]._id)">Edit</button>
                                    <button class="btn btn-danger" onclick="deleteEvent(data[i]._id)">Delete</button>
                                </span>
                            </td>
                        </tr>`

            for (var i = 0; i < data.length; i++) {
                events.push(html)
            }

            rowEvents.append(events.join(""))
        }
    })
})