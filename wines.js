// ===================================
// La Lupa Wine List - Data
// ===================================

const initialWines = [
    {
        "id": 1,
        "name": {
            "ja": "バローロ",
            "en": "Barolo"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "ピエモンテ",
            "en": "Piedmont"
        },
        "vintage": "2020",
        "variety": {
            "ja": "ネッビオーロ",
            "en": "Nebbiolo"
        },
        "body": "full",
        "winery": {
            "ja": "マッソリーノ",
            "en": "Massolino"
        },
        "price": 13860,
        "description": {
            "ja": "「ワインの王」。芳醇さと緊張感があり, しっかりとした構造の中にエレガンスがある。",
            "en": "The 'King of Wines'. Rich and tense, with elegance within a solid structure."
        },
        "tags": [
            {
                "ja": "長期熟成",
                "en": "Long Aging"
            },
            {
                "ja": "エレガント",
                "en": "Elegant"
            },
            {
                "ja": "力強い",
                "en": "Powerful"
            }
        ],
        "isVisible": true
    },
    {
        "id": 2,
        "name": {
            "ja": "ランゲ・ソーヴィニヨン",
            "en": "Langhe Sauvignon"
        },
        "type": "white",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "ピエモンテ",
            "en": "Piedmont"
        },
        "vintage": "2022",
        "variety": {
            "ja": "ソーヴィニヨン",
            "en": "Sauvignon"
        },
        "body": "dry",
        "winery": {
            "ja": "ブリッコマイオーリカ",
            "en": "Bricco Maiolica"
        },
        "price": 5390,
        "description": {
            "ja": "アプリコットのような果実の香り, フレッシュな口当たりながら凝縮感がある。",
            "en": "Aromas of apricot-like fruit, fresh on the palate yet concentrated."
        },
        "tags": [
            {
                "ja": "アプリコット",
                "en": "Apricot"
            },
            {
                "ja": "熟した果実",
                "en": "Ripe Fruit"
            },
            {
                "ja": "フレッシュ",
                "en": "Fresh"
            }
        ],
        "isVisible": true
    },
    {
        "id": 3,
        "name": {
            "ja": "ソアーヴェ・クラシコ \"カゼッテ・フォスカリーノ\"",
            "en": "Soave Classico \"Casette Foscarino\""
        },
        "type": "white",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "ヴェネト",
            "en": "Veneto"
        },
        "vintage": "2022",
        "variety": {
            "ja": "ガルガネガ, トレッビアーノ",
            "en": "Garganega, Trebbiano di Soave"
        },
        "body": "dry",
        "winery": {
            "ja": "モンテ トンド",
            "en": "Monte Tondo"
        },
        "price": 4620,
        "description": {
            "ja": "バニラの香りとまろやかな味わい。ハチミツやドライフルーツの風味, リッチで滑らか。",
            "en": "Vanilla aromas and mellow taste. Flavors of honey and dried fruit, rich and smooth."
        },
        "tags": [
            {
                "ja": "バニラ香",
                "en": "Vanilla Aroma"
            },
            {
                "ja": "まろやか",
                "en": "Mellow"
            },
            {
                "ja": "フルボディ",
                "en": "Full Body"
            }
        ],
        "isVisible": true
    },
    {
        "id": 4,
        "name": {
            "ja": "ヴァルポリチェッラ・スペリオーレ",
            "en": "Valpolicella Superiore"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "ヴェネト",
            "en": "Veneto"
        },
        "vintage": "2022",
        "variety": {
            "ja": "コルヴィーナ, ロンディネッラ, モリナーラ",
            "en": "Corvina, Rondinella, Molinara"
        },
        "body": "medium",
        "winery": {
            "ja": "ステファノ アッコルディーニ",
            "en": "Stefano Accordini"
        },
        "price": 5080,
        "description": {
            "ja": "濃いルビー色。イチゴやサクランボの香り, ミネラルのニュアンス。ドライで程よいタンニン。",
            "en": "Deep ruby color. Aromas of strawberry and cherry, with mineral nuances. Dry with moderate tannins."
        },
        "tags": [
            {
                "ja": "ドライ",
                "en": "Dry"
            },
            {
                "ja": "赤い果実",
                "en": "Red Fruit"
            },
            {
                "ja": "ミネラル",
                "en": "Minerality"
            }
        ],
        "isVisible": true
    },
    {
        "id": 5,
        "name": {
            "ja": "トラミネール アロマティコ",
            "en": "Traminer Aromatico"
        },
        "type": "white",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "フリウリ",
            "en": "Friuli"
        },
        "vintage": "2023",
        "variety": {
            "ja": "トラミネール・アロマティコ",
            "en": "Traminer Aromatico"
        },
        "body": "dry",
        "winery": {
            "ja": "トブラール",
            "en": "Toblar"
        },
        "price": 4470,
        "description": {
            "ja": "ライチやバラ, スパイスのアロマティックな香り。滑らかでミネラル感がある。",
            "en": "Aromatic scents of lychee, rose, and spice. Smooth with a mineral feel."
        },
        "tags": [
            {
                "ja": "アロマティック",
                "en": "Aromatic"
            },
            {
                "ja": "ライチの香り",
                "en": "Lychee Aroma"
            },
            {
                "ja": "スパイシー",
                "en": "Spicy"
            }
        ],
        "isVisible": true
    },
    {
        "id": 6,
        "name": {
            "ja": "ブルネッロ ディ モンタルチーノ",
            "en": "Brunello di Montalcino"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "トスカーナ",
            "en": "Tuscany"
        },
        "vintage": "2019",
        "variety": {
            "ja": "サンジョヴェーゼ・グロッソ",
            "en": "Sangiovese Grosso"
        },
        "body": "full",
        "winery": {
            "ja": "マルトッチャ",
            "en": "Martoccia"
        },
        "price": 11550,
        "description": {
            "ja": "トスカーナの偉大な赤。複雑なプラムやチェリーの香り, 滑らかなタンニンと深い余韻。",
            "en": "A great Tuscan red. Complex aromas of plum and cherry, smooth tannins and a deep finish."
        },
        "tags": [
            {
                "ja": "長期熟成",
                "en": "Long Aging"
            },
            {
                "ja": "サンジョヴェーゼ",
                "en": "Sangiovese"
            },
            {
                "ja": "複雑味",
                "en": "Complexity"
            }
        ],
        "isVisible": true
    },
    {
        "id": 7,
        "name": {
            "ja": "キャンティ・クラシコ \"レ・マッセ・ディ・グレーヴェ\"",
            "en": "Chianti Classico \"Le Masse di Greve\""
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "トスカーナ",
            "en": "Tuscany"
        },
        "vintage": "2021",
        "variety": {
            "ja": "サンジョヴェーゼ・グロッソ",
            "en": "Sangiovese Grosso"
        },
        "body": "medium",
        "winery": {
            "ja": "ランチョーラ",
            "en": "Lanciola"
        },
        "price": 4520,
        "description": {
            "ja": "シンプルな赤身肉やキノコ料理, ハードチーズとよく合う。",
            "en": "Pairs well with simple red meats, mushroom dishes, and hard cheeses."
        },
        "tags": [
            {
                "ja": "キャンティ",
                "en": "Chianti"
            },
            {
                "ja": "メルローブレンド",
                "en": "Merlot Blend"
            },
            {
                "ja": "肉料理に合う",
                "en": "Pairs with Meat"
            }
        ],
        "isVisible": true
    },
    {
        "id": 8,
        "name": {
            "ja": "サン・セヴェーロ ロッソ",
            "en": "San Severo Rosso"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2021",
        "variety": {
            "ja": "モンテプルチャーノ",
            "en": "Montepulciano"
        },
        "body": "medium",
        "winery": {
            "ja": "ダルフォンソ デル ソルド",
            "en": "d'Alfonso del Sordo"
        },
        "price": 2780,
        "description": {
            "ja": "ルビーレッド色。ワインらしい豊かな果実味と, ドライでバランスの取れた味わい。",
            "en": "Ruby red color. Rich fruitiness typical of wine, with a dry and balanced taste."
        },
        "tags": [
            {
                "ja": "ルビー色",
                "en": "Ruby Color"
            },
            {
                "ja": "フルーティ",
                "en": "Fruity"
            },
            {
                "ja": "調和のとれた",
                "en": "Harmonious"
            }
        ],
        "isVisible": true
    },
    {
        "id": 9,
        "name": {
            "ja": "サン・セヴェーロ ビアンコ",
            "en": "San Severo Bianco"
        },
        "type": "white",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2023",
        "variety": {
            "ja": "ボンビーノ・ビアンコ, トレッビアーノ, マルヴァジア",
            "en": "Bombino Bianco, Trebbiano, Malvasia"
        },
        "body": "dry",
        "winery": {
            "ja": "ダルフォンソ デル ソルド",
            "en": "d'Alfonso del Sordo"
        },
        "price": 2780,
        "description": {
            "ja": "花のような香りとフレッシュな果実味。酸味が爽やかで前菜や魚介に合う。",
            "en": "Floral aromas and fresh fruitiness. Crisp acidity pairs well with appetizers and seafood."
        },
        "tags": [
            {
                "ja": "花のような香り",
                "en": "Floral Aroma"
            },
            {
                "ja": "フレッシュ",
                "en": "Fresh"
            },
            {
                "ja": "辛口",
                "en": "Dry"
            }
        ],
        "isVisible": true
    },
    {
        "id": 10,
        "name": {
            "ja": "カリフォルニア シャルドネ",
            "en": "California Chardonnay"
        },
        "type": "white",
        "country": {
            "ja": "アメリカ",
            "en": "USA"
        },
        "region": {
            "ja": "カリフォルニア",
            "en": "California"
        },
        "vintage": "2023",
        "variety": {
            "ja": "シャルドネ",
            "en": "Chardonnay"
        },
        "body": "dry",
        "winery": {
            "ja": "マイティ ヴァレー",
            "en": "Mighty Valley"
        },
        "price": 4840,
        "description": {
            "ja": "マイヤーレモンやバニラの香り。濃厚でまろやかながら後味はすっきり。",
            "en": "Aromas of Meyer lemon and vanilla. Rich and mellow yet with a clean finish."
        },
        "tags": [
            {
                "ja": "濃厚",
                "en": "Rich"
            },
            {
                "ja": "バニラ香",
                "en": "Vanilla Aroma"
            },
            {
                "ja": "まろやか",
                "en": "Mellow"
            }
        ],
        "isVisible": true
    },
    {
        "id": 11,
        "name": {
            "ja": "エステート・リザーヴ ソーヴィニヨン・ブラン",
            "en": "Estate Reserve Sauvignon Blanc"
        },
        "type": "white",
        "country": {
            "ja": "チリ",
            "en": "Chile"
        },
        "region": {
            "ja": "クリコ"
        },
        "vintage": "2024",
        "variety": {
            "ja": "ソーヴィニヨン・ブラン",
            "en": "Sauvignon Blanc"
        },
        "body": "dry",
        "winery": {
            "ja": "ミラマン",
            "en": "Millaman"
        },
        "price": 3300,
        "description": {
            "ja": "グレープフルーツや桃などの果実味あふれる香り。ジューシーで非常にフレッシュ。",
            "en": "Bursting with aromas of grapefruit and peach. Juicy and very fresh."
        },
        "tags": [
            {
                "ja": "柑橘系",
                "en": "Citrus"
            },
            {
                "ja": "ジューシー",
                "en": "Juicy"
            },
            {
                "ja": "フレッシュ",
                "en": "Fresh"
            }
        ],
        "isVisible": true
    },
    {
        "id": 12,
        "name": {
            "ja": "アルビーノ",
            "en": "Albino"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "アブルッツォ",
            "en": "Abruzzo"
        },
        "vintage": "2020",
        "variety": {
            "ja": "モンテプルチャーノ",
            "en": "Montepulciano"
        },
        "body": "medium",
        "winery": {
            "ja": "ヴェネア",
            "en": "Venea"
        },
        "price": 4400,
        "description": {
            "ja": "スミレのような花の香りと, チェリーやラズベリーなど赤いベリー系の風味。非常にフルーティでジューシー。",
            "en": "Floral scents like violets, and flavors of red berries like cherry and raspberry. Very fruity and juicy."
        },
        "tags": [
            {
                "ja": "フルーティ",
                "en": "Fruity"
            },
            {
                "ja": "ジューシー",
                "en": "Juicy"
            },
            {
                "ja": "華やか",
                "en": "Gorgeous"
            }
        ],
        "isVisible": true
    },
    {
        "id": 13,
        "name": {
            "ja": "エステート・リザーヴ カベルネ・ソーヴィニヨン",
            "en": "Estate Reserve Cabernet Sauvignon"
        },
        "type": "red",
        "country": {
            "ja": "チリ",
            "en": "Chile"
        },
        "region": {
            "ja": "クリコ"
        },
        "vintage": "2022",
        "variety": {
            "ja": "カベルネ・ソーヴィニヨン",
            "en": "Cabernet Sauvignon"
        },
        "body": "full",
        "winery": {
            "ja": "ミラマン",
            "en": "Millaman"
        },
        "price": 3300,
        "description": {
            "ja": "チェリーや熟したプラムの甘さを感じる香り。スパイスのニュアンス, 熟した甘いタンニン。",
            "en": "Sweet aromas of cherry and ripe plum. Nuances of spice, ripe sweet tannins."
        },
        "tags": [
            {
                "ja": "果実味",
                "en": "Fruity"
            },
            {
                "ja": "スパイシー",
                "en": "Spicy"
            },
            {
                "ja": "甘いタンニン",
                "en": "Sweet Tannins"
            }
        ],
        "isVisible": true
    },
    {
        "id": 14,
        "name": {
            "ja": "ジンファンデル オーガニック",
            "en": "Zinfandel Organic"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2024",
        "variety": {
            "ja": "ジンファンデル",
            "en": "Zinfandel"
        },
        "body": "full",
        "winery": {
            "ja": "カーサ・ヴィニコラ",
            "en": "Casa Vinicola"
        },
        "price": 3740,
        "description": {
            "ja": "EUオーガニック認証。個性的で優美な香り, ドライで滑らか。柔らかいタンニン。",
            "en": "EU Organic Certified. Distinctive and graceful aroma, dry and smooth. Soft tannins."
        },
        "tags": [
            {
                "ja": "オーガニック",
                "en": "Organic"
            },
            {
                "ja": "滑らか",
                "en": "Smooth"
            },
            {
                "ja": "柔らかい渋み",
                "en": "Soft Astringency"
            }
        ],
        "isVisible": true
    },
    {
        "id": 15,
        "name": {
            "ja": "カリフォルニア シャルドネ",
            "en": "California Chardonnay"
        },
        "type": "white",
        "country": {
            "ja": "アメリカ",
            "en": "USA"
        },
        "region": {
            "ja": "カリフォルニア",
            "en": "California"
        },
        "vintage": "2023",
        "variety": {
            "ja": "シャルドネ",
            "en": "Chardonnay"
        },
        "body": "dry",
        "winery": {
            "ja": "ナヴィゲーター ワイン コレクション",
            "en": "Navigator Wine Collection"
        },
        "price": 4360,
        "description": {
            "ja": "青リンゴ, シトラス, バニラの香り。フレッシュなミネラル感と樽熟成の爽やかな後味。",
            "en": "Aromas of green apple, citrus, and vanilla. Fresh minerality and a crisp barrel-aged finish."
        },
        "tags": [
            {
                "ja": "樽熟成",
                "en": "Barrel Aged"
            },
            {
                "ja": "フレッシュ",
                "en": "Fresh"
            },
            {
                "ja": "バニラ香",
                "en": "Vanilla Aroma"
            }
        ],
        "isVisible": true
    },
    {
        "id": 16,
        "name": {
            "ja": "カリフォルニア カベルネソーヴィニヨン",
            "en": "California Cabernet Sauvignon"
        },
        "type": "red",
        "country": {
            "ja": "アメリカ",
            "en": "USA"
        },
        "region": {
            "ja": "カリフォルニア",
            "en": "California"
        },
        "vintage": "2023",
        "variety": {
            "ja": "カベルネ・ソーヴィニヨン",
            "en": "Cabernet Sauvignon"
        },
        "body": "full",
        "winery": {
            "ja": "ナヴィゲーター ワイン コレクション",
            "en": "Navigator Wine Collection"
        },
        "price": 4360,
        "description": {
            "ja": "複雑で力強く, 濃厚でありながら飲みやすい。豪華で長い余韻。",
            "en": "Complex and powerful, rich yet easy to drink. Luxurious and long finish."
        },
        "tags": [
            {
                "ja": "濃厚",
                "en": "Rich"
            },
            {
                "ja": "力強い",
                "en": "Powerful"
            },
            {
                "ja": "長い余韻",
                "en": "Long Finish"
            }
        ],
        "isVisible": true
    },
    {
        "id": 17,
        "name": {
            "ja": "ブリュット・レゼルヴ",
            "en": "Brut Reserve"
        },
        "type": "sparkling",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ノルマンディー",
            "en": "Normandy"
        },
        "vintage": "NV",
        "variety": {
            "ja": "アイレン",
            "en": "Airén"
        },
        "body": "dry",
        "winery": {
            "ja": "ジョワ・ド・フランス",
            "en": "Joie de France"
        },
        "price": 2640,
        "description": {
            "ja": "エールフランス採用。繊細な泡立ちと果樹園果実のアロマ, 滑らかでフルーティー。",
            "en": "Selected by Air France. Delicate bubbles and orchard fruit aromas, smooth and fruity."
        },
        "tags": [
            {
                "ja": "エールフランス採用",
                "en": "Air France Selection"
            },
            {
                "ja": "爽やか",
                "en": "Crisp/Refreshing"
            },
            {
                "ja": "ブラン・ド・ブラン",
                "en": "Blanc de Blancs"
            }
        ],
        "isVisible": true
    },
    {
        "id": 18,
        "name": {
            "ja": "ブリュット・レゼルヴ",
            "en": "Brut Reserve"
        },
        "type": "sparkling",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "シャンパーニュ",
            "en": "Champagne"
        },
        "vintage": "NV",
        "variety": {
            "ja": "ピノ・ノワール, シャルドネ, ピノ・ムニエ",
            "en": "Pinot Noir, Chardonnay, Pinot Meunier"
        },
        "body": "dry",
        "winery": {
            "ja": "ボワゼル",
            "en": "Boizel"
        },
        "price": 13640,
        "description": {
            "ja": "36ヶ月長期熟成。白い花や桃, ペイストリーのニュアンス。フレッシュでエレガント。",
            "en": "Aged for 36 months. Nuances of white flowers, peach, and pastry. Fresh and elegant."
        },
        "tags": [
            {
                "ja": "シャンパーニュ",
                "en": "Champagne"
            },
            {
                "ja": "繊細な泡",
                "en": "Delicate Bubbles"
            },
            {
                "ja": "長期熟成",
                "en": "Long Aging"
            }
        ],
        "isVisible": true
    },
    {
        "id": 19,
        "name": {
            "ja": "キュヴェ・ド・ラ・メゾン",
            "en": "Cuvée de la Maison"
        },
        "type": "white",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ラングドック",
            "en": "Languedoc"
        },
        "vintage": "2024",
        "variety": {
            "ja": "シャルドネ",
            "en": "Chardonnay"
        },
        "body": "dry",
        "winery": {
            "ja": "LGIワイン",
            "en": "LGI Wines"
        },
        "price": 2970,
        "description": {
            "ja": "典型的な南仏シャルドネ。ピーチとパイナップルの香り, まろやかで滑らか。",
            "en": "Typical Southern French Chardonnay. Aromas of peach and pineapple, mellow and smooth."
        },
        "tags": [
            {
                "ja": "まろやか",
                "en": "Mellow"
            },
            {
                "ja": "トロピカル",
                "en": "Tropical"
            },
            {
                "ja": "滑らか",
                "en": "Smooth"
            }
        ],
        "isVisible": true
    },
    {
        "id": 20,
        "name": {
            "ja": "リースリング \"キュヴェ・ジュピター\"",
            "en": "Riesling \"Cuvée Jupiter\""
        },
        "type": "white",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "アルザス",
            "en": "Alsace"
        },
        "vintage": "2023",
        "variety": {
            "ja": "リースリング",
            "en": "Riesling"
        },
        "body": "dry",
        "winery": {
            "ja": "カーヴ・デ・ヴィニュロン・ド・ファッフェンハイム",
            "en": "Cave Vinicole de Pfaffenheim"
        },
        "price": 5440,
        "description": {
            "ja": "ドライでエレガント。火打石のようなミネラル感, 柑橘類や松脂の特徴。",
            "en": "Dry and elegant. Flinty minerality, with characteristics of citrus and pine resin."
        },
        "tags": [
            {
                "ja": "辛口",
                "en": "Dry"
            },
            {
                "ja": "エレガント",
                "en": "Elegant"
            },
            {
                "ja": "ミネラル感",
                "en": "Minerality"
            }
        ],
        "isVisible": true
    },
    {
        "id": 21,
        "name": {
            "ja": "シュナン・ブラン",
            "en": "Chenin Blanc"
        },
        "type": "white",
        "country": {
            "ja": "南アフリカ",
            "en": "South Africa"
        },
        "region": {
            "ja": "ウェスタンケープ",
            "en": "Western Cape"
        },
        "vintage": "2024",
        "variety": {
            "ja": "シュナン・ブラン",
            "en": "Chenin Blanc"
        },
        "body": "dry",
        "winery": {
            "ja": "スワートランド・ワイナリー",
            "en": "Swartland Winery"
        },
        "price": 3610,
        "description": {
            "ja": "すっきりとした辛口。グアバやパッションフルーツの香り, ライムの皮の風味。",
            "en": "Crisp and dry. Aromas of guava and passion fruit, flavor of lime zest."
        },
        "tags": [
            {
                "ja": "辛口",
                "en": "Dry"
            },
            {
                "ja": "爽やか",
                "en": "Crisp/Refreshing"
            },
            {
                "ja": "トロピカル",
                "en": "Tropical"
            }
        ],
        "isVisible": true
    },
    {
        "id": 22,
        "name": {
            "ja": "シャトー・ベルナドット",
            "en": "Château Bernadotte"
        },
        "type": "red",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ボルドー",
            "en": "Bordeaux"
        },
        "vintage": "2011",
        "variety": {
            "ja": "カベルネ・ソーヴィニヨン, カベルネ・フラン, メルロー, プティ・ヴェルド",
            "en": "Cabernet Sauvignon, Cabernet Franc, Merlot, Petit Verdot"
        },
        "body": "medium",
        "winery": {
            "ja": "シャトー・ベルナドット",
            "en": "Château Bernadotte"
        },
        "price": 5860,
        "description": {
            "ja": "ボルドー・オー・メドック地区の伝統的な赤。落ち着いた辛口の味わい。",
            "en": "Traditional red from Bordeaux Haut-Médoc. A calm, dry taste."
        },
        "tags": [
            {
                "ja": "ボルドー",
                "en": "Bordeaux"
            },
            {
                "ja": "オー・メドック",
                "en": "Haut-Médoc"
            },
            {
                "ja": "辛口",
                "en": "Dry"
            }
        ],
        "isVisible": true
    },
    {
        "id": 23,
        "name": {
            "ja": "オーパスワン",
            "en": "Opus One"
        },
        "type": "red",
        "country": {
            "ja": "アメリカ",
            "en": "USA"
        },
        "region": {
            "ja": "カリフォルニア",
            "en": "California"
        },
        "vintage": "2022",
        "variety": {
            "ja": "カベルネ・ソーヴィニヨン, プティ・ヴェルド, カベルネ・フラン, メルロー, マルベック",
            "en": "Cabernet Sauvignon, Petit Verdot, Cabernet Franc, Merlot, Malbec"
        },
        "body": "full",
        "winery": {
            "ja": "オーパスワン",
            "en": "Opus One"
        },
        "price": 98000,
        "description": {
            "ja": "カリフォルニアの最高峰。カベルネ主体。圧倒的な凝縮感とエレガンス, 長期熟成能力を持つ。",
            "en": "The pinnacle of California. Cabernet dominant. Overwhelming concentration and elegance, with long-term aging potential."
        },
        "tags": [
            {
                "ja": "カリフォルニア",
                "en": "California"
            },
            {
                "ja": "最高峰",
                "en": "Pinnacle"
            },
            {
                "ja": "長期熟成",
                "en": "Long Aging"
            }
        ],
        "isVisible": true
    },
    {
        "id": 24,
        "name": {
            "ja": "ルチェンテ",
            "en": "Lucente"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "トスカーナ",
            "en": "Tuscany"
        },
        "vintage": "2021",
        "variety": {
            "ja": "メルロー, サンジョヴェーゼ",
            "en": "Merlot, Sangiovese"
        },
        "body": "full",
        "winery": {
            "ja": "テヌータ・ルーチェ",
            "en": "Tenuta Luce"
        },
        "price": 10670,
        "description": {
            "ja": "「ルーチェ」のセカンド。独特なテロワールを表現したコンテンポラリーなスタイル。",
            "en": "Second wine of Luce. Contemporary style expressing unique terroir."
        },
        "tags": [
            {
                "ja": "セカンドワイン",
                "en": "Second Wine"
            },
            {
                "ja": "トスカーナ",
                "en": "Tuscany"
            },
            {
                "ja": "樽熟成",
                "en": "Barrel Aged"
            }
        ],
        "isVisible": true
    },
    {
        "id": 25,
        "name": {
            "ja": "1066 キュヴェ",
            "en": "1066 Cuvée"
        },
        "type": "white",
        "country": {
            "ja": "クロアチア",
            "en": "Croatia"
        },
        "region": {
            "ja": "ダルマチア",
            "en": "Dalmatia"
        },
        "vintage": "2024",
        "variety": {
            "ja": "ポシップ, ジラフカ, シャルドネ",
            "en": "Posip, Zilavka, Chardonnay"
        },
        "body": "dry",
        "winery": {
            "ja": "ロイヤルヴィンヤード",
            "en": "Royal Vineyards"
        },
        "price": 4620,
        "description": {
            "ja": "クロアチア産。熟した果実味とスパイス, しっかりとした骨格を持つプレミアム赤ワイン。",
            "en": "From Croatia. Premium red wine with ripe fruit, spice, and solid structure."
        },
        "tags": [
            {
                "ja": "クロアチア",
                "en": "Croatia"
            },
            {
                "ja": "プレミアム",
                "en": "Premium"
            },
            {
                "ja": "スパイシー",
                "en": "Spicy"
            }
        ],
        "isVisible": true
    },
    {
        "id": 26,
        "name": {
            "ja": "マスカット",
            "en": "Muscat"
        },
        "type": "white",
        "country": {
            "ja": "クロアチア",
            "en": "Croatia"
        },
        "region": {
            "ja": "ダルマチア",
            "en": "Dalmatia"
        },
        "vintage": "2022",
        "variety": {
            "ja": "ムシュカト・ジュティ",
            "en": "Muskat Zuti"
        },
        "body": "sweet",
        "winery": {
            "ja": "ロイヤルヴィンヤード",
            "en": "Royal Vineyards"
        },
        "price": 4620,
        "description": {
            "ja": "華やかなマスカットの香り。フレッシュで甘美な味わいのデザートワイン。",
            "en": "Gorgeous Muscat aroma. Fresh and luscious dessert wine."
        },
        "tags": [
            {
                "ja": "甘口",
                "en": "Sweet"
            },
            {
                "ja": "マスカット",
                "en": "Muscat"
            },
            {
                "ja": "華やか",
                "en": "Gorgeous"
            }
        ],
        "isVisible": true
    },
    {
        "id": 27,
        "name": {
            "ja": "アンティーク・ロゼ",
            "en": "Antique Rose"
        },
        "type": "rose_sparkling",
        "country": {
            "ja": "クロアチア",
            "en": "Croatia"
        },
        "region": {
            "ja": "ダルマチア",
            "en": "Dalmatia"
        },
        "vintage": "2023",
        "variety": {
            "ja": "プラヴァツ・マリ",
            "en": "Plavac Mali"
        },
        "body": "dry",
        "winery": {
            "ja": "ロイヤルヴィンヤード",
            "en": "Royal Vineyards"
        },
        "price": 5060,
        "description": {
            "ja": "珍しいクロアチアのロゼスパークリング。ベリー系の香り, キリッとした辛口。",
            "en": "Rare Croatian Rose Sparkling. Berry aromas, crisp and dry."
        },
        "tags": [
            {
                "ja": "ロゼ泡",
                "en": "Rose Sparkling"
            },
            {
                "ja": "辛口",
                "en": "Dry"
            },
            {
                "ja": "クロアチア",
                "en": "Croatia"
            }
        ],
        "isVisible": true
    },
    {
        "id": 28,
        "name": {
            "ja": "グラディアートル",
            "en": "Gladiator"
        },
        "type": "red",
        "country": {
            "ja": "クロアチア",
            "en": "Croatia"
        },
        "region": {
            "ja": "ダルマチア",
            "en": "Dalmatia"
        },
        "vintage": "2019",
        "variety": {
            "ja": "プラヴァツ・マリ, クルリェナク, メルロー, シラー",
            "en": "Plavac Mali, Crljenak, Merlot, Syrah"
        },
        "body": "full",
        "winery": {
            "ja": "ロイヤルヴィンヤード",
            "en": "Royal Vineyards"
        },
        "price": 9900,
        "description": {
            "ja": "力強い名前の通り, 濃厚でパワフルな赤ワイン。凝縮した果実味。",
            "en": "True to its powerful name, a rich and powerful red wine. Concentrated fruitiness."
        },
        "tags": [
            {
                "ja": "パワフル",
                "en": "Powerful"
            },
            {
                "ja": "濃厚",
                "en": "Rich"
            },
            {
                "ja": "限定品",
                "en": "Limited Edition"
            }
        ],
        "isVisible": true
    },
    {
        "id": 29,
        "name": {
            "ja": "プラヴァツ・マリ \"グルグル\"",
            "en": "Plavac Mali \"Gurgur\""
        },
        "type": "red",
        "country": {
            "ja": "クロアチア",
            "en": "Croatia"
        },
        "region": {
            "ja": "ダルマチア",
            "en": "Dalmatia"
        },
        "vintage": "2015",
        "variety": {
            "ja": "プラヴァツ・マリ",
            "en": "Plavac Mali"
        },
        "body": "medium",
        "winery": {
            "ja": "ロイヤルヴィンヤード",
            "en": "Royal Vineyards"
        },
        "price": 3960,
        "description": {
            "ja": "「Glou Glou(ゴクゴク飲める)」スタイル。プラヴァッツマリの果実味と飲み心地の良さが共存。",
            "en": "'Glou Glou' (chuggable) style. Coexistence of Plavac Mali fruit and drinkability."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "飲みやすい",
                "en": "Easy to Drink"
            },
            {
                "ja": "土着品種",
                "en": "Indigenous Variety"
            }
        ],
        "isVisible": true
    },
    {
        "id": 30,
        "name": {
            "ja": "ラ・ポーズ",
            "en": "La Pause"
        },
        "type": "red",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ロワール",
            "en": "Loire"
        },
        "vintage": "2023",
        "variety": {
            "ja": "ガメイ",
            "en": "Gamay"
        },
        "body": "medium",
        "winery": {
            "ja": "ローラン・サイヤール",
            "en": "Laurent Saillard"
        },
        "price": 10300,
        "description": {
            "ja": "ガメイ種。透明感あるルビー色。ジューシーな果実味が広がり, 染み入るような柔らかさ。",
            "en": "Gamay. Transparent ruby color. Juicy fruit flavors spread, with a soaking softness."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "ジューシー",
                "en": "Juicy"
            },
            {
                "ja": "柔らかい",
                "en": "Soft"
            }
        ],
        "isVisible": true
    },
    {
        "id": 31,
        "name": {
            "ja": "ラッキー・ユー",
            "en": "Lucky You"
        },
        "type": "white",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ロワール",
            "en": "Loire"
        },
        "vintage": "2024",
        "variety": {
            "ja": "ソーヴィニヨン・ブラン, シャルドネ",
            "en": "Sauvignon Blanc, Chardonnay"
        },
        "body": "dry",
        "winery": {
            "ja": "ローラン・サイヤール",
            "en": "Laurent Saillard"
        },
        "price": 10700,
        "description": {
            "ja": "ソーヴィニヨンブラン。フレッシュでハーブや柑橘の香り。ピュアな果実味。",
            "en": "Sauvignon Blanc. Fresh herb and citrus aromas. Pure fruit flavor."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "フレッシュ",
                "en": "Fresh"
            },
            {
                "ja": "ピュア",
                "en": "Pure"
            }
        ],
        "isVisible": true
    },
    {
        "id": 32,
        "name": {
            "ja": "ラ・ヴァルス",
            "en": "La Valse"
        },
        "type": "rose",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ロワール",
            "en": "Loire"
        },
        "vintage": "2024",
        "variety": {
            "ja": "ガメイ, ピノ・ドニス, カベルネ・フラン, カベルネ・ソーヴィニヨン",
            "en": "Gamay, Pineau d'Aunis, Cabernet Franc, Sauvignon Blanc"
        },
        "body": "dry",
        "winery": {
            "ja": "ローラン・サイヤール",
            "en": "Laurent Saillard"
        },
        "price": 9700,
        "description": {
            "ja": "ガメイ/ピノドニス。軽やかで赤いベリーの香り。スルスル飲める辛口ロゼ。",
            "en": "Gamay/Pineau d'Aunis. Light red berry aroma. Easy-drinking dry rose."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "ロゼ",
                "en": "Rose"
            },
            {
                "ja": "軽やか",
                "en": "Light"
            }
        ],
        "isVisible": true
    },
    {
        "id": 33,
        "name": {
            "ja": "アルボワ シャルドネ \"イニシアル\"",
            "en": "Arbois Chardonnay \"Initial\""
        },
        "type": "white",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ジュラ",
            "en": "Jura"
        },
        "vintage": "2022",
        "variety": {
            "ja": "シャルドネ",
            "en": "Chardonnay"
        },
        "body": "dry",
        "winery": {
            "ja": "ジェローム・アルヌー",
            "en": "Jérôme Arnoux"
        },
        "price": 11290,
        "description": {
            "ja": "ハチミツやスパイスの香り。ミネラルを備えた複雑な味わい。口の中で太い酸が通る。",
            "en": "Aromas of honey and spice. Complex taste with minerals. Thick acidity runs through the palate."
        },
        "tags": [
            {
                "ja": "ジュラ",
                "en": "Jura"
            },
            {
                "ja": "複雑",
                "en": "Complex"
            },
            {
                "ja": "ミネラル",
                "en": "Minerality"
            }
        ],
        "isVisible": true
    },
    {
        "id": 34,
        "name": {
            "ja": "アルボワ \"ニュアンス\"",
            "en": "Arbois \"Nuance\""
        },
        "type": "white",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ジュラ",
            "en": "Jura"
        },
        "vintage": "2018",
        "variety": {
            "ja": "シャルドネ, サヴァニャン",
            "en": "Chardonnay, Savagnin"
        },
        "body": "dry",
        "winery": {
            "ja": "ジェローム・アルヌー",
            "en": "Jérôme Arnoux"
        },
        "price": 11880,
        "description": {
            "ja": "シャルドネとサヴァニャンのブレンド。酸化熟成のニュアンスと果実味のバランス。",
            "en": "Blend of Chardonnay and Savagnin. Balance of oxidative aging nuances and fruitiness."
        },
        "tags": [
            {
                "ja": "ジュラ",
                "en": "Jura"
            },
            {
                "ja": "酸化熟成感",
                "en": "Oxidative nuances"
            },
            {
                "ja": "伝統的",
                "en": "Traditional"
            }
        ],
        "isVisible": true
    },
    {
        "id": 35,
        "name": {
            "ja": "アルボワ トゥルソー \"エクセプシオン\"",
            "en": "Arbois Trousseau \"Exception\""
        },
        "type": "red",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ジュラ",
            "en": "Jura"
        },
        "vintage": "2022",
        "variety": {
            "ja": "トゥルソー",
            "en": "Trousseau"
        },
        "body": "medium",
        "winery": {
            "ja": "ジェローム・アルヌー",
            "en": "Jérôme Arnoux"
        },
        "price": 10890,
        "description": {
            "ja": "淡い色調。アニスや白胡椒, 真夏のスイカのようなジューシーな果実味。",
            "en": "Pale color. Juicy fruit flavor like anise, white pepper, and midsummer watermelon."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "淡い赤",
                "en": "Pale Red"
            },
            {
                "ja": "スパイシー",
                "en": "Spicy"
            }
        ],
        "isVisible": true
    },
    {
        "id": 36,
        "name": {
            "ja": "アルボワ ピノ・ノワール \"レヴェラシオン\"",
            "en": "Arbois Pinot Noir \"Révélation\""
        },
        "type": "red",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ジュラ",
            "en": "Jura"
        },
        "vintage": "2019",
        "variety": {
            "ja": "ピノ・ノワール",
            "en": "Pinot Noir"
        },
        "body": "medium",
        "winery": {
            "ja": "ジェローム・アルヌー",
            "en": "Jérôme Arnoux"
        },
        "price": 13270,
        "description": {
            "ja": "濃い紫の色調。ジューシーで密度のある黒果実, 清涼感と陰影のある果実味。",
            "en": "Deep purple color. Juicy, dense black fruits, cool and shadowy fruit flavors."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "濃密",
                "en": "Dense"
            },
            {
                "ja": "清涼感",
                "en": "Refreshing"
            }
        ],
        "isVisible": true
    },
    {
        "id": 37,
        "name": {
            "ja": "セシュシュール",
            "en": "S'esch Sur"
        },
        "type": "white",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "アルザス",
            "en": "Alsace"
        },
        "vintage": "2021",
        "variety": {
            "ja": "ゲヴュルツトラミネール",
            "en": "Gewurztraminer"
        },
        "body": "dry",
        "winery": {
            "ja": "クリスチャン・ビネール",
            "en": "Christian Binner"
        },
        "price": 5050,
        "description": {
            "ja": "「S'esch Sur」。水, ミラベル, 洋梨, ホップ等を使用したペティアン。濁りのある文旦のような色, ドライで喉越しが良い。",
            "en": "'S'esch Sur'. Pet-Nat using water, mirabelle, pear, hops etc. Cloudy pomelo-like color, dry and refreshing."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "変わり種",
                "en": "Unique/Unusual"
            },
            {
                "ja": "ピケット",
                "en": "Piquette"
            }
        ],
        "isVisible": true
    },
    {
        "id": 38,
        "name": {
            "ja": "マスケラード",
            "en": "Maskerade"
        },
        "type": "rose",
        "country": {
            "ja": "オーストリア"
        },
        "region": {
            "ja": "ブルゲンラント",
            "en": "Burgenland"
        },
        "vintage": "2024",
        "variety": {
            "ja": "ヴィンヤードブレンド",
            "en": "Vinyard Blend"
        },
        "body": "light",
        "winery": {
            "ja": "グート・オッガウ",
            "en": "Gut Oggau"
        },
        "price": 11440,
        "description": {
            "ja": "1リットル瓶。フィールドブレンド。フレッシュでガブガブ飲める, エネルギッシュな自然派。",
            "en": "1 Liter bottle. Field blend. Fresh, chuggable, energetic natural wine."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "1Lボトル",
                "en": "1L Bottle"
            },
            {
                "ja": "フレッシュ",
                "en": "Fresh"
            }
        ],
        "isVisible": true
    },
    {
        "id": 39,
        "name": {
            "ja": "テオドラ",
            "en": "Theodora"
        },
        "type": "white",
        "country": {
            "ja": "オーストリア"
        },
        "region": {
            "ja": "ブルゲンラント",
            "en": "Burgenland"
        },
        "vintage": "2024",
        "variety": {
            "ja": "グリューナー・ヴェルトリーナー, ヴェルシュリースリング",
            "en": "Gruner Veltliner, Welschriesling"
        },
        "body": "dry",
        "winery": {
            "ja": "グート・オッガウ",
            "en": "Gut Oggau"
        },
        "price": 14520,
        "description": {
            "ja": "「第3世代」。無濾過で濁りのある白。フレッシュでジューシー, 生き生きとした味わい。",
            "en": "'Third Generation'. Unfiltered cloudy white. Fresh, juicy, and lively taste."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "濁りワイン",
                "en": "Cloudy Wine"
            },
            {
                "ja": "ジューシー",
                "en": "Juicy"
            }
        ],
        "isVisible": true
    },
    {
        "id": 40,
        "name": {
            "ja": "ヴィニフレッド",
            "en": "Winifred"
        },
        "type": "rose",
        "country": {
            "ja": "オーストリア"
        },
        "region": {
            "ja": "ブルゲンラント",
            "en": "Burgenland"
        },
        "vintage": "2024",
        "variety": {
            "ja": "ブラウフレンキッシュ, ツヴァイゲルト",
            "en": "Blaufränkisch, Zweigelt"
        },
        "body": "dry",
        "winery": {
            "ja": "グート・オッガウ",
            "en": "Gut Oggau"
        },
        "price": 14520,
        "description": {
            "ja": "「第3世代」のロゼ。ブラウフレンキッシュ/ツヴァイゲルト。フレッシュでフルーティ, 魅力的な愛らしさ。",
            "en": "'Third Generation' Rose. Blaufränkisch/Zweigelt. Fresh, fruity, charming loveliness."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "ロゼ",
                "en": "Rose"
            },
            {
                "ja": "フルーティ",
                "en": "Fruity"
            }
        ],
        "isVisible": true
    },
    {
        "id": 41,
        "name": {
            "ja": "ヨゼフィーネ",
            "en": "Josephine"
        },
        "type": "red",
        "country": {
            "ja": "オーストリア"
        },
        "region": {
            "ja": "ブルゲンラント",
            "en": "Burgenland"
        },
        "vintage": "2023",
        "variety": {
            "ja": "ロースラー, ブラウフレンキッシュ",
            "en": "Roesler, Blaufränkisch"
        },
        "body": "medium",
        "winery": {
            "ja": "グート・オッガウ",
            "en": "Gut Oggau"
        },
        "price": 20240,
        "description": {
            "ja": "「第2世代」。赤。シリアスでストラクチャーがありながら, 飲み心地の良さも備える。",
            "en": "'Second Generation'. Red. Serious and structured, yet drinkable."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "エレガント",
                "en": "Elegant"
            },
            {
                "ja": "複雑",
                "en": "Complex"
            }
        ],
        "isVisible": true
    },
    {
        "id": 42,
        "name": {
            "ja": "ヨシュアリ",
            "en": "Joshuari"
        },
        "type": "red",
        "country": {
            "ja": "オーストリア"
        },
        "region": {
            "ja": "ブルゲンラント",
            "en": "Burgenland"
        },
        "vintage": "2023",
        "variety": {
            "ja": "ブラウフレンキッシュ",
            "en": "Blaufränkisch"
        },
        "body": "full",
        "winery": {
            "ja": "グート・オッガウ",
            "en": "Gut Oggau"
        },
        "price": 21780,
        "description": {
            "ja": "「第2世代」。赤。ブラウフレンキッシュ。力強さとフィネスを兼ね備えた男性的なワイン。",
            "en": "'Second Generation'. Red. Blaufränkisch. Masculine wine combining power and finesse."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "力強い",
                "en": "Powerful"
            },
            {
                "ja": "長期熟成",
                "en": "Long Aging"
            }
        ],
        "isVisible": true
    },
    {
        "id": 43,
        "name": {
            "ja": "ヴェルデ",
            "en": "Verde"
        },
        "type": "orange",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2022",
        "variety": {
            "ja": "マレスコ, ミヌートロ, ヴェルデカ",
            "en": "Maresco, Minutolo, Verdeca"
        },
        "body": "dry",
        "winery": {
            "ja": "ロコ",
            "en": "Loco"
        },
        "price": 11690,
        "description": {
            "ja": "緑ボトル。熟れた果実の豊潤な質感, 心地よい酸味と塩気, 乳酸的なまろやかな旨味。",
            "en": "Green bottle. Rich texture of ripe fruit, pleasant acidity and salinity, mellow lactic umami."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "まろやか",
                "en": "Mellow"
            },
            {
                "ja": "塩気",
                "en": "Salty/Salinity"
            }
        ],
        "isVisible": true
    },
    {
        "id": 44,
        "name": {
            "ja": "フッシア",
            "en": "Fucsia"
        },
        "type": "rose",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2022",
        "variety": {
            "ja": "モンテプルチャーノ, ミヌートロ",
            "en": "Montepulciano, Minutolo"
        },
        "body": "dry",
        "winery": {
            "ja": "ロコ",
            "en": "Loco"
        },
        "price": 11690,
        "description": {
            "ja": "桃色ボトル（ロゼ）。ピーチや花の華やかな香り。滑らかな口当たりとエレガントな余韻。",
            "en": "Pink bottle (Rose). Gorgeous aromas of peach and flowers. Smooth mouthfeel and elegant finish."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "ロゼ",
                "en": "Rose"
            },
            {
                "ja": "エレガント",
                "en": "Elegant"
            }
        ],
        "isVisible": true
    },
    {
        "id": 45,
        "name": {
            "ja": "ロッソ",
            "en": "Rosso"
        },
        "type": "rose",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2022",
        "variety": {
            "ja": "ネロ・ディ・トロイア, ボンビーノ・ビアンコ",
            "en": "Nero di Troia, Bombino Bianco"
        },
        "body": "medium",
        "winery": {
            "ja": "ロコ",
            "en": "Loco"
        },
        "price": 13070,
        "description": {
            "ja": "赤ボトル。プーリアらしい果実味と軽やかさを両立。白ブドウを混醸するユニークな造り。",
            "en": "Red bottle. Balances Puglia fruitiness and lightness. Unique production blending white grapes."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "軽やか",
                "en": "Light"
            },
            {
                "ja": "ユニーク",
                "en": "Unique"
            }
        ],
        "isVisible": true
    },
    {
        "id": 46,
        "name": {
            "ja": "リッラ",
            "en": "Lilla"
        },
        "type": "rose",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2022",
        "variety": {
            "ja": "マレスコ, オッタヴィア・ネッロ, ミヌートロ",
            "en": "Maresco, Ottavianello, Minutolo"
        },
        "body": "dry",
        "winery": {
            "ja": "ロコ",
            "en": "Loco"
        },
        "price": 17030,
        "description": {
            "ja": "淡紫ボトル（ロゼ）。ミントやハーブの香り, 塩気。フレッシュで飲み心地最高クラス。",
            "en": "Pale purple bottle (Rose). Mint and herb aromas, salinity. Fresh and top-class drinkability."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "フレッシュ",
                "en": "Fresh"
            },
            {
                "ja": "塩気",
                "en": "Salty/Salinity"
            }
        ],
        "isVisible": true
    },
    {
        "id": 47,
        "name": {
            "ja": "ヴィオラ",
            "en": "Viola"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2022",
        "variety": {
            "ja": "ボンビーノ・ネーロ, ネロ・ディ・トロイア, ボンビーノ・ビアンコ",
            "en": "Bombino Nero, Nero di Troia, Bombino Bianco"
        },
        "body": "medium",
        "winery": {
            "ja": "ロコ",
            "en": "Loco"
        },
        "price": 11690,
        "description": {
            "ja": "紫ボトル。シリーズ共通の「塩気と旨味」を持つ。",
            "en": "Purple bottle. Has the series 'salinity and umami'."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "プーリア",
                "en": "Puglia"
            }
        ],
        "isVisible": true
    },
    {
        "id": 48,
        "name": {
            "ja": "ピニョーリ",
            "en": "Pignoli"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "フリウリ",
            "en": "Friuli"
        },
        "vintage": "2010",
        "variety": {
            "ja": "ピニョーロ",
            "en": "Pignolo"
        },
        "body": "full",
        "winery": {
            "ja": "ラディコン",
            "en": "Radikon"
        },
        "price": 12180,
        "description": {
            "ja": "フリウリの巨匠。長期マセラシオン（オレンジ）。枯れたニュアンス, 複雑味, 圧倒的な余韻。",
            "en": "Friuli master. Long maceration (Orange). Withered nuances, complexity, overwhelming finish."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "オレンジワイン",
                "en": "Orange Wine"
            },
            {
                "ja": "複雑",
                "en": "Complex"
            }
        ],
        "isVisible": true
    },
    {
        "id": 49,
        "name": {
            "ja": "カタラット",
            "en": "Catarratto"
        },
        "type": "white",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "シチリア",
            "en": "Sicily"
        },
        "vintage": "2023",
        "variety": {
            "ja": "カタラット, カリカンテ",
            "en": "Catarratto, Carricante"
        },
        "body": "dry",
        "winery": {
            "ja": "アレッサンドロ・ビオラ",
            "en": "Alessandro Viola"
        },
        "price": 9110,
        "description": {
            "ja": "シチリアの自然派。柑橘やハーブの香り, ピュアな果実味。",
            "en": "Sicilian natural wine. Citrus and herb aromas, pure fruitiness."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "シチリア",
                "en": "Sicily"
            },
            {
                "ja": "ピュア",
                "en": "Pure"
            }
        ],
        "isVisible": true
    },
    {
        "id": 50,
        "name": {
            "ja": "ノート・ディ・ロッソ",
            "en": "Note di Rosso"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "シチリア",
            "en": "Sicily"
        },
        "vintage": "2023",
        "variety": {
            "ja": "ネロ・ダーヴォラ, ネレッロ・マスカレーゼ, ペッリコ―ネ",
            "en": "Nero D'Avola, Nerello Mascalese, Perricone"
        },
        "body": "medium",
        "winery": {
            "ja": "アレッサンドロ・ビオラ",
            "en": "Alessandro Viola"
        },
        "price": 9110,
        "description": {
            "ja": "ネレッロ・マスカレーゼ主体。赤い果実の明るい香り, 軽やかで滋味深い味わい。",
            "en": "Nerello Mascalese dominant. Bright red fruit aroma, light and deeply flavorful."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "軽やか",
                "en": "Light"
            },
            {
                "ja": "滋味",
                "en": "Savory/Nourishing"
            }
        ],
        "isVisible": true
    },
    {
        "id": 51,
        "name": {
            "ja": "シンフォニア・ディ・ロッソ",
            "en": "Sinfonia di Rosso"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "シチリア",
            "en": "Sicily"
        },
        "vintage": "2022",
        "variety": {
            "ja": "ネレッロ・マスカレーゼ",
            "en": "Nerello Mascalese"
        },
        "body": "full",
        "winery": {
            "ja": "アレッサンドロ・ビオラ",
            "en": "Alessandro Viola"
        },
        "price": 12480,
        "description": {
            "ja": "まろやかでピュアなアロマ。柔らかく穏やか。バランスの良い酸味とタンニン。",
            "en": "Mellow and pure aroma. Soft and gentle. Well-balanced acidity and tannins."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "まろやか",
                "en": "Mellow"
            },
            {
                "ja": "ピュア",
                "en": "Pure"
            }
        ],
        "isVisible": true
    },
    {
        "id": 52,
        "name": {
            "ja": "シンフォニア・ディ・ビアンコ",
            "en": "Sinfonia di Bianco"
        },
        "type": "orange",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "シチリア",
            "en": "Sicily"
        },
        "vintage": "2022",
        "variety": {
            "ja": "グリッロ",
            "en": "Grillo"
        },
        "body": "dry",
        "winery": {
            "ja": "アレッサンドロ・ビオラ",
            "en": "Alessandro Viola"
        },
        "price": 11090,
        "description": {
            "ja": "グリッロ種。完熟果実の豊かさと塩気のあるミネラル。黄金色で濃厚。",
            "en": "Grillo. Richness of ripe fruit and salty minerals. Golden and concentrated."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "濃厚",
                "en": "Rich"
            },
            {
                "ja": "ミネラル",
                "en": "Minerality"
            }
        ],
        "isVisible": true
    },
    {
        "id": 53,
        "name": {
            "ja": "レ・ミエ・オリジニ",
            "en": "Le Mie Origini"
        },
        "type": "orange",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "シチリア",
            "en": "Sicily"
        },
        "vintage": "2021",
        "variety": {
            "ja": "カタラット",
            "en": "Catarratto"
        },
        "body": "full",
        "winery": {
            "ja": "アレッサンドロ・ビオラ",
            "en": "Alessandro Viola"
        },
        "price": 11690,
        "description": {
            "ja": "カリン、淡い柑橘とミネラル香。徐々にジャスミンの様な爽やかな香りも感じられる。様々な植物や果物が溶け込んだ充実感に満ちた複雑なアロマ。",
            "en": "Karin, with delicate citrus and mineral notes. Gradually, a refreshing jasmine-like fragrance also emerges.A complex aroma brimming with richness, blending various plants and fruits."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "複雑",
                "en": "Complex"
            }
        ],
        "isVisible": true
    },
    {
        "id": 54,
        "name": {
            "ja": "マードレテッラ ロッソ",
            "en": "Madreterra Rosso"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2023",
        "variety": {
            "ja": "プリミティーヴォ",
            "en": "Primitivo"
        },
        "body": "medium",
        "winery": {
            "ja": "カンティーナ・フィオレンティーノ",
            "en": "Cantina Fiorentino"
        },
        "price": 5370,
        "description": {
            "ja": "プリミティーヴォ。ルビー色, 木苺やプラムの香り。ジューシーな果実味と柔らかいタンニン。",
            "en": "Primitivo. Ruby color, raspberry and plum aromas. Juicy fruit and soft tannins."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "ジューシー",
                "en": "Juicy"
            },
            {
                "ja": "柔らかい",
                "en": "Soft"
            }
        ],
        "isVisible": true
    },
    {
        "id": 55,
        "name": {
            "ja": "マードレテッラ ビアンコ",
            "en": "Madreterra Bianco"
        },
        "type": "white",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "プーリア",
            "en": "Puglia"
        },
        "vintage": "2024",
        "variety": {
            "ja": "シャルドネ, フィアーノ",
            "en": "Chardonnay, Fiano"
        },
        "body": "dry",
        "winery": {
            "ja": "カンティーナ・フィオレンティーノ",
            "en": "Cantina Fiorentino"
        },
        "price": 5370,
        "description": {
            "ja": "フローラルでライムの香り。硬質なミネラルと豊かな酸味。ドライだがフルーティ。",
            "en": "Floral and lime aromas. Hard minerals and rich acidity. Dry but fruity."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "ミネラル",
                "en": "Minerality"
            },
            {
                "ja": "フルーティ",
                "en": "Fruity"
            }
        ],
        "isVisible": true
    },
    {
        "id": 56,
        "name": {
            "ja": "スカッコ",
            "en": "Scacco"
        },
        "type": "sparkling",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "エミリア・ロマーニャ",
            "en": "Emilia-Romagna"
        },
        "vintage": "NV",
        "variety": {
            "ja": "シャルドネ, オルトルーゴ",
            "en": "Chardonnay, Oltorgo"
        },
        "body": "dry",
        "winery": {
            "ja": "クアットロヴァッリ",
            "en": "Quattro Valli"
        },
        "price": 3000,
        "description": {
            "ja": "白い花や柑橘類の繊細なフルーティな香り。上品な泡立ち。",
            "en": "Delicate fruity aromas of white flowers and citrus. Elegant bubbles."
        },
        "tags": [
            {
                "ja": "繊細な泡",
                "en": "Delicate Bubbles"
            },
            {
                "ja": "フルーティ",
                "en": "Fruity"
            },
            {
                "ja": "上品",
                "en": "Elegant"
            }
        ],
        "isVisible": true
    },
    {
        "id": 57,
        "name": {
            "ja": "ロッソ・コーネロ",
            "en": "Rosso Conero"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "マルケ",
            "en": "Marche"
        },
        "vintage": "2019",
        "variety": {
            "ja": "モンテプルチャーノ",
            "en": "Montepulciano"
        },
        "body": "full",
        "winery": {
            "ja": "ベリサリオ",
            "en": "Belisario"
        },
        "price": 3700,
        "description": {
            "ja": "チェリーなどの甘いフルーツの香り。豊かな果実味となめらかなタンニンの調和。",
            "en": "Aromas of sweet fruits like cherry. Harmony of rich fruitiness and smooth tannins."
        },
        "tags": [
            {
                "ja": "甘い果実香",
                "en": "Sweet Fruit Aroma"
            },
            {
                "ja": "なめらか",
                "en": "Smooth"
            },
            {
                "ja": "調和",
                "en": "Harmony"
            }
        ],
        "isVisible": true
    },
    {
        "id": 58,
        "name": {
            "ja": "ヴァルポリチェッラ・スペリオーレ \"サン・ピエトロ\"",
            "en": "Valpolicella Superiore \"San Pietro\""
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "ヴェネト",
            "en": "Veneto"
        },
        "vintage": "2023",
        "variety": {
            "ja": "コルヴィーナ, ロンディネッラ, モリナーラ",
            "en": "Corvina, Rondinella, Morina"
        },
        "body": "medium",
        "winery": {
            "ja": "モンテ トンド",
            "en": "Monte Tondo"
        },
        "price": 3700,
        "description": {
            "ja": "20日間の陰干しによるまろやかさ。サクランボのアロマ。スムーズな飲み口。",
            "en": "Mellowness from 20 days of drying. Cherry aroma. Smooth mouthfeel."
        },
        "tags": [
            {
                "ja": "まろやか",
                "en": "Mellow"
            },
            {
                "ja": "陰干し",
                "en": "Appassimento (Dried)"
            },
            {
                "ja": "赤い果実",
                "en": "Red Fruit"
            }
        ],
        "isVisible": true
    },
    {
        "id": 59,
        "name": {
            "ja": "キャンティ・コッリ・フィオレンティーニ",
            "en": "Chianti Colli Fiorentini"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "トスカーナ",
            "en": "Tuscany"
        },
        "vintage": "2022",
        "variety": {
            "ja": "サンジョヴェーゼ・グロッソ, カナイオーロ",
            "en": "Sangiovese Grosso, Canaiolo"
        },
        "body": "medium",
        "winery": {
            "ja": "ランチョーラ",
            "en": "Lanciola"
        },
        "price": 2800,
        "description": {
            "ja": "フィレンツェ近郊の丘陵地。果実味豊かでバランスの良いキャンティ。",
            "en": "Hills near Florence. Fruit-forward and well-balanced Chianti."
        },
        "tags": [
            {
                "ja": "果実味",
                "en": "Fruity"
            },
            {
                "ja": "バランス",
                "en": "Balanced"
            },
            {
                "ja": "キャンティ",
                "en": "Chianti"
            }
        ],
        "isVisible": true
    },
    {
        "id": 60,
        "name": {
            "ja": "マロ",
            "en": "Malot"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "ウンブリア",
            "en": "Umbria"
        },
        "vintage": "2020",
        "variety": {
            "ja": "カベルネ, メルロー",
            "en": "Cabernet, Merlot"
        },
        "body": "full",
        "winery": {
            "ja": "テッレ マルガリテッリ",
            "en": "Terre Margaritelli"
        },
        "price": 5100,
        "description": {
            "ja": "マロラクティック発酵由来のまろやかさ",
            "en": "Mellowness derived from malolactic fermentation"
        },
        "tags": [
            {
                "ja": "樽香",
                "en": "Oaky Aroma"
            },
            {
                "ja": "滑らか",
                "en": "Smooth"
            },
            {
                "ja": "ウンブリア",
                "en": "Umbria"
            }
        ],
        "isVisible": true
    },
    {
        "id": 61,
        "name": {
            "ja": "チロ・ロッソ \"ドンナ・カテリーナ\"",
            "en": "Ciro Rosso \"Donna Caterina\""
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "カラブリア",
            "en": "Calabria"
        },
        "vintage": "2022",
        "variety": {
            "ja": "ガリオッポ",
            "en": "Gaglioppo"
        },
        "body": "medium",
        "winery": {
            "ja": "カンティーネ デ ルーカ",
            "en": "Cantine De Luca"
        },
        "price": 2100,
        "description": {
            "ja": "スミレやバラのようなエレガントな香り。心地よいチェリーの風味。",
            "en": "Elegant scents like violet and rose. Pleasant cherry flavor."
        },
        "tags": [
            {
                "ja": "エレガント",
                "en": "Elegant"
            },
            {
                "ja": "花の香り",
                "en": "Floral Scent"
            },
            {
                "ja": "ビオワイン",
                "en": "Bio Wine"
            }
        ],
        "isVisible": true
    },
    {
        "id": 62,
        "name": {
            "ja": "レザン・アン・ルージュ",
            "en": "Raisin en Rouge"
        },
        "type": "red",
        "country": {
            "ja": "日本",
            "en": "Japan"
        },
        "region": {
            "ja": "長野",
            "en": "Nagano"
        },
        "vintage": "2023",
        "variety": {
            "ja": "メルロー, カベルネ・ソーヴィニヨン, カベルネ・フラン",
            "en": "Merlot, Cabernet Sauvignon, Cabernet Franc"
        },
        "body": "medium",
        "winery": {
            "ja": "テール ド シエル",
            "en": "Terre de Ciel"
        },
        "price": 7700,
        "description": {
            "ja": "長野県高山村産。イチジクや甘いスパイスの香り。軽快ながらもしっかりとした旨味を感じる赤ワイン。",
            "en": "From Takayama Village, Nagano. Aromas of fig and sweet spice. Light yet firm umami red wine."
        },
        "tags": [
            {
                "ja": "日本ワイン",
                "en": "Japan Wine"
            },
            {
                "ja": "旨味",
                "en": "Umami"
            },
            {
                "ja": "軽快",
                "en": "Light/Lively"
            }
        ],
        "isVisible": true
    },
    {
        "id": 63,
        "name": {
            "ja": "バルベーラ・ダスティ \"レオナルド\"",
            "en": "Barbera d'Asti \"Leonardo\""
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "ピエモンテ",
            "en": "Piedmont"
        },
        "vintage": "2022",
        "variety": {
            "ja": "バルベーラ",
            "en": "Barbera"
        },
        "body": "full",
        "winery": {
            "ja": "ラッセッラ",
            "en": "Lasserra"
        },
        "price": 7200,
        "description": {
            "ja": "樽熟成由来の深みのあるアロマ。ラズベリーやカシスの香り, しなやかな口当たりと長い余韻。",
            "en": "Deep aroma from barrel aging. Raspberry and cassis scents, supple mouthfeel and long finish."
        },
        "tags": [
            {
                "ja": "樽熟成",
                "en": "Barrel Aged"
            },
            {
                "ja": "深み",
                "en": "Depth"
            },
            {
                "ja": "エレガント",
                "en": "Elegant"
            }
        ],
        "isVisible": true
    },
    {
        "id": 64,
        "name": {
            "ja": "コッリ・ピアチェンティーニ・ボナルダ",
            "en": "Colli Piacentini Bonarda"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "エミリア・ロマーニャ",
            "en": "Emilia-Romagna"
        },
        "vintage": "2022",
        "variety": {
            "ja": "ボナルダ",
            "en": "Bonarda"
        },
        "body": "medium",
        "winery": {
            "ja": "イル・ヴェイ",
            "en": "Il Vei"
        },
        "price": 5800,
        "description": {
            "ja": "微発泡の赤ワイン。糖分・酵母無添加で瓶内二次発酵。ドライで心地よい飲み口。",
            "en": "Slightly sparkling red. Secondary fermentation in bottle with no added sugar/yeast. Dry and pleasant."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "微発泡",
                "en": "Slightly Sparkling"
            },
            {
                "ja": "飲み心地良い",
                "en": "Pleasant Drinkability"
            }
        ],
        "isVisible": true
    },
    {
        "id": 65,
        "name": {
            "ja": "ビズ",
            "en": "Bizou"
        },
        "type": "red",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ロワール",
            "en": "Loire"
        },
        "vintage": "2022",
        "variety": {
            "ja": "グロロー・ノワール, グロロー・グリ, コー, カベルネ・フラン, シュナン・ブラン",
            "en": "Grolleau Noir, Grolleau Gris, Côt, Cabernet Franc, Chenin Blanc"
        },
        "body": "light",
        "winery": {
            "ja": "ドメーヌ・モス",
            "en": "Domaine Mosse"
        },
        "price": 7300,
        "description": {
            "ja": "「Bisou(キス)」の名を持つヴァン・ド・ソワフ。クランベリーやバラの香り, フレッシュでみずみずしい果実味。",
            "en": "Vin de Soif named 'Bisou' (Kiss). Cranberry and rose aromas, fresh and juicy fruitiness."
        },
        "tags": [
            {
                "ja": "自然派",
                "en": "Natural Wine"
            },
            {
                "ja": "軽快",
                "en": "Light/Lively"
            },
            {
                "ja": "フレッシュ",
                "en": "Fresh"
            }
        ],
        "isVisible": true
    },
    {
        "id": 67,
        "name": { "ja": "ヴァイス", "en": "Weiss" },
        "type": "white",
        "country": { "ja": "ドイツ", "en": "Germany" },
        "region": { "ja": "ラインヘッセン", "en": "Rheinhessen" },
        "vintage": "NV",
        "variety": { "ja": "シルヴァーナー、バッカス", "en": "Silvaner, Bacchus" },
        "body": "dry",
        "winery": { "ja": "ヴァインライヒ", "en": "Weinreich" },
        "price": 6230,
        "description": {
            "ja": "ライムや白桃の香り、ハーブのニュアンス。フレッシュで軽快、ゴクゴク飲める辛口白ワイン。",
            "en": "Aromas of lime and white peach with nuances of herbs. Fresh, light, and easy-drinking dry white wine."
        },
        "tags": [
            { "ja": "ドイツ", "en": "Germany" },
            { "ja": "自然派", "en": "Natural" },
            { "ja": "フレッシュ", "en": "Fresh" }
        ],
        "isVisible": true
    },
    {
        "id": 68,
        "name": { "ja": "グラウ", "en": "Grau" },
        "type": "orange",
        "country": { "ja": "ドイツ", "en": "Germany" },
        "region": { "ja": "ラインヘッセン", "en": "Rheinhessen" },
        "vintage": "NV",
        "variety": { "ja": "グラウブルグンダー", "en": "Grauburgunder" },
        "body": "dry",
        "winery": { "ja": "ヴァインライヒ", "en": "Weinreich" },
        "price": 6230,
        "description": {
            "ja": "オレンジがかった色調、ナッツやスパイスの香り。厚みのある果実味が特徴の飲み応えのある辛口。",
            "en": "Orange-tinged hue, aromas of nuts and spices. A dry wine with substantial fruitiness."
        },
        "tags": [
            { "ja": "ピノ・グリ", "en": "Pinot Gris" },
            { "ja": "自然派", "en": "Natural" },
            { "ja": "複雑味", "en": "Complex" }
        ],
        "isVisible": true
    },
    {
        "id": 69,
        "name": { "ja": "ロット", "en": "Rot" },
        "type": "red",
        "country": { "ja": "ドイツ", "en": "Germany" },
        "region": { "ja": "ラインヘッセン", "en": "Rheinhessen" },
        "vintage": "NV",
        "variety": { "ja": "ドルンフェルダー、メルロー", "en": "Dornfelder, Merlot" },
        "body": "medium",
        "winery": { "ja": "ヴァインライヒ", "en": "Weinreich" },
        "price": 6230,
        "description": {
            "ja": "ベリー系の果実味と土っぽいニュアンス。渋みは穏やかでスルッと飲める自然派赤ワイン。",
            "en": "Berry fruit flavors with earthy nuances. Mild tannins and easy to drink natural red wine."
        },
        "tags": [
            { "ja": "ドイツ", "en": "Germany" },
            { "ja": "自然派", "en": "Natural" },
            { "ja": "飲みやすい", "en": "Easy to drink" }
        ],
        "isVisible": true
    },
    {
        "id": 70,
        "name": { "ja": "ロゼ", "en": "Rose" },
        "type": "rose",
        "country": { "ja": "ドイツ", "en": "Germany" },
        "region": { "ja": "ラインヘッセン", "en": "Rheinhessen" },
        "vintage": "NV",
        "variety": { "ja": "ピノ・ノワール、ポルトギーザー", "en": "Pinot Noir, Portugieser" },
        "body": "dry",
        "winery": { "ja": "ヴァインライヒ", "en": "Weinreich" },
        "price": 6230,
        "description": {
            "ja": "チャーミングなイチゴやチェリーの香り。甘ったるさはなく、しっかりとした酸とミネラルがある。",
            "en": "Charming aromas of strawberry and cherry. Not overly sweet, with firm acidity and minerality."
        },
        "tags": [
            { "ja": "ドイツ", "en": "Germany" },
            { "ja": "自然派", "en": "Natural" },
            { "ja": "辛口ロゼ", "en": "Dry Rose" }
        ],
        "isVisible": false
    },
    {
        "id": 71,
        "name": { "ja": "サン・スフル 白", "en": "Sans Soufre White" },
        "type": "sparkling",
        "country": { "ja": "日本", "en": "Japan" },
        "region": { "ja": "山形", "en": "Yamagata" },
        "vintage": "NV",
        "variety": { "ja": "デラウェア", "en": "Delaware" },
        "body": "dry",
        "winery": { "ja": "タケダワイナリー", "en": "Takeda Winery" },
        "price": 6160,
        "description": {
            "ja": "酸化防止剤無添加（サン・スフル）。デラウェアのフレッシュな香りと、酵母由来の濁りが生む旨味が特徴。",
            "en": "No added antioxidants (Sans Soufre). Features fresh Delaware aroma and umami from yeast lees."
        },
        "tags": [
            { "ja": "日本ワイン", "en": "Japanese Wine" },
            { "ja": "自然派", "en": "Natural" },
            { "ja": "濁り泡", "en": "Cloudy Sparkling" }
        ],
        "isVisible": true
    },
    {
        "id": 72,
        "name": { "ja": "スパークリング ブリュット", "en": "Sparkling Brut" },
        "type": "sparkling",
        "country": { "ja": "アルゼンチン", "en": "Argentina" },
        "region": { "ja": "メンドーサ", "en": "Mendoza" },
        "vintage": "NV",
        "variety": { "ja": "シャルドネ", "en": "Chardonnay" },
        "body": "dry",
        "winery": { "ja": "トソ", "en": "Toso" },
        "price": 3300,
        "description": {
            "ja": "レモンやトースト、柑橘の香り。クリーミーでフレッシュな口当たりを持つ、バランスの良い辛口。",
            "en": "Aromas of lemon, toast, and citrus. Creamy and fresh palate, a well-balanced dry sparkling."
        },
        "tags": [
            { "ja": "アルゼンチン", "en": "Argentina" },
            { "ja": "シャルドネ", "en": "Chardonnay" },
            { "ja": "クリーミー", "en": "Creamy" }
        ],
        "isVisible": false
    },
    {
        "id": 73,
        "name": { "ja": "キュヴェ・ブラン", "en": "Cuvée Blanc" },
        "type": "sparkling",
        "country": { "ja": "オーストラリア", "en": "Australia" },
        "region": { "ja": "クナワラ", "en": "Coonawarra" },
        "vintage": "NV",
        "variety": { "ja": "シャルドネ、ピノ・ノワール", "en": "Chardonnay, Pinot Noir" },
        "body": "dry",
        "winery": { "ja": "シン", "en": "Syn" },
        "price": 3500,
        "description": {
            "ja": "ドライでエレガントな味わい。桃や柑橘の香りに、長期熟成による複雑味も感じられる。",
            "en": "Dry and elegant taste. Aromas of peach and citrus, with complexity from long aging."
        },
        "tags": [
            { "ja": "オーストラリア", "en": "Australia" },
            { "ja": "スタイリッシュ", "en": "Stylish" },
            { "ja": "エレガント", "en": "Elegant" }
        ],
        "isVisible": false
    },
    {
        "id": 74,
        "name": { "ja": "テバルド ビアンコ", "en": "Tebaldo Bianco" },
        "type": "white",
        "country": { "ja": "イタリア", "en": "Italy" },
        "region": { "ja": "プーリア", "en": "Puglia" },
        "vintage": "NV",
        "variety": { "ja": "トレッビアーノ、シャルドネ", "en": "Trebbiano, Chardonnay" },
        "body": "dry",
        "winery": { "ja": "テバルド", "en": "Tebaldo" },
        "price": 2000,
        "description": {
            "ja": "フレッシュでフルーティな辛口。柑橘や青リンゴの爽やかな香りがあり、前菜やパスタと合わせやすい。",
            "en": "Fresh and fruity dry white. Crisp aromas of citrus and green apple, pairs well with appetizers and pasta."
        },
        "tags": [
            { "ja": "イタリア", "en": "Italy" },
            { "ja": "プーリア", "en": "Puglia" },
            { "ja": "爽やか", "en": "Crisp" }
        ],
        "isVisible": false
    },
    {
        "id": 75,
        "name": { "ja": "ペルラ・デル・マーレ", "en": "Perla del Mar" },
        "type": "white",
        "country": { "ja": "スペイン", "en": "Spain" },
        "region": { "ja": "アリカンテ", "en": "Alicante" },
        "vintage": "NV",
        "variety": { "ja": "シャルドネ、ソーヴィニヨン・ブラン", "en": "Chardonnay, Sauvignon Blanc" },
        "body": "dry",
        "winery": { "ja": "ペルラ・デル・マーレ", "en": "Perla del Mar" },
        "price": 2900,
        "description": {
            "ja": "「海の真珠」。ライチやマスカットの華やかな香りと、フルーティでドライな味わいが特徴。",
            "en": "'Pearl of the Sea'. Gorgeous aromas of lychee and muscat, featuring a fruity and dry taste."
        },
        "tags": [
            { "ja": "スペイン", "en": "Spain" },
            { "ja": "華やか", "en": "Gorgeous" },
            { "ja": "フルーティ", "en": "Fruity" }
        ],
        "isVisible": false
    },
    {
        "id": 76,
        "name": { "ja": "シュヴェルニー \"ドゥレイユ\"", "en": "Cheverny \"Delaille\"" },
        "type": "white",
        "country": { "ja": "フランス", "en": "France" },
        "region": { "ja": "ロワール", "en": "Loire" },
        "vintage": "NV",
        "variety": { "ja": "ソーヴィニヨン・ブラン、シャルドネ", "en": "Sauvignon Blanc, Chardonnay" },
        "body": "dry",
        "winery": { "ja": "ドメーヌ・サルヴァ", "en": "Domaine Salvard" },
        "price": 4500,
        "description": {
            "ja": "ロワール地方の爽やかな辛口。グレープフルーツやハーブの清涼感ある香りと、キリッとした酸味。",
            "en": "Crisp dry white from Loire. Refreshing aromas of grapefruit and herbs, with sharp acidity."
        },
        "tags": [
            { "ja": "ロワール", "en": "Loire" },
            { "ja": "ソーヴィニヨン・ブラン", "en": "Sauvignon Blanc" },
            { "ja": "清涼感", "en": "Refreshing" }
        ],
        "isVisible": false
    },
    {
        "id": 77,
        "name": { "ja": "カリフォルニア シャルドネ", "en": "California Chardonnay" },
        "type": "white",
        "country": { "ja": "アメリカ", "en": "USA" },
        "region": { "ja": "カリフォルニア", "en": "California" },
        "vintage": "NV",
        "variety": { "ja": "シャルドネ", "en": "Chardonnay" },
        "body": "dry",
        "winery": { "ja": "パナメラ", "en": "Panamera" },
        "price": 4400,
        "description": {
            "ja": "完熟したパイナップルの果実味に、バニラや樽の香りが溶け込んだ、濃厚でクリーミーな味わい。",
            "en": "Rich and creamy taste with ripe pineapple fruitiness blended with vanilla and oak aromas."
        },
        "tags": [
            { "ja": "カリフォルニア", "en": "California" },
            { "ja": "樽香", "en": "Oaky" },
            { "ja": "濃厚", "en": "Rich" }
        ],
        "isVisible": false
    },
    {
        "id": 78,
        "name": { "ja": "オッチ・ロッソ", "en": "Occi Rosso" },
        "type": "red",
        "country": { "ja": "イタリア", "en": "Italy" },
        "region": { "ja": "シチリア", "en": "Sicily" },
        "vintage": "NV",
        "variety": { "ja": "ネロ・ダヴォラ", "en": "Nero d'Avola" },
        "body": "full",
        "winery": { "ja": "オッチ", "en": "Occi" },
        "price": 3550,
        "description": {
            "ja": "シチリアの太陽を浴びた完熟果実の香りと、スパイシーで凝縮感のある味わいが特徴。",
            "en": "Features aromas of sun-ripened Sicilian fruit and a spicy, concentrated taste."
        },
        "tags": [
            { "ja": "シチリア", "en": "Sicily" },
            { "ja": "ネロ・ダヴォラ", "en": "Nero d'Avola" },
            { "ja": "スパイシー", "en": "Spicy" }
        ],
        "isVisible": false
    },
    {
        "id": 79,
        "name": { "ja": "サペラヴィ", "en": "Saperavi" },
        "type": "red",
        "country": { "ja": "ジョージア", "en": "Georgia" },
        "region": { "ja": "カヘティ", "en": "Kakheti" },
        "vintage": "NV",
        "variety": { "ja": "サペラヴィ", "en": "Saperavi" },
        "body": "full",
        "winery": { "ja": "タオバ", "en": "Taoba" },
        "price": 5050,
        "description": {
            "ja": "ワイン発祥の地ジョージア。非常に濃い色調で、ブラックベリーやスパイスの香り。力強いタンニン。",
            "en": "Georgia, the birthplace of wine. Deep color, aromas of blackberry and spice. Powerful tannins."
        },
        "tags": [
            { "ja": "ジョージア", "en": "Georgia" },
            { "ja": "サペラヴィ", "en": "Saperavi" },
            { "ja": "濃厚", "en": "Rich" }
        ],
        "isVisible": false
    },
    {
        "id": 80,
        "name": {
            "ja": "コート・デ・ローズ",
            "en": "Cote des Roses"
        },
        "type": "red",
        "country": {
            "ja": "フランス",
            "en": "France"
        },
        "region": {
            "ja": "ラングドック・ルーション",
            "en": "Languedoc-Roussillon"
        },
        "vintage": "2022",
        "variety": {
            "ja": "ピノ・ノワール",
            "en": "Pinot Noir"
        },
        "body": "medium",
        "winery": {
            "ja": "ジェラール・ベルトラン",
            "en": "Gérard Bertrand"
        },
        "price": 4300,
        "description": {
            "ja": "瓶底がバラの形のボトル。サクランボや野イチゴの果実味とスパイスの香り。ビロードのような口当たりとシルキーなタンニン。",
            "en": "Bottle with a rose-shaped bottom. Aromas of cherry and wild strawberry with spicy notes. Velvety mouthfeel and silky tannins."
        },
        "tags": [
            {
                "ja": "バラのボトル",
                "en": "Rose Bottle"
            },
            {
                "ja": "南仏",
                "en": "South of France"
            },
            {
                "ja": "エレガント",
                "en": "Elegant"
            }
        ],
        "isVisible": true
    }
];

const WINE_STORAGE_KEY = 'lalupa_wines_v17';
