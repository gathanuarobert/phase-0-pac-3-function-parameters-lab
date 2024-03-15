function IntroductionWithLanguage(name, language){
    console.log(`Hi my name is${name}and I am learning to program in ${language}`);
    return `${name}, ${language}`;
}



function IntroductionWithLanguageOptional(name = "User", language = "JavaScript"){
    console.log(`Hi my name is${name}and I am learning to program in ${language}`);
    return `${name}, ${language}`;
}

