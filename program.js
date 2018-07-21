process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    // tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        	case '/exit':
	            process.stdout.write('Quitting app!\n');
	            process.exit();
	            break;
        	case '/lang':
        		process.stdout.write('Language version:\n');
        		console.log(process.env.lang);
        		break;
        	case '/ver':
        		process.stdout.write('Version:\n');
        		console.log(process.versions.node);
        		break;
        	default: 
            	process.stderr.write('Wrong instruction!\n');
        }
    }
});


/*Do bezpośredniej komunikacji ze środowiskiem, Node używa trzech kanałów komunikacyjnych:

process.stdin -standard input służący do odczytu (przyjmowania informacji z zewnątrz do aplikacji)
process.stdout -standard output służący do wypisywania komunikatów z procesu
process.stderr -standard służący do informowania o błędach */