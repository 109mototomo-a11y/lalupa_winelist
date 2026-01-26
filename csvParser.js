/**
 * CSV Parser for La Lupa Wine List
 * Handles parsing of specific columns for wine data import.
 */

const CSV_MAPPING = {
    '番号': 'id',
    'ワイン名': 'name',
    '年号': 'vintage',
    'ヴィンテージ': 'vintage', // Added for new CSV
    '種類': 'type',
    '国': 'country',
    '地域': 'region',
    '品種': 'variety',
    '生産者': 'winery', // Added for new CSV
    '販売価格': 'price',
    'ボディ': 'body',
    '特徴': 'description', // Modified: Description text
    '特徴タグ': 'tags'   // Modified: Tag list
};

const TYPE_MAPPING = {
    '赤': 'red',
    '赤ワイン': 'red',
    'red': 'red',
    '白': 'white',
    '白ワイン': 'white',
    'white': 'white',
    '泡': 'sparkling',
    '泡白': 'sparkling',
    'スパークリング': 'sparkling',
    'sparkling': 'sparkling',
    '泡ロゼ': 'rose_sparkling',
    'ロゼ': 'rose',
    'rose': 'rose',
    'オレンジ': 'orange',
    'orange': 'orange',
    '泡ロゼ': 'rose_sparkling',
    'ロゼ・発泡': 'rose_sparkling',
    'rose sparkling': 'rose_sparkling'
};

function parseCSV(csvText) {
    const lines = csvText.split(/\r\n|\n/);
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim());
    const validWines = [];

    // Identify column indices
    const indices = {};
    for (const [jpName, key] of Object.entries(CSV_MAPPING)) {
        const index = headers.findIndex(h => h === jpName);
        if (index !== -1) {
            indices[key] = index;
        }
    }

    if (Object.keys(indices).length === 0) {
        console.error("No valid headers found");
        return [];
    }

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        // Simple regex to handle quoted fields:
        const matches = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        // Fallback to simple split if matches fail or complex
        let row = [];
        let inQuote = false;
        let currentCell = '';
        for (let char of line) {
            if (char === '"') {
                inQuote = !inQuote;
            } else if (char === ',' && !inQuote) {
                row.push(currentCell);
                currentCell = '';
            } else {
                currentCell += char;
            }
        }
        row.push(currentCell); // push last

        const wine = {
            id: null,
            name: {},
            vintage: 'NV',
            type: 'red', // default
            winery: {}, // Added
            country: {},
            region: {},
            variety: {},
            description: {}, // Added
            price: 0,
            body: 'medium',
            tags: [],
            isVisible: true // Default to visible on import
        };

        // ID
        if (indices.id !== undefined && row[indices.id]) {
            wine.id = parseInt(row[indices.id].replace(/\D/g, '')) || null;
        }

        // Name (JA)
        if (indices.name !== undefined && row[indices.name]) {
            wine.name.ja = cleanCell(row[indices.name]);
        }

        // Vintage
        if (indices.vintage !== undefined && row[indices.vintage]) {
            wine.vintage = cleanCell(row[indices.vintage]);
        }

        // Type
        if (indices.type !== undefined && row[indices.type]) {
            const rawType = cleanCell(row[indices.type]).toLowerCase();
            wine.type = TYPE_MAPPING[rawType] || 'red';
        }

        // Winery (JA)
        if (indices.winery !== undefined && row[indices.winery]) {
            wine.winery.ja = cleanCell(row[indices.winery]);
        }

        // Country
        if (indices.country !== undefined && row[indices.country]) {
            wine.country.ja = cleanCell(row[indices.country]);
        }

        // Region
        if (indices.region !== undefined && row[indices.region]) {
            wine.region.ja = cleanCell(row[indices.region]);
        }

        // Variety
        if (indices.variety !== undefined && row[indices.variety]) {
            let v = cleanCell(row[indices.variety]);
            // Remove percentage (e.g. 100%, 80%)
            v = v.replace(/[0-9０-９]+[%％]/g, '');
            wine.variety.ja = v.trim();
        }

        // Price
        if (indices.price !== undefined && row[indices.price]) {
            wine.price = parseInt(row[indices.price].replace(/[^\d]/g, '')) || 0;
        }

        // Body
        if (indices.body !== undefined && row[indices.body]) {
            // Map Japanese terms to internal keys if needed, or assume clean keys/User verification
            // Common mappings could be added here if CSV uses "フルボディ" etc directly.
            // For now assuming the CSV might contain JA values that we could map in app.js or here.
            // Let's do a simple mapping attempt or just store it. 
            // Ideally we want 'full', 'medium', 'light' etc. 
            // If CSV has Japanese, we can map:
            const rawBody = cleanCell(row[indices.body]);
            const bodyMap = {
                'フルボディ': 'full', 'full': 'full',
                'ミディアム': 'medium', 'medium': 'medium', 'ミディアムボディ': 'medium',
                'ライト': 'light', 'light': 'light',
                '辛口': 'dry', 'ドライ': 'dry',
                '中辛口': 'semidry', 'セミドライ': 'semidry',
                '甘口': 'sweet', 'スウィート': 'sweet'
            };
            wine.body = bodyMap[rawBody] || 'medium';
        }

        // Description (New)
        if (indices.description !== undefined && row[indices.description]) {
            wine.description.ja = cleanCell(row[indices.description]);
        }

        // Tags (Updated logic: separate column)
        if (indices.tags !== undefined && row[indices.tags]) {
            const tagStr = cleanCell(row[indices.tags]);
            if (tagStr) {
                // Split by comma or Japanese comma
                wine.tags = tagStr.split(/[,\u3001]/).map(t => ({ ja: t.trim() })).filter(t => t.ja);
            }
        }

        if (wine.id && wine.name.ja) {
            validWines.push(wine);
        }
    }

    return validWines;
}

function cleanCell(cell) {
    if (!cell) return '';
    // Replace full-width space with half-width space, remove quotes
    return cell.replace(/^"|"$/g, '').replace(/\u3000/g, ' ').trim();
}
