const fs = require('fs');
const path = require('path');

const dir = 'c:\\class\\.vscode\\icecream-waffle';
const indexPath = path.join(dir, 'index.html');
const errorPath = path.join(dir, '404.html');
const soonPath = path.join(dir, 'coming-soon.html');

// Read index.html to extract the header, footer, head tags, etc.
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Extract head
const headEndIdx = indexContent.indexOf('</head>');
const headHTML = indexContent.substring(0, headEndIdx + 7);

// Extract header
const headerStartIdx = indexContent.indexOf('<header class="site-header"');
const headerEndIdx = indexContent.indexOf('</header>') + 9;
const headerHTML = indexContent.substring(headerStartIdx, headerEndIdx);

// Extract footer and scripts
const footerStartIdx = indexContent.indexOf('<footer class="site-footer">');
const footerHTML = indexContent.substring(footerStartIdx);


// ---------------- 404 PAGE ---------------- //
const errorBody = `
    <!-- 404 Hero Section -->
    <section class="hero-section text-center d-flex align-items-center justify-content-center" style="min-height: 70vh; padding: 120px 0 80px;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="mb-4">
                        <i class="fa-solid fa-ice-cream fa-4x text-pink mb-3 floating-element"></i>
                        <h1 class="display-1 fw-bold text-brown" style="font-family: var(--font-heading);">404</h1>
                    </div>
                    <h2 class="mb-3">Oops! This Scoop Dropped!</h2>
                    <p class="text-muted mb-5 fs-5">We can't seem to find the page you're looking for. It might have melted away or never existed in the first place.</p>
                    <a href="index.html" class="btn btn-primary-custom px-5 py-3 rounded-pill">
                        <i class="fa-solid fa-house me-2"></i> Back to Homepage
                    </a>
                </div>
            </div>
        </div>
    </section>
`;

const errorPageContent = headHTML + '\n\n<body>\n' + headerHTML + errorBody + footerHTML;
fs.writeFileSync(errorPath, errorPageContent, 'utf8');
console.log('Created 404.html');


// ---------------- COMING SOON PAGE ---------------- //
const soonBody = `
    <!-- Coming Soon Section -->
    <section class="hero-section text-center d-flex align-items-center justify-content-center" style="min-height: 70vh; padding: 120px 0 80px;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <span class="font-accent fs-3 text-pink mb-2 d-block">Get Ready!</span>
                    <h1 class="hero-title mb-4">
                        Something <span class="text-brown">Sweet</span> is Baking!
                    </h1>
                    <p class="text-muted mb-5 fs-5">We are currently crafting some delicious new experiences. Enter your email below to be the first to know when we launch!</p>
                    
                    <!-- Countdown Timer -->
                    <div class="d-flex justify-content-center gap-3 gap-md-4 mb-5 mx-auto flex-wrap">
                        <div class="text-center">
                            <div class="glass-panel p-3 rounded-4 shadow-sm mb-2" style="width: 80px; height: 80px; display: flex; align-items: center; justify-content: center;">
                                <h3 class="mb-0 text-pink fw-bold">14</h3>
                            </div>
                            <span class="small fw-medium text-uppercase text-muted">Days</span>
                        </div>
                        <div class="text-center">
                            <div class="glass-panel p-3 rounded-4 shadow-sm mb-2" style="width: 80px; height: 80px; display: flex; align-items: center; justify-content: center;">
                                <h3 class="mb-0 text-pink fw-bold">08</h3>
                            </div>
                            <span class="small fw-medium text-uppercase text-muted">Hours</span>
                        </div>
                        <div class="text-center">
                            <div class="glass-panel p-3 rounded-4 shadow-sm mb-2" style="width: 80px; height: 80px; display: flex; align-items: center; justify-content: center;">
                                <h3 class="mb-0 text-pink fw-bold">45</h3>
                            </div>
                            <span class="small fw-medium text-uppercase text-muted">Mins</span>
                        </div>
                        <div class="text-center">
                            <div class="glass-panel p-3 rounded-4 shadow-sm mb-2" style="width: 80px; height: 80px; display: flex; align-items: center; justify-content: center;">
                                <h3 class="mb-0 text-pink fw-bold">00</h3>
                            </div>
                            <span class="small fw-medium text-uppercase text-muted">Secs</span>
                        </div>
                    </div>
                    
                    <!-- Newsletter Form -->
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-8">
                            <form class="newsletter-form position-relative mt-2 shadow-sm rounded-pill bg-body p-2 d-flex flex-wrap flex-md-nowrap align-items-center gap-2">
                                <input type="email" class="form-control border-0 bg-transparent shadow-none w-100" placeholder="Enter your email address..." required style="padding-left: 20px;">
                                <button class="btn btn-primary-custom rounded-pill w-100 w-md-auto text-nowrap" type="submit" style="padding: 10px 30px;">Notify Me</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const soonPageContent = headHTML + '\n\n<body>\n' + headerHTML + soonBody + footerHTML;
fs.writeFileSync(soonPath, soonPageContent, 'utf8');
console.log('Created coming-soon.html');
