import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { amount, type = 'ONE_TIME', external_id, payer } = body;

        const apiKey = process.env.ONE_API_KEY;
        const apiSecret = process.env.ONE_API_SECRET;

        if (!apiKey || !apiSecret) {
            return NextResponse.json({ error: 'Missing API credentials' }, { status: 500 });
        }

        const payload = {
            type,
            amount,
            currency: 'USD',
            external_id: external_id || `order_${Date.now()}`,
            origin: 'API',
            custom_urls: {
                success_payment_redirect: 'https://nixiptv.com/success', // Update with actual domain
                error_payment_redirect: 'https://nixiptv.com/error',
                status_changes_webhook: 'https://nixiptv.com/api/webhook'
            },
            payer: payer || {
                email: 'customer@example.com' // Default or passed from frontend if collected
            }
        };

        const response = await fetch("https://api.one.lat/v1/checkout_preferences", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
                "x-api-secret": apiSecret,
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('ONE API Error:', errorText);
            return NextResponse.json({ error: 'Failed to create checkout preference', details: errorText }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Checkout Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
