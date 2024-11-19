let index = 0;

for(let i = 0; i < 11; i++)
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
    $('#table tr').each(function (){

        var rowText = $(this).text().toLowerCase();
        if (rowText.includes(search)) {
            $(this).removeClass('d-none');
        } else {
            $(this).addClass('d-none');
        }
        
        if(search=="" || search==null)
            {
                $('#table tr').each(function(){
                    $(this).removeClass('d-none');
                });
            }
        });
});

$('#Name').on('click', function(){
    const names = [];
    $('#table tr').each(function(){
        const spellName= $(this).find('td:first').text();
        names.push($(spellName));
    });
    names.sort();
    $('#table tr').each(function(){
        $(this).remove();
    });

    for(let i = 0; i < 11; i++)
    {
        const index = $.inArray(names[i], names);
        let spell = `
                <tr id="${index}Row">
                <td>${[index].spell}</td>
                <td>${[index].use}</td><td style = "border-style: none;"><button class="DelBTN" id="${index}BTN">Delete</button></td>
                </tr>`;
                
                $('#table').append(spell);
    }

});


