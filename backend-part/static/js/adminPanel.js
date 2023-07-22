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
                    let tableData = response;
                    let htmlTable = $("#data-container table");
                    let count = 1;
                    for (let row of tableData) {
                        let mailStatus = "Undelivered";
                        let mailStatusColor = "red";
                        if (row[9]) {
                            mailStatus = "Delivered";
                            mailStatusColor = "green";
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
                            </tr>
                        `)
                    }
                    setPasswordCookie(password);
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