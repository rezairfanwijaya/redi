import codesk from '../assets/Codesk.jpeg'
import creativeBusiness from '../assets/Creative-Business.png'
import creativeLanding from '../assets/Creative-Landing.png'
import marketingStartup from '../assets/Marketing-Startup.png'
import modernBusiness from '../assets/Modern-Business.png'
import snowLake from '../assets/Snowlake.png'
import zix from '../assets/zix.jpeg'
import CardTheme from '../micro-components/CardTheme';

const Theme = () => {
    var themes = [
        {
            "image": codesk,
            "title": "Codesk",
            "link": "https://preview.themeforest.net/item/codesk-creative-office-space-wordpress-theme/full_screen_preview/26326162?_ga=2.101484545.1048386548.1668953157-268607337.1638069860"
        },
        {
            "image": creativeBusiness,
            "title": "Creative Business",
            "link": "https://shtheme.org/demosd/snowlake/?page_id=271"
        },
        {
            "image": creativeLanding,
            "title": "Creative Landing",
            "link": "https://shtheme.org/demosd/snowlake/?page_id=265"
        },
        {
            "image": marketingStartup,
            "title": "Marketing Startup",
            "link": "https://shtheme.org/demosd/snowlake/?page_id=267"
        },
        {
            "image": modernBusiness,
            "title": "Modern Business",
            "link": "https://shtheme.org/demosd/snowlake/?page_id=259"
        },
        {
            "image": snowLake,
            "title": "Snow Lake",
            "link": "https://shtheme.org/preview/snowlake"
        },
        {
            "image": zix,
            "title": "Zix",
            "link": "https://preview.themeforest.net/item/zix-digital-agency-wordpress-theme/full_screen_preview/25565367?_ga=2.8683573.1048386548.1668953157-268607337.1638069860"
        },
    ]

    return (<>
        <div className="theme mx-3 sm:mx-6 md:my-8 flex flex-col gap-3 lg:gap-11 rounded-sm">
            {themes.map((theme) => (
                <CardTheme
                    image={theme.image}
                    titleTheme={theme.title}
                    linkTheme={theme.link} />
            ))}
        </div>
    </>);
}

export default Theme;