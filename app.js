// ===================================
// La Lupa Wine List - Main Application
// ===================================

// Current language (default: Japanese)
let currentLanguage = 'ja';

// Current view mode
let currentView = 'customer'; // 'customer' or 'admin'

// Admin PIN
const ADMIN_PIN = '1234';

// Wine data
let wines = [];

// Term Dictionary for fallback translations is in translations.js

// DOM Elements
const elements = {
    // Language
    languageSwitcher: document.getElementById('languageSwitcher'),

    // Views
    mainContent: document.getElementById('mainContent'),
    adminView: document.getElementById('adminView'),

    // Filters
    searchInput: document.getElementById('searchInput'),
    typeFilter: document.getElementById('typeFilter'),
    bodyFilter: document.getElementById('bodyFilter'),
    priceFilter: document.getElementById('priceFilter'),
    varietyFilter: document.getElementById('varietyFilter'),

    // Wine Grid
    wineGrid: document.getElementById('wineGrid'),

    // Modals
    wineModal: document.getElementById('wineModal'),
    wineDetail: document.getElementById('wineDetail'),
    closeWineModal: document.getElementById('closeWineModal'),

    pinModal: document.getElementById('pinModal'),
    pinInput: document.getElementById('pinInput'),
    pinError: document.getElementById('pinError'),
    submitPin: document.getElementById('submitPin'),
    cancelPin: document.getElementById('cancelPin'),

    wineFormModal: document.getElementById('wineFormModal'),
    wineForm: document.getElementById('wineForm'),
    wineFormTitle: document.getElementById('wineFormTitle'),
    closeWineForm: document.getElementById('closeWineForm'),
    cancelWineForm: document.getElementById('cancelWineForm'),

    // Admin
    adminTrigger: document.getElementById('adminTrigger'),
    backToCustomer: document.getElementById('backToCustomer'),
    addWineBtn: document.getElementById('addWineBtn'),
    adminWineList: document.getElementById('adminWineList'),
    importCsvBtn: document.getElementById('importCsvBtn'),
    csvInput: document.getElementById('csvInput')
};

// ===================================
// Initialization
// ===================================

function init() {
    loadWines();
    // buildTermDictionary(); Removed - using static dictionary
    setupEventListeners();
    setupTabListeners(); // Setup tab translation logic
    populateVarietyFilter();
    populateCountryFilter();
    populateVintageFilter();
    renderWineGrid();
    updateUI();
    lucide.createIcons();
}

// ===================================
// Data Management
// ===================================

function loadWines() {
    const stored = localStorage.getItem(WINE_STORAGE_KEY);
    if (stored) {
        wines = JSON.parse(stored);
    } else {
        wines = [...initialWines];
        saveWines();
    }
}

function saveWines() {
    localStorage.setItem(WINE_STORAGE_KEY, JSON.stringify(wines));
}

function addWine(wine) {
    const maxId = wines.reduce((max, w) => Math.max(max, w.id), 0);
    wine.id = maxId + 1;
    wines.push(wine);
    saveWines();
}

function updateWine(id, updatedWine) {
    const index = wines.findIndex(w => w.id === id);
    if (index !== -1) {
        wines[index] = { ...wines[index], ...updatedWine };
        saveWines();
    }
}

function deleteWine(id) {
    wines = wines.filter(w => w.id !== id);
    saveWines();
}

// Helper to get localized text from a multi-lang object
// Helper to get localized text from a multi-lang object
function getLocalizedText(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj; // Legacy support

    const lang = currentLanguage;

    // 1. Try direct translation
    if (obj[lang]) return obj[lang];

    // 2. Try Dictionary Lookup (if not JA)
    if (lang !== 'ja' && obj['ja'] && termDictionary[obj['ja']]) {
        if (termDictionary[obj['ja']][lang]) {
            return termDictionary[obj['ja']][lang];
        }
    }

    // 3. Try English
    if (obj['en']) return obj['en'];

    // 4. Fallback to Japanese (Canonical)
    return obj['ja'] || Object.values(obj)[0] || '';
}

// function buildTermDictionary() { ... } Removed to use static dictionary in translations.js

