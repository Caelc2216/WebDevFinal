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

//From ChatGPT
$('#Name').on('click', function () {
    // Store the names of the spells in an array
    const names = [];

    // Loop through table rows (excluding the header row)
    $('#table tr').each(function () {
        const spellName = $(this).find('td:first').text();
        if (spellName) {
            names.push(spellName); // Collect all spell names
        }
    });

    // Sort the names alphabetically
    names.sort();

    // Fetch all spells from the API
    $.ajax({
        url: 'https://potterapi-fedeperin.vercel.app/en/spells',
        method: 'GET',
        success: function (response) {
            // Store the rows in an array
            const rows = [];

            // Loop through the sorted spell names
            names.forEach(function (name) {
                // Find the index of the name in the API response
                const spell = response.find(s => s.spell.toLowerCase() === name.toLowerCase());
                if (spell) {
                    // Build the row for this spell
                    const row = `
                        <tr>
                            <td>${spell.spell}</td>
                            <td>${spell.use}</td>
                            <td style="border-style: none;">
                                <button class="DelBTN">Delete</button>
                            </td>
                        </tr>`;
                    rows.push(row); // Store the row
                }
            });

            // Remove all rows except the header
            $('#table tr').not(':first').remove();

            // Append the rows to the table
            $('#table').append(rows.join(''));
        }
    });
});

$('#Use').on('click', function () {
    const use = [];

    $('#table tr').each(function () {
        const description = $(this).find('td:second').text();
        if (description) {
            use.push(description);
        }
    });

    
    use.sort();


    $.ajax({
        url: 'https://potterapi-fedeperin.vercel.app/en/spells',
        method: 'GET',
        success: function (response) {
            
            const rows = [];

            
            use.forEach(function (use) {
                
                const spell = response.find(s => s.spell.toLowerCase() === use.toLowerCase());
                if (spell) {
                    
                    const row = `
                        <tr>
                            <td>${spell.spell}</td>
                            <td>${spell.use}</td>
                            <td style="border-style: none;">
                                <button class="DelBTN">Delete</button>
                            </td>
                        </tr>`;
                    rows.push(row); 
                }
            });

            
            $('#table tr').not(':first').remove();

            $('#table').append(rows.join(''));
        }
    });
});



