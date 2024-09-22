class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="wrapper">
        <footer class="main-footer">
            <div class="container">
                <div class="footer-subscibe">
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="fw-medium">Join Our Newsletter</h6>
                            <p class="dark-light m-0">Be the first to know about our latest updates, exclusive offers,
                                and more.</p>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex justify-content-end align-item-center newsletter-section">
                                <div class="me-2">
                                    <label for="newletterEmail" class="visually-hidden">Email Id</label>
                                    <input type="email" class="form-control" id="newletterEmail"
                                        placeholder="Enter your email address">
                                </div>
                                <div>
                                    <button type="submit" class="btn primary-btn">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-links">
                    <div class="footer-item">
                        <p class="fw-semibold text-white">Featured Categories</p>
                        <a href="#" class="footer-link">Top Products</a>
                        <a href="#" class="footer-link">Personal Care</a>
                        <a href="#" class="footer-link">Skin Care</a>
                        <a href="#" class="footer-link">Healthcare Devices <span class="link-tag">New</span></a>
                        <a href="#" class="footer-link">Lifestyle</a>
                    </div>
                    <div class="footer-item">
                        <p class="fw-semibold text-white">Shop Now</p>
                        <a href="#" class="footer-link">Order Medicine</a>
                        <a href="#" class="footer-link">Healthcare Products</a>
                        <a href="#" class="footer-link">Lab Tests <span class="link-tag">New</span></a>
                        <a href="#" class="footer-link">Find Nearest Collection Centre</a>
                    </div>
                    <div class="footer-item">
                        <p class="fw-semibold text-white">Policy Info</p>
                        <a href="#" class="footer-link">Privacy Policy</a>
                        <a href="#" class="footer-link">Terms and Conditions</a>
                        <a href="#" class="footer-link">Customer Support Policy</a>
                        <a href="#" class="footer-link">Vulnerability Disclosure Policy</a>
                    </div>
                    <div class="footer-item">
                        <p class="fw-semibold text-white">Account</p>
                        <a href="#" class="footer-link">My Products</a>
                        <a href="#" class="footer-link">Orders</a>
                        <a href="#" class="footer-link">Lab Tests</a>
                        <a href="#" class="footer-link">Offers</a>
                    </div>
                    <div class="footer-item">
                        <p class="fw-semibold text-white">Company</p>
                        <a href="#" class="footer-link">About Us</a>
                        <a href="#" class="footer-link">Contact</a>
                        <a href="#" class="footer-link">Blog</a>
                        <a href="#" class="footer-link">Careers</a>
                        <a href="#" class="footer-link">Partner with Us</a>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="#"><img src="/images/logo.png" alt="logo"></a>
                        </div>
                        <div class="col-md-6 copyright-text">
                            <p class="text-end m-0">© 2024 HeartBeatmed. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        
        `;
    }
}

customElements.define("custom-footer", CustomFooter);