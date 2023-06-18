(()=>{
    let password = getPasswordFromCookie();
    if (!password){
        password = prompt('Password:', '');
    }
    displayData(password);

    function displayData(password) {
        if (password !== '') {
            $.ajax({
                url: '/swj2023/read',
                method: 'GET',
                data: {
                    password: password
                },
                success: function (response) {
                    let tableData = response.data;
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
                                <td>${count++}</td>
                                <td>${row[1]}</td>
                                <td><a href="tel:${row[2]}">${row[2]}</a></td>
                                <td><a href="mailto:${row[3]}">${row[3]}</a></td>
                                <td>${row[4]}</td>
                                <td>${row[5]}</td>
                                <td>${row[6]}</td>
                                <td>${row[7]}</td>
                                <td>${row[8]}</td>
                                <td style="color: ${mailStatusColor}">${mailStatus}</td>
                                <td><a href="/swj2023/event/${row[0]}" target="_blank"><i>Click Here</i></a></td>
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

    $('#logout-button').click(function() {
        clearAllCookies();
        document.body.innerHTML = "Logged out successfully!";
    });

    $('#download-button').click(function() {
        window.location.href = `${window.location.origin}/swj2023/download?password=${getPasswordFromCookie()}`;
    });

    $('#reload-button').click(function() {
        $('table').find('tr td').remove();
        displayData(getPasswordFromCookie());
    });
})()