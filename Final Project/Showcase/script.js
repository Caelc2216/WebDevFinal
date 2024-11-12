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
                <div class="DelBTN">
                <td>${response[index].use}<button id="${index}BTN">Delete</button></td>
                </div>
                </tr>`;
                
                $('#table').append(spell);
                index++
            }
        })
    });
}
$(`#0BTN`).on('click', function(){
    $(`#0Row`).addClass("d-none");
});
    // for(let i = 0; i < index; i++)
    // {
    //     $(`#${index}BTN`).on('click', function(){
    //         $(`#${index}Row`).addClass("d-none");
    //     });
    // }
