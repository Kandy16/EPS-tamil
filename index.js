// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    console.log('my browser has support for HTML5 APIs :-) !!!');
    
    const VERSION = '1.0.0';
    const sentences = ["நான் தூங்குகிறேன் மற்றும் நீ தூங்குகிறாய்",
"செந்தில் தூங்குகிறான் மற்றும் ராஜேஷ் தூங்குகிறான்",
"செந்தில் தூங்க விரும்புகிறான் மற்றும் ராஜேஷ் தூங்க விரும்புகிறான்",
"எனது மனைவி ஒரு கார் வாங்க விரும்புகிறாள் மற்றும் எனது மகன் ஒரு மோட்டார்வண்டி வாங்க விரும்புகிறான்",
"ஓட்டுநர் இறந்து விட்டார் மற்றும் பயணிகள் தீவிரமாக காயமடைந்து விட்டனர்",
"செந்தில் தூங்க முடியும் மற்றும் செந்தில் கனவுகாண முடியும்",
"நான் காரின் உள்ளே செந்தில் தூங்கிக்கொண்டிருப்பதை காண்கிறேன் மற்றும் நான் பஸ்ஸின் உள்ளே ராஜேஷ் தூங்குவதை காண்கிறேன்",
"செந்தில் தூங்க முடியும் மற்றும் ராஜேஷ் தூங்க முடியும்",
"செந்தில் மாங்காய்கள் சாப்பிடுகிறார் மற்றும் ராஜேஷ் நெல்லிக்காய்கள் சாப்பிடுகிறார்",
"செந்தில் மாங்காய்கள் சாப்பிடுகிறார் மற்றும் நெல்லிக்காய்களை ராஜேஷ் சாப்பிடுகிறார்",
"லதா கட்டுரைகள் படிக்கிறார் மற்றும் அவளுடைய மகன்கள் தடித்த புத்தகங்களை படிக்கிறார்கள்",
"லதா புத்தகங்கள் படிக்கிறார் மற்றும் பவித்ரா புத்தகங்கள் எழுதுகிறார்",
"புத்தகங்களை லதா படிக்கிறார் மற்றும் பவித்ரா புத்தகங்கள் எழுதுகிறார்",
"புத்தகங்களை லதா படிக்கிறார் மற்றும் புத்தகங்களை பவித்ரா எழுதுகிறார்",
"செந்தில் மாங்காய்கள் சாப்பிடுகிறார் மற்றும் நெல்லிக்காய்களை ராஜேஷ் சாப்பிடுகிறார்",
"செந்தில் மாங்காய்கள் சாப்பிடுகிறார் மற்றும் ராஜேஷ் மாங்காய்கள் சாப்பிடுகிறார்",
"செந்தில் மாங்காய்கள் சாப்பிடுகிறார் மற்றும் ராஜேஷ் காரின் உள்ளே சாப்பிடுகிறார்",
"லதா நெல்லிக்காய்கள் வாங்கினார் மற்றும் பவித்ரா சந்தையில் வாங்கினார்",
"செந்தில் அரிதாக தூங்குகிறார் மற்றும் ராஜேஷ் காரின் உள்ளே தூங்குகிறார்",
"பவித்ரா சென்னையில் வாழ்கிறார் மற்றும் அவரது மகன்கள் கோவையில் வாழ்கிறார்கள்",
"எனது சகோதிரி சேலத்தில் வாழ்கிறார் மற்றும் எனது சகோதரர்கள் சேலத்தில் வாழ்கிறார்கள்",
"செந்தில் தூங்குகிறார் நான் நம்புகிறேன் மற்றும் ராஜேஷ் தூங்குகிறார் நீ நம்புகிறாய்",
"செந்தில் தூங்குகிறார் என்று நான் நம்புகிறேன் மற்றும் ராஜேஷ் தூங்குகிறார் என்று நீ நம்புகிறாய்",
"இன்று கட்டாயம் செந்தில் அவனுடைய காரை சுத்தம்செய்யனும் மற்றும் இன்று கட்டாயம் பூங்கோதை அவளுடைய வண்டியை சுத்தம்செய்யனும்",
"இன்று கட்டாயம் செந்தில் கார்களை சுத்தம்செய்யனும் மற்றும் இன்று கட்டாயம் செந்தில் நள்ளிரவு வரை கார்கள் சுத்தம்செய்யனும்",
"எனக்கு ஆப்பிள்கள் பிடிக்கும் மற்றும் நான் அடிக்கடி ஆப்பிள்கள் சாப்பிடுகிறேன்",
"எனக்கு ஆப்பிள்கள் பிடிக்கும் மற்றும் நான் ஆப்பிள்கள் சாப்பிடுகிறேன்",
"செந்தில் மிதிவண்டிகள் திருடுகிறார் மற்றும் செந்தில் மிதிவண்டிகள் விற்கிறார்",
"செந்தில் மிதிவண்டிகள் திருடுகிறார் என்றும் செந்தில் மிதிவண்டிகள் விற்கிறார் என்றும் கவிதா கேள்விப்பட்டார்",
"ராஜேஷ் தனது மிதிவண்டியை திறமையாக பழுதுபார்க்கிறார் என்றும் ராஜேஷ் தனது மிதிவண்டியை தீவிரமாக சுத்தம்செய்தார் என்றும் கவிதா கேள்விப்பட்டார்",
"ராஜேஷ் திறமையாக தனது மிதிவண்டியை பழுதுபார்க்கிறார் என்றும் ராஜேஷ் தீவிரமாக தனது மிதிவண்டியை சுத்தம்செய்தார் என்றும் கவிதா கேள்விப்பட்டார்",
"செந்தில் தனது மிதிவண்டியை திறமையாக பழுதுபார்க்கிறார் மற்றும் செந்தில் தனது மிதிவண்டியை தீவிரமாக சுத்தம்செய்தார்",
"செந்தில் அடிக்கடி மிதிவண்டிகள் திருடுகிறார் என்றும் செந்தில் அடிக்கடி மிதிவண்டிகளை விற்கிறார் என்றும் கவிதா கேள்விப்பட்டார்",
"செந்தில் அடிக்கடி மிதிவண்டிகள் திருடுகிறார் என்றும் செந்தில் அரிதாக மிதிவண்டிகளை விற்கிறார் என்றும் கவிதா கேள்விப்பட்டார்",
"செந்தில் கார்கள் திருட முயற்சிக்கிறார் மற்றும் செந்தில் மிதிவண்டிகள் விற்க முயற்சிக்கிறார்",
"செந்தில் கார்கள் திருட முயற்சிக்கிறார் மற்றும் ராஜேஷ் மிதிவண்டிகள் திருட முயற்சிக்கிறார்",
"செந்தில் கார்கள் திருட முயன்றார் மற்றும் ராஜேஷ் மிதிவண்டிகள் திருட முயன்றார்",
"செந்தில் தூங்கும் போது நான் பாடுகிறேன் மற்றும் ராஜேஷ் தூங்கும் போது நீ பாடுகிறாய்",
"செந்தில் தூங்கும் போது நான் பாடுகிறேன் மற்றும் செந்தில் தூங்கும் போது நீ பாடுகிறாய்",
"காரின் உள்ளே செந்தில் தூங்கிக்கொண்டிருப்பதை நான் காண்கிறேன் மற்றும் பஸ்ஸின் உள்ளே ராஜேஷ் தூங்கிக்கொண்டிருப்பதை நீ காண்கிறாய்",
"காரின் உள்ளே செந்தில் தூங்கிக்கொண்டிருப்பதை நான் காண்கிறேன் மற்றும் காரின் உள்ளே செந்தில் தூங்கிக்கொண்டிருப்பதை நீ காண்கிறாய்",
"காரின் உள்ளே செந்தில் தூங்கிக்கொண்டிருப்பதை நான் காண்கிறேன் மற்றும் பஸ்ஸின் உள்ளே செந்தில் தூங்கிக்கொண்டிருப்பதை நீ காண்கிறாய்",
"செந்தில் காரின் உள்ளே தூங்கிக்கொண்டிருப்பதையும் மற்றும் செந்தில் பஸ்ஸின் மேலே தூங்கிக்கொண்டிருப்பதையும் நான் காண்கிறேன்",
"செந்தில் தூங்குகிறார் என்றும் ராஜேஷ் தூங்குகிறார் என்றும் நான் நம்புகிறேன்",
"செந்தில் தூங்குகிறார் என்று நம்ப நான் விரும்புகிறேன் மற்றும் ராஜேஷ் தூங்குகிறார் என்று நம்ப நீ விரும்புகிறாய்",
"செந்தில் மாங்காய் சாப்பிடுகிறார் என்றும் லதா நெல்லிக்காய் சாப்பிடுகிறாள் என்றும் அனைவரும் அறிந்திருக்கிறார்கள் மற்றும் ராஜேஷ் மது குடிக்கிறார் என்றும் சுதா பீர் குடிக்கிறார் என்றும் யாரும் அறியவில்லை",
"செந்தில் மாங்காய்கள் சாப்பிடுகிறார் என்று அனைவரும் அறிந்திருக்கிறார்கள் மற்றும் செந்தில் நெல்லிக்காய்கள் சாப்பிடுகிறார் என்று யாரும் அறியவில்லை",
"செந்தில் மாங்காய்கள் சாப்பிட விரும்புகிறார் என்றும் லதா நெல்லிக்காய்கள் சாப்பிட விரும்புகிறார் என்றும் அனைவரும் அறிந்திருக்கிறார்கள் மற்றும் ராஜேஷ் மது குடிக்க விரும்புகிறார் என்றும் சுதா பீர் குடிக்க விரும்புகிறார் என்றும் யாரும் அறியவில்லை",
"செந்தில் ஒரு விபத்து ஏற்பட்டது என்றும் செந்தில் இறக்க கூடும் என்றும் சுதா கேள்விப்பட்டார்",
"சுதா கேள்விப்பட்டது என்னவென்றால் செந்தில் ஒரு விபத்து ஏற்பட்டது என்றும் செந்தில் இறக்க கூடும் என்றும்",
"சுதா கேள்விப்பட்டது செந்தில் அதிர்ஷ்டம் கொண்டவர் என்றும் ராஜேஷ் துரதிருஷ்டம் கொண்டவர் என்றும்",
"காரின் உள்ளே செந்தில் மாங்காய்கள் உரிக்கிறார் மற்றும் காரின் உள்ளே ராஜேஷ் மாங்காய்கள் சாப்பிடுகிறார்",
"செந்தில் மாங்காய்கள் சாப்பிடுகிறார் மற்றும் ராஜேஷ் நெல்லிக்காய்கள் சாப்பிடுகிறார் நான் நம்புகிறேன்",
"செந்தில் சாப்பிடுகிறார் மற்றும் ராஜேஷ் சாப்பிடுகிறார் நான் நம்புகிறேன்",
"செந்தில் மாங்காய்கள் சாப்பிட முடியும் என்றும் ராஜேஷ் நெல்லிக்காய்கள் சாப்பிட முடியும் என்றும் நான் நம்புகிறேன்",
"செந்தில் மாங்காய்கள் சாப்பிடுகிறார் மற்றும் ராஜேஷ் நெல்லிக்காய்கள் சாப்பிடுகிறார் நான் நம்புகிறேன் மற்றும் சுந்தர் பப்பாளிகள் சாப்பிடுகிறார் மற்றும் அரவிந்த் பேரிச்சம்பழங்கள் சாப்பிடுகிறார் நீ நம்புகிறாய்",
"செந்தில் அவரது மிதிவண்டியை சரிபார்த்தார் மற்றும் ராஜேஷ் அவரது மிதிவண்டியை சுத்தம்செய்தார்",
"செந்தில் அவரது மிதிவண்டியை சரிபார்த்தார் மற்றும் ராஜேஷ் அவரது மிதிவண்டியை சுத்தம்செய்தார் என்றும் சுதா கேள்விப்பட்டார்",
"செந்தில் அவரது புது மிதிவண்டியை சரிபார்த்தார் மற்றும் அவரது சகோதரர்கள் அவரது பழைய மிதிவண்டிகளை சுத்தம்செய்தார்கள்",
"செந்தில் காரின் உள்ளே தூங்குகிறார் மற்றும் ராஜேஷ் காரின் உள்ளே வேலைபார்க்கிறார்",
"செந்தில் காரின் உள்ளே தூங்குகிறார் மற்றும் ராஜேஷ் காரின் உள்ளே தூங்குகிறார்",
"செந்தில் காரின் உள்ளே வேலைபார்க்கிறார் மற்றும் ராஜேஷ் காரின் உள்ளே வேலைபார்க்கிறார்",
"செந்தில் காரின் உள்ளே எப்போதும் தூங்குகிறார் மற்றும் ராஜேஷ் காரின் உள்ளே சிலசமயங்களில் வேலைபார்க்கிறார்",
"செந்தில் எப்போதும் காரின் உள்ளே தூங்குகிறார் மற்றும் ராஜேஷ் சிலசமயங்களில் காரின் உள்ளே லதா உடன் வேலைபார்க்கிறார்",
"செந்தில் எப்போதும் காரின் உள்ளே சுதா அவர்களுக்காக பாடுகிறார் மற்றும் ராஜேஷ் சிலசமயங்களில் காரின் உள்ளே லதா அவர்களுக்காக இசையமைக்கிறார்",
"செந்தில் எப்போதும் காரின் உள்ளே சுதா அவர்களுக்காக இசையமைக்கிறார் மற்றும் ராஜேஷ் சிலசமயங்களில் காரின் உள்ளே சுதா அவர்களுக்காக இசையமைக்கிறார்",
"செந்தில் சாப்பிடுகிறார் மற்றும் செந்தில் குடிக்கிறார்",
"செந்தில் இன்று சாப்பிடுகிறார் மற்றும் செந்தில் நாளை குடிக்கிறார்",
"செந்தில் இன்று சாப்பிடுகிறார் மற்றும் செந்தில் இன்று குடிக்கிறார்",
"செந்தில் இன்று தூங்க விரும்புகிறார் மற்றும் செந்தில் நாளை தூங்க விரும்புகிறார்",
"செந்தில் சென்னையில் இருந்து இன்று வர முடியும் மற்றும் செந்தில் சென்னையில் இருந்து நாளை வெளியேற முடியும்",
"செந்தில் சென்னையில் இருந்து இன்று வர விரும்புகிறார் மற்றும் செந்தில் சேலத்தில் இருந்து நாளை வெளியேற விரும்புகிறார்",
"நாளை செந்தில் நண்பர்கள் உடன் கொண்டாடுகிறார் மற்றும் இன்று செந்தில் தனியாக தூங்குகிறார்",
"வேட்டையாடி காட்டின் உள்ளே சென்றார் மற்றும் வேட்டையாடி ஒரு முயலை சுட்டார்",
"நான் இந்த மதுவை குடிக்க மாட்டேன் மற்றும் நான் இந்த மதுவை வெளியே வீசியெறிவேன்",
"அவர் அந்த தேர்வில் தேர விரும்புகிறார் மற்றும் அவரால் அந்த தேர்வில் தேர முடியும்",
"நேற்று நீ வெளியேறினாய் மற்றும் நேற்று நீ பேச இல்லை",
"நீ ஏன் வெளியேறினாய் மற்றும் நீ ஏன் பேச இல்லை",
"மக்கள் வீட்டின் முன் இன்னுமா நிற்கிறார்கள் மற்றும் மக்கள் கூச்சல் எழுப்புகிறார்கள்",
"நேற்று நீ சென்றாய் மற்றும் நேற்று நீ என்னை எச்சரிக்க இல்லை",
"நாளை செந்தில் நண்பர்கள் உடன் கொண்டாடுகிறார் மற்றும் நாளை செந்தில் தனியாக தூங்குகிறார்",
"நாளை செந்தில் நண்பர்கள் உடன் கொண்டாடுகிறார் மற்றும் இன்று செந்தில் நண்பர்கள் இல்லாமல் தூங்குகிறார்",
"செந்தில் சூப் சாப்பிடுகிறார் மற்றும் செந்தில் கீழே படுத்துக் கொண்டார்",
"செந்தில் சூப் சாப்பிட விரும்புகிறார் மற்றும் செந்தில் படுத்துக் கொள்ள விரும்புகிறார்",
"செந்தில் சூப் சாப்பிட விரும்புகிறார் மற்றும் செந்தில் படுத்துக் கொள்ள விரும்புகிறார்",
"செந்தில் சூப் சாப்பிட முயற்சிக்க விரும்புகிறார் மற்றும் செந்தில் படுத்துக் கொள்ள முயற்சிக்க விரும்புகிறார்",
"செந்தில் சூப் சாப்பிட முயற்சிக்க விரும்புகிறார் மற்றும் செந்தில் பீர் குடிக்க முயற்சிக்க விரும்புகிறார்",
"செந்தில் சூப் சாப்பிட முயற்சிக்க விரும்புகிறார் மற்றும் செந்தில் பீர் குடிக்க முயற்சிக்க விரும்புகிறார்",
"சோழர் வந்தார் மற்றும் சோழர் பார்த்தார் மற்றும் சோழர் வென்றார்",
"சோழர் வந்தார் மற்றும் சோழர் பார்த்தார் மற்றும் சோழர் போரிட்டார் மற்றும் சோழர் வென்றார்",
"சோழர் வந்தார் மற்றும் சோழர் பார்த்தார் மற்றும் சோழர் போரிட்டார் மற்றும் சோழர் தோற்றார் மற்றும் சோழர் மறைந்தார்",
"சோழர் வந்தார் மற்றும் சேரர் பார்த்தார் மற்றும் சேரர் வென்றார்",
"சோழர் வந்தார் மற்றும் சேரர் வந்தார் மற்றும் சேரர் வென்றார்",
"செந்தில் தூங்க விரும்புகிறார் மற்றும் செந்தில் கனவுகாண விரும்புகிறார் மற்றும் செந்தில் எழுந்திருக்க விரும்புகிறார்",
"சிறிய செந்தில் மற்றும் பெரிய செந்தில் தூங்குகிறார்கள்",
"செந்தில் சுதா உடன் பீர் உடன் மற்றும் இறைச்சி உடன் மற்றும் உருளைக்கிழங்குசாலட் உடன் வீட்டின் முன் மற்றும் வீட்டின் அருகே மற்றும் வீட்டின் பின்னால் வாட்டுகிறார்",
"செந்தில் தூங்குகிறான் என்று நான் நம்புகிறேன் மற்றும் செந்தில் தூங்குகிறான் என்று நீ நம்புகிறாய்",
"செந்தில் தனது மிதிவண்டியை பழுதுபார்த்தார் மற்றும் செந்தில் தனது மிதிவண்டியை சுத்தம்செய்தார்"
        ];

    const sentenceTemplate= '<div class="sentence">'
                             +'<h3></h3>'
                             +'<div class="questionBox">'
                                +'<div class="btn-toolbar" role="toolbar" aria-label="Click to exclude words">'
                                    +'<div class="btn-group" role="group" aria-label="Sentence"></div>'
                                    +'<div class="btn-group" role="group" aria-label="too-word">'
    //+'<button type="button" class="btn btn-default btn-sm lineThrough btn-word ">மற்றும்</button>'    
                                    +'</div>'
                                +'</div>'
                                +'<h4>நிகரான வாக்கியம்: <span class="sentenceResult"></span></h4>'
                             +'</div>'
    +'<input type="image" src="lib/open-iconic-master/png/plus-4x.png" class="addEllipsis"  onclick="cloneQuestion(this)">'
                             +'</div>';

    const sentenceTemplateHTML = $(sentenceTemplate);

    function cloneQuestion(htmlButton) {
        var button = $(htmlButton)
        var newQuestionBox = button.parent().find(".questionBox").first().clone(true);
        newQuestionBox.find('.btn-group[aria-label="too-word"]').after('<div class="btn-group remove-group" role="group" aria-label="remove alternative">'
            +'<input type="image" src="lib/open-iconic-master/png/delete-4x.png" class="removeEllipsis"  onclick="removeAlternative(this)">'                                                                   +'</div>');
        var btngroups = newQuestionBox.find('.btn-group');
        btngroups.first().children().removeClass("lineThrough");
        btngroups.eq(1).children().addClass("lineThrough");
        button.before(newQuestionBox);
    }
    function removeAlternative(htmlButton) {
        $(htmlButton).closest('.questionBox').remove();
    }
    
    function handleNewJSONContent(){    
        var ellipsisSentences = {"version":VERSION, 
                                 "sentences":[] };

        for (var index in sentences) {
            var temp = {"sentence" : sentences[index], "alternatives": [sentences[index].split(' ')]};
            ellipsisSentences["sentences"].push(temp);            
        }
        handleJSONContent(ellipsisSentences);
    }
    document.querySelector('.json-new').addEventListener('click', 
                                                         handleNewJSONContent, false);
    
    //read the content. extract the sentences and relevant ellipsis sentences
    function handleParserFileToViewSelect(evt) {
        var files = evt.target.files; // FileList object
        console.log(files);
        var reader = new FileReader();
        reader.onload = function(event){
            ellipsisData = JSON.parse(event.target.result);
            handleJSONContent(ellipsisData);
            // Setting this to empty will enable user to select the same file once again
            document.querySelector('.json-load').value = '';
            console.log('Parser File to view is read succcessfully !!!');
        }
        reader.readAsText(files[0],'utf-8');
    }
    function handleJSONContent(ellipsisData){
        
        if(ellipsisData['version'] != VERSION){
            alert('The version in the file is '+ellipsisData['version']+ ' as against '+VERSION+' . Load an appropriate version !!!');
            return;
        }
        
        // Clear the sentence list and Begin.
        var pageBodySection = $("#page-body");
        pageBodySection[0].innerHTML = '';
        
        for(var index in ellipsisData['sentences']){
            var ellipsisSentence = ellipsisData['sentences'][index];
            
            var sentenceDIV = sentenceTemplateHTML.clone(true);
            var sentence = ellipsisSentence['sentence'];
            sentenceDIV.find("h3").text("வாக்கியம் " + (Number(index) + 1) + ": " + sentence);

            var alternatives = ellipsisSentence['alternatives'];
            var tokens = sentence.split(' ').map(function(item){return item.trim();});
            
            var questionBox = sentenceDIV.find('.questionBox').last();
            var btnGroup = questionBox.find("div.btn-group").first();
            var isFirst = true;
            for(var index2 in alternatives){
                
                if(isFirst){
                    isFirst = false
                } else{
                    cloneQuestion(sentenceDIV.find('.addEllipsis').last());
                    questionBox = sentenceDIV.find('.questionBox').last();
                    btnGroup = questionBox.find("div.btn-group").first();
                }
                
                btnGroup[0].innerHTML = '';
                altTokens = alternatives[index2];
                for (var index3 in altTokens) {
                    var word = altTokens[index3]
                    var wordText = "<button type=\"button\" class=\"btn btn-default btn-sm btn-word ";
                    if(word == ""){
                        wordText += "lineThrough";
                        word = tokens[index3];
                    }
                    wordText += "\">" + word + "<\/button>"
                    btnGroup.append(wordText);
                }
                questionBox.find('.sentenceResult')
                           .text(altTokens.filter(function(item){ return item != ''}).join(' '));
            }
            pageBodySection[0].appendChild(sentenceDIV[0]);
        }
        
        $('.tag').click(function() {
            $(this).toggleClass('lineThrough');
        });

        $("button.btn-word").click(function() {

            $(this).blur();
            $(this).toggleClass('lineThrough');

            // build result sentence
            var toolbar = $(this).closest('.btn-toolbar')
            var sentenceText = toolbar.find('.btn-word').not('.lineThrough').map(function(){
                    return $(this).text();
            }).get().join(' ');
            var capitalizedSentence = '"' + sentenceText.charAt(0).toUpperCase() + sentenceText.slice(1) + '."';
            toolbar.parent().find('.sentenceResult').text(capitalizedSentence);
        });

    }
    document.querySelector('.json-load').addEventListener('change', 
                                                          handleParserFileToViewSelect, false);
    
    function saveParser(e){
        e.preventDefault();

        var result = $('.sentence').map(function() {
            var sentenceTitle = $(this).find('h3').text();
            var sentence = sentenceTitle.split(":")[1].trim();
            var sentenceList = $(this).find('.questionBox').map( function() {
                sentenceResult = $(this).find('button.btn-word').map(function(){
                    if(this.classList.contains('lineThrough')){
                        return '';
                    }
                    else{
                        return $(this).text();
                    }
                }).get();
                //sentenceResultText = sentenceResult.join(" ").trim();
                //var output = sentence.localeCompare(sentenceResultText) != 0 ? sentenceResult : null;
                console.log(sentenceResult);
                return [sentenceResult];
            }).get();
            //var output = sentenceList.length > 0 ? {sentence : sentenceTitle, alternatives: sentenceList} : null;
            var output = {"sentence" : sentence, "alternatives": sentenceList};
            return output;
        }).get();
        
        result = {"version":VERSION,
                 "sentences": result};

        var blob = new Blob([JSON.stringify(result)], {
            "type": "application/json"
        });

        var a = document.createElement("a");
        a.download = name;
        a.href = URL.createObjectURL(blob);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    document.querySelector('.json-save').onclick = saveParser;
    
    handleNewJSONContent();
}

