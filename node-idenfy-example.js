const axios = require('axios');

const API_KEY = 'YOUR_IDENFY_API_KEY';

async function verifyIdentity(userId) {
  try {
    const res = await axios.post('https://ivs.idenfy.com/api/v2/identification', {
      clientUserId: userId
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    console.log('KYC Verification Started:', res.data);
  } catch (err) {
    console.error('Error during verification:', err.response.data);
  }
}

verifyIdentity('user_001');
