function generateQRCode() {
    var websiteInput = document.getElementById("websiteInput").value;
    if (websiteInput.trim() !== "") {
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: websiteInput,
        width: 128,
        height: 128
      });
    }
  }
  