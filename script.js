// Comprehensive Tetracycline Knowledge Database
const tetracyclineDB = {
    "introduction": {
        title: "Introduction to Tetracycline",
        content: `
            <h3>Historical Background</h3>
            <p>Tetracycline antibiotics were revolutionary drugs discovered in the late 1940s. Initially hailed as "wonder drugs," they were later found to cause permanent tooth discoloration when administered during tooth development.</p>
            
            <h3>Key Timeline:</h3>
            <ul>
                <li><strong>1948:</strong> Chlortetracycline discovered from Streptomyces aureofaciens</li>
                <li><strong>1950:</strong> Oxytetracycline isolated from Streptomyces rimosus</li>
                <li><strong>1956:</strong> First reports of tooth discoloration by Schwachman</li>
                <li><strong>1962:</strong> Definitive link established by Wallman and Hilton</li>
                <li><strong>1970s:</strong> FDA black box warning implemented</li>
            </ul>
            
            <h3>Impact:</h3>
            <p>This discovery fundamentally changed pediatric prescribing practices worldwide, leading to the use of alternative antibiotics like amoxicillin.</p>
        `
    },

    "mechanism": {
        title: "Mechanism of Staining",
        content: `
            <h3>Chelation Process</h3>
            <p>Tetracycline molecules contain a β-diketone system that forms stable complexes with calcium ions, creating <strong>calcium-orthotetracycline</strong>.</p>
            
            <h3>Three-Step Process:</h3>
            <ol>
                <li><strong>Chelation:</strong> Binding with calcium during tooth mineralization</li>
                <li><strong>Incorporation:</strong> Complex integrates into dentin and enamel matrix</li>
                <li><strong>Photo-oxidation:</strong> Light exposure transforms yellow complex to brown/gray pigments</li>
            </ol>
            
            <h3>Why Dentin is Primary Target:</h3>
            <ul>
                <li>Higher organic content (20% vs enamel's 4%)</li>
                <li>Continuous deposition throughout life</li>
                <li>Predentin zone acts as direct incorporation site</li>
            </ul>
        `
    },

    "staining": {
        title: "Types and Patterns of Staining",
        content: `
            <h3>Color Variations by Type:</h3>
            <ul>
                <li><strong>Tetracycline HCl:</strong> Yellow → Brown-Gray</li>
                <li><strong>Chlortetracycline:</strong> Brown-Gray</li>
                <li><strong>Oxytetracycline:</strong> Yellow</li>
                <li><strong>Minocycline:</strong> Green-gray/Blue-black (in adults)</li>
                <li><strong>Demeclocycline:</strong> Yellow</li>
            </ul>
            
            <h3>Patterns:</h3>
            <ul>
                <li><strong>Uniform:</strong> Continuous administration</li>
                <li><strong>Banding:</strong> Horizontal lines showing administration periods</li>
                <li><strong>Fluorescence:</strong> Yellow-green under UV light (diagnostic)</li>
            </ul>
            
            <h3>Severity Classification:</h3>
            <ul>
                <li><strong>Mild:</strong> Light yellow/gray/brown, uniform</li>
                <li><strong>Moderate:</strong> Darker colors</li>
                <li><strong>Severe:</strong> Very dark with banding/hypoplasia</li>
            </ul>
        `
    },

    "critical period": {
        title: "Critical Vulnerability Periods",
        content: `
            <h3>High-Risk Windows:</h3>
            <ul>
                <li><strong>Pregnancy (2nd/3rd trimester):</strong> Fetal teeth mineralization</li>
                <li><strong>Breastfeeding:</strong> Drug passes into breast milk</li>
                <li><strong>Childhood (Birth to 8 years):</strong> Permanent teeth development</li>
            </ul>
            
            <h3>Tooth Development Timeline:</h3>
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 5px; margin: 1rem 0;">
                <p><strong>Central Incisors:</strong> Calcification 3-4 months → Crown complete 4-5 years</p>
                <p><strong>First Molars:</strong> Calcification at birth → Crown complete 2.5-3 years</p>
                <p><strong>Second Molars:</strong> Calcification 2.5-3 years → Crown complete 7-8 years</p>
            </div>
            
            <p style="background: #e74c3c; color: white; padding: 1rem; border-radius: 5px;">
                <strong>ABSOLUTE CONTRAINDICATION:</strong> Tetracyclines must NOT be used in pregnancy or children under 8 years.
            </p>
        `
    },

    "treatment": {
        title: "Treatment Options and Management",
        content: `
            <h3>Treatment Decision Pathway:</h3>
            <ul>
                <li><strong>Mild Cases:</strong> Bleaching → Microabrasion → Composite Bonding</li>
                <li><strong>Moderate Cases:</strong> Composite Bonding or Porcelain Veneers</li>
                <li><strong>Severe Cases:</strong> Porcelain Veneers or Full Coverage Crowns</li>
            </ul>
            
            <h3>Treatment Details:</h3>
            <ul>
                <li><strong>Bleaching:</strong> Limited effect, may require 12+ months</li>
                <li><strong>Microabrasion:</strong> Removes superficial enamel (100-200μm)</li>
                <li><strong>Composite Bonding:</strong> Minimally invasive, 5-8 year lifespan</li>
                <li><strong>Porcelain Veneers:</strong> Excellent aesthetics, 10-15+ years</li>
                <li><strong>Full Crowns:</strong> For severe structural damage</li>
            </ul>
            
            <h3>Success Rates:</h3>
            <p>Bleaching works best for yellow stains, less effective for gray/brown banding. Veneers provide most predictable aesthetic results.</p>
        `
    },

    "prevention": {
        title: "Prevention Strategies",
        content: `
            <h3>Primary Prevention:</h3>
            <ul>
                <li><strong>Strict Contraindication:</strong> No tetracyclines in pregnancy/childhood</li>
                <li><strong>Alternative Antibiotics:</strong> Amoxicillin, Erythromycin, Azithromycin</li>
                <li><strong>Healthcare Education:</strong> Physicians, dentists, pharmacists</li>
            </ul>
            
            <h3>Professional Guidelines:</h3>
            <ul>
                <li>Verify pregnancy status before prescribing</li>
                <li>Pharmacist verification as safety checkpoint</li>
                <li>Comprehensive medical history taking</li>
                <li>Patient education about risks</li>
            </ul>
            
            <h3>Global Health:</h3>
            <p>Education programs in developing nations where tetracycline may still be used inappropriately.</p>
        `
    },

    "minocycline": {
        title: "Minocycline - Special Case",
        content: `
            <h3>Unique Feature:</h3>
            <p>Minocycline can stain <strong>adult teeth</strong>, unlike other tetracyclines that only affect developing teeth.</p>
            
            <h3>Mechanisms:</h3>
            <ul>
                <li>Iron chelation in dentin</li>
                <li>Enzymatic conversion to black pigment</li>
                <li>High lipid solubility penetrates mature teeth</li>
            </ul>
            
            <h3>Clinical Features:</h3>
            <ul>
                <li>Green-gray or blue-black color</li>
                <li>Often affects anterior teeth</li>
                <li>May be more amenable to treatment than childhood staining</li>
            </ul>
        `
    },

    "diagnosis": {
        title: "Diagnosis and Differential",
        content: `
            <h3>Diagnostic Features:</h3>
            <ul>
                <li><strong>Fluorescence:</strong> Yellow-green under Wood's lamp</li>
                <li><strong>Banding:</strong> Horizontal lines pattern</li>
                <li><strong>History:</strong> Tetracycline exposure during development</li>
            </ul>
            
            <h3>Differential Diagnosis:</h3>
            <ul>
                <li><strong>Fluorosis:</strong> White spots/brown pits, no fluorescence</li>
                <li><strong>Amelogenesis Imperfecta:</strong> Genetic enamel defects</li>
                <li><strong>Dentinogenesis Imperfecta:</strong> Opalescent teeth</li>
                <li><strong>Porphyria:</strong> Red-brown with red fluorescence</li>
            </ul>
        `
    },

    "comprehensive": {
        title: "Complete Overview",
        content: `
            <h3>Tetracycline Tooth Discoloration - Complete Guide</h3>
            
            <h4>Key Facts:</h4>
            <ul>
                <li><strong>Cause:</strong> Tetracycline antibiotics during tooth development</li>
                <li><strong>Mechanism:</strong> Calcium chelation and photo-oxidation</li>
                <li><strong>Timing:</strong> Pregnancy (2nd/3rd trimester) to 8 years old</li>
                <li><strong>Appearance:</strong> Yellow, brown, gray; often banded</li>
                <li><strong>Permanence:</strong> Intrinsic staining - permanent</li>
                <li><strong>Prevention:</strong> Avoid tetracyclines in at-risk groups</li>
            </ul>
            
            <h4>Clinical Management:</h4>
            <p>Treatment depends on severity: from bleaching for mild cases to crowns for severe cases. Early prevention through appropriate antibiotic selection is crucial.</p>
            
            <h4>Historical Significance:</h4>
            <p>This side effect led to major changes in pediatric prescribing practices and highlighted the importance of long-term drug safety monitoring.</p>
        `
    }
};

