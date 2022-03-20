var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Nous vous remerçions pour votre retour :)";
        status.classList.add('success');
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oups! Un problème est survenu :("
        status.classList.add('error');
      });
    }
    form.addEventListener("submit", handleSubmit)