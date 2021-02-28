const aprs = require("aprs-parser");
    
    const parser = new aprs.APRSParser();

    var line2 = "!4313.42NS07041.56W#PHG3800/W3,MEn Mt.Agamenticus, Oqunquit, Me"
    var line1 = "fm KA1MTM-13 to W1UWS-1 via N1NCI-3,WIDE1-0,W1MRA-0,WIDE2-0 UI  pid=F0 @280118z4251.25N/07220.55W_.../...g...t033r000p018P018h96b10165.DsVP"
    //console.log(parser.parse("SQ7PFS-10>APRS,TCPIP*,qAC,T2SYDNEY:@085502h4903.50N/07201.75W-PHG5132Hello world/A=001234"));
    console.log(parser.parse(line2));
    console.log();
    //console.log(parser.parse("SQ7PFS-10>S32U6T,TCPIP*,qAC,T2SYDNEY:`(_fn\"Oj/>Hellov"));
