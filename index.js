 const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Fetch API call
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Console me show karega

        // Display on webpage
        const outputDiv = document.getElementById('output');
        data.forEach(user => {
          const p = document.createElement('p');
          p.innerText = `${user.name} - ${user.email}`;
          outputDiv.appendChild(p);
        });
      })
      .catch(error => console.error('Error fetching data:', error));