/*
// Fields to learn from
const fields = ['country', 'region', 'variety', 'winery', 'tags'];

wines.forEach(wine => {
    fields.forEach(field => {
        const val = wine[field];
        if (!val) return;

        // Handle arrays (like tags) or single objects
        const items = Array.isArray(val) ? val : [val];

        items.forEach(item => {
            if (item && item.ja) {
                // 1. Add key for the full string
                if (!termDictionary[item.ja]) {
                    termDictionary[item.ja] = {};
                }
                ['en', 'zh-TW', 'ko'].forEach(l => {
                    if (item[l]) termDictionary[item.ja][l] = item[l];
                });

                // 2. Specialized handling for 'variety': Split and map if counts match
                if (field === 'variety') {
                    const separators = /[,\u3001]/; // comma or Japanese comma
                    const jaParts = item.ja.split(separators).map(s => s.trim()).filter(s => s);

                    if (jaParts.length > 1) {
                        ['en', 'zh-TW', 'ko'].forEach(l => {
                            if (item[l]) {
                                // Split target language
                                // For en/ko/zh we mainly expect comma
                                // But zh might use 、 (u3001) too.
                                const lSeparators = l === 'en' ? ',' : /[,\u3001]/;
                                const lParts = item[l].split(lSeparators).map(s => s.trim()).filter(s => s);

                                // If counts match, assume 1-to-1 mapping in order
                                if (jaParts.length === lParts.length) {
                                    jaParts.forEach((jaPart, idx) => {
                                        const lPart = lParts[idx];
                                        if (!termDictionary[jaPart]) {
                                            termDictionary[jaPart] = {};
                                        }
                                        // Only set if not already set (preserve valid single entries)
                                        if (!termDictionary[jaPart][l]) {
                                            termDictionary[jaPart][l] = lPart;
                                        }

                                        // Also add normalized version to dictionary
                                        if (typeof normalizeVarietyTerm === 'function') {
                                            const normJa = normalizeVarietyTerm(jaPart);
                                            if (normJa !== jaPart) {
                                                if (!termDictionary[normJa]) termDictionary[normJa] = {};
                                                if (!termDictionary[normJa][l]) termDictionary[normJa][l] = lPart;
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    } else if (jaParts.length === 1) {
                        // Single variety but might have punctuation to normalize
                        const jaPart = jaParts[0];
                        if (typeof normalizeVarietyTerm === 'function') {
                            const normJa = normalizeVarietyTerm(jaPart);
                            if (normJa !== jaPart) {
                                if (!termDictionary[normJa]) termDictionary[normJa] = {};
                                ['en', 'zh-TW', 'ko'].forEach(l => {
                                    if (item[l]) termDictionary[normJa][l] = item[l];
                                });
                            }
                        }
                    }
                }
            }
        });
    });
});
console.log('Term Dictionary Built:', Object.keys(termDictionary).length, 'terms');
}
*/

// ===================================
// Language Management
// ===================================

function setLanguage(lang) {
    currentLanguage = lang;

    // Update language buttons
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    updateUI();

    // Re-render wine grid
    renderWineGrid();

    // Re-render admin list if visible
    if (currentView === 'admin') {
        renderAdminWineList();
    }

    // Refresh dynamic filters to show translated options
    populateVarietyFilter();
    populateCountryFilter();
    populateVintageFilter();
}

function updateUI() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update select options
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        option.textContent = t(key);
    });

    // Refresh variety filter options
    populateVarietyFilter();
}

// ===================================
// Wine Grid Rendering
// ===================================

