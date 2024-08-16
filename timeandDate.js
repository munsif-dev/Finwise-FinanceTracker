
  // JavaScript code to update current date and time
  document.addEventListener('DOMContentLoaded', function () {
    // Function to format the date and time
    function formatDate(date) {
      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    // Function to update the content of the date1 div
    function updateDateTime() {
      var currentDateTime = new Date();
      var formattedDateTime = formatDate(currentDateTime);
      document.getElementById('currentDateTime').textContent = formattedDateTime;
    }

    // Update the date and time every second
    setInterval(updateDateTime, 1000);

    // Initial update
    updateDateTime();
  });
