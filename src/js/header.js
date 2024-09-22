class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <nav class="navbar navbar-expand-lg bg-body-transparent desktop-nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="/images/logo.png" alt="" srcset=""></a>
          <div class="align-items-center w-100" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto align-items-center mb-2 mb-lg-0">
              <li class="nav-item">
                <div class="get-location ps-4 pe-4" style="width: max-content;">
                    <p class="small m-0 mb-1"><span class="me-1"><img src="/images/truck.svg" alt=""></span>Fast Delivery to
                    </p>
                    <div class="dropdown">
                        <button data-bs-toggle="dropdown" aria-expanded="false" class="fw-bold user-location m-0 border-0 bg-transparent">New
                            Delhi <i class="bi bi-chevron-down"></i></button>
                        <div class="dropdown-menu p-3" style="width: 320px !important;">
                            <p class="small fw-semibold mb-3">Choose your location</p>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Enter Your Pincode" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                <button class="btn primary-btn small ps-3 pe-3" type="button" id="button-addon1">Check</button>
                            </div>
                            <a href="#" class="fw-semibold" style="color: #0075b8;"><i class="bi bi-crosshair"></i> Detect current location</a>
                        </div>
                    </div>
                </div>
              </li>
              <li class="nav-item w-100">
                <form class="d-flex dropdown" role="search">
                    <input class="form-control dropdown-toggle w-100" type="search" placeholder="Search" aria-label="Search" data-bs-toggle="dropdown" aria-expanded="false">
                    <ul class="dropdown-menu w-100 mt-2">
                        <li><a class="dropdown-item" href="#">Med 1</a></li>
                        <li><a class="dropdown-item" href="#">Med 2</a></li>
                        <li><a class="dropdown-item" href="#">Med-3</a></li>
                      </ul>
                </form>
              </li>
              <li class="nav-item">
                <button class="ms-4 me-2 btn primary-btn pt-0 pb-0" style="font-size: 13px !important; font-weight: 500;width: max-content;"><span class="xsmall">Order with
                    prescription</span><br><i class="bi bi-cloud-arrow-up"></i> Upload Now</button>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true" style="width: max-content;"> <button class="btn secondary-btn" style="font-size: 13px !important; font-weight: 500;"><i class="bi bi-person" style="font-size: 16px;"></i> Login/Signup</button></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true"><img src="/images/cart.svg" alt=""></a>
              </li>
            </ul>
            
            
          </div>
        </div>
      </nav>
      
      <div class="navbar navbar-expand-lg nav-menu">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Lab Tests <i class="bi bi-chevron-down"></i></button>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Medicines <i class="bi bi-chevron-down"></i></button>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Healthcare <i class="bi bi-chevron-down"></i></button>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-disabled="true">Health Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-disabled="true">Health Device</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-disabled="true">Offers</a>
                  </li>
                </ul>
              </div>
        </div>
      </div>
        
        `;
    }
}
customElements.define("custom-header", CustomHeader);