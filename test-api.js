fetch('http://localhost:3000/api/create-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: 10, title: 'Test', external_id: `test_${Date.now()}` })
})
    .then(res => res.json())
    .then(data => console.log('RESPONSE:', JSON.stringify(data, null, 2)))
    .catch(err => console.error('ERROR:', err));
