(()=>{
    let password = prompt('Password:', '');
    if(password !== '') {
        $.ajax({
            url: '/swj2023/read',
            method: 'GET',
            data: {
                password: password
            },
            success: function(response) {
                let tableData = response.data;
                let htmlTable = $("#data-container table");
                let count = 1;
                for(let row of tableData){
                    htmlTable.append(`
                        <tr>
                            <td>${count++}</td>
                            <td>${row[1]}</td>
                            <td><a href="tel:${row[2]}">${row[2]}</a></td>
                            <td><a href="mailto:${row[3]}">${row[3]}</a></td>
                            <td>${row[4]}</td>
                            <td>${row[5]}</td>
                            <td>${row[6]}</td>
                            <td>${row[7]}</td>
                            <td>${row[8]}</td>
                            <td><a href="/swj2023/event/${row[0]}" target="_blank"><i>Click Here</i></a></td>
                        </tr>
                    `)
                }
            }
        });

        $('#download-button').click(function() {
            window.location.href = `${window.location.origin}/swj2023/download?password=${password}`;
        });

        $('#scan-button').click(function() {
            window.location.href = `${window.location.origin}/swj2023/scan?password=${password}`;
        });
    }
})()

















// $.ajax({
    //   url: '/swj2023/create',
    //   method: 'POST',
    //   data: JSON.stringify({
    //       name: 'value1',
    //       mob_num: 'value3',
    //       email: 'value4@gmail.com',
    //       workplace: 'value4',
    //       city: 'value5',
    //       age: 'value6',
    //       gender: 'value7',
    //       transaction_id: 'value7'
    //   }),
    //   success: function(response) {
    //     // Code to handle successful response
    //     console.log(response);
    //   },
    //   error: function(xhr) {
    //     // Code to handle error
    //     console.log(xhr.responseText);
    //   }
    // });