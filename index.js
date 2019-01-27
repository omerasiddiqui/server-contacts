var express = require('express');
var app = express();

var data = [
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "CHRISTINA SMITH",
        "contactType": "BILL",
        "emailAddress": "csmith@telpluscommunications.com",
        "officePhoneNumber": "6784864846",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MIKE MCCAULEY",
        "contactType": "PNCO",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "officePhoneNumber": "6784864834",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MIKE MCCAULEY",
        "contactType": "LCON",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "officePhoneNumber": "6784864834",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MIKE MCCAULEY",
        "contactType": "MAIN",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "officePhoneNumber": "6784864834",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MIKE MCCAULEY",
        "contactType": "NOTI",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "officePhoneNumber": "6784864834",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MIKE MCCAULEY",
        "contactType": "SCHD",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "officePhoneNumber": "6784864834",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MIKE MCCAULEY",
        "contactType": "SHIP",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "officePhoneNumber": "6784864834",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MIKE MCCAULEY",
        "contactType": "SLSR-AE",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "officePhoneNumber": "6784864834",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MIKE MCCAULEY",
        "contactType": "TCON",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "officePhoneNumber": "6784864834",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MIKE MCCAULEY",
        "contactType": "TECH",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "officePhoneNumber": "6784864834",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MELISSA ROBERTS",
        "contactType": "ORDR",
        "emailAddress": "melissa.roberts@centurylink.com",
        "officePhoneNumber": "4078896659",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "MELISSA ROBERTS",
        "contactType": "SLSE",
        "emailAddress": "melissa.roberts@centurylink.com",
        "officePhoneNumber": "4078896659",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null
      }
    },
    {
      "addressInfo": {
        "addressLine2": "SUIT 150",
        "postalCode": "80237",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "city": "DENVER",
        "idddcountryCode": "USA",
        "stateProvinceCode": "CO"
      },
      "contactInfo": {
        "contactName": "DENNIS WILLIAMS",
        "contactType": "RI",
        "emailAddress": "Dennis.Williams@centurylink.com",
        "officePhoneNumber": "9999999999",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": "3185476692"
      }
    }
  ];

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res) {
    res.json({ data });
})

const port = 3002 || process.env.PORT; 

app.listen(port, () => console.log(`Server running on port ${port}`));