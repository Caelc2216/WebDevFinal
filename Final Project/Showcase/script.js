let index = 0;

for(let i = 0; i < 10; i++)
{

    $(window).on('load', function(){
        $.ajax({
            url: `https://potterapi-fedeperin.vercel.app/en/spells`,
            method: `GET`,
            
            success: function(response) {
                let spell = `
                <tr id="${index}Row">
                <td>${response[index].spell}</td>
                <td>${response[index].use}</td><td style = "border-style: none;"><button class="DelBTN" id="${index}BTN">Delete</button></td>
                </tr>`;
                
                $('#table').append(spell);
                index++
            }
        })
    });
}
$(document).on('click', '.DelBTN', function() { //Thanks ChatGPT
    
    const rowId = $(this).attr('id').replace('BTN', 'Row');
    $(`#${rowId}`).addClass('d-none');

});

$('#searchBar').on('keyup', function(){
    var search = $('#searchBar').val().toLowerCase();
    $('#table tr').addClass('d-none')
    $(tr.val().toLowerCase().contains(`${search}`)).toggleClass('d-none')

    if(search=="" || search==null)
    {
        $('#table tr').toggleClass('d-none')
    }
});


