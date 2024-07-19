const scriptUrl = 'https://script.google.com/macros/s/AKfycbyVnFblt5bQRtcuH5QE2oVcbUtxmkbU8vvFucNZ2vTIzKpselDq0Io3rE5cFSmBe2Romw/exec';

async function checkReferrer() {
    const phoneNumber = document.getElementById('checkReferrerInput').value;
    const response = await fetch(`${scriptUrl}?action=checkReferrer&phoneNumber=${phoneNumber}`);
    const result = await response.json();
    console.log(result);
    document.getElementById('checkReferrerResult').textContent = result ? 'Referrer code exists.' : 'Referrer code does not exist.';
}

async function addReferrer() {
    const phoneNumber = document.getElementById('newReferrerInput').value;
    const response = await fetch(`${scriptUrl}?action=addReferrer&phoneNumber=${phoneNumber}`);
    const result = await response.text();
    console.log(result);
    document.getElementById('addReferrerResult').textContent = result;
}

async function addReferred() {
    const phoneNumber = document.getElementById('newReferredInput').value;
    const response = await fetch(`${scriptUrl}?action=addReferred&phoneNumber=${phoneNumber}`);
    const result = await response.text();
    console.log(result);
    document.getElementById('addReferredResult').textContent = result;
}

async function checkReferred() {
    const phoneNumber = document.getElementById('checkReferredInput').value;
    const response = await fetch(`${scriptUrl}?action=checkReferred&phoneNumber=${phoneNumber}`);
    const result = await response.json();
    console.log(result);
    document.getElementById('checkReferredResult').textContent = result ? 'Referred code exists.' : 'Referred code does not exist.';
}
