$(() => {
    let x = 0
    $('#add').click(function () {
        if ($('#input').val() !== "") {
            x++
        }

        if (x <= 5) {
            let newElement = $(`<p class="newElement"></p>`).text($('#input').val())
            $('#eleList').append(newElement)
            $('#input').val('')
        }
    })
    //allso works with keypress
    $('#input').keypress(function (e) {
        let key = e.which
        if ($('#input').val() !== "" && key == 13 ) {
            x++
        }
        if (x <= 5) {
            if (key == 13 && $('#input').val() !== 0) {
                let newElement = $(`<p class="newElement"></p>`).text($('#input').val())
                $('#eleList').append(newElement)
                $('#input').val('')
            }
        }

    });

    $('#remove').click(function(){
        $('#eleList').remove()
    })



})