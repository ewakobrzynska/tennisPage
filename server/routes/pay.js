const express = require('express');
const stripe = require('stripe')('sk_test_51PlbVIP36u46iKgkl6bniYASco35fmw13jN7cN8Eybgn5kJ0yr9wVizhbRz6vUxLtwmLBPD2zKw2bVMqEiUfZAMx00BB25jx4C'); 
const router = express.Router();

router.post('/pay', async (req, res) => {
    const { payment_method_id, customer_name, customer_email } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 7990, 
            currency: 'pln',
            payment_method: payment_method_id,
            confirmation_method: 'manual',
            confirm: true,
            receipt_email: customer_email,
            metadata: {
                customer_name: customer_name,
                ebook_title: 'Roger Federer Biography',
            },
        });

        res.json({ success: true, paymentIntent });
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;