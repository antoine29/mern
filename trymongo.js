'use stric'
const MongoClient = require('mongodb');

function usage(){
    console.log('Usage: ');
    console.log('node', __filename, '<option>');
    console.log('Where the options is one of: ');
    console.log('   callbacks   Use the callbacks paradigm: ');
    console.log('   promises    Use the promises paradigm');
    console.log('   generator   Use the generator paradigm');
    console.log('   async  Use the async module');

    if (process.argv.length < 3 ) {
        console.log("Incorrect number of arguments");
        usage();
    }
    else{
        if (process.argv[2] === 'calllbacks') {
            testWithCallbacks();
        }
        else {
            if (process.argv[2] === 'promises') {
                testWithPromises();
            } else {
                if (process.argv[2] === 'generator') {
                    testWithGenerator();
                } else {
                    if (process.argv[2] === 'async') {
                        testWithAsync();
                    }
                    else{
                        console.log("Invalid option : ", process.argv[2]);
                        usage();
                    }
                }
            }
        }
    }



}
