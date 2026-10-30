/**
 * ==========================================================================
 * Structured Data (Schema.org) for Sprunki Clicker
 * Injects appropriate JSON-LD for Google Rich Results based on page:
 * - Home Page: VideoGame & FAQPage
 * - Category Pages: CollectionPage
 * ==========================================================================
 */

(function () {
    const pathname = window.location.pathname.toLowerCase();

    const categorySchemas = {
        'shooting.html': {
            name: "Free Online Shooting Games",
            description: "Collection of unblocked shooting, aim reflex, and fast-paced tap games on Sprunki Clicker.",
            url: "https://sprunki-clicker.github.io/category/shooting.html"
        },
        'action.html': {
            name: "Free Online Action Games",
            description: "Adrenaline-packed unblocked action games and tap-adventure challenges on Sprunki Clicker.",
            url: "https://sprunki-clicker.github.io/category/action.html"
        },
        'sports.html': {
            name: "Free Online Sports Games",
            description: "Collection of unblocked sports, football, basketball, and athletic clickers on Sprunki Clicker.",
            url: "https://sprunki-clicker.github.io/category/sports.html"
        },
        'puzzle.html': {
            name: "Free Online Puzzle Games",
            description: "Collection of unblocked puzzle games, logic challenges, and brain teasers on Sprunki Clicker.",
            url: "https://sprunki-clicker.github.io/category/puzzle.html"
        },
        'cars.html': {
            name: "Free Online Car & Racing Games",
            description: "Unblocked browser car, racing, stunt driving, and turbo speed clickers on Sprunki Clicker.",
            url: "https://sprunki-clicker.github.io/category/cars.html"
        },
        'other.html': {
            name: "Free Online Clicker & Casual Games",
            description: "Collection of unblocked idle clicker games, rhythm tap games, and casual browser games on Sprunki Clicker.",
            url: "https://sprunki-clicker.github.io/category/other.html"
        }
    };

    let schemaData = null;

    // Check if current page is one of the category pages
    const matchedCategoryKey = Object.keys(categorySchemas).find(key => pathname.includes(key));

    if (matchedCategoryKey) {
        const cat = categorySchemas[matchedCategoryKey];
        schemaData = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": cat.name,
            "description": cat.description,
            "url": cat.url,
            "publisher": {
                "@type": "Organization",
                "name": "Sprunki Clicker Gaming Hub",
                "url": "https://sprunki-clicker.github.io/",
                "logo": "https://sprunki-clicker.github.io/img/sprunki-clicker-and-merge-phase-3.png"
            }
        };
    } else if (pathname === '/' || pathname.endsWith('/index.html') || pathname.endsWith('index')) {
        // Homepage: VideoGame & FAQPage
        schemaData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "VideoGame",
                    "name": "Sprunki Clicker",
                    "alternateName": ["Sprunki Clicker Unblocked", "Sprunki Clicker and Merge Phase 3"],
                    "url": "https://sprunki-clicker.github.io/",
                    "description": "Sprunki Clicker is an addictive musical rhythm idle clicker game. Play Sprunki Clicker unblocked on school Chromebooks, unlock iconic Sprunki characters, and merge musical beats on top unblocked websites for school.",
                    "genre": ["Rhythm Game", "Incremental Game", "Idle Game", "Clicker Game", "Casual"],
                    "playMode": "SinglePlayer",
                    "applicationCategory": "Game",
                    "operatingSystem": "Web Browser (HTML5, Chromebook, PC, Mobile)",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    }
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is Sprunki Clicker and how do you play it?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Sprunki Clicker is an incremental rhythm clicker game inspired by the Incredibox Sprunki universe. Players tap to produce beats, upgrade musical instruments, and merge characters to evolve through exciting sound phases."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Where can I play Sprunki Clicker unblocked at school?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can play Sprunki Clicker unblocked directly on our portal! As one of the top unblocked websites for school, our games bypass classroom network blocks smoothly without requiring downloads, extensions, or VPNs."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are unblocked games for school safe to play on Chromebooks?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, all unblocked games for school on our platform run on sandboxed HTML5 and WebGL web standards. They are completely free from malware, pop-ups, and downloads, ensuring total safety on school-managed Chromebooks and laptops."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Does Sprunki Clicker save my score and unlocked phases?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes! Sprunki Clicker automatically saves your total beats, unlocked characters, and upgrade levels in your web browser's local storage so you can easily pick up where you left off anytime."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What other unblocked games can I play here?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Our website features hundreds of popular unblocked games across categories including Action, Racing, Sports, Puzzle, and Idle Clickers—including titles like Drive Mad, Retro Bowl, Vex 8, and Basketball Stars."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is Sprunki Clicker free on mobile and tablet devices?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes! Sprunki Clicker unblocked is fully optimized for touchscreens on iOS (iPhone/iPad) and Android, offering ultra-responsive tapping with zero latency."
                            }
                        }
                    ]
                }
            ]
        };
    }

    if (schemaData) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schemaData);
        document.head.appendChild(script);
    }
})();
