
//------------------GET EVENT START---------------------
$(document).ready(function () {
    var tableEvents = $('#tableEvents')
    $.ajax({
        url: "http://localhost:3000/api",
        success: function (data) {
            $.extend({}, data)
            var events = []

            for (var i = 0; i < data.length; i++) {
                var html = `<tr id="rowEvents${data[i]._id}">
                            <td>${data[i].tanggal}</td>
                            <td>${data[i].judul}</td>
                            <td>${data[i].nama}</td>
                            <td>${data[i].email}</td>
                            <td>
                                <span>
                                    <!--<button class="btn btn-warning" onclick="editEvent(data[i]._id)">Edit</button>-->
                                    <button class="btn btn-danger" onclick="deleteEvent('${data[i]._id}', '${data[i].judul}')">Delete</button>
                                </span>
                            </td>
                        </tr>`
                events.push(html)
            }

            tableEvents.append(events.join(""))
        }
    })
})

//------------------GET EVENT END---------------------


//------------------ADD EVENT START---------------------
$(document).on('click', 'button[name="createEvent"]', function (e) {
    e.preventDefault()
    addEventFromAPI(
        $('input[name="tanggal"]').val(),
        $('input[name="judul"]').val(),
        $('input[name="nama"]').val(),
        $('input[name="email"]').val()
    )
})

function addEventFromAPI(tanggal, judul, nama, email) {
    $.ajax({
        url: `http://localhost:3000/api/event/create`,
        method: "post",
        contentType: "application/x-www-form-urlencoded",
        data: {
            tanggal: tanggal,
            judul: judul,
            nama: nama,
            email: email
        },
        success: function (data) {
            updateRowAfterInsert(data)
        }
    })
}

function updateRowAfterInsert(data) {
    var html = `<tr id="rowEvents${data._id}">
                            <td>${data.tanggal}</td>
                            <td>${data.judul}</td>
                            <td>${data.nama}</td>
                            <td>${data.email}</td>
                            <td>
                                <span>
                                    <!--<button class="btn btn-warning" onclick="editEvent(data._id)">Edit</button>-->
                                    <button class="btn btn-danger" onclick="deleteEvent(${data._id}, ${data.judul})">Delete</button>
                                </span>
                            </td>
                        </tr>`

    $('tbody:last').append(html)
    $('input[name="tanggal"]').val("")
    $('input[name="judul"]').val("")
    $('input[name="nama"]').val("")
    $('input[name="email"]').val("")
}
//------------------ADD EVENT END---------------------


//------------------DELETE EVENT START---------------------
function deleteEvent(id, judul) {
    var deleteConfirm = confirm(`Apakah anda ingin menghapus judul ${judul}`)
    if (deleteConfirm) {
        deleteEventFromAPI(id, judul)
    }
}

function deleteEventFromAPI(id, judul) {
    var temp = id
    $.ajax({
        url: `http://localhost:3000/api/event/delete/${id}`,
        method: "delete",
        contentType: 'application/x-www-form-urlencoded',
        data: id,
        success: function () {
            updateRowAfterDelete(temp, judul)
        }
    })

    function updateRowAfterDelete(id, judul) {
        $('tbody').find(`#rowEvents${id}`).remove()
        $('input[name="tanggal"]').val("")
        $('input[name="judul"]').val("")
        $('input[name="nama"]').val("")
        $('input[name="email"]').val("")
    }

}
//------------------DELETE EVENT END---------------------