class CustomMobHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

      <!-- Mobile Menu -->
       <nav class="mobile-menu">
        <div class="top-nav d-flex justify-content-between align-item-center" style="padding: 12px 16px;">
            <a href="/src/index.html"><img src="/images/logo.png" style="max-width: 120px;" alt=""></a>
            <div class="side-menu d-flex align-items-center">
                <button class="side-menu-btn menu-sidebar" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile-menu-nav-items" aria-controls="mobile-menu-nav-items"><i class="bi bi-list"></i></button>
                <a href="/src/viewcart.html"><button class="side-menu-btn shop-cart"><i class="bi bi-cart"></i></button></a>
            </div>
        </div>
        <div class="bottom-nav">
            <div class="nav-location-profile d-flex justify-content-between align-item-center">
                <div class="nav-location">
                    <div class="get-location mb-2 d-flex justify-content-start align-item-center" style="width: max-content;">
                        <p class="m-0" style="color: #fff;"><i class="bi bi-geo-alt"></i> Fast Delivery to </p>
                        <div class="dropdown">
                            <button data-bs-toggle="dropdown" aria-expanded="false" class="fw-bold text-white user-location m-0 border-0 bg-transparent">New
                                Delhi <i class="bi bi-chevron-down"></i></button>
                            <div class="dropdown-menu p-3" style="width:320px !important;">
                                <p class="small fw-semibold mb-3">Choose your location</p>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter Your Pincode" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                    <button class="btn primary-btn small ps-3 pe-3" type="button" id="button-addon1">Check</button>
                                </div>
                                <a href="#" class="fw-semibold" style="color: #0075b8;"><i class="bi bi-crosshair"></i> Detect current location</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="mob-profile-btn"><i class="bi bi-person"></i></button>
            </div>
            <div>
                <form class="d-flex dropdown" role="search">
                    <input class="search-bar form-control dropdown-toggle w-100" type="search" placeholder="Search" aria-label="Search" data-bs-toggle="dropdown" aria-expanded="false">
                    <ul class="dropdown-menu w-100 mt-2">
                        <li><a class="dropdown-item" href="#">Med 1</a></li>
                        <li><a class="dropdown-item" href="#">Med 2</a></li>
                        <li><a class="dropdown-item" href="#">Med-3</a></li>
                      </ul>
                </form>
            </div>
        </div>
     </nav>

     <div class="offcanvas offcanvas-end mobile-menu-offcanvas" tabindex="-1" id="mobile-menu-nav-items" aria-labelledby="mobile-menu-nav-itemsLabel">
      <div class="offcanvas-header border-bottom">
        <h5 class="offcanvas-title" id="mobile-menu-nav-itemsLabel"><img src="/images/user.svg" class="img-fluid me-2" alt=""> Hi, Vivek</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Lab Test
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Medicine
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/src/myProfile.html">My Profile</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Wallet</a>
          </li>
          <li class="nav-item dropdown">
            <p class="nav-link m-0 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Orders
            </p>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/src/medicine_orders.html">Medicin Order</a></li>
              <li><a class="dropdown-item" href="#">Lab Test Order</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/src/myprescriptions.html">Prescriptions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/src/refundSetting.html">Refund Setting</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Healthcare
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Health Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Health Device</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Offers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"  data-bs-toggle="modal" data-bs-target="#uploadModal">Upload Precription</a>
          </li>
          <li class="nav-item">
            <a class="nav-link small text-primary active" aria-current="page" href="#">Terms & Conditions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><button class="btn primary-btn" data-bs-toggle="modal" data-bs-target="#loginModal">Login/Signin</button></a>
          </li>
        
          
        </ul>
      </div>
    </div>


      
        
        `;
  }
}
customElements.define("custom-mob-header", CustomMobHeader);