// Enhanced AI Search System
class TetracyclineAI {
    constructor() {
        this.knowledgeBase = tetracyclineDB;
        this.searchHistory = [];
    }

    // Natural language processing for queries
    processQuery(query) {
        const lowerQuery = query.toLowerCase().trim();
        
        // Direct category matches
        const directMatches = {
            'introduction': ['intro', 'history', 'discovery', 'background', 'historical'],
            'mechanism': ['how', 'work', 'cause', 'process', 'mechanism', 'pathophysiology'],
            'staining': ['color', 'stain', 'discolor', 'appearance', 'look'],
            'critical period': ['when', 'period', 'time', 'pregnant', 'pregnancy', 'child', 'children', 'age'],
            'treatment': ['treat', 'manage', 'fix', 'repair', 'bleach', 'veneer', 'crown', 'bonding'],
            'prevention': ['prevent', 'avoid', 'stop', 'contraindication', 'safe'],
            'minocycline': ['minocycline', 'adult', 'grown up'],
            'diagnosis': ['diagnose', 'identify', 'recognize', 'different', 'differential'],
            'comprehensive': ['overview', 'summary', 'everything', 'all', 'complete']
        };

        // Find best matching category
        for (const [category, keywords] of Object.entries(directMatches)) {
            if (keywords.some(keyword => lowerQuery.includes(keyword))) {
                return category;
            }
        }

        // Specific question patterns
        if (lowerQuery.includes('what') && lowerQuery.includes('tetracycline')) {
            return 'introduction';
        }
        if (lowerQuery.includes('how') && lowerQuery.includes('stain')) {
            return 'mechanism';
        }
        if (lowerQuery.includes('treat') || lowerQuery.includes('fix')) {
            return 'treatment';
        }
        if (lowerQuery.includes('prevent') || lowerQuery.includes('avoid')) {
            return 'prevention';
        }
        if (lowerQuery.includes('when') || lowerQuery.includes('period')) {
            return 'critical period';
        }

        return 'comprehensive'; // Default to comprehensive overview
    }

