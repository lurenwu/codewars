var tidyNumber = require('./index.js');
var Test = require('../test')
var Test = new Test();
Test.assertEquals(tidyNumber(12),true);
Test.assertEquals(tidyNumber(102),false);
Test.assertEquals(tidyNumber(9672),false);
Test.assertEquals(tidyNumber(2789),true);
Test.assertEquals(tidyNumber(2335),true);