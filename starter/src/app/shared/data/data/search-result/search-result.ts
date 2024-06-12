export interface all {
    url : string;
    title : string;
    desc : string;
    rating : number;
    votes : number;
    type : string;
    showRating : boolean;
    contentSide : string;
}
export interface video{
    heading : string;
    data : videos[];
}
export interface videos{
    url : string;
    youtubeUrl : string;
    title : string;
    rating : number;
    votes : number;
    type : string;
}

export const allData : all[] = [
    {
        url : 'https://themeforest.net/user/pixelstrap/portfolio/',
        title : 'PixelStrap - Portfolio | ThemeForest',
        desc : "2020's best selling creative wp themes. the #1 source of premium wp themes! themeforest 45,000+ wp themes & website templates from $2. check it out!",
        rating : 3,
        votes : 590,
        type : 'Theme',
        showRating : false,
        contentSide : 'left',
    },
    {
        url : 'PixelStrap - Portfolio | ThemeForestthemeforest.net › user ›',
        title : 'PixelStrap - Portfolio | ThemeForest',
        desc : "the #1 marketplace for premium website templates, including themes for wordpress, magento, drupal, joomla, and more. create a website, fast.",
        rating : 3,
        votes : 590,
        type : 'Theme',
        showRating : false,
        contentSide : 'left',
    },
    {
        url : 'https://themeforest.net/user/pixelstrap/portfolio',
        title : 'Morbi feugiat mauris vel semper fringilla.',
        desc : "mofi introduces a ielts coaching, toefl coaching, gre coaching, gmat coaching, sat coaching in surat.",
        rating : 3,
        votes : 590,
        type : 'Theme',
        showRating : true,
        contentSide : 'left',
    },
    {
        url : 'https://themeforest.net/user/pixelstrap/portfolio',
        title : 'Morbi feugiat mauris vel semper fringilla.',
        desc : "mofi introduces a ielts coaching, toefl coaching, gre coaching, gmat coaching, sat coaching in surat.",
        rating : 3,
        votes : 590,
        type : 'Theme',
        showRating : true,
        contentSide : 'left',
    },
    {
        url : 'https://themeforest.net/user/pixelstrap/portfolio',
        title : 'Pixelstrap Website Templates from ThemeForest',
        desc : "get 59 pixelstrap website templates on themeforest. buy pixelstrap website templates from $7. all created by our global community of independent web ...",
        rating : 3,
        votes : 590,
        type : 'Theme',
        showRating : true,
        contentSide : 'right',
    },
    {
        url : 'https://themeforest.net/user/pixelstrap/portfolio',
        title : 'Morbi feugiat mauris vel semper fringilla.',
        desc : "mofi introduces a ielts coaching, toefl coaching, gre coaching, gmat coaching, sat coaching in surat.",
        rating : 3,
        votes : 590,
        type : 'Theme',
        showRating : true,
        contentSide : 'right',
    },
]

export const videosData : video[] = [
    {
        heading : 'About 6,000 results (0.60 seconds)',
        data : [
            {
                url : 'https://themeforest.net/user/pixelstrap/portfolio',
                youtubeUrl : 'https://www.youtube.com/embed/CJnfAXlBRTE',
                title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                rating : 3,
                votes : 590,
                type : 'Theme'
            },
            {
                url : 'https://themeforest.net/user/pixelstrap/portfolio',
                youtubeUrl : 'https://www.youtube.com/embed/wpmHZspl4EM',
                title : 'Lorem Ipsum is simply dummy text of the printing.',
                rating : 3,
                votes : 590,
                type : 'Theme'
            },
            {
                url : 'https://themeforest.net/user/pixelstrap/portfolio',
                youtubeUrl : 'https://www.youtube.com/embed/-L4gEk7cOfk',
                title : 'Morbi eget quam et purus commodo dapibus.',
                rating : 3,
                votes : 590,
                type : 'Theme'
            },
        ]
    },
    {
        heading : 'About 6,000 results (0.60 seconds)',
        data : [
            {
                url : 'https://themeforest.net/user/pixelstrap/portfolio',
                youtubeUrl : 'https://www.youtube.com/embed/CJnfAXlBRTE',
                title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                rating : 3,
                votes : 590,
                type : 'Theme'
            },
            {
                url : 'https://themeforest.net/user/pixelstrap/portfolio',
                youtubeUrl : 'https://www.youtube.com/embed/-L4gEk7cOfk',
                title : 'Morbi eget quam et purus commodo dapibus.',
                rating : 3,
                votes : 590,
                type : 'Theme'
            },
            {
                url : 'https://themeforest.net/user/pixelstrap/portfolio',
                youtubeUrl : 'https://www.youtube.com/embed/wpmHZspl4EM',
                title : 'Lorem Ipsum is simply dummy text of the printing.',
                rating : 3,
                votes : 590,
                type : 'Theme'
            },
        ]
    }
    
]