function uniqueCharactersCheck(username){
    const charSet = new Set();
    for (const char of username) {
        if (charSet.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string conatins unique characters.");
}

uniqueCharactersCheck("mithun");
uniqueCharactersCheck("anurag");