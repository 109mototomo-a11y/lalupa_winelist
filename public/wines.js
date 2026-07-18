// ===================================
// La Lupa Wine List - Data
// ===================================

const initialWines = [
    {
        "id": 1,
        "body": "full",
        "name": {
            "en": "Barolo",
            "ja": "バローロ"
        },
        "tags": [
            {
                "en": "Long Aging",
                "ja": "長期熟成"
            },
            {
                "en": "Elegant",
                "ja": "エレガント"
            },
            {
                "en": "Powerful",
                "ja": "力強い"
            }
        ],
        "type": "red",
        "price": 13860,
        "region": {
            "en": "Piedmont",
            "ja": "ピエモンテ",
            "ko": "피에몬테",
            "zh-TW": "皮埃蒙特"
        },
        "winery": {
            "en": "Massolino",
            "ja": "マッソリーノ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Nebbiolo",
            "ja": "ネッビオーロ"
        },
        "vintage": "2020",
        "is_visible": false,
        "description": {
            "en": "The 'King of Wines'. Rich and tense, with elegance within a solid structure.",
            "ja": "「ワインの王」。芳醇さと緊張感があり, しっかりとした構造の中にエレガンスがある。"
        }
    },
    {
        "id": 2,
        "body": "dry",
        "name": {
            "en": "Langhe Sauvignon",
            "ja": "ランゲ・ソーヴィニヨン"
        },
        "tags": [
            {
                "en": "Apricot",
                "ja": "アプリコット"
            },
            {
                "en": "Ripe Fruit",
                "ja": "熟した果実"
            },
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            }
        ],
        "type": "white",
        "price": 5390,
        "region": {
            "en": "Piedmont",
            "ja": "ピエモンテ",
            "ko": "피에몬테",
            "zh-TW": "皮埃蒙特"
        },
        "winery": {
            "en": "Bricco Maiolica",
            "ja": "ブリッコマイオーリカ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Sauvignon",
            "ja": "ソーヴィニヨン"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Aromas of apricot-like fruit, fresh on the palate yet concentrated.",
            "ja": "アプリコットのような果実の香り, フレッシュな口当たりながら凝縮感がある。"
        }
    },
    {
        "id": 3,
        "body": "dry",
        "name": {
            "en": "Soave Classico \"Casette Foscarino\"",
            "ja": "ソアーヴェ・クラシコ \"カゼッテ・フォスカリーノ\""
        },
        "tags": [
            {
                "en": "Vanilla Aroma",
                "ja": "バニラ香"
            },
            {
                "en": "Mellow",
                "ja": "まろやか"
            },
            {
                "en": "Full Body",
                "ja": "フルボディ"
            }
        ],
        "type": "white",
        "price": 4620,
        "region": {
            "en": "Veneto",
            "ja": "ヴェネト",
            "ko": "베네토",
            "zh-TW": "威尼托"
        },
        "winery": {
            "en": "Monte Tondo",
            "ja": "モンテ トンド"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Garganega, Trebbiano di Soave",
            "ja": "ガルガネガ、トレッビアーノ・ディ・ソアーヴェ"
        },
        "vintage": "2022",
        "is_visible": false,
        "description": {
            "en": "Vanilla aromas and mellow taste. Flavors of honey and dried fruit, rich and smooth.",
            "ja": "バニラの香りとまろやかな味わい。ハチミツやドライフルーツの風味, リッチで滑らか。"
        }
    },
    {
        "id": 4,
        "body": "medium",
        "name": {
            "en": "Valpolicella Superiore",
            "ja": "ヴァルポリチェッラ・スペリオーレ"
        },
        "tags": [
            {
                "en": "Dry",
                "ja": "ドライ"
            },
            {
                "en": "Red Fruit",
                "ja": "赤い果実"
            },
            {
                "en": "Minerality",
                "ja": "ミネラル"
            }
        ],
        "type": "red",
        "price": 5080,
        "region": {
            "en": "Veneto",
            "ja": "ヴェネト",
            "ko": "베네토",
            "zh-TW": "威尼托"
        },
        "winery": {
            "en": "Stefano Accordini",
            "ja": "ステファノ アッコルディーニ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Corvina, Rondinella, Molinara",
            "ja": "コルヴィーナ、ロンディネッラ、モリナーラ"
        },
        "vintage": "2022",
        "is_visible": false,
        "description": {
            "en": "Deep ruby color. Aromas of strawberry and cherry, with mineral nuances. Dry with moderate tannins.",
            "ja": "濃いルビー色。イチゴやサクランボの香り, ミネラルのニュアンス。ドライで程よいタンニン。"
        }
    },
    {
        "id": 5,
        "body": "dry",
        "name": {
            "en": "Traminer Aromatico",
            "ja": "トラミネール アロマティコ"
        },
        "tags": [
            {
                "en": "Aromatic",
                "ja": "アロマティック"
            },
            {
                "en": "Lychee Aroma",
                "ja": "ライチの香り"
            },
            {
                "en": "Spicy",
                "ja": "スパイシー"
            }
        ],
        "type": "white",
        "price": 4470,
        "region": {
            "en": "Friuli",
            "ja": "フリウリ",
            "ko": "프리울리",
            "zh-TW": "弗留利"
        },
        "winery": {
            "en": "Toblar",
            "ja": "トブラール"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Traminer Aromatico",
            "ja": "トラミネール・アロマティコ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "Aromatic scents of lychee, rose, and spice. Smooth with a mineral feel.",
            "ja": "ライチやバラ, スパイスのアロマティックな香り。滑らかでミネラル感がある。"
        }
    },
    {
        "id": 6,
        "body": "full",
        "name": {
            "en": "Brunello di Montalcino",
            "ja": "ブルネッロ ディ モンタルチーノ"
        },
        "tags": [
            {
                "en": "Long Aging",
                "ja": "長期熟成"
            },
            {
                "en": "Sangiovese",
                "ja": "サンジョヴェーゼ"
            },
            {
                "en": "Complexity",
                "ja": "複雑味"
            }
        ],
        "type": "red",
        "price": 11550,
        "region": {
            "en": "Tuscany",
            "ja": "トスカーナ",
            "ko": "토스카나",
            "zh-TW": "托斯卡納"
        },
        "winery": {
            "en": "Martoccia",
            "ja": "マルトッチャ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Sangiovese Grosso",
            "ja": "サンジョヴェーゼ・グロッソ"
        },
        "vintage": "2019",
        "is_visible": true,
        "description": {
            "en": "A great Tuscan red. Complex aromas of plum and cherry, smooth tannins and a deep finish.",
            "ja": "トスカーナの偉大な赤。複雑なプラムやチェリーの香り, 滑らかなタンニンと深い余韻。"
        }
    },
    {
        "id": 7,
        "body": "medium",
        "name": {
            "en": "Chianti Classico \"Le Masse di Greve\"",
            "ja": "キャンティ・クラシコ \"レ・マッセ・ディ・グレーヴェ\""
        },
        "tags": [
            {
                "en": "Chianti",
                "ja": "キャンティ"
            },
            {
                "en": "Merlot Blend",
                "ja": "メルローブレンド"
            },
            {
                "en": "Pairs with Meat",
                "ja": "肉料理に合う"
            }
        ],
        "type": "red",
        "price": 4520,
        "region": {
            "en": "Tuscany",
            "ja": "トスカーナ",
            "ko": "토스카나",
            "zh-TW": "托斯卡納"
        },
        "winery": {
            "en": "Lanciola",
            "ja": "ランチョーラ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Sangiovese Grosso",
            "ja": "サンジョヴェーゼ・グロッソ"
        },
        "vintage": "2021",
        "is_visible": true,
        "description": {
            "en": "Pairs well with simple red meats, mushroom dishes, and hard cheeses.",
            "ja": "シンプルな赤身肉やキノコ料理, ハードチーズとよく合う。"
        }
    },
    {
        "id": 8,
        "body": "medium",
        "name": {
            "en": "San Severo Rosso",
            "ja": "サン・セヴェーロ ロッソ"
        },
        "tags": [
            {
                "en": "Ruby Color",
                "ja": "ルビー色"
            },
            {
                "en": "Fruity",
                "ja": "フルーティ"
            },
            {
                "en": "Harmonious",
                "ja": "調和のとれた"
            }
        ],
        "type": "red",
        "price": 2780,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "d'Alfonso del Sordo",
            "ja": "ダルフォンソ デル ソルド"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Montepulciano",
            "ja": "モンテプルチャーノ"
        },
        "vintage": "2021",
        "is_visible": false,
        "description": {
            "en": "Ruby red color. Rich fruitiness typical of wine, with a dry and balanced taste.",
            "ja": "ルビーレッド色。ワインらしい豊かな果実味と, ドライでバランスの取れた味わい。"
        }
    },
    {
        "id": 9,
        "body": "dry",
        "name": {
            "en": "San Severo Bianco",
            "ja": "サン・セヴェーロ ビアンコ"
        },
        "tags": [
            {
                "en": "Floral Aroma",
                "ja": "花のような香り"
            },
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            },
            {
                "en": "Dry",
                "ja": "辛口"
            }
        ],
        "type": "white",
        "price": 2780,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "d'Alfonso del Sordo",
            "ja": "ダルフォンソ デル ソルド"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Bombino Bianco, Trebbiano, Malvasia",
            "ja": "ボンビーノ・ビアンコ、トレッビアーノ、マルヴァジア"
        },
        "vintage": "2023",
        "is_visible": false,
        "description": {
            "en": "Floral aromas and fresh fruitiness. Crisp acidity pairs well with appetizers and seafood.",
            "ja": "花のような香りとフレッシュな果実味。酸味が爽やかで前菜や魚介に合う。"
        }
    },
    {
        "id": 10,
        "body": "dry",
        "name": {
            "en": "California Chardonnay",
            "ja": "カリフォルニア シャルドネ"
        },
        "tags": [
            {
                "en": "Rich",
                "ja": "濃厚"
            },
            {
                "en": "Vanilla Aroma",
                "ja": "バニラ香"
            },
            {
                "en": "Mellow",
                "ja": "まろやか"
            }
        ],
        "type": "white",
        "price": 4840,
        "region": {
            "en": "California",
            "ja": "カリフォルニア",
            "ko": "캘리포니아",
            "zh-TW": "加州"
        },
        "winery": {
            "en": "Mighty Valley",
            "ja": "マイティ ヴァレー"
        },
        "country": {
            "en": "USA",
            "ja": "アメリカ",
            "ko": "미국",
            "zh-TW": "美國"
        },
        "variety": {
            "en": "Chardonnay",
            "ja": "シャルドネ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "Aromas of Meyer lemon and vanilla. Rich and mellow yet with a clean finish.",
            "ja": "マイヤーレモンやバニラの香り。濃厚でまろやかながら後味はすっきり。"
        }
    },
    {
        "id": 11,
        "body": "dry",
        "name": {
            "en": "Estate Reserve Sauvignon Blanc",
            "ja": "エステート・リザーヴ ソーヴィニヨン・ブラン"
        },
        "tags": [
            {
                "en": "Citrus",
                "ja": "柑橘系"
            },
            {
                "en": "Juicy",
                "ja": "ジューシー"
            },
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            }
        ],
        "type": "white",
        "price": 3300,
        "region": {
            "en": "Curicó Valley",
            "ja": "クリコ",
            "ko": "쿠리코 밸리",
            "zh-TW": "庫里科山谷"
        },
        "winery": {
            "en": "Millaman",
            "ja": "ミラマン"
        },
        "country": {
            "en": "Chile",
            "ja": "チリ",
            "ko": "칠레",
            "zh-TW": "智利"
        },
        "variety": {
            "en": "Sauvignon Blanc",
            "ja": "ソーヴィニヨン・ブラン"
        },
        "vintage": "2024",
        "is_visible": false,
        "description": {
            "en": "Bursting with aromas of grapefruit and peach. Juicy and very fresh.",
            "ja": "グレープフルーツや桃などの果実味あふれる香り。ジューシーで非常にフレッシュ。"
        }
    },
    {
        "id": 12,
        "body": "light",
        "name": {
            "en": "Albino",
            "ja": "アルビーノ"
        },
        "tags": [
            {
                "en": "Fruity",
                "ja": "フルーティ"
            },
            {
                "en": "Juicy",
                "ja": "ジューシー"
            },
            {
                "en": "Gorgeous",
                "ja": "華やか"
            }
        ],
        "type": "red",
        "price": 4400,
        "region": {
            "en": "Abruzzo",
            "ja": "アブルッツォ",
            "ko": "아브루초",
            "zh-TW": "阿布魯佐"
        },
        "winery": {
            "en": "Venea",
            "ja": "ヴェネア"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Montepulciano",
            "ja": "モンテプルチャーノ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Floral scents like violets, and flavors of red berries like cherry and raspberry. Very fruity and juicy.",
            "ja": "スミレのような花の香りと, チェリーやラズベリーなど赤いベリー系の風味。非常にフルーティでジューシー。"
        }
    },
    {
        "id": 13,
        "body": "full",
        "name": {
            "en": "Estate Reserve Cabernet Sauvignon",
            "ja": "エステート・リザーヴ カベルネ・ソーヴィニヨン"
        },
        "tags": [
            {
                "en": "Fruity",
                "ja": "果実味"
            },
            {
                "en": "Spicy",
                "ja": "スパイシー"
            },
            {
                "en": "Sweet Tannins",
                "ja": "甘いタンニン"
            }
        ],
        "type": "red",
        "price": 3300,
        "region": {
            "en": "Curicó Valley",
            "ja": "クリコ",
            "ko": "쿠리코 밸리",
            "zh-TW": "庫里科山谷"
        },
        "winery": {
            "en": "Millaman",
            "ja": "ミラマン"
        },
        "country": {
            "en": "Chile",
            "ja": "チリ",
            "ko": "칠레",
            "zh-TW": "智利"
        },
        "variety": {
            "en": "Cabernet Sauvignon",
            "ja": "カベルネ・ソーヴィニヨン"
        },
        "vintage": "2022",
        "is_visible": false,
        "description": {
            "en": "Sweet aromas of cherry and ripe plum. Nuances of spice, ripe sweet tannins.",
            "ja": "チェリーや熟したプラムの甘さを感じる香り。スパイスのニュアンス, 熟した甘いタンニン。"
        }
    },
    {
        "id": 14,
        "body": "full",
        "name": {
            "en": "Zinfandel Organic",
            "ja": "ジンファンデル オーガニック"
        },
        "tags": [
            {
                "en": "Organic",
                "ja": "オーガニック"
            },
            {
                "en": "Smooth",
                "ja": "滑らか"
            },
            {
                "en": "Soft Astringency",
                "ja": "柔らかい渋み"
            }
        ],
        "type": "red",
        "price": 3740,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "Casa Vinicola",
            "ja": "カーサ・ヴィニコラ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Zinfandel",
            "ja": "ジンファンデル"
        },
        "vintage": "2024",
        "is_visible": false,
        "description": {
            "en": "EU Organic Certified. Distinctive and graceful aroma, dry and smooth. Soft tannins.",
            "ja": "EUオーガニック認証。個性的で優美な香り, ドライで滑らか。柔らかいタンニン。"
        }
    },
    {
        "id": 15,
        "body": "semidry",
        "name": {
            "en": "California Chardonnay",
            "ja": "カリフォルニア シャルドネ"
        },
        "tags": [
            {
                "en": "Barrel Aged",
                "ja": "樽熟成"
            },
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            },
            {
                "en": "Vanilla Aroma",
                "ja": "バニラ香"
            }
        ],
        "type": "white",
        "price": 4580,
        "region": {
            "en": "California",
            "ja": "カリフォルニア",
            "ko": "캘리포니아",
            "zh-TW": "加州"
        },
        "winery": {
            "en": "Navigator Wine Collection",
            "ja": "ナヴィゲーター ワイン コレクション"
        },
        "country": {
            "en": "USA",
            "ja": "アメリカ",
            "ko": "미국",
            "zh-TW": "美國"
        },
        "variety": {
            "en": "Chardonnay",
            "ja": "シャルドネ"
        },
        "vintage": "2023",
        "is_visible": false,
        "description": {
            "en": "Aromas of green apple, citrus, and vanilla. Fresh minerality and a crisp barrel-aged finish.",
            "ja": "青リンゴ, シトラス, バニラの香り。フレッシュなミネラル感と樽熟成の爽やかな後味。"
        }
    },
    {
        "id": 16,
        "body": "light",
        "name": {
            "en": "California Cabernet Sauvignon",
            "ja": "カリフォルニア カベルネソーヴィニヨン"
        },
        "tags": [
            {
                "en": "Rich",
                "ja": "濃厚"
            },
            {
                "en": "Powerful",
                "ja": "力強い"
            },
            {
                "en": "Long Finish",
                "ja": "長い余韻"
            }
        ],
        "type": "red",
        "price": 4580,
        "region": {
            "en": "California",
            "ja": "カリフォルニア",
            "ko": "캘리포니아",
            "zh-TW": "加州"
        },
        "winery": {
            "en": "Navigator Wine Collection",
            "ja": "ナヴィゲーター ワイン コレクション"
        },
        "country": {
            "en": "USA",
            "ja": "アメリカ",
            "ko": "미국",
            "zh-TW": "美國"
        },
        "variety": {
            "en": "Cabernet Sauvignon",
            "ja": "カベルネ・ソーヴィニヨン"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "Complex and powerful, rich yet easy to drink. Luxurious and long finish.",
            "ja": "複雑で力強く, 濃厚でありながら飲みやすい。豪華で長い余韻。"
        }
    },
    {
        "id": 17,
        "body": "dry",
        "name": {
            "en": "Brut Reserve",
            "ja": "ブリュット・レゼルヴ"
        },
        "tags": [
            {
                "en": "Air France Selection",
                "ja": "エールフランス採用"
            },
            {
                "en": "Crisp/Refreshing",
                "ja": "爽やか"
            },
            {
                "en": "Blanc de Blancs",
                "ja": "ブラン・ド・ブラン"
            }
        ],
        "type": "sparkling",
        "price": 2640,
        "region": {
            "en": "Normandy",
            "ja": "ノルマンディー",
            "ko": "노르망디",
            "zh-TW": "諾曼第"
        },
        "winery": {
            "en": "Joie de France",
            "ja": "ジョワ・ド・フランス"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Airén",
            "ja": "アイレン"
        },
        "vintage": "NV",
        "is_visible": false,
        "description": {
            "en": "Selected by Air France. Delicate bubbles and orchard fruit aromas, smooth and fruity.",
            "ja": "エールフランス採用。繊細な泡立ちと果樹園果実のアロマ, 滑らかでフルーティー。"
        }
    },
    {
        "id": 18,
        "body": "dry",
        "name": {
            "en": "Brut Reserve",
            "ja": "ブリュット・レゼルヴ"
        },
        "tags": [
            {
                "en": "Champagne",
                "ja": "シャンパーニュ"
            },
            {
                "en": "Delicate Bubbles",
                "ja": "繊細な泡"
            },
            {
                "en": "Long Aging",
                "ja": "長期熟成"
            }
        ],
        "type": "sparkling",
        "price": 13640,
        "region": {
            "en": "Champagne",
            "ja": "シャンパーニュ",
            "ko": "샴페인",
            "zh-TW": "香檳"
        },
        "winery": {
            "en": "Boizel",
            "ja": "ボワゼル"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Pinot Noir, Chardonnay, Pinot Meunier",
            "ja": "ピノ・ノワール、シャルドネ、ピノ・ムニエ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Aged for 36 months. Nuances of white flowers, peach, and pastry. Fresh and elegant.",
            "ja": "36ヶ月長期熟成。白い花や桃, ペイストリーのニュアンス。フレッシュでエレガント。"
        }
    },
    {
        "id": 19,
        "body": "dry",
        "name": {
            "en": "Cuvée de la Maison",
            "ja": "キュヴェ・ド・ラ・メゾン"
        },
        "tags": [
            {
                "en": "Mellow",
                "ja": "まろやか"
            },
            {
                "en": "Tropical",
                "ja": "トロピカル"
            },
            {
                "en": "Smooth",
                "ja": "滑らか"
            }
        ],
        "type": "white",
        "price": 2970,
        "region": {
            "en": "Languedoc",
            "ja": "ラングドック",
            "ko": "랑그독",
            "zh-TW": "朗格多克"
        },
        "winery": {
            "en": "LGI Wines",
            "ja": "LGIワイン"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Chardonnay",
            "ja": "シャルドネ"
        },
        "vintage": "2024",
        "is_visible": true,
        "description": {
            "en": "Typical Southern French Chardonnay. Aromas of peach and pineapple, mellow and smooth.",
            "ja": "典型的な南仏シャルドネ。ピーチとパイナップルの香り, まろやかで滑らか。"
        }
    },
    {
        "id": 20,
        "body": "dry",
        "name": {
            "en": "Riesling \"Cuvée Jupiter\"",
            "ja": "リースリング \"キュヴェ・ジュピター\""
        },
        "tags": [
            {
                "en": "Dry",
                "ja": "辛口"
            },
            {
                "en": "Elegant",
                "ja": "エレガント"
            },
            {
                "en": "Minerality",
                "ja": "ミネラル感"
            }
        ],
        "type": "white",
        "price": 5440,
        "region": {
            "en": "Alsace",
            "ja": "アルザス",
            "ko": "알자스",
            "zh-TW": "阿爾薩斯"
        },
        "winery": {
            "en": "Cave Vinicole de Pfaffenheim",
            "ja": "カーヴ・デ・ヴィニュロン・ド・ファッフェンハイム"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Riesling",
            "ja": "リースリング"
        },
        "vintage": "2023",
        "is_visible": false,
        "description": {
            "en": "Dry and elegant. Flinty minerality, with characteristics of citrus and pine resin.",
            "ja": "ドライでエレガント。火打石のようなミネラル感, 柑橘類や松脂の特徴。"
        }
    },
    {
        "id": 21,
        "body": "dry",
        "name": {
            "en": "Chenin Blanc",
            "ja": "シュナン・ブラン"
        },
        "tags": [
            {
                "en": "Dry",
                "ja": "辛口"
            },
            {
                "en": "Crisp/Refreshing",
                "ja": "爽やか"
            },
            {
                "en": "Tropical",
                "ja": "トロピカル"
            }
        ],
        "type": "white",
        "price": 3610,
        "region": {
            "en": "Western Cape",
            "ja": "ウェスタンケープ",
            "ko": "웨스턴 케이프",
            "zh-TW": "西開普"
        },
        "winery": {
            "en": "Swartland Winery",
            "ja": "スワートランド・ワイナリー"
        },
        "country": {
            "en": "South Africa",
            "ja": "南アフリカ",
            "ko": "남아프리카",
            "zh-TW": "南非"
        },
        "variety": {
            "en": "Chenin Blanc",
            "ja": "シュナン・ブラン"
        },
        "vintage": "2024",
        "is_visible": false,
        "description": {
            "en": "Crisp and dry. Aromas of guava and passion fruit, flavor of lime zest.",
            "ja": "すっきりとした辛口。グアバやパッションフルーツの香り, ライムの皮の風味。"
        }
    },
    {
        "id": 22,
        "body": "medium",
        "name": {
            "en": "Château Bernadotte",
            "ja": "シャトー・ベルナドット"
        },
        "tags": [
            {
                "en": "Bordeaux",
                "ja": "ボルドー"
            },
            {
                "en": "Haut-Médoc",
                "ja": "オー・メドック"
            },
            {
                "en": "Dry",
                "ja": "辛口"
            }
        ],
        "type": "red",
        "price": 5860,
        "region": {
            "en": "Bordeaux",
            "ja": "ボルドー",
            "ko": "보르도",
            "zh-TW": "波爾多"
        },
        "winery": {
            "en": "Château Bernadotte",
            "ja": "シャトー・ベルナドット"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Cabernet Sauvignon, Cabernet Franc, Merlot, Petit Verdot",
            "ja": "カベルネ・ソーヴィニヨン、カベルネ・フラン、メルロー、プティ・ヴェルド"
        },
        "vintage": "2011",
        "is_visible": false,
        "description": {
            "en": "Traditional red from Bordeaux Haut-Médoc. A calm, dry taste.",
            "ja": "ボルドー・オー・メドック地区の伝統的な赤。落ち着いた辛口の味わい。"
        }
    },
    {
        "id": 23,
        "body": "full",
        "name": {
            "en": "Opus One",
            "ja": "オーパスワン"
        },
        "tags": [
            {
                "en": "California",
                "ja": "カリフォルニア"
            },
            {
                "en": "Pinnacle",
                "ja": "最高峰"
            },
            {
                "en": "Long Aging",
                "ja": "長期熟成"
            }
        ],
        "type": "red",
        "price": 98000,
        "region": {
            "en": "California",
            "ja": "カリフォルニア",
            "ko": "캘리포니아",
            "zh-TW": "加州"
        },
        "winery": {
            "en": "Opus One",
            "ja": "オーパスワン"
        },
        "country": {
            "en": "USA",
            "ja": "アメリカ",
            "ko": "미국",
            "zh-TW": "美國"
        },
        "variety": {
            "en": "Cabernet Sauvignon, Petit Verdot, Cabernet Franc, Merlot, Malbec",
            "ja": "カベルネ・ソーヴィニヨン、プティ・ヴェルド、カベルネ・フラン、メルロー、マルベック"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "The pinnacle of California. Cabernet dominant. Overwhelming concentration and elegance, with long-term aging potential.",
            "ja": "カリフォルニアの最高峰。カベルネ主体。圧倒的な凝縮感とエレガンス, 長期熟成能力を持つ。"
        }
    },
    {
        "id": 24,
        "body": "full",
        "name": {
            "en": "Lucente",
            "ja": "ルチェンテ"
        },
        "tags": [
            {
                "en": "Second Wine",
                "ja": "セカンドワイン"
            },
            {
                "en": "Tuscany",
                "ja": "トスカーナ"
            },
            {
                "en": "Barrel Aged",
                "ja": "樽熟成"
            }
        ],
        "type": "red",
        "price": 10670,
        "region": {
            "en": "Tuscany",
            "ja": "トスカーナ",
            "ko": "토스카나",
            "zh-TW": "托斯卡納"
        },
        "winery": {
            "en": "Tenuta Luce",
            "ja": "テヌータ・ルーチェ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Merlot, Sangiovese",
            "ja": "メルロー、サンジョヴェーゼ"
        },
        "vintage": "2021",
        "is_visible": true,
        "description": {
            "en": "Second wine of Luce. Contemporary style expressing unique terroir.",
            "ja": "「ルーチェ」のセカンド。独特なテロワールを表現したコンテンポラリーなスタイル。"
        }
    },
    {
        "id": 25,
        "body": "semidry",
        "name": {
            "en": "1066 Cuvée",
            "ja": "1066 キュヴェ"
        },
        "tags": [
            {
                "en": "Croatia",
                "ja": "クロアチア"
            },
            {
                "en": "Premium",
                "ja": "プレミアム"
            },
            {
                "en": "Spicy",
                "ja": "スパイシー"
            }
        ],
        "type": "white",
        "price": 4620,
        "region": {
            "en": "Dalmatia",
            "ja": "ダルマチア",
            "ko": "달마티아",
            "zh-TW": "達爾馬提亞"
        },
        "winery": {
            "en": "Royal Vineyards",
            "ja": "ロイヤルヴィンヤード"
        },
        "country": {
            "en": "Croatia",
            "ja": "クロアチア",
            "ko": "크로아티아",
            "zh-TW": "克羅地亞"
        },
        "variety": {
            "en": "Pošip, Žilavka, Chardonnay",
            "ja": "ポシップ、ジラフカ、シャルドネ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "From Croatia. Premium red wine with ripe fruit, spice, and solid structure.",
            "ja": "クロアチア産。熟した果実味とスパイス, しっかりとした骨格を持つプレミアム赤ワイン。"
        }
    },
    {
        "id": 26,
        "body": "sweet",
        "name": {
            "en": "Muscat",
            "ja": "マスカット"
        },
        "tags": [
            {
                "en": "Sweet",
                "ja": "甘口"
            },
            {
                "en": "Muscat",
                "ja": "マスカット"
            },
            {
                "en": "Gorgeous",
                "ja": "華やか"
            }
        ],
        "type": "white",
        "price": 4620,
        "region": {
            "en": "Dalmatia",
            "ja": "ダルマチア",
            "ko": "달마티아",
            "zh-TW": "達爾馬提亞"
        },
        "winery": {
            "en": "Royal Vineyards",
            "ja": "ロイヤルヴィンヤード"
        },
        "country": {
            "en": "Croatia",
            "ja": "クロアチア",
            "ko": "크로아티아",
            "zh-TW": "克羅地亞"
        },
        "variety": {
            "en": "Muškat Žuti",
            "ja": "ムシュカト・ジュティ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Gorgeous Muscat aroma. Fresh and luscious dessert wine.",
            "ja": "華やかなマスカットの香り。フレッシュで甘美な味わいのデザートワイン。"
        }
    },
    {
        "id": 27,
        "body": "semidry",
        "name": {
            "en": "Antique Rose",
            "ja": "アンティーク・ロゼ"
        },
        "tags": [
            {
                "en": "Rose Sparkling",
                "ja": "ロゼ泡"
            },
            {
                "en": "Dry",
                "ja": "辛口"
            },
            {
                "en": "Croatia",
                "ja": "クロアチア"
            }
        ],
        "type": "rose_sparkling",
        "price": 5060,
        "region": {
            "en": "Dalmatia",
            "ja": "ダルマチア",
            "ko": "달마티아",
            "zh-TW": "達爾馬提亞"
        },
        "winery": {
            "en": "Royal Vineyards",
            "ja": "ロイヤルヴィンヤード"
        },
        "country": {
            "en": "Croatia",
            "ja": "クロアチア",
            "ko": "크로아티아",
            "zh-TW": "克羅地亞"
        },
        "variety": {
            "en": "Plavac Mali",
            "ja": "プラヴァツ・マリ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Rare Croatian Rose Sparkling. Berry aromas, crisp and dry.",
            "ja": "珍しいクロアチアのロゼスパークリング。ベリー系の香り, キリッとした辛口。"
        }
    },
    {
        "id": 28,
        "body": "light",
        "name": {
            "en": "Gladiator",
            "ja": "グラディアートル"
        },
        "tags": [
            {
                "en": "Powerful",
                "ja": "パワフル"
            },
            {
                "en": "Rich",
                "ja": "濃厚"
            },
            {
                "en": "Limited Edition",
                "ja": "限定品"
            }
        ],
        "type": "red",
        "price": 9900,
        "region": {
            "en": "Dalmatia",
            "ja": "ダルマチア",
            "ko": "달마티아",
            "zh-TW": "達爾馬提亞"
        },
        "winery": {
            "en": "Royal Vineyards",
            "ja": "ロイヤルヴィンヤード"
        },
        "country": {
            "en": "Croatia",
            "ja": "クロアチア",
            "ko": "크로아티아",
            "zh-TW": "克羅地亞"
        },
        "variety": {
            "en": "Plavac Mali, Crljenak, Merlot, Syrah",
            "ja": "プラヴァツ・マリ、クルリェナク、メルロー、シラー"
        },
        "vintage": "2020",
        "is_visible": true,
        "description": {
            "en": "True to its powerful name, a rich and powerful red wine. Concentrated fruitiness.",
            "ja": "力強い名前の通り, 濃厚でパワフルな赤ワイン。凝縮した果実味。"
        }
    },
    {
        "id": 29,
        "body": "medium",
        "name": {
            "en": "Plavac Mali \"Gurgur\"",
            "ja": "プラヴァツ・マリ \"グルグル\""
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Easy to Drink",
                "ja": "飲みやすい"
            },
            {
                "en": "Indigenous Variety",
                "ja": "土着品種"
            }
        ],
        "type": "red",
        "price": 3960,
        "region": {
            "en": "Dalmatia",
            "ja": "ダルマチア",
            "ko": "달마티아",
            "zh-TW": "達爾馬提亞"
        },
        "winery": {
            "en": "Royal Vineyards",
            "ja": "ロイヤルヴィンヤード"
        },
        "country": {
            "en": "Croatia",
            "ja": "クロアチア",
            "ko": "크로아티아",
            "zh-TW": "克羅地亞"
        },
        "variety": {
            "en": "Plavac Mali",
            "ja": "プラヴァツ・マリ"
        },
        "vintage": "2015",
        "is_visible": true,
        "description": {
            "en": "'Glou Glou' (chuggable) style. Coexistence of Plavac Mali fruit and drinkability.",
            "ja": "「Glou Glou(ゴクゴク飲める)」スタイル。プラヴァッツマリの果実味と飲み心地の良さが共存。"
        }
    },
    {
        "id": 30,
        "body": "light",
        "name": {
            "en": "La Pause",
            "ja": "ラ・ポーズ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Juicy",
                "ja": "ジューシー"
            },
            {
                "en": "Soft",
                "ja": "柔らかい"
            }
        ],
        "type": "red",
        "price": 10300,
        "region": {
            "en": "Loire",
            "ja": "ロワール",
            "ko": "루아르",
            "zh-TW": "盧瓦爾"
        },
        "winery": {
            "en": "Laurent Saillard",
            "ja": "ローラン・サイヤール"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Gamay",
            "ja": "ガメイ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Gamay. Transparent ruby color. Juicy fruit flavors spread, with a soaking softness.",
            "ja": "ガメイ種。透明感あるルビー色。ジューシーな果実味が広がり, 染み入るような柔らかさ。"
        }
    },
    {
        "id": 31,
        "body": "dry",
        "name": {
            "en": "Lucky You",
            "ja": "ラッキー・ユー"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            },
            {
                "en": "Pure",
                "ja": "ピュア"
            }
        ],
        "type": "white",
        "price": 10700,
        "region": {
            "en": "Loire",
            "ja": "ロワール",
            "ko": "루아르",
            "zh-TW": "盧瓦爾"
        },
        "winery": {
            "en": "Laurent Saillard",
            "ja": "ローラン・サイヤール"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Sauvignon Blanc, Chardonnay",
            "ja": "ソーヴィニヨン・ブラン、シャルドネ"
        },
        "vintage": "2024",
        "is_visible": true,
        "description": {
            "en": "Sauvignon Blanc. Fresh herb and citrus aromas. Pure fruit flavor.",
            "ja": "ソーヴィニヨンブラン。フレッシュでハーブや柑橘の香り。ピュアな果実味。"
        }
    },
    {
        "id": 32,
        "body": "dry",
        "name": {
            "en": "La Valse",
            "ja": "ラ・ヴァルス"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Rose",
                "ja": "ロゼ"
            },
            {
                "en": "Light",
                "ja": "軽やか"
            }
        ],
        "type": "rose",
        "price": 9700,
        "region": {
            "en": "Loire",
            "ja": "ロワール",
            "ko": "루아르",
            "zh-TW": "盧瓦爾"
        },
        "winery": {
            "en": "Laurent Saillard",
            "ja": "ローラン・サイヤール"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Gamay, Pineau d'Aunis, Cabernet Franc, Cabernet Sauvignon",
            "ja": "ガメイ、ピノ・ドニス、カベルネ・フラン、カベルネ・ソーヴィニヨン"
        },
        "vintage": "2024",
        "is_visible": true,
        "description": {
            "en": "Gamay/Pineau d'Aunis. Light red berry aroma. Easy-drinking dry rose.",
            "ja": "ガメイ/ピノドニス。軽やかで赤いベリーの香り。スルスル飲める辛口ロゼ。"
        }
    },
    {
        "id": 33,
        "body": "dry",
        "name": {
            "en": "Arbois Chardonnay \"Initial\"",
            "ja": "アルボワ シャルドネ \"イニシアル\""
        },
        "tags": [
            {
                "en": "Jura",
                "ja": "ジュラ"
            },
            {
                "en": "Complex",
                "ja": "複雑"
            },
            {
                "en": "Minerality",
                "ja": "ミネラル"
            }
        ],
        "type": "white",
        "price": 11290,
        "region": {
            "en": "Jura",
            "ja": "ジュラ",
            "ko": "쥐라",
            "zh-TW": "汝拉"
        },
        "winery": {
            "en": "Jérôme Arnoux",
            "ja": "ジェローム・アルヌー"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Chardonnay",
            "ja": "シャルドネ"
        },
        "vintage": "2022",
        "is_visible": false,
        "description": {
            "en": "Aromas of honey and spice. Complex taste with minerals. Thick acidity runs through the palate.",
            "ja": "ハチミツやスパイスの香り。ミネラルを備えた複雑な味わい。口の中で太い酸が通る。"
        }
    },
    {
        "id": 34,
        "body": "dry",
        "name": {
            "en": "Arbois \"Nuance\"",
            "ja": "アルボワ \"ニュアンス\""
        },
        "tags": [
            {
                "en": "Jura",
                "ja": "ジュラ"
            },
            {
                "en": "Oxidative nuances",
                "ja": "酸化熟成感"
            },
            {
                "en": "Traditional",
                "ja": "伝統的"
            }
        ],
        "type": "white",
        "price": 11880,
        "region": {
            "en": "Jura",
            "ja": "ジュラ",
            "ko": "쥐라",
            "zh-TW": "汝拉"
        },
        "winery": {
            "en": "Jérôme Arnoux",
            "ja": "ジェローム・アルヌー"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Chardonnay, Savagnin",
            "ja": "シャルドネ、サヴァニャン"
        },
        "vintage": "2018",
        "is_visible": true,
        "description": {
            "en": "Blend of Chardonnay and Savagnin. Balance of oxidative aging nuances and fruitiness.",
            "ja": "シャルドネとサヴァニャンのブレンド。酸化熟成のニュアンスと果実味のバランス。"
        }
    },
    {
        "id": 35,
        "body": "medium",
        "name": {
            "en": "Arbois Trousseau \"Exception\"",
            "ja": "アルボワ トゥルソー \"エクセプシオン\""
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Pale Red",
                "ja": "淡い赤"
            },
            {
                "en": "Spicy",
                "ja": "スパイシー"
            }
        ],
        "type": "red",
        "price": 10890,
        "region": {
            "en": "Jura",
            "ja": "ジュラ",
            "ko": "쥐라",
            "zh-TW": "汝拉"
        },
        "winery": {
            "en": "Jérôme Arnoux",
            "ja": "ジェローム・アルヌー"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Trousseau",
            "ja": "トゥルソー"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Pale color. Juicy fruit flavor like anise, white pepper, and midsummer watermelon.",
            "ja": "淡い色調。アニスや白胡椒, 真夏のスイカのようなジューシーな果実味。"
        }
    },
    {
        "id": 36,
        "body": "medium",
        "name": {
            "en": "Arbois Pinot Noir \"Révélation\"",
            "ja": "アルボワ ピノ・ノワール \"レヴェラシオン\""
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Dense",
                "ja": "濃密"
            },
            {
                "en": "Refreshing",
                "ja": "清涼感"
            }
        ],
        "type": "red",
        "price": 13270,
        "region": {
            "en": "Jura",
            "ja": "ジュラ",
            "ko": "쥐라",
            "zh-TW": "汝拉"
        },
        "winery": {
            "en": "Jérôme Arnoux",
            "ja": "ジェローム・アルヌー"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Pinot Noir",
            "ja": "ピノ・ノワール"
        },
        "vintage": "2019",
        "is_visible": true,
        "description": {
            "en": "Deep purple color. Juicy, dense black fruits, cool and shadowy fruit flavors.",
            "ja": "濃い紫の色調。ジューシーで密度のある黒果実, 清涼感と陰影のある果実味。"
        }
    },
    {
        "id": 37,
        "body": "dry",
        "name": {
            "en": "S'esch Sur",
            "ja": "セシュシュール"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Unique/Unusual",
                "ja": "変わり種"
            },
            {
                "en": "Piquette",
                "ja": "ピケット"
            }
        ],
        "type": "white",
        "price": 5050,
        "region": {
            "en": "Alsace",
            "ja": "アルザス",
            "ko": "알자스",
            "zh-TW": "阿爾薩斯"
        },
        "winery": {
            "en": "Christian Binner",
            "ja": "クリスチャン・ビネール"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Gewürztraminer",
            "ja": "ゲヴュルツトラミネール"
        },
        "vintage": "2021",
        "is_visible": false,
        "description": {
            "en": "'S'esch Sur'. Pet-Nat using water, mirabelle, pear, hops etc. Cloudy pomelo-like color, dry and refreshing.",
            "ja": "「S'esch Sur」。水, ミラベル, 洋梨, ホップ等を使用したペティアン。濁りのある文旦のような色, ドライで喉越しが良い。"
        }
    },
    {
        "id": 38,
        "body": "light",
        "name": {
            "en": "Maskerade",
            "ja": "マスケラード"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "1L Bottle",
                "ja": "1Lボトル"
            },
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            }
        ],
        "type": "rose",
        "price": 11440,
        "region": {
            "en": "Burgenland",
            "ja": "ブルゲンラント",
            "ko": "부르겐란트",
            "zh-TW": "布爾根蘭"
        },
        "winery": {
            "en": "Gut Oggau",
            "ja": "グート・オッガウ"
        },
        "country": {
            "en": "Austria",
            "ja": "オーストリア",
            "ko": "오스트리아",
            "zh-TW": "奧地利"
        },
        "variety": {
            "en": "Vineyard Blend",
            "ja": "ヴィンヤードブレンド"
        },
        "vintage": "2024",
        "is_visible": true,
        "description": {
            "en": "1 Liter bottle. Field blend. Fresh, chuggable, energetic natural wine.",
            "ja": "1リットル瓶。フィールドブレンド。フレッシュでガブガブ飲める, エネルギッシュな自然派。"
        }
    },
    {
        "id": 39,
        "body": "dry",
        "name": {
            "en": "Theodora",
            "ja": "テオドラ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Cloudy Wine",
                "ja": "濁りワイン"
            },
            {
                "en": "Juicy",
                "ja": "ジューシー"
            }
        ],
        "type": "white",
        "price": 14520,
        "region": {
            "en": "Burgenland",
            "ja": "ブルゲンラント",
            "ko": "부르겐란트",
            "zh-TW": "布爾根蘭"
        },
        "winery": {
            "en": "Gut Oggau",
            "ja": "グート・オッガウ"
        },
        "country": {
            "en": "Austria",
            "ja": "オーストリア",
            "ko": "오스트리아",
            "zh-TW": "奧地利"
        },
        "variety": {
            "en": "Grüner Veltliner, Welschriesling",
            "ja": "グリューナー・ヴェルトリーナー、ヴェルシュリースリング"
        },
        "vintage": "2024",
        "is_visible": true,
        "description": {
            "en": "'Third Generation'. Unfiltered cloudy white. Fresh, juicy, and lively taste.",
            "ja": "「第3世代」。無濾過で濁りのある白。フレッシュでジューシー, 生き生きとした味わい。"
        }
    },
    {
        "id": 40,
        "body": "dry",
        "name": {
            "en": "Winifred",
            "ja": "ヴィニフレッド"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Rose",
                "ja": "ロゼ"
            },
            {
                "en": "Fruity",
                "ja": "フルーティ"
            }
        ],
        "type": "rose",
        "price": 14520,
        "region": {
            "en": "Burgenland",
            "ja": "ブルゲンラント",
            "ko": "부르겐란트",
            "zh-TW": "布爾根蘭"
        },
        "winery": {
            "en": "Gut Oggau",
            "ja": "グート・オッガウ"
        },
        "country": {
            "en": "Austria",
            "ja": "オーストリア",
            "ko": "오스트리아",
            "zh-TW": "奧地利"
        },
        "variety": {
            "en": "Blaufränkisch, Zweigelt",
            "ja": "ブラウフレンキッシュ、ツヴァイゲルト"
        },
        "vintage": "2024",
        "is_visible": false,
        "description": {
            "en": "'Third Generation' Rose. Blaufränkisch/Zweigelt. Fresh, fruity, charming loveliness.",
            "ja": "「第3世代」のロゼ。ブラウフレンキッシュ/ツヴァイゲルト。フレッシュでフルーティ, 魅力的な愛らしさ。"
        }
    },
    {
        "id": 41,
        "body": "medium",
        "name": {
            "en": "Josephine",
            "ja": "ヨゼフィーネ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Elegant",
                "ja": "エレガント"
            },
            {
                "en": "Complex",
                "ja": "複雑"
            }
        ],
        "type": "red",
        "price": 20240,
        "region": {
            "en": "Burgenland",
            "ja": "ブルゲンラント",
            "ko": "부르겐란트",
            "zh-TW": "布爾根蘭"
        },
        "winery": {
            "en": "Gut Oggau",
            "ja": "グート・オッガウ"
        },
        "country": {
            "en": "Austria",
            "ja": "オーストリア",
            "ko": "오스트리아",
            "zh-TW": "奧地利"
        },
        "variety": {
            "en": "Roesler, Blaufränkisch",
            "ja": "ロースラー、ブラウフレンキッシュ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "'Second Generation'. Red. Serious and structured, yet drinkable.",
            "ja": "「第2世代」。赤。シリアスでストラクチャーがありながら, 飲み心地の良さも備える。"
        }
    },
    {
        "id": 42,
        "body": "full",
        "name": {
            "en": "Joshuari",
            "ja": "ヨシュアリ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Powerful",
                "ja": "力強い"
            },
            {
                "en": "Long Aging",
                "ja": "長期熟成"
            }
        ],
        "type": "red",
        "price": 21780,
        "region": {
            "en": "Burgenland",
            "ja": "ブルゲンラント",
            "ko": "부르겐란트",
            "zh-TW": "布爾根蘭"
        },
        "winery": {
            "en": "Gut Oggau",
            "ja": "グート・オッガウ"
        },
        "country": {
            "en": "Austria",
            "ja": "オーストリア",
            "ko": "오스트리아",
            "zh-TW": "奧地利"
        },
        "variety": {
            "en": "Blaufränkisch",
            "ja": "ブラウフレンキッシュ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "'Second Generation'. Red. Blaufränkisch. Masculine wine combining power and finesse.",
            "ja": "「第2世代」。赤。ブラウフレンキッシュ。力強さとフィネスを兼ね備えた男性的なワイン。"
        }
    },
    {
        "id": 43,
        "body": "dry",
        "name": {
            "en": "Verde",
            "ja": "ヴェルデ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Mellow",
                "ja": "まろやか"
            },
            {
                "en": "Salty/Salinity",
                "ja": "塩気"
            }
        ],
        "type": "orange",
        "price": 11690,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "Loco",
            "ja": "ロコ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Maresco, Minutolo, Verdeca",
            "ja": "マレスコ、ミヌートロ、ヴェルデカ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Green bottle. Rich texture of ripe fruit, pleasant acidity and salinity, mellow lactic umami.",
            "ja": "緑ボトル。熟れた果実の豊潤な質感, 心地よい酸味と塩気, 乳酸的なまろやかな旨味。"
        }
    },
    {
        "id": 44,
        "body": "dry",
        "name": {
            "en": "Fucsia",
            "ja": "フッシア"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Rose",
                "ja": "ロゼ"
            },
            {
                "en": "Elegant",
                "ja": "エレガント"
            }
        ],
        "type": "rose",
        "price": 11690,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "Loco",
            "ja": "ロコ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Montepulciano, Minutolo",
            "ja": "モンテプルチャーノ、ミヌートロ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Pink bottle (Rose). Gorgeous aromas of peach and flowers. Smooth mouthfeel and elegant finish.",
            "ja": "桃色ボトル（ロゼ）。ピーチや花の華やかな香り。滑らかな口当たりとエレガントな余韻。"
        }
    },
    {
        "id": 45,
        "body": "medium",
        "name": {
            "en": "Rosso",
            "ja": "ロッソ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Light",
                "ja": "軽やか"
            },
            {
                "en": "Unique",
                "ja": "ユニーク"
            }
        ],
        "type": "rose",
        "price": 13070,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "Loco",
            "ja": "ロコ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Nero di Troia, Bombino Bianco",
            "ja": "ネロ・ディ・トロイア、ボンビーノ・ビアンコ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Red bottle. Balances Puglia fruitiness and lightness. Unique production blending white grapes.",
            "ja": "赤ボトル。プーリアらしい果実味と軽やかさを両立。白ブドウを混醸するユニークな造り。"
        }
    },
    {
        "id": 46,
        "body": "semidry",
        "name": {
            "en": "Lilla",
            "ja": "リッラ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            },
            {
                "en": "Salty/Salinity",
                "ja": "塩気"
            }
        ],
        "type": "rose",
        "price": 17030,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "Loco",
            "ja": "ロコ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Maresco, Ottavianello, Minutolo",
            "ja": "マレスコ、オッタヴィア・ネッロ、ミヌートロ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Pale purple bottle (Rose). Mint and herb aromas, salinity. Fresh and top-class drinkability.",
            "ja": "淡紫ボトル（ロゼ）。ミントやハーブの香り, 塩気。フレッシュで飲み心地最高クラス。"
        }
    },
    {
        "id": 47,
        "body": "light",
        "name": {
            "en": "Viola",
            "ja": "ヴィオラ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Puglia",
                "ja": "プーリア"
            }
        ],
        "type": "red",
        "price": 11690,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "Loco",
            "ja": "ロコ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Bombino Nero, Nero di Troia, Bombino Bianco",
            "ja": "ボンビーノ・ネーロ、ネロ・ディ・トロイア、ボンビーノ・ビアンコ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Purple bottle. Has the series 'salinity and umami'.",
            "ja": "紫ボトル。シリーズ共通の「塩気と旨味」を持つ。"
        }
    },
    {
        "id": 48,
        "body": "full",
        "name": {
            "en": "Pignoli",
            "ja": "ピニョーリ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Orange Wine",
                "ja": "オレンジワイン"
            },
            {
                "en": "Complex",
                "ja": "複雑"
            }
        ],
        "type": "red",
        "price": 12180,
        "region": {
            "en": "Friuli",
            "ja": "フリウリ",
            "ko": "프리울리",
            "zh-TW": "弗留利"
        },
        "winery": {
            "en": "Radikon",
            "ja": "ラディコン"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Pignolo",
            "ja": "ピニョーロ"
        },
        "vintage": "2010",
        "is_visible": true,
        "description": {
            "en": "Friuli master. Long maceration (Orange). Withered nuances, complexity, overwhelming finish.",
            "ja": "フリウリの巨匠。長期マセラシオン（オレンジ）。枯れたニュアンス, 複雑味, 圧倒的な余韻。"
        }
    },
    {
        "id": 49,
        "body": "dry",
        "name": {
            "en": "Catarratto",
            "ja": "カタラット"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Sicily",
                "ja": "シチリア"
            },
            {
                "en": "Pure",
                "ja": "ピュア"
            }
        ],
        "type": "white",
        "price": 9110,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Alessandro Viola",
            "ja": "アレッサンドロ・ビオラ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Catarratto, Carricante",
            "ja": "カタラット、カリカンテ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "Sicilian natural wine. Citrus and herb aromas, pure fruitiness.",
            "ja": "シチリアの自然派。柑橘やハーブの香り, ピュアな果実味。"
        }
    },
    {
        "id": 50,
        "body": "medium",
        "name": {
            "en": "Note di Rosso",
            "ja": "ノート・ディ・ロッソ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Light",
                "ja": "軽やか"
            },
            {
                "en": "Savory/Nourishing",
                "ja": "滋味"
            }
        ],
        "type": "red",
        "price": 9110,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Alessandro Viola",
            "ja": "アレッサンドロ・ビオラ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Nero d'Avola, Nerello Mascalese, Perricone",
            "ja": "ネロ・ダーヴォラ、ネレッロ・マスカレーゼ、ペッリコーネ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "Nerello Mascalese dominant. Bright red fruit aroma, light and deeply flavorful.",
            "ja": "ネレッロ・マスカレーゼ主体。赤い果実の明るい香り, 軽やかで滋味深い味わい。"
        }
    },
    {
        "id": 51,
        "body": "full",
        "name": {
            "en": "Sinfonia di Rosso",
            "ja": "シンフォニア・ディ・ロッソ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Mellow",
                "ja": "まろやか"
            },
            {
                "en": "Pure",
                "ja": "ピュア"
            }
        ],
        "type": "red",
        "price": 12480,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Alessandro Viola",
            "ja": "アレッサンドロ・ビオラ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Nerello Mascalese",
            "ja": "ネレッロ・マスカレーゼ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Mellow and pure aroma. Soft and gentle. Well-balanced acidity and tannins.",
            "ja": "まろやかでピュアなアロマ。柔らかく穏やか。バランスの良い酸味とタンニン。"
        }
    },
    {
        "id": 52,
        "body": "dry",
        "name": {
            "en": "Sinfonia di Bianco",
            "ja": "シンフォニア・ディ・ビアンコ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Rich",
                "ja": "濃厚"
            },
            {
                "en": "Minerality",
                "ja": "ミネラル"
            }
        ],
        "type": "orange",
        "price": 11090,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Alessandro Viola",
            "ja": "アレッサンドロ・ビオラ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Grillo",
            "ja": "グリッロ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Grillo. Richness of ripe fruit and salty minerals. Golden and concentrated.",
            "ja": "グリッロ種。完熟果実の豊かさと塩気のあるミネラル。黄金色で濃厚。"
        }
    },
    {
        "id": 53,
        "body": "full",
        "name": {
            "en": "Le Mie Origini",
            "ja": "レ・ミエ・オリジニ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Complex",
                "ja": "複雑"
            }
        ],
        "type": "orange",
        "price": 11690,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Alessandro Viola",
            "ja": "アレッサンドロ・ビオラ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Catarratto",
            "ja": "カタラット"
        },
        "vintage": "2021",
        "is_visible": true,
        "description": {
            "en": "Karin, with delicate citrus and mineral notes. Gradually, a refreshing jasmine-like fragrance also emerges.A complex aroma brimming with richness, blending various plants and fruits.",
            "ja": "カリン、淡い柑橘とミネラル香。徐々にジャスミンの様な爽やかな香りも感じられる。様々な植物や果物が溶け込んだ充実感に満ちた複雑なアロマ。"
        }
    },
    {
        "id": 54,
        "body": "light",
        "name": {
            "en": "Madreterra Rosso",
            "ja": "マードレテッラ ロッソ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Juicy",
                "ja": "ジューシー"
            },
            {
                "en": "Soft",
                "ja": "柔らかい"
            }
        ],
        "type": "red",
        "price": 5370,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "Cantina Fiorentino",
            "ja": "カンティーナ・フィオレンティーノ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Primitivo",
            "ja": "プリミティーヴォ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Primitivo. Ruby color, raspberry and plum aromas. Juicy fruit and soft tannins.",
            "ja": "プリミティーヴォ。ルビー色, 木苺やプラムの香り。ジューシーな果実味と柔らかいタンニン。"
        }
    },
    {
        "id": 55,
        "body": "semidry",
        "name": {
            "en": "Madreterra Bianco",
            "ja": "マードレテッラ ビアンコ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Minerality",
                "ja": "ミネラル"
            },
            {
                "en": "Fruity",
                "ja": "フルーティ"
            }
        ],
        "type": "white",
        "price": 5370,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "Cantina Fiorentino",
            "ja": "カンティーナ・フィオレンティーノ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Chardonnay, Fiano",
            "ja": "シャルドネ、フィアーノ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "Floral and lime aromas. Hard minerals and rich acidity. Dry but fruity.",
            "ja": "フローラルでライムの香り。硬質なミネラルと豊かな酸味。ドライだがフルーティ。"
        }
    },
    {
        "id": 56,
        "body": "dry",
        "name": {
            "en": "Scacco",
            "ja": "スカッコ"
        },
        "tags": [
            {
                "en": "Delicate Bubbles",
                "ja": "繊細な泡"
            },
            {
                "en": "Fruity",
                "ja": "フルーティ"
            },
            {
                "en": "Elegant",
                "ja": "上品"
            }
        ],
        "type": "sparkling",
        "price": 3000,
        "region": {
            "en": "Emilia-Romagna",
            "ja": "エミリア・ロマーニャ",
            "ko": "에밀리아 로마냐",
            "zh-TW": "艾米利亞-羅馬涅"
        },
        "winery": {
            "en": "Quattro Valli",
            "ja": "クアットロヴァッリ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Chardonnay, Ortrugo",
            "ja": "シャルドネ、オルトルーゴ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Delicate fruity aromas of white flowers and citrus. Elegant bubbles.",
            "ja": "白い花や柑橘類の繊細なフルーティな香り。上品な泡立ち。"
        }
    },
    {
        "id": 57,
        "body": "full",
        "name": {
            "en": "Rosso Conero",
            "ja": "ロッソ・コーネロ"
        },
        "tags": [
            {
                "en": "Sweet Fruit Aroma",
                "ja": "甘い果実香"
            },
            {
                "en": "Smooth",
                "ja": "なめらか"
            },
            {
                "en": "Harmony",
                "ja": "調和"
            }
        ],
        "type": "red",
        "price": 3700,
        "region": {
            "en": "Marche",
            "ja": "マルケ",
            "ko": "마르케",
            "zh-TW": "馬爾凱"
        },
        "winery": {
            "en": "Belisario",
            "ja": "ベリサリオ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Montepulciano",
            "ja": "モンテプルチャーノ"
        },
        "vintage": "2019",
        "is_visible": true,
        "description": {
            "en": "Aromas of sweet fruits like cherry. Harmony of rich fruitiness and smooth tannins.",
            "ja": "チェリーなどの甘いフルーツの香り。豊かな果実味となめらかなタンニンの調和。"
        }
    },
    {
        "id": 58,
        "body": "medium",
        "name": {
            "en": "Valpolicella Superiore \"San Pietro\"",
            "ja": "ヴァルポリチェッラ・スペリオーレ \"サン・ピエトロ\""
        },
        "tags": [
            {
                "en": "Mellow",
                "ja": "まろやか"
            },
            {
                "en": "Appassimento (Dried)",
                "ja": "陰干し"
            },
            {
                "en": "Red Fruit",
                "ja": "赤い果実"
            }
        ],
        "type": "red",
        "price": 3700,
        "region": {
            "en": "Veneto",
            "ja": "ヴェネト",
            "ko": "베네토",
            "zh-TW": "威尼托"
        },
        "winery": {
            "en": "Monte Tondo",
            "ja": "モンテ トンド"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Corvina, Rondinella, Molinara",
            "ja": "コルヴィーナ、ロンディネッラ、モリナーラ"
        },
        "vintage": "2023",
        "is_visible": false,
        "description": {
            "en": "Mellowness from 20 days of drying. Cherry aroma. Smooth mouthfeel.",
            "ja": "20日間の陰干しによるまろやかさ。サクランボのアロマ。スムーズな飲み口。"
        }
    },
    {
        "id": 59,
        "body": "medium",
        "name": {
            "en": "Chianti Colli Fiorentini",
            "ja": "キャンティ・コッリ・フィオレンティーニ"
        },
        "tags": [
            {
                "en": "Fruity",
                "ja": "果実味"
            },
            {
                "en": "Balanced",
                "ja": "バランス"
            },
            {
                "en": "Chianti",
                "ja": "キャンティ"
            }
        ],
        "type": "red",
        "price": 2800,
        "region": {
            "en": "Tuscany",
            "ja": "トスカーナ",
            "ko": "토스카나",
            "zh-TW": "托斯卡納"
        },
        "winery": {
            "en": "Lanciola",
            "ja": "ランチョーラ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Sangiovese Grosso, Canaiolo",
            "ja": "サンジョヴェーゼ・グロッソ、カナイオーロ"
        },
        "vintage": "2022",
        "is_visible": false,
        "description": {
            "en": "Hills near Florence. Fruit-forward and well-balanced Chianti.",
            "ja": "フィレンツェ近郊の丘陵地。果実味豊かでバランスの良いキャンティ。"
        }
    },
    {
        "id": 60,
        "body": "full",
        "name": {
            "en": "Malot",
            "ja": "マロ"
        },
        "tags": [
            {
                "en": "Oaky Aroma",
                "ja": "樽香"
            },
            {
                "en": "Smooth",
                "ja": "滑らか"
            },
            {
                "en": "Umbria",
                "ja": "ウンブリア"
            }
        ],
        "type": "red",
        "price": 5100,
        "region": {
            "en": "Umbria",
            "ja": "ウンブリア",
            "ko": "움브리아",
            "zh-TW": "翁布里亞"
        },
        "winery": {
            "en": "Terre Margaritelli",
            "ja": "テッレ マルガリテッリ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Cabernet, Merlot",
            "ja": "カベルネ、メルロー"
        },
        "vintage": "2020",
        "is_visible": false,
        "description": {
            "en": "Mellowness derived from malolactic fermentation",
            "ja": "マロラクティック発酵由来のまろやかさ"
        }
    },
    {
        "id": 61,
        "body": "medium",
        "name": {
            "en": "Ciro Rosso \"Donna Caterina\"",
            "ja": "チロ・ロッソ \"ドンナ・カテリーナ\""
        },
        "tags": [
            {
                "en": "Elegant",
                "ja": "エレガント"
            },
            {
                "en": "Floral Scent",
                "ja": "花の香り"
            },
            {
                "en": "Bio Wine",
                "ja": "ビオワイン"
            }
        ],
        "type": "red",
        "price": 2100,
        "region": {
            "en": "Calabria",
            "ja": "カラブリア",
            "ko": "칼라브리아",
            "zh-TW": "卡拉布里亞"
        },
        "winery": {
            "en": "Cantine De Luca",
            "ja": "カンティーネ デ ルーカ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Gaglioppo",
            "ja": "ガリオッポ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Elegant scents like violet and rose. Pleasant cherry flavor.",
            "ja": "スミレやバラのようなエレガントな香り。心地よいチェリーの風味。"
        }
    },
    {
        "id": 62,
        "body": "medium",
        "name": {
            "en": "Raisin en Rouge",
            "ja": "レザン・アン・ルージュ"
        },
        "tags": [
            {
                "en": "Japan Wine",
                "ja": "日本ワイン"
            },
            {
                "en": "Umami",
                "ja": "旨味"
            },
            {
                "en": "Light/Lively",
                "ja": "軽快"
            }
        ],
        "type": "red",
        "price": 7700,
        "region": {
            "en": "Nagano",
            "ja": "長野",
            "ko": "나가노",
            "zh-TW": "長野"
        },
        "winery": {
            "en": "Terre de Ciel",
            "ja": "テール ド シエル"
        },
        "country": {
            "en": "Japan",
            "ja": "日本",
            "ko": "일본",
            "zh-TW": "日本"
        },
        "variety": {
            "en": "Merlot, Cabernet Sauvignon, Cabernet Franc",
            "ja": "メルロー、カベルネ・ソーヴィニヨン、カベルネ・フラン"
        },
        "vintage": "2023",
        "is_visible": false,
        "description": {
            "en": "From Takayama Village, Nagano. Aromas of fig and sweet spice. Light yet firm umami red wine.",
            "ja": "長野県高山村産。イチジクや甘いスパイスの香り。軽快ながらもしっかりとした旨味を感じる赤ワイン。"
        }
    },
    {
        "id": 63,
        "body": "full",
        "name": {
            "en": "Barbera d'Asti \"Leonardo\"",
            "ja": "バルベーラ・ダスティ \"レオナルド\""
        },
        "tags": [
            {
                "en": "Barrel Aged",
                "ja": "樽熟成"
            },
            {
                "en": "Depth",
                "ja": "深み"
            },
            {
                "en": "Elegant",
                "ja": "エレガント"
            }
        ],
        "type": "red",
        "price": 7200,
        "region": {
            "en": "Piedmont",
            "ja": "ピエモンテ",
            "ko": "피에몬테",
            "zh-TW": "皮埃蒙特"
        },
        "winery": {
            "en": "Lasserra",
            "ja": "ラッセッラ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Barbera",
            "ja": "バルベーラ"
        },
        "vintage": "2022",
        "is_visible": false,
        "description": {
            "en": "Deep aroma from barrel aging. Raspberry and cassis scents, supple mouthfeel and long finish.",
            "ja": "樽熟成由来の深みのあるアロマ。ラズベリーやカシスの香り, しなやかな口当たりと長い余韻。"
        }
    },
    {
        "id": 64,
        "body": "medium",
        "name": {
            "en": "Colli Piacentini Bonarda",
            "ja": "コッリ・ピアチェンティーニ・ボナルダ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Slightly Sparkling",
                "ja": "微発泡"
            },
            {
                "en": "Pleasant Drinkability",
                "ja": "飲み心地良い"
            }
        ],
        "type": "red",
        "price": 5800,
        "region": {
            "en": "Emilia-Romagna",
            "ja": "エミリア・ロマーニャ",
            "ko": "에밀리아 로마냐",
            "zh-TW": "艾米利亞-羅馬涅"
        },
        "winery": {
            "en": "Il Vei",
            "ja": "イル・ヴェイ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Bonarda",
            "ja": "ボナルダ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Slightly sparkling red. Secondary fermentation in bottle with no added sugar/yeast. Dry and pleasant.",
            "ja": "微発泡の赤ワイン。糖分・酵母無添加で瓶内二次発酵。ドライで心地よい飲み口。"
        }
    },
    {
        "id": 65,
        "body": "light",
        "name": {
            "en": "Bizou",
            "ja": "ビズ"
        },
        "tags": [
            {
                "en": "Natural Wine",
                "ja": "自然派"
            },
            {
                "en": "Light/Lively",
                "ja": "軽快"
            },
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            }
        ],
        "type": "red",
        "price": 7300,
        "region": {
            "en": "Loire",
            "ja": "ロワール",
            "ko": "루아르",
            "zh-TW": "盧瓦爾"
        },
        "winery": {
            "en": "Domaine Mosse",
            "ja": "ドメーヌ・モス"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Grolleau Noir, Grolleau Gris, Côt, Cabernet Franc, Chenin Blanc",
            "ja": "グロロー・ノワール、グロロー・グリ、コー、カベルネ・フラン、シュナン・ブラン"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Vin de Soif named 'Bisou' (Kiss). Cranberry and rose aromas, fresh and juicy fruitiness.",
            "ja": "「Bisou(キス)」の名を持つヴァン・ド・ソワフ。クランベリーやバラの香り, フレッシュでみずみずしい果実味。"
        }
    },
    {
        "id": 67,
        "body": "semidry",
        "name": {
            "en": "Weiss",
            "ja": "ヴァイス"
        },
        "tags": [
            {
                "en": "Germany",
                "ja": "ドイツ"
            },
            {
                "en": "Natural",
                "ja": "自然派"
            },
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            }
        ],
        "type": "white",
        "price": 6230,
        "region": {
            "en": "Rheinhessen",
            "ja": "ラインヘッセン",
            "ko": "라인헤센",
            "zh-TW": "萊茵黑森"
        },
        "winery": {
            "en": "Weinreich",
            "ja": "ヴァインライヒ"
        },
        "country": {
            "en": "Germany",
            "ja": "ドイツ",
            "ko": "독일",
            "zh-TW": "德國"
        },
        "variety": {
            "en": "Silvaner, Bacchus, Scheurebe, Riesling",
            "ja": "シルヴァーナー、バッカス、ショイレーベ、リースリング"
        },
        "vintage": "2024",
        "is_visible": true,
        "description": {
            "en": "Aromas of lime and white peach with nuances of herbs. Fresh, light, and easy-drinking dry white wine.",
            "ja": "ライムや白桃の香り、ハーブのニュアンス。フレッシュで軽快、ゴクゴク飲める辛口白ワイン。"
        }
    },
    {
        "id": 68,
        "body": "semidry",
        "name": {
            "en": "Grau",
            "ja": "グラウ"
        },
        "tags": [
            {
                "en": "Pinot Gris",
                "ja": "ピノ・グリ"
            },
            {
                "en": "Natural",
                "ja": "自然派"
            },
            {
                "en": "Complex",
                "ja": "複雑味"
            }
        ],
        "type": "orange",
        "price": 6230,
        "region": {
            "en": "Rheinhessen",
            "ja": "ラインヘッセン",
            "ko": "라인헤센",
            "zh-TW": "萊茵黑森"
        },
        "winery": {
            "en": "Weinreich",
            "ja": "ヴァインライヒ"
        },
        "country": {
            "en": "Germany",
            "ja": "ドイツ",
            "ko": "독일",
            "zh-TW": "德國"
        },
        "variety": {
            "en": "Grauburgunder",
            "ja": "グラウブルグンダー"
        },
        "vintage": "2024",
        "is_visible": false,
        "description": {
            "en": "Orange-tinged hue, aromas of nuts and spices. A dry wine with substantial fruitiness.",
            "ja": "オレンジがかった色調、ナッツやスパイスの香り。厚みのある果実味が特徴の飲み応えのある辛口。"
        }
    },
    {
        "id": 69,
        "body": "light",
        "name": {
            "en": "Rot",
            "ja": "ロット"
        },
        "tags": [
            {
                "en": "Germany",
                "ja": "ドイツ"
            },
            {
                "en": "Natural",
                "ja": "自然派"
            },
            {
                "en": "Easy to drink",
                "ja": "飲みやすい"
            }
        ],
        "type": "red",
        "price": 6230,
        "region": {
            "en": "Rheinhessen",
            "ja": "ラインヘッセン",
            "ko": "라인헤센",
            "zh-TW": "萊茵黑森"
        },
        "winery": {
            "en": "Weinreich",
            "ja": "ヴァインライヒ"
        },
        "country": {
            "en": "Germany",
            "ja": "ドイツ",
            "ko": "독일",
            "zh-TW": "德國"
        },
        "variety": {
            "en": "Dornfelder, Merlot, Cabernet Sauvignon",
            "ja": "ドルンフェルダー、メルロー、カベルネ・ソーヴィニヨン"
        },
        "vintage": "2021",
        "is_visible": true,
        "description": {
            "en": "Berry fruit flavors with earthy nuances. Mild tannins and easy to drink natural red wine.",
            "ja": "ベリー系の果実味と土っぽいニュアンス。渋みは穏やかでスルッと飲める自然派赤ワイン。"
        }
    },
    {
        "id": 70,
        "body": "semidry",
        "name": {
            "en": "Rose",
            "ja": "ロゼ"
        },
        "tags": [
            {
                "en": "Germany",
                "ja": "ドイツ"
            },
            {
                "en": "Natural",
                "ja": "自然派"
            },
            {
                "en": "Dry Rose",
                "ja": "辛口ロゼ"
            }
        ],
        "type": "rose",
        "price": 6230,
        "region": {
            "en": "Rheinhessen",
            "ja": "ラインヘッセン",
            "ko": "라인헤센",
            "zh-TW": "萊茵黑森"
        },
        "winery": {
            "en": "Weinreich",
            "ja": "ヴァインライヒ"
        },
        "country": {
            "en": "Germany",
            "ja": "ドイツ",
            "ko": "독일",
            "zh-TW": "德國"
        },
        "variety": {
            "en": "Pinot Meunier, Pinot Noir, Merlot, Portugieser",
            "ja": "ピノ・ムニエ、ピノ・ノワール、メルロー、ポルトギーザー"
        },
        "vintage": "2024",
        "is_visible": false,
        "description": {
            "en": "Charming aromas of strawberry and cherry. Not overly sweet, with firm acidity and minerality.",
            "ja": "チャーミングなイチゴやチェリーの香り。甘ったるさはなく、しっかりとした酸とミネラルがある。"
        }
    },
    {
        "id": 71,
        "body": "dry",
        "name": {
            "en": "Sans Soufre White",
            "ja": "サン・スフル 白"
        },
        "tags": [
            {
                "en": "Japanese Wine",
                "ja": "日本ワイン"
            },
            {
                "en": "Natural",
                "ja": "自然派"
            },
            {
                "en": "Cloudy Sparkling",
                "ja": "濁り泡"
            }
        ],
        "type": "sparkling",
        "price": 6160,
        "region": {
            "en": "Yamagata",
            "ja": "山形",
            "ko": "야마가타",
            "zh-TW": "山形"
        },
        "winery": {
            "en": "Takeda Winery",
            "ja": "タケダワイナリー"
        },
        "country": {
            "en": "Japan",
            "ja": "日本",
            "ko": "일본",
            "zh-TW": "日本"
        },
        "variety": {
            "en": "Delaware",
            "ja": "デラウェア"
        },
        "vintage": "2025",
        "is_visible": true,
        "description": {
            "en": "No added antioxidants (Sans Soufre). Features fresh Delaware aroma and umami from yeast lees.",
            "ja": "酸化防止剤無添加（サン・スフル）。デラウェアのフレッシュな香りと、酵母由来の濁りが生む旨味が特徴。"
        }
    },
    {
        "id": 72,
        "body": "dry",
        "name": {
            "en": "Sparkling Brut",
            "ja": "スパークリング ブリュット"
        },
        "tags": [
            {
                "en": "Argentina",
                "ja": "アルゼンチン"
            },
            {
                "en": "Chardonnay",
                "ja": "シャルドネ"
            },
            {
                "en": "Creamy",
                "ja": "クリーミー"
            }
        ],
        "type": "sparkling",
        "price": 3300,
        "region": {
            "en": "Mendoza",
            "ja": "メンドーサ",
            "ko": "멘도사",
            "zh-TW": "門多薩"
        },
        "winery": {
            "en": "Toso",
            "ja": "トソ"
        },
        "country": {
            "en": "Argentina",
            "ja": "アルゼンチン",
            "ko": "아르헨티나",
            "zh-TW": "阿根廷"
        },
        "variety": {
            "en": "Chardonnay",
            "ja": "シャルドネ"
        },
        "vintage": "NV",
        "is_visible": false,
        "description": {
            "en": "Aromas of lemon, toast, and citrus. Creamy and fresh palate, a well-balanced dry sparkling.",
            "ja": "レモンやトースト、柑橘の香り。クリーミーでフレッシュな口当たりを持つ、バランスの良い辛口。"
        }
    },
    {
        "id": 73,
        "body": "dry",
        "name": {
            "en": "Cuvée Blanc",
            "ja": "キュヴェ・ブラン"
        },
        "tags": [
            {
                "en": "Australia",
                "ja": "オーストラリア"
            },
            {
                "en": "Stylish",
                "ja": "スタイリッシュ"
            },
            {
                "en": "Elegant",
                "ja": "エレガント"
            }
        ],
        "type": "sparkling",
        "price": 3500,
        "region": {
            "en": "Coonawarra",
            "ja": "クナワラ",
            "ko": "쿠나와라",
            "zh-TW": "庫納瓦拉"
        },
        "winery": {
            "en": "Syn",
            "ja": "シン"
        },
        "country": {
            "en": "Australia",
            "ja": "オーストラリア",
            "ko": "호주",
            "zh-TW": "澳洲"
        },
        "variety": {
            "en": "Chardonnay, Pinot Noir",
            "ja": "シャルドネ、ピノ・ノワール"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Dry and elegant taste. Aromas of peach and citrus, with complexity from long aging.",
            "ja": "ドライでエレガントな味わい。桃や柑橘の香りに、長期熟成による複雑味も感じられる。"
        }
    },
    {
        "id": 74,
        "body": "semidry",
        "name": {
            "en": "Tebaldo Bianco",
            "ja": "テバルド ビアンコ"
        },
        "tags": [
            {
                "en": "Italy",
                "ja": "イタリア"
            },
            {
                "en": "Puglia",
                "ja": "プーリア"
            },
            {
                "en": "Crisp",
                "ja": "爽やか"
            }
        ],
        "type": "white",
        "price": 2000,
        "region": {
            "en": "Puglia",
            "ja": "プーリア",
            "ko": "풀리아",
            "zh-TW": "普利亞"
        },
        "winery": {
            "en": "Tebaldo",
            "ja": "テバルド"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Trebbiano, Chardonnay",
            "ja": "トレッビアーノ、シャルドネ"
        },
        "vintage": "2022",
        "is_visible": false,
        "description": {
            "en": "Fresh and fruity dry white. Crisp aromas of citrus and green apple, pairs well with appetizers and pasta.",
            "ja": "フレッシュでフルーティな辛口。柑橘や青リンゴの爽やかな香りがあり、前菜やパスタと合わせやすい。"
        }
    },
    {
        "id": 75,
        "body": "dry",
        "name": {
            "en": "Perla del Mar",
            "ja": "ペルラ・デル・マーレ"
        },
        "tags": [
            {
                "en": "Spain",
                "ja": "スペイン"
            },
            {
                "en": "Gorgeous",
                "ja": "華やか"
            },
            {
                "en": "Fruity",
                "ja": "フルーティ"
            }
        ],
        "type": "white",
        "price": 2900,
        "region": {
            "en": "Alicante",
            "ja": "アリカンテ",
            "ko": "알리칸테",
            "zh-TW": "阿利坎特"
        },
        "winery": {
            "en": "Perla del Mar",
            "ja": "ペルラ・デル・マーレ"
        },
        "country": {
            "en": "Spain",
            "ja": "スペイン",
            "ko": "스페인",
            "zh-TW": "西班牙"
        },
        "variety": {
            "en": "Chardonnay, Sauvignon Blanc",
            "ja": "シャルドネ、ソーヴィニヨン・ブラン"
        },
        "vintage": "2021",
        "is_visible": true,
        "description": {
            "en": "'Pearl of the Sea'. Gorgeous aromas of lychee and muscat, featuring a fruity and dry taste.",
            "ja": "「海の真珠」。ライチやマスカットの華やかな香りと、フルーティでドライな味わいが特徴。"
        }
    },
    {
        "id": 76,
        "body": "dry",
        "name": {
            "en": "Cheverny \"Delaille\"",
            "ja": "シュヴェルニー \"ドゥレイユ\""
        },
        "tags": [
            {
                "en": "Loire",
                "ja": "ロワール"
            },
            {
                "en": "Sauvignon Blanc",
                "ja": "ソーヴィニヨン・ブラン"
            },
            {
                "en": "Refreshing",
                "ja": "清涼感"
            }
        ],
        "type": "white",
        "price": 4500,
        "region": {
            "en": "Loire",
            "ja": "ロワール",
            "ko": "루아르",
            "zh-TW": "盧瓦爾"
        },
        "winery": {
            "en": "Domaine Salvard",
            "ja": "ドメーヌ・サルヴァ"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Sauvignon Blanc, Chardonnay",
            "ja": "ソーヴィニヨン・ブラン、シャルドネ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Crisp dry white from Loire. Refreshing aromas of grapefruit and herbs, with sharp acidity.",
            "ja": "ロワール地方の爽やかな辛口。グレープフルーツやハーブの清涼感ある香りと、キリッとした酸味。"
        }
    },
    {
        "id": 77,
        "body": "semidry",
        "name": {
            "en": "California Chardonnay",
            "ja": "カリフォルニア シャルドネ"
        },
        "tags": [
            {
                "en": "California",
                "ja": "カリフォルニア"
            },
            {
                "en": "Oaky",
                "ja": "樽香"
            },
            {
                "en": "Rich",
                "ja": "濃厚"
            }
        ],
        "type": "white",
        "price": 4400,
        "region": {
            "en": "California",
            "ja": "カリフォルニア",
            "ko": "캘리포니아",
            "zh-TW": "加州"
        },
        "winery": {
            "en": "Panamera",
            "ja": "パナメラ"
        },
        "country": {
            "en": "USA",
            "ja": "アメリカ",
            "ko": "미국",
            "zh-TW": "美國"
        },
        "variety": {
            "en": "Chardonnay",
            "ja": "シャルドネ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "Rich and creamy taste with ripe pineapple fruitiness blended with vanilla and oak aromas.",
            "ja": "完熟したパイナップルの果実味に、バニラや樽の香りが溶け込んだ、濃厚でクリーミーな味わい。"
        }
    },
    {
        "id": 78,
        "body": "full",
        "name": {
            "en": "Occi Rosso",
            "ja": "オッチ・ロッソ"
        },
        "tags": [
            {
                "en": "Sicily",
                "ja": "シチリア"
            },
            {
                "en": "Nero d'Avola",
                "ja": "ネロ・ダヴォラ"
            },
            {
                "en": "Spicy",
                "ja": "スパイシー"
            }
        ],
        "type": "red",
        "price": 3550,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Occi",
            "ja": "オッチ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Nero d'Avola",
            "ja": "ネロ・ダーヴォラ"
        },
        "vintage": "NV",
        "is_visible": false,
        "description": {
            "en": "Features aromas of sun-ripened Sicilian fruit and a spicy, concentrated taste.",
            "ja": "シチリアの太陽を浴びた完熟果実の香りと、スパイシーで凝縮感のある味わいが特徴。"
        }
    },
    {
        "id": 79,
        "body": "light",
        "name": {
            "en": "Saperavi",
            "ja": "サペラヴィ"
        },
        "tags": [
            {
                "en": "Georgia",
                "ja": "ジョージア"
            },
            {
                "en": "Saperavi",
                "ja": "サペラヴィ"
            },
            {
                "en": "Rich",
                "ja": "濃厚"
            }
        ],
        "type": "red",
        "price": 5050,
        "region": {
            "en": "Kakheti",
            "ja": "カヘティ",
            "ko": "카헤티",
            "zh-TW": "卡赫季"
        },
        "winery": {
            "en": "Taoba",
            "ja": "タオバ"
        },
        "country": {
            "en": "Georgia",
            "ja": "ジョージア",
            "ko": "조지아",
            "zh-TW": "喬治亞"
        },
        "variety": {
            "en": "Saperavi",
            "ja": "サペラヴィ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Georgia, the birthplace of wine. Deep color, aromas of blackberry and spice. Powerful tannins.",
            "ja": "ワイン発祥の地ジョージア。非常に濃い色調で、ブラックベリーやスパイスの香り。力強いタンニン。"
        }
    },
    {
        "id": 80,
        "body": "medium",
        "name": {
            "en": "Cote des Roses",
            "ja": "コート・デ・ローズ"
        },
        "tags": [
            {
                "en": "Rose Bottle",
                "ja": "バラのボトル"
            },
            {
                "en": "South of France",
                "ja": "南仏"
            },
            {
                "en": "Elegant",
                "ja": "エレガント"
            }
        ],
        "type": "red",
        "price": 4300,
        "region": {
            "en": "Languedoc-Roussillon",
            "ja": "ラングドック・ルーション"
        },
        "winery": {
            "en": "Gérard Bertrand",
            "ja": "ジェラール・ベルトラン"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Pinot Noir",
            "ja": "ピノ・ノワール"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "Bottle with a rose-shaped bottom. Aromas of cherry and wild strawberry with spicy notes. Velvety mouthfeel and silky tannins.",
            "ja": "瓶底がバラの形のボトル。サクランボや野イチゴの果実味とスパイスの香り。ビロードのような口当たりとシルキーなタンニン。"
        }
    },
    {
        "id": 81,
        "body": "full",
        "name": {
            "en": "1949 \"Calabria Rosso\"",
            "ja": "1949 \"カラブリア ロッソ\""
        },
        "tags": [
            {
                "en": "Fruity",
                "ja": "果実味"
            },
            {
                "en": "Spices",
                "ja": "スパイス"
            }
        ],
        "type": "red",
        "price": 5900,
        "region": {
            "en": "Calabria",
            "ja": "カラブリア",
            "ko": "칼라브리아",
            "zh-TW": "卡拉布里亞"
        },
        "winery": {
            "en": "De Luca",
            "ja": "デ ルーカ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Nerello Mascalese, Gaglioppo",
            "ja": "ネレッロ・マスカレーゼ、ガリオッポ"
        },
        "vintage": "2020",
        "is_visible": true,
        "description": {
            "en": "An approachable red wine with rich berry-sweet fruit flavors and less astringency for smooth drinking",
            "ja": "ベリー系の甘みを伴う果実味が豊かで、渋みが少なくスムーズに飲める、親しみやすい赤ワイン"
        }
    },
    {
        "id": 82,
        "body": "light",
        "name": {
            "en": "Los Cabernet Franc",
            "ja": "ロス カベルネ・フラン"
        },
        "tags": [
            {
                "en": "Fresh",
                "ja": "フレッシュ"
            },
            {
                "en": "Fruity",
                "ja": "果実味"
            },
            {
                "en": "Spices",
                "ja": "スパイス"
            }
        ],
        "type": "red",
        "price": 3000,
        "region": {
            "en": "Friuli",
            "ja": "フリウリ",
            "ko": "프리울리",
            "zh-TW": "弗留利"
        },
        "winery": {
            "en": "Toblar",
            "ja": "トブラール"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Cabernet Franc",
            "ja": "カベルネ・フラン"
        },
        "vintage": "2023",
        "is_visible": false,
        "description": {
            "en": "An elegant and balanced Northern Italian red wine with a pleasant herbaceous coolness and spice accents",
            "ja": "ハーブのような清涼感とスパイスのアクセントが心地よい、上品でバランスの取れた北イタリアの赤ワイン"
        }
    },
    {
        "id": 83,
        "body": "full",
        "name": {
            "en": "Cote du Rhône Rouge",
            "ja": "コート　デュ　ローヌ　ルージュ"
        },
        "tags": [],
        "type": "red",
        "price": 5000,
        "region": {
            "en": "Côtes du Rhône",
            "ja": "コート・デュ・ローヌ"
        },
        "winery": {
            "en": "Domaine de la Mordore",
            "ja": "ドメーヌ　ド　ラ　モルドレ"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Grenache, Syrah, Cinsault, Other varieties",
            "ja": "グルナッシュ、シラー、サンソー、その他"
        },
        "vintage": "NV",
        "is_visible": false,
        "description": {
            "en": "The scent is reminiscent of violet flowers and herbs, and the intense feeling is like a cassis. You can feel the firm structure and soft tannins.",
            "ja": "スミレの花やハーブを思わせる香り、カシスのような集約感が見事です。しっかりとした構成とこなれた柔らかいタンニンが感じられます。"
        }
    },
    {
        "id": 84,
        "body": "full",
        "name": {
            "en": "Vacheras-Feudochene Cuvée Damien",
            "ja": "ヴァケラス　フュ　ド　シェーヌ　キュヴェ　ダミアン"
        },
        "tags": [],
        "type": "red",
        "price": 5280,
        "region": {
            "en": "Côtes du Rhône",
            "ja": "コート・デュ・ローヌ"
        },
        "winery": {
            "en": "Domaine Buerle",
            "ja": "ドメーヌ　ビュルル"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Syrah, Other varieties",
            "ja": "シラー、その他"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "It is the only wine that the Burrul family produces by ageing in barrels. After aging in barrels for about 4 months, transfer to a tank and put to bed. It has a firm body and a soft texture. The flavour of the barrel is subtle, further enhancing the fruitiness.",
            "ja": "ビュルル家が樽で熟成させて造る唯一のワインです。樽で約４ヶ月熟成後、タンクに移し替えて寝かせます。しっかりしたボディ、柔らかな舌触りです。樽の風味はほのかに感じられ、果実味をさらに引き立てます。"
        }
    },
    {
        "id": 85,
        "body": "full",
        "name": {
            "en": "Givly Rouge Vieille Vigne",
            "ja": "ジヴリ　ルージュ　ヴィエイユ　ヴィーニュ"
        },
        "tags": [],
        "type": "red",
        "price": 5680,
        "region": {
            "en": "Burgundy",
            "ja": "ブルゴーニュ",
            "ko": "부르고뉴",
            "zh-TW": "勃艮第"
        },
        "winery": {
            "en": "Domaine Gouvar",
            "ja": "ドメーヌ　グバール"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Pinot Noir",
            "ja": "ピノ・ノワール"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Mainly stainless steel tanks, some of which are aged in barricades. It has a fresh aroma reminiscent of fresh strawberries. It has a decent body and elegant tannins.",
            "ja": "主にステンレスタンク、一部をバリックで熟成。新鮮なイチゴを思わせるフレッシュなアロマがあります。程よいボディと上品なタンニンが感じられます。"
        }
    },
    {
        "id": 86,
        "body": "full",
        "name": {
            "en": "Burgundy Haute Cote de Beaune Rouge Cuvée du Ménille",
            "ja": "ブルゴーニュ　オート　コート　ド　ボーヌ　ルージュ　キュヴェ　デュ　メニール"
        },
        "tags": [],
        "type": "red",
        "price": 8190,
        "region": {
            "en": "Burgundy",
            "ja": "ブルゴーニュ",
            "ko": "부르고뉴",
            "zh-TW": "勃艮第"
        },
        "winery": {
            "en": "Charles Père Efeille",
            "ja": "シャルル　ペール　エ　フィーユ"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Pinot Noir",
            "ja": "ピノ・ノワール"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "It is a cuvee filled with attention, aged in special oak barrels with Domaine's flagship wines. The maturation period is 12 months. It has a rich aroma of red and black fruits, elegant fruit feeling and skeleton, and a pleasant nuance of the barrel.",
            "ja": "ドメーヌのフラッグシップワインで特注のオーク樽で熟成させた、こだわりの詰まったキュヴェです。熟成期間は12ヶ月です。赤や黒の果実の豊かなアロマ、上品な果実感と骨格があり樽の心地よいニュアンスが感じられます。"
        }
    },
    {
        "id": 87,
        "body": "full",
        "name": {
            "en": "Château Le Pierere Blais",
            "ja": "シャトー　レ　ピエーレレ　ブライ"
        },
        "tags": [],
        "type": "red",
        "price": 5280,
        "region": {
            "en": "Bordeaux",
            "ja": "ボルドー",
            "ko": "보르도",
            "zh-TW": "波爾多"
        },
        "winery": {
            "en": "Château Orcantloupe",
            "ja": "シャトー　オー　カントループ"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Merlot, Malbec",
            "ja": "メルロー、マルベック"
        },
        "vintage": "NV",
        "is_visible": false,
        "description": {
            "en": "It is a superior class built with A.O.C. Bligh. After fermentation, it is a high-quality one that has been aged in new barrels.",
            "ja": "A .O.C ブライで造る、上位クラスです。発酵後、新樽で熟成させた上質な1本です。"
        }
    },
    {
        "id": 88,
        "body": "full",
        "name": {
            "en": "Château Le Hôtel Rouge Grande Van Prenitude",
            "ja": "シャトー　レオール　ルージュ　グラン　ヴァン　プレニテュード"
        },
        "tags": [],
        "type": "red",
        "price": 7400,
        "region": {
            "en": "Bordeaux",
            "ja": "ボルドー",
            "ko": "보르도",
            "zh-TW": "波爾多"
        },
        "winery": {
            "en": "Château Leor",
            "ja": "シャトー　レオール"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Cabernet Sauvignon, Merlot, and more",
            "ja": "カベルネ・ソーヴィニヨン、メルロー、他"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Use only the best plots of free-run juice with old trees. Aged in new barrels for 14-18 months. The complexities and minerality unfold with the voluminous flavour of black fruits.",
            "ja": "古い樹齢の樹がある最良区画のフリーラン　ジュースのみを使用。新樽で14ー18ヶ月熟成させます。ボリュームのある黒い果実の風味と共に、複雑さとミネラル感がじわじわと広がります。"
        }
    },
    {
        "id": 89,
        "body": "semidry",
        "name": {
            "en": "Brudertal Grand Cru Gewurztraminer",
            "ja": "ブリュデルタール　グラン　クリュ　ゲヴュルツトラミネール"
        },
        "tags": [],
        "type": "white",
        "price": 7920,
        "region": {
            "en": "Alsace",
            "ja": "アルザス",
            "ko": "알자스",
            "zh-TW": "阿爾薩斯"
        },
        "winery": {
            "en": "Domaine Brel",
            "ja": "ドメーヌ　ブレル"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Gewürztraminer",
            "ja": "ゲヴュルツトラミネール"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Wine from Blancru \"Brüdertal\" in the village of Morsheim. After fermentation in a stainless steel tank, age in barrels with clean starch. Moderately voluminous, sophisticated and well-balanced Gewurztraminer",
            "ja": "モルスハイム村のブランクリュ「ブリュデルタール」からのワイン。ステンレスタンクで発酵後、綺麗な澱と共に樽で熟成させます。程よいボリュームがあり、洗練されたバランスの良いゲヴュルツトラミネールです"
        }
    },
    {
        "id": 90,
        "body": "dry",
        "name": {
            "en": "Chablis Premier Cru Voglo",
            "ja": "シャブリ　プルミエ　クリュ　ヴォグロ"
        },
        "tags": [],
        "type": "white",
        "price": 10300,
        "region": {
            "en": "Chablis",
            "ja": "シャブリ"
        },
        "winery": {
            "en": "Gilbert Picue Cephis",
            "ja": "ジルベール　ピク　エ　セ　フィス"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Chardonnay",
            "ja": "シャルドネ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Located in the village of Siche where the Domaine is located, it can be said that it is a Premier Cru that represents Piku. It has a beautiful greenish golden color, a firm mineral feel, excellent acidity and fruitiness, and a harmonious taste.",
            "ja": "ドメーヌのあるシシェ村にあり、ピクを代表するプルミエ　クリュと言えます。美しい緑がかった黄金色、しっかりとしたミネラル感、酸味と果実味が素晴らしく、調和の取れた味わいを持っています。"
        }
    },
    {
        "id": 91,
        "body": "semidry",
        "name": {
            "en": "Pinot Chardonnay",
            "ja": "ピノ　シャルドネ"
        },
        "tags": [],
        "type": "sparkling",
        "price": 2100,
        "region": {
            "en": "Piedmont",
            "ja": "ピエモンテ",
            "ko": "피에몬테",
            "zh-TW": "皮埃蒙特"
        },
        "winery": {
            "en": "Casa Marteretti",
            "ja": "カーサ　マルテレッティ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Pinot Noir, Chardonnay",
            "ja": "ピノ・ノワール、シャルドネ"
        },
        "vintage": "NV",
        "is_visible": false,
        "description": {
            "en": "",
            "ja": ""
        }
    },
    {
        "id": 92,
        "body": "dry",
        "name": {
            "en": "Asolo Prosecco Superiore",
            "ja": "アゾーロ・プロセッコ・スペリオーレ"
        },
        "tags": [],
        "type": "sparkling",
        "price": 4200,
        "region": {
            "en": "Veneto",
            "ja": "ヴェネト",
            "ko": "베네토",
            "zh-TW": "威尼托"
        },
        "winery": {
            "en": "Cantine Sacchetto",
            "ja": "カンティーネ　サケット"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Glera",
            "ja": "グレーラ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Powerful and fruity, with floral connotations such as fuji flowers and acacia. Fresh fruit flavors spread.",
            "ja": "力強くフルーティーで、フジの花やアカシアなどのフローラルな含みがあります。新鮮な果実の風味が広がります。"
        }
    },
    {
        "id": 93,
        "body": "full",
        "name": {
            "en": "Napa Valley Red",
            "ja": "ナパ・ヴァレー　レッド"
        },
        "tags": [],
        "type": "red",
        "price": 8060,
        "region": {
            "en": "California",
            "ja": "カリフォルニア",
            "ko": "캘리포니아",
            "zh-TW": "加州"
        },
        "winery": {
            "en": "Navigator Wine Collection",
            "ja": "ナヴィゲーター・ワイン・コレクション"
        },
        "country": {
            "en": "USA",
            "ja": "アメリカ",
            "ko": "미국",
            "zh-TW": "美國"
        },
        "variety": {
            "en": "Cabernet Sauvignon, Petit Verdot, Merlot, Malbec",
            "ja": "カベルネ・ソーヴィニヨン、プティ・ヴェルド、メルロー、マルベック"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "It has a firm tannin structure and is followed by a long, robust, flavourful aftertaste with vanilla due to oak barrel aging. Steak and spiced dishes go well together",
            "ja": "しっかりしたタンニンのストラクチャーを持ち、オーク樽熟成による長く、力強い、バニラを含む風味豊かな後味が続く。ステーキ、スパイスの効いた料理と好相性"
        }
    },
    {
        "id": 94,
        "body": "light",
        "name": {
            "en": "Naturae Orange",
            "ja": "ナチュラエ　オレンジ"
        },
        "tags": [],
        "type": "orange",
        "price": 5920,
        "region": {
            "en": "Languedoc-Roussillon",
            "ja": "ラングドック・ルーション"
        },
        "winery": {
            "en": "Gérard Bertrand",
            "ja": "ジェラール・ベルトラン"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Chardonnay, Grenache Blanc, Viognier, Muscat",
            "ja": "シャルドネ、グルナッシュ・ブラン、ヴィオニエ、マスカット"
        },
        "vintage": "NV",
        "is_visible": false,
        "description": {
            "en": "Beautiful bright shades of orange. Included in the mouth, it feels the perfect balance of freshness and mellowness, adding floral and brioche flavors.",
            "ja": "オレンジ色がかった美しい明るい色合い。口に含むと、フレッシュさとまろやかさの完璧なバランスを感じ、フローラルとブリオッシュの風味も加わる。"
        }
    },
    {
        "id": 95,
        "body": "medium",
        "name": {
            "en": "Pinot Grigio",
            "ja": "ピノ・グリージョ"
        },
        "tags": [],
        "type": "white",
        "price": 3700,
        "region": {
            "en": "Veneto",
            "ja": "ヴェネト",
            "ko": "베네토",
            "zh-TW": "威尼托"
        },
        "winery": {
            "en": "Cantine Sacchetto",
            "ja": "カンティーネ　サケット"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Pinot Grigio",
            "ja": "ピノ・グリージョ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "A wine rich in fresh fruit flavors and balanced with moderate acidity.",
            "ja": "フレッシュな果実味豊かで程よい酸味とバランスの取れたワイン。"
        }
    },
    {
        "id": 96,
        "body": "medium",
        "name": {
            "en": "Sauvignon Blanc",
            "ja": "ソーヴィニヨン・ブラン"
        },
        "tags": [],
        "type": "white",
        "price": 5280,
        "region": {
            "en": "Marlborough",
            "ja": "マールボロ",
            "ko": "말보로",
            "zh-TW": "馬爾堡"
        },
        "winery": {
            "en": "St. Clair Family Estate",
            "ja": "セント　クレア　ファミリーエステート"
        },
        "country": {
            "en": "New Zealand",
            "ja": "ニュージーランド",
            "ko": "뉴질랜드",
            "zh-TW": "紐西蘭"
        },
        "variety": {
            "en": "Sauvignon Blanc",
            "ja": "ソーヴィニヨン・ブラン"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "Passion fruit and grapefruit reminiscent of vivid fruit flavors and grassy cool aromas, characterized by sharp acidity",
            "ja": "パッションフルーツやグレープフルーツを思わせる鮮烈な果実味と青草のような清涼感のあるアロマ、シャープな酸味が特徴"
        }
    },
    {
        "id": 97,
        "body": "medium",
        "name": {
            "en": "Rose Tattoo Blanc",
            "ja": "ローズ・タトゥー　ブラン"
        },
        "tags": [],
        "type": "white",
        "price": 6780,
        "region": {
            "en": "Provence",
            "ja": "プロヴァンス"
        },
        "winery": {
            "en": "Vignoble Chevron Villette",
            "ja": "ヴィニョーブル　シュヴロン　ヴィレット"
        },
        "country": {
            "en": "France",
            "ja": "フランス",
            "ko": "프랑스",
            "zh-TW": "法國"
        },
        "variety": {
            "en": "Vermentino",
            "ja": "ヴェルメンティーノ"
        },
        "vintage": "NV",
        "is_visible": true,
        "description": {
            "en": "A clear hue; the nose shows the rich and expressive content of bananas, peaches, apricots and bergamot candies. The plenty of fleshy taste stands out for its firm fruity and sweet taste, and it feels modestly citrusy.",
            "ja": "澄みきった色合い。ノーズはバナナ、桃、アプリコット、ベルガモットキャンディーの濃厚で表情豊かな含みを示す。たっぷりとして肉厚な味わいは、しっかりとしたフルーティーさと甘味が際立ち、控えめな柑橘系を感じる。"
        }
    },
    {
        "id": 98,
        "body": "medium",
        "name": {
            "en": "Temps Rosso",
            "ja": "テンプス　ロッソ"
        },
        "tags": [],
        "type": "red",
        "price": 3850,
        "region": {
            "en": "Veneto",
            "ja": "ヴェネト",
            "ko": "베네토",
            "zh-TW": "威尼托"
        },
        "winery": {
            "en": "Stefano Accordini",
            "ja": "ステファノ　アッコルディーニ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Corvina, Merlot",
            "ja": "コルヴィーナ、メルロー"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "It is characterized by rich fruit flavors such as blueberries and sour cherries, and smooth and gentle tannins (astringency) due to barrel maturation, making it excellent for meat dishes.",
            "ja": "ブルーベリーやサワーチェリーのような豊かな果実味と、大樽熟成による滑らかで優しいタンニン（渋み）が特徴で、お肉料理などとの相性が抜群です"
        }
    },
    {
        "id": 99,
        "body": "medium",
        "name": {
            "en": "Roccascossa",
            "ja": "ロッカスコッサ"
        },
        "tags": [],
        "type": "red",
        "price": 3000,
        "region": {
            "en": "Umbria",
            "ja": "ウンブリア",
            "ko": "움브리아",
            "zh-TW": "翁布里亞"
        },
        "winery": {
            "en": "Terre Margaritelli",
            "ja": "テッレ マルガリテッリ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Sangiovese, Cabernet",
            "ja": "サンジョヴェーゼ、カベルネ"
        },
        "vintage": "2021",
        "is_visible": true,
        "description": {
            "en": "Bright ruby with a light aroma of tobacco and other spices. Favorite strawberries and cherries, fresh and soft and young to drink",
            "ja": "明るいルビー色。軽くタバコなどのスパイスの香り。好ましいイチゴやサクランボ、フレッシュかつ口当たりは柔らかく若飲みタイプ"
        }
    },
    {
        "id": 100,
        "body": "medium",
        "name": {
            "en": "Lacrima di Morro d 'Alba",
            "ja": "ラクリマ　ディ　モッロ　ダルバ"
        },
        "tags": [],
        "type": "red",
        "price": 4200,
        "region": {
            "en": "Marche",
            "ja": "マルケ",
            "ko": "마르케",
            "zh-TW": "馬爾凱"
        },
        "winery": {
            "en": "Belisario",
            "ja": "ベリサリオ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Lacrima",
            "ja": "ラクリマ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "1 bottle featuring gorgeous aromas like roses and violets, fresh and juicy red fruits and soft tannins",
            "ja": "バラやスミレのような華やかなアロマと、フレッシュでジューシーな赤い果実味、やわらかなタンニンが特徴の1本"
        }
    },
    {
        "id": 101,
        "body": "dry",
        "name": {
            "en": "Zabu Grillo",
            "ja": "ザブ　グリッロ"
        },
        "tags": [],
        "type": "white",
        "price": 2100,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Viniety Zab/Fantini",
            "ja": "ヴィニエティ　ザブ/ファンティーニ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Grillo",
            "ja": "グリッロ"
        },
        "vintage": "2025",
        "is_visible": true,
        "description": {
            "en": "100% Sicilian varietal grillo. It has a soft floral aroma and a fresh yet moderate fruit thickness.",
            "ja": "シチリアを代表する品種グリッロ100％。さやわかな花の香り、フレッシュでありながら程よい果実の厚みがある"
        }
    },
    {
        "id": 102,
        "body": "dry",
        "name": {
            "en": "Lucian Les Stelle Vermentino di Sardinia",
            "ja": "ルチェアン　レ　ステッレ　ヴェルメンティーノ　ディ　サルディーニャ"
        },
        "tags": [],
        "type": "white",
        "price": 4620,
        "region": {
            "en": "Sardinia",
            "ja": "サルディーニャ"
        },
        "winery": {
            "en": "Antiki Poderi Yelts",
            "ja": "アンティキ　ポデリ　イェルツ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Vermentino",
            "ja": "ヴェルメンティーノ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "An elegant aroma of citrus fruits reminiscent of lemon and grapefruit. Fresh, soft and fruity flavors",
            "ja": "レモンやグレープフルーツを思わせる柑橘系の果実の上品なアロマが広がります。フレッシュ、柔らかくフルーティーな味わいがあります"
        }
    },
    {
        "id": 103,
        "body": "dry",
        "name": {
            "en": "La Cerezione Vanedda Bianco",
            "ja": "ラ　セレツィオーネ　ヴァネッダ　ビアンコ"
        },
        "tags": [],
        "type": "white",
        "price": 5280,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Azienda Agricola Cortese",
            "ja": "アジエンダ　アグリコーラ　コルテーゼ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Catarratto, Grillo",
            "ja": "カタラット、グリッロ"
        },
        "vintage": "2022",
        "is_visible": true,
        "description": {
            "en": "A blend of typical Sicilian varieties. Rich texture due to aging in barrels, balanced acid supports the whole",
            "ja": "シチリアの典型的な品種をブレンド。樽での熟成によるリッチなテクスチャーがあり、バランスの良い酸が全体を支えています"
        }
    },
    {
        "id": 104,
        "body": "dry",
        "name": {
            "en": "Vesevo Falanghina",
            "ja": "ヴェゼーヴォ・ファランギーナ"
        },
        "tags": [],
        "type": "white",
        "price": 3200,
        "region": {
            "en": "Campania",
            "ja": "カンパニア",
            "ko": "캄파니아",
            "zh-TW": "坎帕尼亞"
        },
        "winery": {
            "en": "Vesevo / Fantini",
            "ja": "ヴェゼーヴォ／ファンティーニ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Falanghina",
            "ja": "ファランギーナ"
        },
        "vintage": "2024",
        "is_visible": true,
        "description": {
            "en": "Sophisticated aromas of spicy white flowers and tea, lamb nectar and mint. Rich fruity flavors with fresh, firm acids and minerals",
            "ja": "スパイシーで白い花や紅茶、ラムネやミントの洗練された香り。豊かな果実味にフレッシュで引き締まった酸とミネラルがあります"
        }
    },
    {
        "id": 105,
        "body": "full",
        "name": {
            "en": "Vesevo Aglianico",
            "ja": "ヴェゼーヴォ・アリアニコ"
        },
        "tags": [],
        "type": "red",
        "price": 3200,
        "region": {
            "en": "Campania",
            "ja": "カンパニア",
            "ko": "캄파니아",
            "zh-TW": "坎帕尼亞"
        },
        "winery": {
            "en": "Vesevo / Fantini",
            "ja": "ヴェゼーヴォ／ファンティーニ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Aglianico",
            "ja": "アリアニコ"
        },
        "vintage": "2023",
        "is_visible": true,
        "description": {
            "en": "Strong skeleton, ripe tannins. It's voluminous and has a long finish.",
            "ja": "しっかりとした骨格、熟したタンニン。ボリュームがしっかりあり長い余韻が続きます"
        }
    },
    {
        "id": 106,
        "body": "dry",
        "name": {
            "en": "Saragato Vermentino Isola dei Nuragi",
            "ja": "サーラガト　ヴェルメンティーノ　イゾラ　デイ　ヌラーギ"
        },
        "tags": [],
        "type": "white",
        "price": 3500,
        "region": {
            "en": "Sardinia",
            "ja": "サルディーニャ"
        },
        "winery": {
            "en": "Atzay/Fantini",
            "ja": "アッツェイ/ファンティーニ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Vermentino",
            "ja": "ヴェルメンティーノ"
        },
        "vintage": "2024",
        "is_visible": false,
        "description": {
            "en": "There are rosemary, pear and white peach aromas. Fresh, firm skeleton and well-balanced wines",
            "ja": "ローズマリー、洋梨や白桃のアロマがあります。フレッシュでしっかりとした骨格があり、バランスの良いワイン"
        }
    },
    {
        "id": 107,
        "body": "full",
        "name": {
            "en": "Salagato Cannonau di Sardinia",
            "ja": "サーラガト　カンノナウ　ディ　サルディーニャ"
        },
        "tags": [],
        "type": "red",
        "price": 3700,
        "region": {
            "en": "Sardinia",
            "ja": "サルディーニャ"
        },
        "winery": {
            "en": "Atzay/Fantini",
            "ja": "アッツェイ/ファンティーニ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Cannonau",
            "ja": "カンノナウ"
        },
        "vintage": "2021",
        "is_visible": false,
        "description": {
            "en": "Strong aromas of ripe black fruits are accompanied by elements of violets and dried roses.",
            "ja": "熟した黒の果実の強いアロマと共に、スミレの花や乾燥させたバラの花の要素が感じられます。"
        }
    },
    {
        "id": 108,
        "body": "full",
        "name": {
            "en": "Il Passo Nerello Mascalese",
            "ja": "イル・パッソ・ネレッロ・マスカレーゼ"
        },
        "tags": [],
        "type": "red",
        "price": 3600,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Vigneti Zabù / Fantini",
            "ja": "ヴィニエティ・ザブ／ファンティーニ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Nerello Mascalese",
            "ja": "ネレッロ・マスカレーゼ"
        },
        "vintage": "2024",
        "is_visible": true,
        "description": {
            "en": "Tannins are round and smooth. It spreads so that the sweetness of the fruit can be played.",
            "ja": "タンニンは丸くなめらか。果実が持つ甘みが弾けるように広がります"
        }
    },
    {
        "id": 109,
        "body": "full",
        "name": {
            "en": "Boscopiano Frappato",
            "ja": "ボスコピアーノ　フラッパート"
        },
        "tags": [],
        "type": "red",
        "price": 15840,
        "region": {
            "en": "Sicily",
            "ja": "シチリア",
            "ko": "시칠리아",
            "zh-TW": "西西里"
        },
        "winery": {
            "en": "Azienda Agricola Cortese",
            "ja": "アジエンダ　アグリコーラ　コルテーゼ"
        },
        "country": {
            "en": "Italy",
            "ja": "イタリア",
            "ko": "이탈리아",
            "zh-TW": "義大利"
        },
        "variety": {
            "en": "Frappato",
            "ja": "フラッパート"
        },
        "vintage": "2020",
        "is_visible": true,
        "description": {
            "en": "It features complex aromas such as red fruits and spices, flowers and oranges, and a supple and elegant taste.",
            "ja": "赤い果実やスパイス、花、オレンジなどの複雑なアロマとしなやかで上品な味わいが特徴"
        }
    }
];

const WINE_STORAGE_KEY = 'lalupa_wines_v17';