    search(query) {
        this.searchHistory.push(query);
        const category = this.processQuery(query);
        return this.knowledgeBase[category];
    }

    getSearchHistory() {
        return this.searchHistory;
    }

    // Get random fact for empty queries
    getRandomFact() {
        const categories = Object.keys(this.knowledgeBase);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        return this.knowledgeBase[randomCategory];
    }
}

// Initialize AI system
const tetracyclineAI = new TetracyclineAI();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');

    // Display results function
    function displayResults(data) {
        searchResults.innerHTML = `
            <div class="result-item">
                <h3>${data.title}</h3>
                <div>${data.content}</div>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #ddd; color: #666; font-size: 0.9rem;">
                    <strong>AI Response:</strong> Information retrieved from comprehensive tetracycline knowledge base
                </div>
            </div>
        `;
    }

    // Loading state
    function showLoading() {
        searchResults.innerHTML = '<div class="loading">🔍 Searching comprehensive medical database...</div>';
    }

    // Search function
    function performSearch() {
        const query = searchInput.value.trim();
        
        if (!query) {
            // Show random fact for empty query
            const randomFact = tetracyclineAI.getRandomFact();
            displayResults(randomFact);
            return;
        }

        showLoading();

        // Simulate AI processing time
        setTimeout(() => {
            const result = tetracyclineAI.search(query);
            displayResults(result);
            
            // Update search history display
            console.log('Search History:', tetracyclineAI.getSearchHistory());
        }, 800);
    }

    // Event listeners
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Auto-focus search input
    searchInput.focus();

    // Example questions helper
    const exampleQuestions = [
        "How does tetracycline cause tooth staining?",
        "What are the treatment options?",
        "When are teeth vulnerable to staining?",
        "How to prevent tetracycline discoloration?",
        "What does tetracycline staining look like?",
        "Can adults get tetracycline stains?"
    ];

    // Cycle through example questions
    let exampleIndex = 0;
    setInterval(() => {
        searchInput.placeholder = exampleQuestions[exampleIndex];
        exampleIndex = (exampleIndex + 1) % exampleQuestions.length;
    }, 3000);

    // Initialize with welcome message
    displayResults(tetracyclineAI.knowledgeBase.comprehensive);

    // Video controls enhancement
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('loadeddata', function() {
            console.log('Video V1.mp4 loaded successfully');
        });
        
        video.addEventListener('error', function() {
            console.log('Video loading error - using placeholder content');
        });
    }
});

// Image preloading for better performance
function preloadImages() {
    const imageUrls = ['P1.jpg', 'P2.jpg', 'P3.jpg', 'P4.jpg', 'P5.jpg', 'video-poster.jpg'];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading
window.addEventListener('load', preloadImages);