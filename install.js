const ES_VE_APP_DESCRIPTION	= "Diccionario en Español para Venezuela";
const ES_VE_APP_AUTHOR		= "Christian González <christiangda@gmail.com>";
const ES_VE_APP_VERSION		= "1.1.18";

var err = initInstall(ES_VE_APP_DESCRIPTION, ES_VE_APP_AUTHOR, ES_VE_APP_VERSION);
if (err != SUCCESS)
    cancelInstall();

var ES_VE_fProgram = getFolder("Program");
err = addDirectory("", ES_VE_APP_AUTHOR, "dictionaries", ES_VE_fProgram, "dictionaries", true);

if (err != SUCCESS)
    cancelInstall();

performInstall();
