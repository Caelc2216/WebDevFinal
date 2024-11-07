let index = 0;

for(let i = 0; i < 10; i++)
{

    $(window).on('load', function(){
        $.ajax({
            url: `https://potterapi-fedeperin.vercel.app/en/spells`,
            method: `GET`,
            
            success: function(response) {
                let spell = `
                <tr>
                <td>${response[index].spell}</td>
                <td>${response[index].use}</td>
                </tr>`;
                
                $('#table').append(spell);
                index++
            }
        })
    });
}