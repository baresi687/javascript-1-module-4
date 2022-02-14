function alert (alertType = "success", message = "Unknown error") {
  return `<div class="${alertType}">${message}</div>`
}

/*
function alert(alertType="success", message = "") {
    return `<div class="alert ${alertType}">${message}</div>`;
}*/