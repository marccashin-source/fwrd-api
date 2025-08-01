// api/agents.js
module.exports = (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  res.status(200).json({
    name: "FORWARD | DC Metro Luxury Real Estate",
    telephone: "+1-202-900-3126",
    email: "operations@fwrdrealestate.com",
    website: "https://www.fwrdrealestate.com",
    areas: ["Washington, DC", "Maryland", "Virginia"]
  });
};
