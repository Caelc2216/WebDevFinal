let index = 0;

for (let i = 0; i < 11; i++) {
  $(window).on("load", function () {
    $.ajax({
      url: `https://potterapi-fedeperin.vercel.app/en/spells`,
      method: `GET`,

      success: function (response) {
        let spell = `
                <tr id="${index}Row">
                <td>${response[index].spell}</td>
                <td>${response[index].use}</td><td style = "border-style: none;"><button class="DelBTN" id="${index}BTN">Delete</button><button id="editBTN">Edit</button></td>
                </tr>`;

        $("#table").append(spell);
        index++;
      },
    });
  });
}
$(document).ready(function () {
    $(document).on("click", "#editBTN", function () {
        const row = $(this).closest("tr");
        
        
        const spell = row.find("td:first").text();
        const use = row.find("td:nth-child(2)").text();
        row
        .find("td:first").html(`<input type="text" class="spellEdit" value="${spell}" />`);
        row
        .find("td:nth-child(2)").html(`<input type="text" class= "useEdit" value="${use}"/>`);
        
        row.find("td:nth-child(3)").html(`
            <button id="saveBTN">Save</button>
            <button id="cancelBTN">Cancel</button>
            `);
            
            $('#saveBTN').on('click', function(){
                row.find("td:first").html($('.spellEdit').val());
                row.find("td:nth-child(2)").html($('.useEdit').val());
                row.find("td:nth-child(3)").html('<button class="DelBTN">Delete</button><button id="editBTN">Edit</button>');
                showSuccessMessage();
                function showSuccessMessage() {
                    $('#successEdit').removeClass("d-none");
                    
                    setTimeout(() => {
                        $('#successEdit').addClass("d-none");
                    }, 3000);
                  }
                  
            });

            $('#cancelBTN').on('click', function(){
                row.find("td:first").html(spell);
                row.find("td:nth-child(2)").html(use);
                row.find("td:nth-child(3)").html('<button class="DelBTN">Delete</button><button id="editBTN">Edit</button>');

                showFailureMessage();
                function showFailureMessage() {
                    $('#failureEdit').removeClass("d-none");
                    
                    setTimeout(() => {
                        $('#failureEdit').addClass("d-none");
                    }, 3000);
                  }
                  
            });
        });
    });
    
    $(document).on("click", ".DelBTN", function () {//Thanks ChatGPT
    
      const rowId = $(this).attr("id").replace("BTN", "Row");
      $(`#${rowId}`).addClass("d-none");
    });

$("#searchBar").on("keyup", function () {
  var search = $("#searchBar").val().toLowerCase();
  $("#table tr").each(function () {
    var rowText = $(this).text().toLowerCase();
    if (rowText.includes(search)) {
      $(this).removeClass("d-none");
    } else {
      $(this).addClass("d-none");
    }

    if (search == "" || search == null) {
      $("#table tr").each(function () {
        $(this).not(":first").removeClass("d-none");
      });
    }
  });
});

//From ChatGPT
$("#Name").on("click", function () {
  // Store the names of the spells in an array
  const names = [];

  // Loop through table rows (excluding the header row)
  $("#table tr").each(function () {
    const spellName = $(this).find("td:first").text();
    if (spellName) {
      names.push(spellName); // Collect all spell names
    }
  });

  // Sort the names alphabetically
  names.sort();

  // Fetch all spells from the API
  $.ajax({
    url: "https://potterapi-fedeperin.vercel.app/en/spells",
    method: "GET",
    success: function (response) {
      // Store the rows in an array
      const rows = [];

      // Loop through the sorted spell names
      names.forEach(function (name) {
        // Find the index of the name in the API response
        const spell = response.find(
          (s) => s.spell.toLowerCase() === name.toLowerCase()
        );
        if (spell) {
          // Build the row for this spell
          const row = `
                        <tr>
                            <td>${spell.spell}</td>
                            <td>${spell.use}</td>
                            <td style="border-style: none;">
                                <button class="DelBTN">Delete</button>
                                <button id="editBTN">Edit</button>
                            </td>
                        </tr>`;
          rows.push(row); // Store the row
        }
      });

      // Remove all rows except the header
      $("#table tr").not(":first").remove();

      // Append the rows to the table
      $("#table").append(rows.join(""));
    },
  });
});

$("#Use").on("click", function () {
  const use = [];

  // Collect all "Use" values from the table
  $("#table tr").each(function () {
    const description = $(this).find("td:nth-child(2)").text();
    if (description) {
      use.push(description.trim());
    }
  });

  // Sort the collected values alphabetically
  use.sort();

  // Fetch all spells from the API
  $.ajax({
    url: "https://potterapi-fedeperin.vercel.app/en/spells",
    method: "GET",
    success: function (response) {
      const rows = [];

      // Iterate over sorted "Use" values
      use.forEach(function (useItem) {
        // Find the spell in the API response that matches the "Use"
        const spell = response.find(
          (s) => s.use && s.use.toLowerCase() === useItem.toLowerCase()
        );
        if (spell) {
          // Build the row for this spell
          const row = `
                        <tr>
                            <td>${spell.spell}</td>
                            <td>${spell.use}</td>
                            <td style="border-style: none;">
                                <button class="DelBTN">Delete</button>
                                <button id="editBTN">Edit</button>
                            </td>
                        </tr>`;
          rows.push(row);
        }
      });

      // Clear existing table rows (except the header)
      $("#table tr").not(":first").remove();

      // Append the sorted rows
      $("#table").append(rows.join(""));
    },
  });
});

$('#Add').on('click', function(){
    $('.modal').removeClass("d-none");
});

$('#AddItem').on('click', function(){
    $('.modal').addClass('d-none');
    $('#table').append(
        `<tr>
                            <td>${$('#spellInput').val()}</td>
                            <td>${$('#useInput').val()}</td>
                            <td style="border-style: none;">
                                <button class="DelBTN">Delete</button>
                                <button id="editBTN">Edit</button>
                            </td>
                        </tr>`
    );

    showSuccessMessage();
                function showSuccessMessage() {
                    $('#successAdd').removeClass("d-none");
                    
                    setTimeout(() => {
                        $('#successAdd').addClass("d-none");
                    }, 3000);
                  }


});

$('.cancelBTN').on('click', function(){
    $('.modal').addClass("d-none");
    showFailureMessage();
                function showFailureMessage() {
                    $('#failureAdd').removeClass("d-none");
                    
                    setTimeout(() => {
                        $('#failureAdd').addClass("d-none");
                    }, 3000);
                  }

});
