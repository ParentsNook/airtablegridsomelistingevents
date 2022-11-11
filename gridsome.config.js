// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Nooks",
  plugins: [

   
    {
      use: "@gridsome/source-airtable",
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: "keybSdRDbiuyocRBk", //required
        baseId: "app4peW1YBEHXcR2Q", //required
        tables: [
          {
            name: "Events",
            typeName: "Event", //required - needs to match template name
            select: {}, //optional
            links: [], //optional
          },
           {
             name: "Parties",
            typeName: "Parties", //required - needs to match template name
            select: {}, //optional
            links: [], //optional
           },
        ],
      },
    },
  ],

  templates: {
    Event: "/events/:id", //optional
    // Parties: "/parties/:id", //optional
  },
};
