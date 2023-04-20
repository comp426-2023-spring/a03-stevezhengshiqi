export function rps(args) {
    const options = ['rock','paper','scissors'];
    if (args == undefined) {
        return {"player": options[Math.floor(Math.random() * options.length)]};
    } else {

    const helpMsg = `Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`;
    
    const ruleMsg = `Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`;

    let input = args[0];
    const oppontOption = options[Math.floor(Math.random() * options.length)];
    switch (input) {
        case '-h':
            console.log(helpMsg);
            break;
        case '--help':
            console.log(helpMsg);
            break;
        case 'rock':
        case 'paper':
        case 'scissors':
            let res = (input === oppontOption) ? 'tie' : (
                (input === 'rock' && oppontOption === 'scissors') || (input === 'paper' && oppontOption === 'rock') || (input === 'scissors' && oppontOption === 'paper')
            ) ? 'win' : 'lose';
            console.log(`{"player":"${input}","opponent":"${oppontOption}","result":"${res}"}`);
            break;
        default:
            // console.log(ruleMsg);
            return {"player": options[Math.floor(Math.random() * options.length)]};
            process.exit(0);
    }
    }
}

export function rpsls(args) {
    const options = ['rock','paper','scissors','lizard','spock'];
    if (args == undefined) {
        return {"player": options[Math.floor(Math.random() * options.length)]};
    } else {

    const helpMsg = `Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`;
    
    const ruleMsg = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`;

    let input = args[0];
    const oppontOption = options[Math.floor(Math.random() * options.length)];
    switch (input) {
        case '-h':
            console.log(helpMsg);
            break;
        case '--help':
            console.log(helpMsg);
            break;
        case 'rock':
        case 'paper':
        case 'scissors':
            let res = (input === oppontOption) ? 'tie' : (
                (input === 'rock' && oppontOption === 'scissors') || (input === 'paper' && oppontOption === 'rock') || (input === 'scissors' && oppontOption === 'paper') || (input === 'rock' && oppontOption === 'lizard') || (input === 'paper' && oppontOption === 'spock') || (input === 'spock' && oppontOption === 'scissors')
            ) ? 'win' : 'lose';
            console.log(`{"player":"${input}","opponent":"${oppontOption}","result":"${res}"}`);
            break;
        default:
            // console.log(ruleMsg);
            return {"player": options[Math.floor(Math.random() * options.length)]};
            process.exit(0);
    }
    }
}