function renderWineGrid() {
    const filteredWines = getFilteredWines();

    if (filteredWines.length === 0) {
        elements.wineGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-state-icon">🍷</div>
                <h3>${t('empty.title')}</h3>
                <p>${t('empty.description')}</p>
            </div>
        `;
        return;
    }

    elements.wineGrid.innerHTML = filteredWines.map(wine => createWineCard(wine)).join('');

    // Add click handlers
    document.querySelectorAll('.wine-card').forEach(card => {
        card.addEventListener('click', () => {
            const wineId = parseInt(card.dataset.id);
            showWineDetail(wineId);
        });
    });

    lucide.createIcons();
}

function createWineCard(wine) {
    // Special Name Logic handled by general fallback in getLocalizedText now
    let name = getLocalizedText(wine.name);

    const winery = getLocalizedText(wine.winery);
    const region = getLocalizedText(wine.region);
    const country = getLocalizedText(wine.country);
    const varietyText = getLocalizedText(wine.variety);
    const varietyPills = varietyText ? varietyText.split(/[,\u3001]/).map(v => v.trim()).filter(v => v).map(v =>
        `<span class="variety-pill">${v}</span>`
    ).join('') : '';

    const vintage = wine.vintage || 'NV';

    const tagsHtml = wine.tags?.slice(0, 3).map(tag =>
        `<span class="wine-tag-pill">${getLocalizedText(tag)}</span>`
    ).join('') || '';

    // Wine Type Label (e.g. Red, White...)
    const typeLabel = t(`wine.type.${wine.type}`);

    return `
        <div class="wine-card" data-id="${wine.id}" data-type="${wine.type}">
            <div class="wine-card-sidebar">
                <span class="wine-card-number">${wine.id}</span>
            </div>
            <div class="wine-card-content">
                <div class="wine-header-flex">
                    <div class="wine-header-main">
                        <h3 class="wine-name">${name}</h3>
                        <span class="wine-vintage-badge">${vintage}</span>
                    </div>
                    ${!wine.isVisible ? `<span class="hidden-badge">Hidden</span>` : ''}
                </div>
                
                <p class="wine-winery">${winery}</p>
                
                <div class="wine-details-block">
                    <div class="wine-detail-row">
                        <span class="label">${t('wine.country')}:</span> <span class="value">${country} / ${region}</span>
                    </div>
                    <div class="wine-detail-row">
                        <span class="label">${t('wine.variety')}:</span> <div class="variety-container">${varietyPills}</div>
                    </div>
                </div>

                <div class="wine-tags-container">
                    ${tagsHtml}
                </div>

                <div class="wine-footer-flex">
                    <div class="wine-price-container">
                        <span class="wine-price">¥${wine.price.toLocaleString()}</span>
                    </div>
                    <span class="wine-type-label">${typeLabel}</span>
                </div>
            </div>
        </div>
    `;
}

// Update body options based on wine type
function updateBodyOptions(type) {
    const bodySelect = document.getElementById('wineBody');
    const currentValue = bodySelect.value;

    bodySelect.innerHTML = '';

    let options = [];
    if (type === 'red') {
        options = [
            { value: 'light', label: 'wine.body.light' },
            { value: 'medium', label: 'wine.body.medium' },
            { value: 'full', label: 'wine.body.full' }
        ];
    } else {
        // white, sparkling, rose, orange, rose_sparkling
        options = [
            { value: 'sweet', label: 'wine.body.sweet' },
            { value: 'semidry', label: 'wine.body.semidry' },
            { value: 'dry', label: 'wine.body.dry' }
        ];
    }

    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = t(opt.label);
        bodySelect.appendChild(option);
    });

    // Try to restore value if valid for new type, else default to middle option
    const validValues = options.map(o => o.value);
    if (validValues.includes(currentValue)) {
        bodySelect.value = currentValue;
    } else {
        bodySelect.value = validValues[Math.floor(validValues.length / 2)] || validValues[0];
    }
}

// Helper to normalize variety names (remove %, spaces, punctuations)
function normalizeVarietyTerm(term) {
    if (!term) return '';
    // 1. Remove percentages (e.g. 70%, 100%, ７０％)
    // 2. Remove common punctuation (interpuncts mainly)
    // 3. Trim spaces
    return term
        .replace(/[0-9７-９０-９]+[%％]/g, '') // remove 70%, ７０％ etc
        .replace(/[・\u3000\s]/g, '')     // remove interpuncts and spaces
        .toLowerCase();
}

function getFilteredWines() {
    const search = elements.searchInput.value.toLowerCase();
    const type = elements.typeFilter.value;
    const body = elements.bodyFilter.value;
    const priceRange = elements.priceFilter.value;
    const variety = elements.varietyFilter.value;
    const country = document.getElementById('countryFilter').value;
    const vintage = document.getElementById('vintageFilter').value;

    return wines.filter(wine => {
        // Visibility check (Customer view only)
        if (currentView === 'customer' && !wine.isVisible) {
            return false;
        }

        // Search filter
        if (search) {
            const name = getLocalizedText(wine.name).toLowerCase();
            const winery = getLocalizedText(wine.winery).toLowerCase();
            const region = getLocalizedText(wine.region).toLowerCase();
            const countryText = getLocalizedText(wine.country).toLowerCase();
            const varietyText = getLocalizedText(wine.variety).toLowerCase();
            const vintageText = (wine.vintage || '').toLowerCase();

            if (!name.includes(search) && !winery.includes(search) &&
                !region.includes(search) && !countryText.includes(search) &&
                !varietyText.includes(search) && !vintageText.includes(search)) {
                return false;
            }
        }

        // Type filter
        if (type) {
            if (type === 'sparkling') {
                // Exclude rose_sparkling when just 'sparkling' is selected
                if (wine.type !== 'sparkling') return false;
            } else if (type === 'rose') {
                // Exclude rose_sparkling when just 'rose' is selected
                if (wine.type !== 'rose') return false;
            } else if (wine.type !== type) {
                // Standard check for other types (including 'rose_sparkling' matching itself)
                return false;
            }
        }

        // Body filter
        if (body && wine.body !== body) {
            return false;
        }

        // Price filter
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
            if (wine.price < (min || 0) || wine.price > (max || Infinity)) {
                return false;
            }
        }

        // Variety filter
        if (variety) {
            // Normalize wine's variety for comparison
            // Check if any of the wine's split varieties matches the selected normalized variety
            const wineVarietyRaw = wine.variety?.ja || '';
            const wineVarieties = wineVarietyRaw.split(/[,\u3001]/).map(v => normalizeVarietyTerm(v));

            // The 'variety' from filter is already normalized (e.g. "カベルネソーヴィニヨン")
            // We want to check if the wine has this variety
            // But 'variety' from filter might be just "カベルネソーヴィニヨン" derived from "カベルネ・ソーヴィニヨン"
            // So we compare normalized forms.
            if (!wineVarieties.includes(normalizeVarietyTerm(variety))) {
                return false;
            }
        }

        // Country filter
        if (country) {
            const wineCountry = wine.country?.ja || '';
            if (wineCountry !== country) {
                return false;
            }
        }

        // Vintage filter
        if (vintage && wine.vintage !== vintage) {
            return false;
        }

        return true;
    });
}

function populateVarietyFilter() {
    const currentVariety = elements.varietyFilter.value;

    // Get all varieties (canonical JA) from wines
    const allVarieties = new Set();
    // To keep track of the "display" version
    const normToDisplay = {};

    wines.forEach(wine => {
        // Use JA value for uniqueness
        const varietyText = wine.variety?.ja;
        if (!varietyText) return;

        // Split by common separators (comma, Japanese comma)
        const separators = /[,\u3001]/; // , or 、
        const varieties = varietyText.split(separators).map(v => v.trim());

        varieties.forEach(v => {
            if (v) {
                const normalized = normalizeVarietyTerm(v);
                if (!normToDisplay[normalized]) {
                    // Use this occurrence (without percentages) as the representative display text
                    const display = v.replace(/[0-9７-９０-９]+[%％]/g, '').trim();
                    normToDisplay[normalized] = display;
                }
                allVarieties.add(normalized);
            }
        });
    });

    // Create options with translation FIRST
    const options = Array.from(allVarieties).map(normV => {
        const displayKey = normToDisplay[normV];
        let translated = displayKey;

        // Try exact match in dictionary first
        if (termDictionary[displayKey]) {
            if (termDictionary[displayKey][currentLanguage]) {
                translated = termDictionary[displayKey][currentLanguage];
            } else if (currentLanguage !== 'ja' && termDictionary[displayKey]['en']) {
                translated = termDictionary[displayKey]['en'];
            }
        }

        // If still not translated, try normalized match
        if (translated === displayKey && termDictionary[normV]) {
            if (termDictionary[normV][currentLanguage]) {
                translated = termDictionary[normV][currentLanguage];
            } else if (currentLanguage !== 'ja' && termDictionary[normV]['en']) {
                translated = termDictionary[normV]['en'];
            }
        }

        return { value: displayKey, text: translated, norm: normV };
    });

    // Sort options
    // If JA: Sort by the original Japanese key (roughly 50-on jun) or by text (also 50-on jun)
    // If non-JA: Sort alphabetically by translated text
    options.sort((a, b) => {
        if (currentLanguage === 'ja') {
            return a.norm.localeCompare(b.norm, 'ja');
        } else {
            return a.text.localeCompare(b.text, 'en');
        }
    });

    // Clear existing options (except first "All")
    while (elements.varietyFilter.options.length > 1) {
        elements.varietyFilter.remove(1);
    }

    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.text;
        elements.varietyFilter.appendChild(option);
    });

    // Restore selection if possible
    if (currentVariety) {
        const currentNorm = normalizeVarietyTerm(currentVariety);
        for (let i = 0; i < elements.varietyFilter.options.length; i++) {
            const optVal = elements.varietyFilter.options[i].value;
            if (normalizeVarietyTerm(optVal) === currentNorm) {
                elements.varietyFilter.selectedIndex = i;
                break;
            }
        }
    }
}

function populateCountryFilter() {
    const countrySelect = document.getElementById('countryFilter');
    const currentVal = countrySelect.value;

    // Collect unique JA countries
    const countries = new Set();
    wines.forEach(w => {
        if ((w.isVisible || currentView === 'admin') && w.country?.ja) {
            countries.add(w.country.ja);
        }
    });

    // Create options with translation FIRST
    const options = Array.from(countries).map(cJa => {
        let label = cJa;
        if (termDictionary[cJa] && termDictionary[cJa][currentLanguage]) {
            label = termDictionary[cJa][currentLanguage];
        }
        return { value: cJa, label: label };
    });

    // Sort options
    options.sort((a, b) => {
        if (currentLanguage === 'ja') {
            return a.value.localeCompare(b.value, 'ja');
        } else {
            return a.label.localeCompare(b.label, 'en');
        }
    });

    while (countrySelect.options.length > 1) countrySelect.remove(1);

    options.forEach(optData => {
        const opt = document.createElement('option');
        opt.value = optData.value; // Canonical JA value
        opt.textContent = optData.label;
        countrySelect.appendChild(opt);
    });

    if (currentVal && sorted.includes(currentVal)) countrySelect.value = currentVal;
}

function populateVintageFilter() {
    const vintageSelect = document.getElementById('vintageFilter');
    const currentVal = vintageSelect.value;
    const vintages = new Set(wines.filter(w => w.isVisible || currentView === 'admin').map(w => w.vintage));
    const sorted = Array.from(vintages).sort().reverse(); // Newest first

    while (vintageSelect.options.length > 1) vintageSelect.remove(1);

    sorted.forEach(v => {
        if (!v) return;
        const opt = document.createElement('option');
        opt.value = v;
        opt.textContent = v;
        vintageSelect.appendChild(opt);
    });

    if (currentVal && sorted.includes(currentVal)) vintageSelect.value = currentVal;
}

// ===================================
// Wine Detail Modal
// ===================================

function showWineDetail(id) {
    const wine = wines.find(w => w.id === id);
    if (!wine) return;

    // Special Name Logic handled by fallback
    let name = getLocalizedText(wine.name);

    const winery = getLocalizedText(wine.winery);
    const country = getLocalizedText(wine.country);
    const region = getLocalizedText(wine.region);
    const varieties = getLocalizedText(wine.variety)?.split(/[,\u3001]/).map(v => v.trim()).filter(v => v) || [];
    const varietyPills = varieties.map(v => `<span class="variety-pill detail-pill">${v}</span>`).join('');

    const tagsHtml = wine.tags?.map(tag =>
        `<span class="wine-detail-tag">${getLocalizedText(tag)}</span>`
    ).join('') || '';

    elements.wineDetail.innerHTML = `
        <div class="wine-detail-watermark">${wine.id}</div>
        <div class="wine-detail-content-wrapper">
            <div class="wine-detail-header centered">
                <div class="wine-detail-title">
                    <h2>${name}</h2>
                    <p class="winery">by ${winery}</p>
                </div>
                <div class="wine-detail-price-badge">¥${wine.price.toLocaleString()}</div>
            </div>

            ${wine.description?.ja ? `
            <div class="wine-description-container">
                <p class="wine-description">${getLocalizedText(wine.description)}</p>
            </div>` : ''}

            <div class="wine-detail-divider"></div>

            <div class="wine-detail-specs">
                <div class="spec-item">
                    <span class="spec-label">${t('wine.type')}</span>
                    <span class="spec-value">${t(`wine.type.${wine.type}`)}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">${t('wine.body')}</span>
                    <span class="spec-value">${t(`wine.body.${wine.body}`)}</span>
                </div>
                 <div class="spec-item">
                    <span class="spec-label">${t('wine.country')}</span>
                    <span class="spec-value">${country}${region ? `<br><span style="font-size: 0.9em; opacity: 0.8;">${region}</span>` : ''}</span>
                </div>
                <div class="spec-item full-width">
                    <span class="spec-label">${t('wine.variety')}</span>
                     <div class="variety-container justify-center">${varietyPills}</div>
                </div>
            </div>

            ${tagsHtml ? `
            <div class="wine-detail-tags-section">
                <div class="wine-detail-tags justify-center">${tagsHtml}</div>
            </div>
            ` : ''}
        </div>
    `;

    elements.wineModal.classList.remove('hidden');
}

function closeWineDetail() {
    elements.wineModal.classList.add('hidden');
}

// ===================================
// Admin View
// ===================================

function showPinModal() {
    elements.pinInput.value = '';
    elements.pinError.classList.add('hidden');
    elements.pinModal.classList.remove('hidden');
    elements.pinInput.focus();
}

function closePinModal() {
    elements.pinModal.classList.add('hidden');
}

function validatePin() {
    if (elements.pinInput.value === ADMIN_PIN) {
        closePinModal();
        switchToAdmin();
    } else {
        elements.pinError.classList.remove('hidden');
        elements.pinInput.value = '';
        elements.pinInput.focus();
    }
}

function switchToAdmin() {
    currentView = 'admin';
    elements.mainContent.classList.add('hidden');
    elements.adminView.classList.remove('hidden');
    renderAdminWineList();
}

function switchToCustomer() {
    currentView = 'customer';
    elements.adminView.classList.add('hidden');
    elements.mainContent.classList.remove('hidden');
    renderWineGrid();
}

function renderAdminWineList() {
    elements.adminWineList.innerHTML = wines
        .sort((a, b) => a.id - b.id)
        .map(wine => createAdminWineItem(wine))
        .join('');

    // Event handlers are now managed by delegation in setupEventListeners
    lucide.createIcons();
}

function createAdminWineItem(wine) {
    const name = getLocalizedText(wine.name);
    const country = getLocalizedText(wine.country);

    return `
        <div class="admin-wine-item ${!wine.isVisible ? 'item-hidden' : ''}" data-id="${wine.id}">
            <div class="admin-wine-number ${wine.type}">${wine.id}</div>
            <div class="admin-wine-info">
                <div class="admin-wine-name-row">
                    <span class="admin-wine-name">${name}</span>
                    <label class="toggle-switch">
                        <input type="checkbox" class="visibility-toggle" ${wine.isVisible ? 'checked' : ''}>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="admin-wine-meta">${wine.vintage || 'NV'} • ${country} • ¥${wine.price.toLocaleString()}</div>
            </div>
            <div class="admin-wine-actions">
                <button class="btn btn-icon btn-edit" title="${t('common.edit')}">
                    <i data-lucide="pencil"></i>
                </button>
                <button class="btn btn-icon btn-delete" title="${t('common.delete')}">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        </div>
        `;
}

function toggleWineVisibility(id, isVisible) {
    const wine = wines.find(w => w.id === id);
    if (wine) {
        wine.isVisible = isVisible;
        saveWines();
        renderAdminWineList();
    }
}

function confirmDeleteWine(id) {
    const wine = wines.find(w => w.id === id);
    if (confirm(t('admin.deleteConfirm') + `\n\n${getLocalizedText(wine.name)} `)) {
        deleteWine(id);
        renderAdminWineList();
    }
}

// ===================================
// Wine Form
// ===================================

let editingWineId = null;

function openWineForm(id = null) {
    editingWineId = id;

    if (id) {
        // Edit mode
        elements.wineFormTitle.textContent = t('admin.editWine');
        const wine = wines.find(w => w.id === id);
        populateWineForm(wine);
    } else {
        // Add mode
        elements.wineFormTitle.textContent = t('admin.addWine');
        elements.wineForm.reset();

        // Set default number
        const maxId = wines.reduce((max, w) => Math.max(max, w.id), 0);
        document.getElementById('wineNumber').value = maxId + 1;
    }

    // Reset to first language tab
    document.querySelectorAll('.lang-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === 0);
    });
    document.querySelectorAll('.lang-fields').forEach((field, i) => {
        field.classList.toggle('active', i === 0);
    });

    elements.wineFormModal.classList.remove('hidden');

    // Initialize body options based on current type selection
    updateBodyOptions(document.getElementById('wineType').value);
}

function closeWineForm() {
    elements.wineFormModal.classList.add('hidden');
    editingWineId = null;
}

function populateWineForm(wine) {
    document.getElementById('wineNumber').value = wine.id;
    document.getElementById('winePrice').value = wine.price;
    document.getElementById('wineType').value = wine.type;
    // Body is set later after options update
    // document.getElementById('wineIsVisible').checked = wine.isVisible !== false; // Moved to list toggle
    document.getElementById('wineVintage').value = wine.vintage || '';

    // Initialize localized fields using Japanese values
    const tagsText = wine.tags ? wine.tags.map(t => t.ja).join(', ') : '';
    document.getElementById('wineTags').value = tagsText;

    // Populate localized fields
    // Basic Info Section now takes Japanese values for Name, Winery, Country, Variety
    // Basic Info Section now takes Japanese values for Name, Winery, Country, Variety, Description
    document.getElementById('wineName').value = wine.name?.ja || '';
    document.getElementById('wineWinery').value = wine.winery?.ja || '';
    document.getElementById('wineCountry').value = wine.country?.ja || '';
    document.getElementById('wineRegion').value = wine.region?.ja || '';
    document.getElementById('wineVariety').value = wine.variety?.ja || '';
    document.getElementById('wineDescription').value = wine.description?.ja || '';

    // Multi-language fields (non-JA)
    // Only English is kept based on request
    const langs = ['en'];
    const fields = ['Name', 'Winery', 'Country', 'Region', 'Variety', 'Description']; // Added Description

    langs.forEach(lang => {
        fields.forEach(field => {
            const input = document.getElementById(`wine${field}_${lang}`);
            if (input) {
                const propName = field.toLowerCase();
                input.value = wine[propName]?.[lang] || '';
            }
        });

        // Tags Special Handling for EN
        const inputTags = document.getElementById(`wineTags_${lang}`);
        if (inputTags && wine.tags && wine.tags.length > 0) {
            // Map tags for this lang
            const tagList = wine.tags.map(t => t[lang] || '').filter(t => t).join(', ');
            inputTags.value = tagList;
        }
    });
}

function saveWineForm(e) {
    e.preventDefault();

    const wine = {
        id: parseInt(document.getElementById('wineNumber').value),
        price: parseInt(document.getElementById('winePrice').value),
        type: document.getElementById('wineType').value,
        body: document.getElementById('wineBody').value,
        vintage: document.getElementById('wineVintage').value,
        isVisible: true, // Default to true if editing via form, separate toggle handles visibility
        name: { ja: document.getElementById('wineName').value },
        winery: { ja: document.getElementById('wineWinery').value },
        country: { ja: document.getElementById('wineCountry').value },
        region: { ja: document.getElementById('wineRegion').value },
        variety: { ja: document.getElementById('wineVariety').value },
        description: { ja: document.getElementById('wineDescription').value },
        tags: []
    };

    // Preserve isVisible from existing if editing
    if (editingWineId) {
        const existing = wines.find(w => w.id === editingWineId);
        if (existing) wine.isVisible = existing.isVisible;
    }

    // Process Tags (JA Master)
    const tagsInput = document.getElementById('wineTags').value;
    let tagsObj = [];
    if (tagsInput) {
        tagsObj = tagsInput.split(/[,\u3001]/).map(t => ({ ja: t.trim() })).filter(t => t.ja);
    }
    wine.tags = tagsObj;

    // Process Tags (EN - Merge)
    const tagsInputEn = document.getElementById('wineTags_en');
    if (tagsInputEn && tagsInputEn.value) {
        const enTags = tagsInputEn.value.split(',').map(t => t.trim()).filter(t => t);
        // Map EN tags to existing JA tags by index order
        // If more EN tags than JA tags, they are ignored or we need to add new ones?
        // Assuming user keeps 1-to-1 mapping.
        wine.tags.forEach((tag, index) => {
            if (enTags[index]) {
                tag.en = enTags[index];
            }
        });
    }

    // Collect localized fields (English only)
    const langs = ['en'];
    const fields = ['Name', 'Winery', 'Country', 'Region', 'Variety', 'Description']; // Added Description

    langs.forEach(lang => {
        fields.forEach(field => {
            const input = document.getElementById(`wine${field}_${lang}`);
            if (input) {
                const propName = field.toLowerCase();
                if (!wine[propName]) wine[propName] = {};
                wine[propName][lang] = input.value;
            }
        });
    });

    if (editingWineId) {
        updateWine(editingWineId, wine);
    } else {
        addWine(wine);
    }

    closeWineForm();
    closeWineForm();
    closeWineForm();
    renderAdminWineList();

    // Rebuild dictionary with new data
    buildTermDictionary();

    // Refresh filters as new data might have new countries/varieties
    populateVarietyFilter();
    populateCountryFilter();
    populateVintageFilter();
}

function confirmDeleteWine(id) {
    if (confirm('本当にこのワインを削除しますか？')) {
        deleteWine(id);
    }
}

function deleteWine(id) {
    wines = wines.filter(w => w.id !== id);
    saveWines();
    renderAdminWineList();

    // Rebuild dictionary with new data
    buildTermDictionary();

    // Refresh filters
    populateVarietyFilter();
    populateCountryFilter();
    populateVintageFilter();
}

// ===================================
// Event Listeners
// ===================================

function setupTabListeners() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', async () => {
            // 1. UI Tab Switching
            const target = tab.dataset.tab;

            // Remove active from all tabs/contents
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // Activate current
            tab.classList.add('active');
            document.getElementById(`tab-${target}`).classList.add('active');

            // 2. Auto-Translation if fields are empty
            // Fields to translate: Name, Winery, Country, Region, Variety, Description, Tags
            const fields = ['Name', 'Winery', 'Country', 'Region', 'Variety', 'Description', 'Tags'];
            const sourceLang = 'ja';
            const targetLang = target; // 'en', 'zh-TW', 'ko'

            // If user clicked Japanese or non-target tab (though tabs are only en/zh/ko), skip
            if (!['en', 'zh-TW', 'ko'].includes(targetLang)) return;

            // Collect Source Data (JA)
            const sourceData = {};
            let hasSource = false;
            fields.forEach(field => {
                const input = document.getElementById(`wine${field}`); // Basic info inputs (implicitly JA for master)
                // Note: Basic info inputs are: wineName, wineWinery, etc. 
                // The prompt/HTML shows basic info has id="wineName", "wineWinery", etc.
                // The multi-lang tabs have id="wineName_en", etc.
                if (input && input.value.trim()) {
                    sourceData[field] = input.value.trim();
                    hasSource = true;
                }
            });

            if (!hasSource) return; // Nothing to translate

            // Show loading on tab? Or just do it silently/quickly?
            // Let's do it and maybe show a small indicator or just let it populate.
            // Since we have async/await, it might delay slightly.

            for (const field of fields) {
                if (sourceData[field]) {
                    const targetExampleId = `wine${field}_${targetLang}`;
                    const targetInput = document.getElementById(targetExampleId);

                    // Only fill if empty
                    if (targetInput && !targetInput.value) {
                        // Use fallback dictionary + API
                        const translated = await translateWithDictionaryFallback(sourceData[field], targetLang);
                        if (targetInput.value === '') { // Check again in case user typed fast
                            targetInput.value = translated;
                        }
                    }
                }
            }
        });
    });
}

function setupEventListeners() {
    // Language switcher
    // Language Switcher (Globe + Dropdown)
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');

    if (langToggle && langDropdown) {
        // Toggle Dropdown
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
            langToggle.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.add('hidden');
                langToggle.classList.remove('active');
            }
        });

        // Language Selection
        langDropdown.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-option');
            if (btn) {
                setLanguage(btn.dataset.lang);
                langDropdown.classList.add('hidden');
                langToggle.classList.remove('active');
            }
        });
    }

    // Search input (Debounced)
    elements.searchInput.addEventListener('input', debounce(() => {
        renderWineGrid();
    }, 300));

    elements.typeFilter.addEventListener('change', renderWineGrid);
    elements.bodyFilter.addEventListener('change', renderWineGrid);
    elements.priceFilter.addEventListener('change', renderWineGrid);
    elements.varietyFilter.addEventListener('change', renderWineGrid);
    document.getElementById('countryFilter').addEventListener('change', renderWineGrid);
    document.getElementById('vintageFilter').addEventListener('change', renderWineGrid);

    // Wine detail modal
    elements.closeWineModal.addEventListener('click', closeWineDetail);
    elements.wineModal.querySelector('.modal-backdrop').addEventListener('click', closeWineDetail);

    // PIN modal
    elements.adminTrigger.addEventListener('click', showPinModal);
    elements.cancelPin.addEventListener('click', closePinModal);
    elements.submitPin.addEventListener('click', validatePin);
    elements.pinInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') validatePin();
    });
    elements.pinModal.querySelector('.modal-backdrop').addEventListener('click', closePinModal);

    // Admin view
    elements.backToCustomer.addEventListener('click', switchToCustomer);
    elements.addWineBtn.addEventListener('click', () => openWineForm());

    // CSV Import
    if (elements.importCsvBtn && elements.csvInput) {
        elements.importCsvBtn.addEventListener('click', () => elements.csvInput.click());
        elements.csvInput.addEventListener('change', handleCSVImport);
    }

    // Form Type Change -> Update Body Options
    document.getElementById('wineType').addEventListener('change', (e) => {
        updateBodyOptions(e.target.value);
    });

    // Admin list event delegation (Fix for edit/delete buttons)
    elements.adminWineList.addEventListener('click', (e) => {
        const editBtn = e.target.closest('.btn-edit');
        const deleteBtn = e.target.closest('.btn-delete');
        const toggleSwitch = e.target.closest('.visibility-toggle');

        if (editBtn) {
            e.stopPropagation();
            const id = parseInt(editBtn.closest('.admin-wine-item').dataset.id);
            openWineForm(id);
        } else if (deleteBtn) {
            e.stopPropagation();
            const id = parseInt(deleteBtn.closest('.admin-wine-item').dataset.id);
            confirmDeleteWine(id);
        } else if (toggleSwitch) {
            e.stopPropagation();
            const id = parseInt(toggleSwitch.closest('.admin-wine-item').dataset.id);
            toggleWineVisibility(id, toggleSwitch.checked);
        }
    });

    // Wine form
    elements.closeWineForm.addEventListener('click', closeWineForm);
    elements.cancelWineForm.addEventListener('click', closeWineForm);
    elements.wineFormModal.querySelector('.modal-backdrop').addEventListener('click', closeWineForm);
    elements.wineForm.addEventListener('submit', saveWineForm);

    // Auto translate
    const autoTranslateBtn = document.getElementById('autoTranslateBtn');
    if (autoTranslateBtn) {
        autoTranslateBtn.addEventListener('click', handleAutoTranslate);
    }

    // Language tabs in form
    document.querySelectorAll('.lang-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = tab.dataset.formLang;

            document.querySelectorAll('.lang-tab').forEach(t =>
                t.classList.toggle('active', t === tab)
            );
            document.querySelectorAll('.lang-fields').forEach(f =>
                f.classList.toggle('active', f.dataset.langFields === lang)
            );
        });
    });
}

// ===================================
// Translation Helper
// ===================================

async function translateText(text, targetLang) {
    if (!text) return '';
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=ja|${targetLang}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.responseData) {
            return data.responseData.translatedText;
        }
        return text;
    } catch (e) {
        console.error('Translation failed', e);
        return text;
    }
}

async function translateWithDictionaryFallback(text, targetLang) {
    if (!text) return '';

    // Check dictionary first
    if (termDictionary[text] && termDictionary[text][targetLang]) {
        return termDictionary[text][targetLang];
    }

    // Call API
    // Add small delay to be nice to API
    await new Promise(r => setTimeout(r, 200));
    return await translateText(text, targetLang);
}

// ===================================
// Auto Translation (Form)
// ===================================

async function handleAutoTranslate() {
    const btn = document.getElementById('autoTranslateBtn');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="animate-spin" style="width:16px;height:16px;"></i> 翻訳中...`;
    lucide.createIcons();

    try {
        const fields = ['Name', 'Winery', 'Country', 'Region', 'Variety'];
        const targets = [
            { code: 'en', name: 'English' },
            { code: 'zh-TW', name: 'Traditional Chinese' },
            { code: 'ko', name: 'Korean' }
        ];

        // Collect Japanese values
        const sourceData = {};
        fields.forEach(field => {
            const input = document.getElementById(`wine${field}_ja`);
            if (input && input.value.trim()) {
                sourceData[field] = input.value.trim();
            }
        });

        if (Object.keys(sourceData).length === 0) {
            alert('翻訳元の日本語フィールドが空です。日本語タブで情報を入力してください。');
            throw new Error('No source data');
        }

        // Process sequentially
        for (const target of targets) {
            for (const field of fields) {
                if (sourceData[field]) {
                    const targetInput = document.getElementById(`wine${field}_${target.code}`);
                    // Only fill if empty
                    if (targetInput && !targetInput.value) {
                        const translated = await translateText(sourceData[field], target.code);
                        targetInput.value = translated;
                    }
                }
            }
        }

        alert('自動入力が完了しました。内容を確認・修正してください。');

    } catch (err) {
        if (err.message !== 'No source data') {
            console.error(err);
            alert('翻訳中にエラーが発生しました。');
        }
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
        lucide.createIcons();
    }
}

// ===================================
// Utilities
// ===================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// CSV Import Logic
// ===================================

function handleCSVImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (confirm('CSVをインポートしますか？既存の同一番号データは上書きされます。')) {
        const reader = new FileReader();
        reader.onload = async function (event) {
            const csvData = event.target.result;
            const newWines = parseCSV(csvData);

            if (newWines.length === 0) {
                alert('有効なワインデータが見つかりませんでした。ヘッダーを確認してください。');
                return;
            }

            // Show loading
            const importBtn = elements.importCsvBtn;
            if (importBtn) {
                importBtn.innerHTML = `<i data-lucide="loader-2" class="animate-spin"></i> インポート中...`;
                lucide.createIcons();
            }

            // Translation loop removed for performance

            if (importBtn) {
                importBtn.innerHTML = `CSVインポート`;
            }

            let addedCount = 0;
            let updatedCount = 0;

            newWines.forEach(newWine => {
                const existingIndex = wines.findIndex(w => w.id === newWine.id);
                if (existingIndex !== -1) {
                    // Update existing, preserving fields not in CSV
                    const existing = wines[existingIndex];
                    wines[existingIndex] = {
                        ...existing,
                        ...newWine,
                        name: { ...existing.name, ...newWine.name },
                        country: { ...existing.country, ...newWine.country },
                        region: { ...existing.region, ...newWine.region },
                        variety: { ...existing.variety, ...newWine.variety },
                        tags: newWine.tags && newWine.tags.length ? newWine.tags : existing.tags
                    };
                    updatedCount++;
                } else {
                    wines.push(newWine);
                    addedCount++;
                }
            });

            saveWines();
            saveWines();
            renderAdminWineList();

            // Rebuild dictionary with new data
            buildTermDictionary();

            // Refresh filters with new data
            populateVarietyFilter();
            populateCountryFilter();
            populateVintageFilter();

            alert(`インポート完了: 追加 ${addedCount}件, 更新 ${updatedCount}件`);

            // Allow re-importing same file
            elements.csvInput.value = '';
        };
        reader.readAsText(file, 'Shift-JIS');
    } else {
        elements.csvInput.value = '';
    }
}

// ===================================
// Start Application
// ===================================

document.addEventListener('DOMContentLoaded', init);
