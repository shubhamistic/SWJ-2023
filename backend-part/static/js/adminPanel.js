(()=>{
    let password = getPasswordFromCookie();
    if (!password){
        password = prompt('Password:', '');
    }
    displayData(password);

    function displayData(password) {
        if (password !== '') {
            $.ajax({
                url: '/swj2023/read-records',
                method: 'GET',
                data: {
                    password: password
                },
                success: function (response) {
                    setPasswordCookie(password);
                    let tableData = response;
                    let htmlTable = $("#data-container table");
                    let count = 1;
                    for (let row of tableData) {
                        let mailStatus = "Undelivered";
                        let mailStatusColor = "red";
                        if (row[10]) {
                            mailStatus = "Delivered";
                            mailStatusColor = "green";
                        }

                        let paymentStatus = "Approve";
                        let paymentStatusClass = "payment-not-approved";
                        if (row[11]) {
                            paymentStatus = "Approved";
                            paymentStatusClass = "payment-approved";
                        }

                        htmlTable.append(`
                            <tr>
                                <td>${row[0]}</td>
                                <td>${row[1]}</td>
                                <td>${row[2]}</td>
                                <td><a href="tel:${row[3]}">${row[3]}</a></td>
                                <td><a href="mailto:${row[4]}">${row[4]}</a></td>
                                <td>${row[5]}</td>
                                <td>${row[6]}</td>
                                <td>${row[7]}</td>
                                <td>${row[8]}</td>
                                <td><a href="file/Tss/${row[9]}" target="_blank">${row[9]}</a></td>
                                <td style="color: ${mailStatusColor}">${mailStatus}</td>
                                <td
                                    class="payment-button ${paymentStatusClass}"
                                    id="pb-${row[0]}"
                                >
                                    ${paymentStatus}
                                </td>
                            </tr>
                        `)
                    }

                    // handle set payment status button
                    $(".payment-button").on("click", function() {
                        // Get the ID of the clicked element
                        const button_id = $(this).attr("id");
                        const record_id = button_id.slice(3);

                        $.ajax({
                            url: `/swj2023/toggle-payment-status?id=${record_id}`,
                            method: 'POST',
                            data: {
                                password: password
                            },
                            success: function (response) {
                                const button = $(`#${button_id}`);
                                if (response.status) {
                                    button
                                        .removeClass("payment-not-approved")
                                        .addClass("payment-approved");
                                    button.html('Approved');
                                }
                                else{
                                    button
                                        .removeClass("payment-approved")
                                        .addClass("payment-not-approved");
                                    button.html('Approve');
                                }
                            }
                        });
                    });
                },
                error: function (){
                    password = prompt('Wrong password please enter again:', '');
                    displayData(password);
                }
            });
        }
    }

    // cookie functions
    function setPasswordCookie(password) {
        document.cookie = 'auth=' + encodeURIComponent(password) + '; path=/';
    }
    function getPasswordFromCookie() {
        let name = 'auth=';
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookieArray = decodedCookie.split(';');

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return null;
    }
    function clearAllCookies() {
        document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }

    // logout admin panel
    $('#logout-button').click(function() {
        clearAllCookies();
        document.body.innerHTML = "Logged out successfully!";
    });

    // download excel file
    $('#download-button').click(function() {
        window.location.href = `${window.location.origin}/swj2023/download-records?password=${getPasswordFromCookie()}`;
    });

    // reload content
    $('#reload-button').click(function() {
        $('table').find('tr td').remove();
        displayData(getPasswordFromCookie());
    });
})()