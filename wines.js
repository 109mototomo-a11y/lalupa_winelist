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
            "ja": "「ワインの王」。芳醇さと緊張感があり、しっかりとした構造の中にエレガンスがある。",
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
            "ja": "カステッラ ランゲソーヴィニヨン",
            "en": "Castella Langhe Sauvignon"
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
            "ja": "アプリコットのような果実の香り、フレッシュな口当たりながら凝縮感がある。",
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
            "ja": "カゼッテフォスカリーノ ソアーヴェクラシコ",
            "en": "Casette Foscarino Soave Classico"
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
            "ja": "ガルガネガ、トレッビアーノ",
            "en": "Galanga, Trebbiano"
        },
        "body": "dry",
        "winery": {
            "ja": "モンテ トンド",
            "en": "Monte Tondo"
        },
        "price": 4620,
        "description": {
            "ja": "バニラの香りとまろやかな味わい。ハチミツやドライフルーツの風味、リッチで滑らか。",
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
            "ja": "ステファノ ヴァルポリチェッラ スペリオーレ",
            "en": "Stefano Valpolicella Superiore"
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
            "ja": "コルヴィーナ、ロンディネッラ、モリナーラ",
            "en": "Corvina, Rondinella, Morina"
        },
        "body": "medium",
        "winery": {
            "ja": "ステファノ アッコルディーニ",
            "en": "Stefano Accordini"
        },
        "price": 5080,
        "description": {
            "ja": "濃いルビー色。イチゴやサクランボの香り、ミネラルのニュアンス。ドライで程よいタンニン。",
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
            "ja": "トラミネールアロマティコ",
            "en": "Traminer Aromatico"
        },
        "body": "dry",
        "winery": {
            "ja": "トブラール",
            "en": "Toblar"
        },
        "price": 4470,
        "description": {
            "ja": "ライチやバラ、スパイスのアロマティックな香り。滑らかでミネラル感がある。",
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
            "ja": "サンジョヴェーゼグロッソ",
            "en": "Sangiovese Grosso"
        },
        "body": "full",
        "winery": {
            "ja": "マルトッチャ",
            "en": "Martoccia"
        },
        "price": 11550,
        "description": {
            "ja": "トスカーナの偉大な赤。複雑なプラムやチェリーの香り、滑らかなタンニンと深い余韻。",
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
            "ja": "レ マッセ ディ グレーヴェ キャンティ クラシコ",
            "en": "Le Masse di Greve Chianti Classico"
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
            "ja": "サンジョヴェーゼグロッソ",
            "en": "Sangiovese Grosso"
        },
        "body": "medium",
        "winery": {
            "ja": "ランチョーラ",
            "en": "Lanciola"
        },
        "price": 4520,
        "description": {
            "ja": "シンプルな赤身肉やキノコ料理、ハードチーズとよく合う。",
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
            "ja": "ポスタアリニャーノ サン セヴェーロ ロッソ",
            "en": "Posta Arignano San Severo Rosso"
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
            "ja": "ルビーレッド色。ワインらしい豊かな果実味と、ドライでバランスの取れた味わい。",
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
            "ja": "ポスタアリニャーノ サン セヴェーロ ビアンコ",
            "en": "Posta Arignano San Severo Bianco"
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
            "ja": "ボンビーノビアンコ、トレッビアーノ、マルヴァジア",
            "en": "Bonino Bianco, Trebbiano, Malvasia"
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
            "ja": "マイティ ヴァレー シャルドネ",
            "en": "Mighty Valley Chardonnay"
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
            "ja": "ミラマン エステート リザーヴ ソーヴィニヨンブラン",
            "en": "Millaman Estate Reserve Sauvignon Blanc"
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
            "ja": "ソーヴィニヨンブラン",
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
            "en": "bursting with aromas of grapefruit and peach. Juicy and very fresh."
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
            "ja": "スミレのような花の香りと、チェリーやラズベリーなど赤いベリー系の風味。非常にフルーティでジューシー。",
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
            "ja": "ミラマン エステート リザーヴ カベルネソーヴィニヨン",
            "en": "Millaman Estate Reserve Cabernet Sauvignon"
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
            "ja": "チェリーや熟したプラムの甘さを感じる香り。スパイスのニュアンス、熟した甘いタンニン。",
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
            "ja": "ジンファンデル プーリア オーガニック",
            "en": "Zinfandel Puglia Organic"
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
            "ja": "EUオーガニック認証。個性的で優美な香り、ドライで滑らか。柔らかいタンニン。",
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
            "ja": "青リンゴ、シトラス、バニラの香り。フレッシュなミネラル感と樽熟成の爽やかな後味。",
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
            "ja": "複雑で力強く、濃厚でありながら飲みやすい。豪華で長い余韻。",
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
            "ja": "ジョワ・ド・フランス ブリュット・レゼルヴ",
            "en": "Joie de France Brut Reserve"
        },
        "type": "red",
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
            "ja": "エールフランス採用。繊細な泡立ちと果樹園果実のアロマ、滑らかでフルーティー。",
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
            "ja": "シャンパーニュ ボワゼル ブリュット レゼルブ",
            "en": "Champagne Boizel Brut Reserve"
        },
        "type": "red",
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
            "ja": "ピノ・ノワール、シャルドネ、ピノ・ムニエ",
            "en": "Pinot Noir, Chardonnay, Pinot Meunier"
        },
        "body": "dry",
        "winery": {
            "ja": "ボワゼル",
            "en": "Boizel"
        },
        "price": 13640,
        "description": {
            "ja": "36ヶ月長期熟成。白い花や桃、ペイストリーのニュアンス。フレッシュでエレガント。",
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
            "ja": "キュヴェ・ド・ラ・メゾン ブラン",
            "en": "Cuvée de la Maison Blanc"
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
            "ja": "典型的な南仏シャルドネ。ピーチとパイナップルの香り、まろやかで滑らか。",
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
            "ja": "ファッフ キュヴェ・ジュピター リースリング",
            "en": "Pfaff Cuvée Jupiter Riesling"
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
            "ja": "ドライでエレガント。火打石のようなミネラル感、柑橘類や松脂の特徴。",
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
            "ja": "ファウンダーズ シュナンブラン",
            "en": "Founders Chenin Blanc"
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
            "ja": "シュナンブラン",
            "en": "Chenin Blanc"
        },
        "body": "dry",
        "winery": {
            "ja": "スワートランド・ワイナリー",
            "en": "Swartland Winery"
        },
        "price": 3610,
        "description": {
            "ja": "すっきりとした辛口。グアバやパッションフルーツの香り、ライムの皮の風味。",
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
            "ja": "カベルネ・ソーヴィニヨン, カベルネ・フラン, メルロー, カベルネ・ドリオ, プティ・ヴェルド",
            "en": "Cabernet Sauvignon, Cabernet Franc, Merlot, Cabernet DIO, Petit Verdot"
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
            "ja": "カベルネ・ソーヴィニヨン,プティ・ヴェルド,カベルネ・フラン,メルロー,マルベック",
            "en": "Cabernet Sauvignon, Petit Verdot, Cabernet Franc, Merlot, Malbec"
        },
        "body": "full",
        "winery": {
            "ja": "オーパスワン",
            "en": "Opus One"
        },
        "price": 98000,
        "description": {
            "ja": "カリフォルニアの最高峰。カベルネ主体。圧倒的な凝縮感とエレガンス、長期熟成能力を持つ。",
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
            "ja": "メルロー、サンジョヴェーゼ",
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
            "ja": "ヴィーナプンタスカラ 1066キュベ",
            "en": "Vina Punta Skala 1066 Cuvée"
        },
        "type": "white",
        "country": {
            "ja": "クロアチア"
        },
        "region": {
            "ja": "ザダル"
        },
        "vintage": "2024",
        "variety": {
            "ja": "ポシップ、ジラフカ、シャルドネ",
            "en": "Posip, Zilavka, Chardonnay"
        },
        "body": "dry",
        "winery": {
            "ja": "ロイヤルヴィンヤード",
            "en": "Royal Vineyards"
        },
        "price": 4620,
        "description": {
            "ja": "クロアチア産。熟した果実味とスパイス、しっかりとした骨格を持つプレミアム赤ワイン。",
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
            "ja": "ヴィーナプンタスカラ マスカット",
            "en": "Vina Punta Skala Muscat"
        },
        "type": "white",
        "country": {
            "ja": "クロアチア"
        },
        "region": {
            "ja": "ザダル"
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
            "ja": "ヴィーナプンタスカラ アンティークロゼ エクストラブリュット",
            "en": "Vina Punta Skala Antique Rose Extra Brut"
        },
        "type": "red",
        "country": {
            "ja": "クロアチア"
        },
        "region": {
            "ja": "ザダル"
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
            "ja": "珍しいクロアチアのロゼスパークリング。ベリー系の香り、キリッとした辛口。",
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
            "ja": "ヴィーナプンタスカラ グラディアートル リミテッドエディション",
            "en": "Vina Punta Skala Gladiator Limited Edition"
        },
        "type": "red",
        "country": {
            "ja": "クロアチア"
        },
        "region": {
            "ja": "ザダル"
        },
        "vintage": "2019",
        "variety": {
            "ja": "プラヴァツ・マリ、クルリェナク、メルロー、シラー",
            "en": "Plavac Mali, Kulašenak, Merlot, Shiraz"
        },
        "body": "full",
        "winery": {
            "ja": "ロイヤルヴィンヤード",
            "en": "Royal Vineyards"
        },
        "price": 9900,
        "description": {
            "ja": "力強い名前の通り、濃厚でパワフルな赤ワイン。凝縮した果実味。",
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
            "ja": "グルグルヴィンスキ プラヴァッツマリ",
            "en": "Gurgurvinski Plavac Mali"
        },
        "type": "red",
        "country": {
            "ja": "クロアチア"
        },
        "region": {
            "ja": "ザダル"
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
            "ja": "ローラン・サイヤール ラ・ポーズ",
            "en": "Laurent Saillard La Pause"
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
            "ja": "ガメイ種。透明感あるルビー色。ジューシーな果実味が広がり、染み入るような柔らかさ。",
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
            "ja": "ローラン・サイヤール ラッキーユー",
            "en": "Laurent Saillard Lucky You"
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
            "ja": "ソーヴィニヨンブラン、シャルドネ",
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
            "ja": "ローラン・サイヤール ラ・ヴァルス ロゼ",
            "en": "Laurent Saillard La Valse Rosé"
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
            "ja": "ガメイ、ピノ・ドニス、カベルネ・フラン、カベルネ・ソーヴィニヨン",
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
            "ja": "アルボワ・シャルドネ・イニシアル",
            "en": "Arbois Chardonnay Initial"
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
            "ja": "アルボワ シャルドネ・サヴァニャン ニュアンス",
            "en": "Arbois Chardonnay Savagnin Nuance"
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
            "ja": "シャルドネ、サヴァニャン",
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
            "ja": "アルボワ トゥルソー・エクセプシオン",
            "en": "Arbois Trousseau Exception"
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
            "ja": "淡い色調。アニスや白胡椒、真夏のスイカのようなジューシーな果実味。",
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
            "ja": "アルボワ ピノノワール・レヴェラシオン",
            "en": "Arbois Pinot Noir Révélation"
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
            "ja": "ピノノワール",
            "en": "Pinot Noir"
        },
        "body": "medium",
        "winery": {
            "ja": "ジェローム・アルヌー",
            "en": "Jérôme Arnoux"
        },
        "price": 13270,
        "description": {
            "ja": "濃い紫の色調。ジューシーで密度のある黒果実、清涼感と陰影のある果実味。",
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
            "ja": "クリスチャン・ビネール セシュシュール",
            "en": "Christian Binner S'esch Sur"
        },
        "type": "red",
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
            "ja": "水、ミラベル、洋梨、ホップの花ゲヴュルツトラミネール",
            "en": "Water, Mirabelle, Pear, Gewurztraminer"
        },
        "body": "dry",
        "winery": {
            "ja": "クリスチャン・ビネール",
            "en": "Christian Binner"
        },
        "price": 5050,
        "description": {
            "ja": "「S'esch Sur」。水、ミラベル、洋梨、ホップ等を使用したペティアン。濁りのある文旦のような色、ドライで喉越しが良い。",
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
                "ja": "ドライ",
                "en": "Dry"
            }
        ],
        "isVisible": true
    },
    {
        "id": 38,
        "name": {
            "ja": "グート・オッガウ マスケラード",
            "en": "Gut Oggau Maskerade"
        },
        "type": "red",
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
            "ja": "1リットル瓶。フィールドブレンド。フレッシュでガブガブ飲める、エネルギッシュな自然派。",
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
            "ja": "グート・オッガウ テオドラ",
            "en": "Gut Oggau Theodora"
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
            "ja": "グリューナーヴェルトリーナー、ヴェルシュリースリング",
            "en": "Gruner Veltliner, Veruschriesling"
        },
        "body": "dry",
        "winery": {
            "ja": "グート・オッガウ",
            "en": "Gut Oggau"
        },
        "price": 14520,
        "description": {
            "ja": "「第3世代」。無濾過で濁りのある白。フレッシュでジューシー、生き生きとした味わい。",
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
            "ja": "グート・オッガウ ヴィニフレッド",
            "en": "Gut Oggau Winifred"
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
            "ja": "ブラウフレンキッシュ、ツヴァイゲルト",
            "en": "Blaufränkisch, Zweigelt"
        },
        "body": "dry",
        "winery": {
            "ja": "グート・オッガウ",
            "en": "Gut Oggau"
        },
        "price": 14520,
        "description": {
            "ja": "「第3世代」のロゼ。ブラウフレンキッシュ/ツヴァイゲルト。フレッシュでフルーティ、魅力的な愛らしさ。",
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
            "ja": "グート・オッガウ ヨゼフィーネ",
            "en": "Gut Oggau Josephine"
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
            "ja": "ロースラー、ブラウフレンキッシュ",
            "en": "Roussillon, Blaufränkisch"
        },
        "body": "medium",
        "winery": {
            "ja": "グート・オッガウ",
            "en": "Gut Oggau"
        },
        "price": 20240,
        "description": {
            "ja": "「第2世代」。赤。シリアスでストラクチャーがありながら、飲み心地の良さも備える。",
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
            "ja": "グート・オッガウ ヨシュアリ",
            "en": "Gut Oggau Joshuari"
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
            "ja": "ロコ ヴェルデ",
            "en": "Roco Verde"
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
            "ja": "マレスコ、ミヌートロ、ヴェルデカ",
            "en": "Maresco, Minutolo, Verdeca"
        },
        "body": "dry",
        "winery": {
            "ja": "ロコ",
            "en": "Roco"
        },
        "price": 11690,
        "description": {
            "ja": "緑ボトル。熟れた果実の豊潤な質感、心地よい酸味と塩気、乳酸的なまろやかな旨味。",
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
            "ja": "ロコ フッシア",
            "en": "Roco Fucsia"
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
            "ja": "モンテプルチャーノ、ミヌートロ",
            "en": "Montepulciano, Minutolo"
        },
        "body": "dry",
        "winery": {
            "ja": "ロコ",
            "en": "Roco"
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
            "ja": "ロコ ロッソ",
            "en": "Roco Rosso"
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
            "ja": "ネロ・ディ・トロイア、ボンビーノ・ビアンコ",
            "en": "Nero di Troia, Bonino Bianco"
        },
        "body": "medium",
        "winery": {
            "ja": "ロコ",
            "en": "Roco"
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
            "ja": "ロコ リッラ",
            "en": "Roco Lilla"
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
            "ja": "マレスコ、オッタヴィア・ネッロ、ミヌートロ",
            "en": "Maresco, Ottavia Nero, Minutolo"
        },
        "body": "dry",
        "winery": {
            "ja": "ロコ",
            "en": "Roco"
        },
        "price": 17030,
        "description": {
            "ja": "淡紫ボトル（ロゼ）。ミントやハーブの香り、塩気。フレッシュで飲み心地最高クラス。",
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
            "ja": "ロコ ヴィオラ",
            "en": "Roco Viola"
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
            "ja": "ボンビーノ・ネーロ、ネロ・ディ・トロイア、ボンビーノ・ビアンコ",
            "en": "Bonino Nero, Nero di Troia, Bonino Bianco"
        },
        "body": "medium",
        "winery": {
            "ja": "ロコ",
            "en": "Roco"
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
            "ja": "ラディコン ピニョーリ",
            "en": "Radikon Pignoli"
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
            "ja": "フリウリの巨匠。長期マセラシオン（オレンジ）。枯れたニュアンス、複雑味、圧倒的な余韻。",
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
            "ja": "アレッサンドロ・ヴィオラ カリカッツ",
            "en": "Alessandro Viola Catarratto"
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
            "ja": "カタラット、カリカンテ",
            "en": "Catarratto, Carignante"
        },
        "body": "dry",
        "winery": {
            "ja": "アレッサンドロ・ビオラ",
            "en": "Alessandro Viola"
        },
        "price": 9110,
        "description": {
            "ja": "シチリアの自然派。柑橘やハーブの香り、ピュアな果実味。",
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
            "ja": "アレッサンドロ・ヴィオラ ノートディロッソ",
            "en": "Alessandro Viola Note di Rosso"
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
            "ja": "ネロ・ダーヴォラ、ネレッロ・マスカレーゼ、ペッリコ―ネ",
            "en": "Nero D'Avola, Nerello Mascalese, Perricone"
        },
        "body": "medium",
        "winery": {
            "ja": "アレッサンドロ・ビオラ",
            "en": "Alessandro Viola"
        },
        "price": 9110,
        "description": {
            "ja": "ネレッロ・マスカレーゼ主体。赤い果実の明るい香り、軽やかで滋味深い味わい。",
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
            "ja": "アレッサンドロ・ヴィオラ シンフォニア・ディ・ロッソ",
            "en": "Alessandro Viola Sinfonia di Rosso"
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
            "ja": "アレッサンドロ・ヴィオラ シンフォニア・ディ・ビアンコ",
            "en": "Alessandro Viola Sinfonia di Bianco"
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
            "ja": "アレッサンドロ・ヴィオラ レ・ミエ・オリジニ",
            "en": "Alessandro Viola Le Miel Origini"
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
            "ja": "カタラット種。アンフォラ熟成など伝統的手法。複雑でオレンジピールやスパイスの香り。",
            "en": "Catarratto. Traditional methods like Amphora aging. Complex aromas of orange peel and spice."
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
        "id": 54,
        "name": {
            "ja": "カンティーナ・フィオレンティーノ マードレテッラ・ロッソ",
            "en": "Cantina Fiorentino Madreterra Rosso"
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
            "ja": "プリミティーヴォ。ルビー色、木苺やプラムの香り。ジューシーな果実味と柔らかいタンニン。",
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
            "ja": "カンティーナ・フィオレンティーノ マードレテッラ・ビアンコ",
            "en": "Cantina Fiorentino Madreterra Bianco"
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
            "ja": "シャルドネ、フィアーノ",
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
            "ja": "スカッコ スプマンテ",
            "en": "Scacco Spumante"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "エミリア=ロマーニャ",
            "en": "Emilia-Romagna"
        },
        "vintage": "NV",
        "variety": {
            "ja": "シャルドネ、オルトルーゴ",
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
            "ja": "ロッソ コーネロ",
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
            "ja": "サン ピエトロ ヴァルポリチェッラ スペリオーレ",
            "en": "San Pietro Valpolicella Superiore"
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
            "ja": "コルヴィーナ、ロンディネッラ、モリナーラ",
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
            "ja": "キアンティ コッレ フィオレンティーニ",
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
            "ja": "サンジョヴェーゼグロッソ、カナイオーロ",
            "en": "San Giovanni Grosso, Canaiolo"
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
            "en": "Maro"
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
            "ja": "カベルネ、メルロー",
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
            "ja": "ドンナ カテリーナ チロ ロッソ",
            "en": "Donna Caterina Ciro Rosso"
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
            "en": "ガリオッポ"
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
            "ja": "レザン アン ルージュ テールドシエル",
            "en": "Raisin en Rouge Terre de Ciel"
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
            "ja": "メルロー、カベルネソーヴィニョン、カベルネフラン",
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
            "ja": "レオナルド・バルベーラ・ダスティ・スペリオーレ",
            "en": "Leonardo Barbera d'Asti Superiore"
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
            "en": "L'Acella"
        },
        "price": 7200,
        "description": {
            "ja": "樽熟成由来の深みのあるアロマ。ラズベリーやカシスの香り、しなやかな口当たりと長い余韻。",
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
            "ja": "コッリ・ピアチェンティーニ・ボナルダ 2020 / イル・ヴェイ",
            "en": "Colli Piacentini Bonarda 2020 / Il Vei"
        },
        "type": "red",
        "country": {
            "ja": "イタリア",
            "en": "Italy"
        },
        "region": {
            "ja": "エミリア=ロマーニャ",
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
            "ja": "グロロー黒、グロローグリ、コー、カベルネフラン、シュナン",
            "en": "Grolleau Noir, Grolleau Gris, Coe, Cabernet Franc, Chenin"
        },
        "body": "light",
        "winery": {
            "ja": "ドメーヌ・モス",
            "en": "Domaine Mosse"
        },
        "price": 7300,
        "description": {
            "ja": "「Bisou(キス)」の名を持つヴァン・ド・ソワフ。クランベリーやバラの香り、フレッシュでみずみずしい果実味。",
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
    }
];

const WINE_STORAGE_KEY = 'lalupa_wines_v4';
