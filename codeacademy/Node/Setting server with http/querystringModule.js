const str = 'prop1=value1&prop2=value2';
querystring.parse(str); // Returns { prop1: value1, prop2: value2}

const props = { "prop1": value1, "prop2": value2 };
querystring.stringify(props); // Returns 'prop1=value1&prop2=value2'
