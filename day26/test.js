var cmp = require('./index.js');
var Test = require('../test')
var Test = new Test();
Test.assertEquals( cmp( "1", "2" ), -1 );
Test.assertEquals( cmp( "1.1", "1.2" ), -1 );
Test.assertEquals( cmp( "1.1", "1" ), 1 );
Test.assertEquals( cmp( "1.2.3.4", "1.2.3.4" ), 0 );
Test.assertEquals( cmp( "3", "3.0" ), 0 );
Test.assertEquals( cmp( "3", "3.0.0.0" ), 0 );
Test.assertEquals( cmp( "1.2.1", "1.2.0" ), 1 );
Test.assertEquals( cmp( "3.0.0", "3.1.1" ), -1 );
Test.assertEquals( cmp( "3.0.1", "3.1" ), -1 );
Test.assertEquals( cmp( "1.2.3", "1.02.003" ), 0 );
Test.assertEquals( cmp( "1.20", "1.5" ), 1 )