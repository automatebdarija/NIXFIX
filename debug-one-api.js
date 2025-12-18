const https = require('https');

const API_KEY = '8Y3qtpIsysDekx99cO';
const API_SECRET = 'lq7rotIRd7oEKSQF7Hp6';

function testPayload(name, payload) {
    const data = JSON.stringify(payload);
    const options = {
        hostname: 'api.one.lat',
        path: '/v1/checkout_preferences',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
            'x-api-secret': API_SECRET
        }
    };

    const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log(`\n--- TEST: ${name} ---`);
            console.log(`Status: ${res.statusCode}`);
            console.log('Body:', body);
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request ${name}: ${e.message}`);
    });

    req.write(data);
    req.end();
}

// 1. As per user docs (with title added)
testPayload('Standard ONE_TIME', {
    type: 'ONE_TIME',
    amount: 100,
    currency: 'USD',
    title: 'Test Payment',
    external_id: `test_${Date.now()}`,
    origin: 'API',
    payer: { email: 'test@example.com' }
});

// 2. Without type
testPayload('No Type', {
    amount: 100,
    currency: 'USD',
    title: 'Test Payment',
    external_id: `test_${Date.now()}`,
    origin: 'API',
    payer: { email: 'test@example.com' }
});

// 3. Type as "Pay" or "Sale" ?
// Actually, let's keep it simple.
