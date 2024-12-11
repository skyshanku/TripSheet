document.getElementById("generate-btn").addEventListener("click", function () {
    // Get form data
    const driverName = document.getElementById("driver-name").value;
    const truckNumber = document.getElementById("truck-number").value;
    const date = document.getElementById("date").value;
    const startOdometer = document.getElementById("start-odometer").value;
    const endOdometer = document.getElementById("end-odometer").value;
    const cargo = document.getElementById("cargo").value;
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const rate = document.getElementById("rate").value;

    // Calculate total distance and amount
    const distance = endOdometer - startOdometer;
    const totalAmount = distance * rate;

    // Generate Trip Sheet preview
    const preview = `
        <h2>Trip Sheet</h2>
        <p><strong>Driver's Name:</strong> ${driverName}</p>
        <p><strong>Truck Number:</strong> ${truckNumber}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Total Distance:</strong> ${distance} KM</p>
        <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
        <h3>Trip Details</h3>
        <p><strong>Cargo Load:</strong> ${cargo}</p>
        <p><strong>From:</strong> ${origin} <strong>To:</strong> ${destination}</p>
    `;

    document.getElementById("preview").innerHTML = preview;
    document.getElementById("download-btn").style.display = "inline";
});

document.getElementById("download-btn").addEventListener("click", function () {
    const pdfContent = document.getElementById("preview").innerHTML;
    const opt = {
        margin: 1,
        filename: 'TripSheet.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(pdfContent).set(opt).save();
});
