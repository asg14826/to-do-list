$(() => {
    let x = 0
    let children = []
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
        console.log($('#eleList').children().length);

       if (x>=0){
        const child1 = $('#eleList').children()[0]
        $('#eleList').find(child1).remove()
       console.log(document.getElementById('eleList').children);
        x--
       }
          console.log(x);
    })



})