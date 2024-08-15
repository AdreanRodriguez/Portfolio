import whereItsAt from '../assets/whereitsat.png'
import myMovieDatabase from '../assets/mmdb.png'
import nectar from '../assets/nectar.png'
import whereItsAtFull from '../assets/whereItsAtFull.png'

const language = ["HTML", "CSS", "JavaScript"];
const framework = ["React", "Angular", "Vue.js", "Next.js"];

const projects = [
    {
        id: 1,
        title: "Where It's @",
        url: "https://github.com/AdreanRodriguez/WhereItsAt",
        img: whereItsAt,
        fullImg: whereItsAtFull,
        skills: [framework[0], language[2]].join(", "),
        desc: [
            "useState, useEffect",
            "Props",
            "API - hantering med axios",
            "Routing mellan Pages med react - router - dom",
            "Statehantering med externt bibliotek - Zustand",
        ]
    },
    {
        id: 2,
        title: "My Movie Database",
        url: "https://github.com/AdreanRodriguez/my-movie-database",
        img: myMovieDatabase,
        skills: [language[0], language[1], language[2]].join(", "),
        desc: [
            "API - hantering med axios",
        ]
    },
    {
        id: 3,
        title: "Nectar",
        url: "https://github.com/AdreanRodriguez/Nectar",
        img: nectar,
        skills: [language[0], language[1]].join(", "),
        desc: [
            "Statisk sida",
            "Färdigheter i grid och flex",
            "Efterlikna en figma skiss"
        ]
    },    
    {
        id: 4,
        title: "Här är jag ",
        url: "https://github.com/AdreanRodriguez/WhereItsAt",
        img: whereItsAt,
        skills: [framework[0], language[2]].join(", "),
        desc: [""]
    },    
    {
        id: 5,
        title: "Hej och hå",
        url: "https://github.com/AdreanRodriguez/WhereItsAt",
        img: whereItsAt,
        skills: [framework[0], language[2]].join(", "),
        desc: [""]
    },

];

export {
    projects,
    language,
    framework
};